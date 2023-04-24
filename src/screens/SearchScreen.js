import { View, Text, StyleSheet, ScrollView, FlatList, Image } from 'react-native'
import { Button, Card, Divider, Searchbar } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
import { options } from '../../utils'

const SearchScreen = () => {
  const [query, setQuery] = useState('')
  const [exercises, setExercises] = useState([])
  const [filteredExercises, setFilteredExercises] = useState([])

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
    setFilteredExercises(filteredData);
  }

  const renderItem = ({ item }) => {
    return (
      <Card>
        <Card.Content>
          <Text style={styles.cardText}>Name: {item.name}</Text>
          <Text style={styles.cardText}>Target: {item.target}</Text>
          <Text style={styles.cardText}>Equipment: {item.equipment}</Text>
        </Card.Content>
      </Card>
    )
  }

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder='e.g. biceps, back...'
        onChangeText={text => setQuery(text)}
        value={query}
        onIconPress={searchExercises}
      />
      <FlatList
        data={filteredExercises}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{marginBottom:25}}
      />
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardText: {
    fontWeight: 'bold'
  }
})