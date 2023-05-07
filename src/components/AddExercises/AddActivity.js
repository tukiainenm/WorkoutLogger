import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { auth, database } from '../../../firebaseConfig'
import { ref, push } from 'firebase/database'
import ActivityModal from './ActivityModal'


const AddActivity = ({ showModal, isModalVisible }) => {
    const [activityName, setActivityName] = useState('')
    const [duration, setDuration] = useState('')
    const [date, setDate] = useState('')

    const userId = auth.currentUser.uid;

    const saveActivity = () => {
        const activityRef = push(ref(database, `users/${userId}/activities`), {
            activityName,
            duration,
            date,
        });
        const activityId = activityRef.key;
        showModal();
    };

    const deleteActivity = (activityId) => {
    const activityPath = `users/${userId}/activities/${activityId}`;
    remove(ref(database, activityPath))
      .then(() => {
      })
      .catch((error) => {
      });
  };



    return (
        <View style={styles.container}>
            <ActivityModal
                isModalVisible={isModalVisible}
                showModal={showModal}
                activityName={activityName}
                date={date}
                duration={duration}
                setActivityName={setActivityName}
                setDuration={setDuration}
                setDate={setDate}
                saveActivity={saveActivity}
            />
        </View>
    )
}

export default AddActivity

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});