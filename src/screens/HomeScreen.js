import { View, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Text, Card } from 'react-native-paper';
import ExerciseCard from '../components/ExerciseCard';
import { auth, database } from '../../firebaseConfig';
import { onValue, ref, remove } from 'firebase/database';
import { signOut } from 'firebase/auth';


const HomeScreen = ({ navigation }) => {
  const [showCard, setShowCard] = useState(false);
  const [workouts, setWorkouts] = useState([])


  const openCard = () => {
    setShowCard(!showCard);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => console.warn(error))
  }

  useEffect(() => {
    const userId = auth.currentUser.uid;
    const itemsRef = ref(database, `users/${userId}/`);
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      setWorkouts(Object.values(data));
    })
  }, []);

  const deleteWorkout = () => {
    const userId = auth.currentUser.uid;
    remove(
        ref(database, `users/${userId}/workout`),
    )
}

  const renderItem = ({ item }) => {
    return ( 
      <Card mode='elevated'>
        <Card.Content style={{flexDirection: 'row'}}>
          <Text>{item.name}, </Text>
          <Text>{item.sets}x{item.reps}, </Text>
          <Text>{item.weight} Kg</Text>
        </Card.Content>
      </Card>
  )}

  return (
    <View>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={openCard}>Add Workout</Button>
        <Button mode="contained" onPress={() => navigation.navigate('Search')}>Search Exercises</Button>
        <Button mode="contained" onPress={handleSignOut}>Sign Out</Button>
        <Button mode="contained" onPress={deleteWorkout}>Del</Button>
      </View>
      <View style={{position:'relative'}}>
      {showCard && (
        <ExerciseCard />
      )}
      </View>
      <FlatList
      data={workouts}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10
  },
});