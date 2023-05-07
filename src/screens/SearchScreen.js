import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Card, Searchbar } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
import { API_URL, API_OPTIONS } from '../../utils'
import SearchDetailModal from '../components/SearchExercises/SearchDetailModal'


const SearchScreen = () => {
  const [query, setQuery] = useState('')
  const [exercises, setExercises] = useState([])
  const [filteredExercises, setFilteredExercises] = useState([])
  const [limit, setLimit] = useState(12);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [endReached, setEndReached] = useState(false)

  useEffect(() => {
    fetch(`${API_URL}`, API_OPTIONS)
      .then(response => response.json())
      .then(response => {
        setExercises(response)
      })
      .catch(err => console.error(err))
  }, [])

  const searchExercises = () => {
    const filteredData = exercises.filter(item =>
      item.target.toLowerCase().includes(query.toLowerCase()) 
    );
    setFilteredExercises(filteredData);
  }

  const loadMore = () => {
    setLimit(limit + 5)
  }

  const showDetailModal = (item) => {
    setSelectedExercise(item);
  };

  const hideDetailModal = () => {
    setSelectedExercise(null);
  };

  
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => showDetailModal(item)}>
        <Card style={styles.cardContainer}>
          <Card.Content style={{ alignItems: 'center' }}>
            <Text style={styles.cardText}>{item.name}</Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    )
  }
  
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder='e.g. biceps, back...'
        onChangeText={text => setQuery(text)}
        value={query}
        onIconPress={searchExercises}
        onSubmitEditing={searchExercises}
      />
      {showDetailModal && (
        <SearchDetailModal
        isDetailModalVisible={!!selectedExercise}
        selectedExercise={selectedExercise}
        hideDetailModal={hideDetailModal}
        />
      )}
      <FlatList
        data={filteredExercises.slice(0, limit)}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        initialNumToRender={limit}
        onEndReached={!setEndReached}
        onEndReachedThreshold={0.5}
        style={styles.flatList}
      />
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardText: {
    fontSize: 18
  },
  cardContainer: {
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1
  },
  flatList: {
    marginBottom: 25
  }
})