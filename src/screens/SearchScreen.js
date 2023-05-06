import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native'
import { Button, Card, Searchbar } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
import { API_URL, API_OPTIONS } from '../../utils'


const SearchScreen = () => {
  const [query, setQuery] = useState('')
  const [exercises, setExercises] = useState([])
  const [filteredExercises, setFilteredExercises] = useState([])
  const [limit, setLimit] = useState(10);
  const [showDetails, setShowDetails] = useState(false)

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

  const openDetails = () => {
    setShowDetails(!showDetails)
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={openDetails}>
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
      {showDetails && (
        <Modal transparent={true} >
          <Text>Ju</Text>
        </Modal>
      )}
      <FlatList
        data={filteredExercises.slice(0, limit)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        initialNumToRender={5}
        onEndReached={loadMore}
        onEndReachedThreshold={0.3}
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
    marginBottom: 10
  }
})