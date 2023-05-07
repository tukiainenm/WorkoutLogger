import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Card, Searchbar } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
import { API_URL, API_OPTIONS } from '../../utils'
import ExerciseDetailModal from '../components/SearchScreenComponents/ExerciseDetailModal'
import ExerciseCard from '../components/SearchScreenComponents/ExerciseCard'


const SearchScreen = () => {
  const [query, setQuery] = useState('')
  const [exercises, setExercises] = useState([])
  const [filteredExercises, setFilteredExercises] = useState([])
  const [limit, setLimit] = useState(12);
  const [selectedExercise, setSelectedExercise] = useState(null);

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

  const showDetailModal = (item) => {
    setSelectedExercise(item);
  };

  const hideDetailModal = () => {
    setSelectedExercise(null);
  };

  const renderItem = ({ item }) => {
    return (
      <ExerciseCard
      item={item}
      showDetailModal={showDetailModal}
      />
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
        <ExerciseDetailModal
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
  flatList: {
    marginBottom: 25
  }
})