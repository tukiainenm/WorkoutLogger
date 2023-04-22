import { View, Text, StyleSheet } from 'react-native'
import { Button, Searchbar } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
import { options } from '../../utils'
import { Dimensions } from 'react-native'

const SearchScreen = () => {
  const [query, setQuery] = useState('')
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    fetch('https://exercisedb.p.rapidapi.com/exercises/', options)
      .then(response => response.json())
      .then(response => {
        setExercises(response)
      })
      .catch(err => console.error(err))
  }, [])

  const searchExercises = () => {
    const filteredData = exercises.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
      );
      console.warn(filteredData)
  }

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder='Search Exercises'
        onChangeText={text => setQuery(text)}
        value={query}
        onIconPress={searchExercises}
      ></Searchbar>
      <Text>{query}</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
})