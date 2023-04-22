import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button, Card } from 'react-native-paper';
import ExerciseCard from '../components/ExerciseCard';


const HomeScreen = ({ navigation }) => {
  const [showCard, setShowCard] = useState(false);


  const openCard = () => {
    setShowCard(!showCard);
  };

  return (
    <View>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={openCard}>Add Workout</Button>
        <Button mode="contained" onPress={() => navigation.navigate('Search')}>Search Exercises</Button>
      </View>
      {showCard && (
        <ExerciseCard />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10
  },
});

export default HomeScreen