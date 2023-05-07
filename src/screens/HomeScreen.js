import { View, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Text, Card } from 'react-native-paper';
import AddActivity from '../components/HomeScreenComponents/AddActivity';
import ActivityCard from '../components/HomeScreenComponents/ActivityCard';
import { auth, database } from '../../firebaseConfig'
import { onValue, ref, remove, } from 'firebase/database';
import { signOut } from 'firebase/auth';

const HomeScreen = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activities, setActivities] = useState([]);
  const userId = auth.currentUser.uid;

  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login")
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    const itemsRef = ref(database, `users/${userId}/activities`);
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      const activities = Object.entries(data || {}).map(([key, value]) => {
        return { id: key, ...value };
      });
      setActivities(activities);
    });
  }, []);

  const renderItem = ({ item }) => {
    const handleDelete = async () => {
      try {
        const itemRef = ref(database, `users/${userId}/activities/${item.id}`);
        await remove(itemRef)
      } catch (error) {
        console.error('Error deleting item:', error.message);
      }
    };

    return (
      <ActivityCard
      item={item}
      handleDelete={handleDelete}
      />
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
        <AddActivity
          isModalVisible={isModalVisible}
          showModal={showModal}
        />
      )}
      {activities.length === 0 ? (
        <View style={styles.fallBackContainer}>
          <Text style={styles.fallBackText}>No activities found</Text>
        </View>
      ) : (
        <View style={styles.flatListContainer}>
          <FlatList
            data={activities}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            inverted={true}
          />
        </View>
      )}
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  flatListContainer: {
    paddingBottom: 85
  },
  cardContainer: {
    marginVertical: 6,
    marginHorizontal: 20,
  },
  cardText: {
    fontSize: 15
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 250
  },
  fallBackText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  fallBackContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 150
  }
});