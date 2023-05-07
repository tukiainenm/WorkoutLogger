import { StyleSheet, TouchableOpacity } from 'react-native'
import { Card, Text } from 'react-native-paper'
import React from 'react'

const ExerciseCard = ({ item, showDetailModal }) => {
    return (
        <TouchableOpacity onPress={() => showDetailModal(item)}>
            <Card style={styles.cardContainer}>
                <Card.Content style={{ alignItems: 'center' }}>
                    <Text style={styles.cardText}>{item.name}</Text>
                </Card.Content>
            </Card>
        </TouchableOpacity>
    )
}

export default ExerciseCard

const styles = StyleSheet.create({
    cardText: {
        fontSize: 18
    },
    cardContainer: {
        marginVertical: 8,
        marginHorizontal: 16,
        flex: 1
    },
})