import React, { useState } from 'react'
import { Card, Button, TextInput } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'
import { auth, database } from '../../firebaseConfig'
import { ref, push } from 'firebase/database'


const ExerciseCard = () => {
    const [exercises, setExercises] = useState([])
    const [exerciseName, setExerciseName] = useState('')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')

    const addExercises = () => {
        setExercises([...exercises, { exerciseName, sets, reps, weight }])
    }

    const saveExercise = () => {
        const userId = auth.currentUser.uid;
        push(
            ref(database, `users/${userId}/Workouts`),
            {'exercises': exerciseName, sets, reps, weight});
    }


    return (
        <Card>
            <Card.Title title="Add a workout" />
            <Card.Content>
                <View style={styles.contentContainer}>
                    <TextInput
                        label='Exercise'
                        value={exerciseName}
                        onChangeText={text => setExerciseName(text)}
                        style={styles.input}
                    />
                    <TextInput
                        label='Sets'
                        value={sets}
                        onChangeText={text => setSets(text)}
                        style={styles.input}
                    />
                    <TextInput
                        label='Reps'
                        value={reps}
                        onChangeText={text => setReps(text)}
                        style={styles.input}
                    />
                    <TextInput
                        label='Weight'
                        value={weight}
                        onChangeText={text => setWeight(text)}
                        style={styles.input}
                    />
                </View>
            </Card.Content>
            <Card.Actions>
                <Button onPress={addExercises} mode='elevated'>Add</Button>
                <Button onPress={saveExercise} mode='contained'>Save</Button>
            </Card.Actions>
        </Card>
    )
}

export default ExerciseCard

const styles = StyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        width: 80,
    }
})