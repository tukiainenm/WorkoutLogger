import { View, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Text, Card } from 'react-native-paper';
import ExerciseCard from '../components/AddExercises/ExerciseCard';
import { auth, database } from '../../firebaseConfig';
import { child, onValue, ref, remove, } from 'firebase/database';
import { signOut } from 'firebase/auth';


const HomeScreen = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activities, setActivities] = useState([])


  const showModal = () => {
    setIsModalVisible(!isModalVisible);
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
    const itemsRef = ref(database, `users/${userId}/activities`);
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      setActivities(Object.values(data));
    })
  }, []);

  const deleteActivity = () => {
    const userId = auth.currentUser.uid;
    remove(
      ref(database, `users/${userId}/activities/`),
      )
    }

  const renderItem = ({ item }) => {
    return (
    <Card mode="contained" style={styles.cardContainer}>
      <Card.Content>
        <Text>{item.activityName}</Text>
        <Text>{item.duration}</Text>
        <Text>{item.date}</Text>
        <Button onPress={deleteActivity}>Delete</Button>
      </Card.Content>
    </Card>
    )
  }

  return (
    <View>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={showModal}>Add Activity</Button>
        <Button mode="contained" onPress={() => navigation.navigate('Search')}>Search Exercises</Button>
        <Button mode="contained" onPress={handleSignOut}>Sign Out</Button>
      </View>
      {showModal && (
        <ExerciseCard
         isModalVisible={isModalVisible}
         showModal={showModal}
         />
      )}
      <FlatList
        data={activities}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View syle={{height: 10}} />}
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
  flatListContainer: {
    justifyContent: 'space-around',
    paddingLeft: 10,
    paddingRight: 10
  },
  cardContainer: {
    marginVertical: 8,
    marginHorizontal: 16
  }
});