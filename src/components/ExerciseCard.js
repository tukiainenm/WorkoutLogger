import React, { useState } from 'react'
import { Card, Button, TextInput } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'
import CustomButton from './CustomButton'


const ExerciseCard = () => {
    const [exercise, setExercise] = useState('')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')


    return (
        <Card>
            <Card.Title title="Add a workout" />
            <Card.Content>
                <View style={styles.contentContainer}>
                    <TextInput
                        label='Exercise'
                        style={styles.input}
                    />
                    <TextInput
                        label='Sets&Reps'
                        style={styles.input}
                    />
                    <TextInput
                        label='Weight'
                        style={styles.input}
                    />
                    <CustomButton />
                </View>
            </Card.Content>
            <Card.Actions>
                <Button mode='elevated'>Cancel</Button>
                <Button mode='contained'>Add</Button>
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