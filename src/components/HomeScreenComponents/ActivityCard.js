import { StyleSheet } from 'react-native'
import { Card, Text, Button } from 'react-native-paper'
import React from 'react'

const ActivityCard = ({ item, handleDelete }) => {
    return (
        <Card mode="elevated" style={styles.cardContainer}>
            <Card.Title title={item.activityName} />
            <Card.Content style={{ alignItems: 'center' }}>
                <Text style={styles.cardText}>{item.duration}</Text>
                <Text style={styles.cardText}>{item.date}</Text>
                <Button
                    compact={true}
                    mode='outlined'
                    style={styles.button}
                    onPress={handleDelete}
                >Delete</Button>
            </Card.Content>
        </Card>
    )
}

export default ActivityCard

const styles = StyleSheet.create({
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
});