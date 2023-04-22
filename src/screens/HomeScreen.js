import { View, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Text } from 'react-native-paper';
import ExerciseCard from '../components/ExerciseCard';
import { auth, database } from '../../firebaseConfig';
import { DataSnapshot, onValue, ref } from 'firebase/database';
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
    const itemsRef = ref(database, `users/${userId}/Workouts`);
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      setWorkouts(Object.values(data));
      console.log(auth.currentUser.email)
    })
  }, []);

  const renderItem = ({ item }) => {
    return <Text>{item.exercises}</Text>
  }

  return (
    <View>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={openCard}>Add Workout</Button>
        <Button mode="contained" onPress={() => navigation.navigate('Search')}>Search Exercises</Button>
        <Button mode="contained" onPress={handleSignOut}>Sign Out</Button>
      </View>
      {showCard && (
        <ExerciseCard />
      )}
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