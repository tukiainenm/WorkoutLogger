import React, { useState } from 'react'
import { Card, Button, TextInput } from 'react-native-paper'
import { Alert, StyleSheet, View } from 'react-native'
import { auth, database } from '../../firebaseConfig'
import { ref, push } from 'firebase/database'


const ExerciseCard = () => {
    const [workout, setWorkout] = useState([{
        name: '', sets: '', reps: '', weight: ''
    }]);

    const addWorkout = () => {
        setWorkout([...workout, { name: '', sets: '', reps: '', weight: '' }])
    }

    const saveExercise = () => {
        const userId = auth.currentUser.uid;
        push(
            ref(database, `users/${userId}/`),
            { workout });
    }

    const handleExerciseChange = (text, index, attribute) => {
        const updatedWorkouts = [...workout];
        updatedWorkouts[index][attribute] = text;
        setWorkout(updatedWorkouts);
    };


    return (
        <Card>
            <Card.Title title="Add a workout" />
            <Card.Content>
                {workout.map((exercise, index) =>
                    <View style={styles.contentContainer} key={index}>
                        <TextInput
                            placeholder="Exercise name"
                            value={exercise.name}
                            onChangeText={(text) =>
                                handleExerciseChange(text, index, 'name')
                            }
                        />
                        <TextInput
                            placeholder="Sets"
                            value={exercise.sets}
                            onChangeText={(text) =>
                                handleExerciseChange(text, index, 'sets')
                            }
                            keyboardType="numeric"
                        />
                        <TextInput
                            placeholder="Reps"
                            value={exercise.reps}
                            onChangeText={(text) =>
                                handleExerciseChange(text, index, 'reps')
                            }
                            keyboardType="numeric"
                        />
                        <TextInput
                            placeholder="Weight"
                            value={exercise.weight}
                            onChangeText={(text) =>
                                handleExerciseChange(text, index, 'weight')
                            }
                            keyboardType="numeric"
                        />
                    </View>
                )}
            </Card.Content>
            <Card.Actions>
                <Button onPress={addWorkout} mode='contained'>Add move</Button>
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