/*import React, { useState } from 'react'
import { Card, Button, TextInput, Text } from 'react-native-paper'
import { StyleSheet, View, Modal, TouchableOpacity } from 'react-native'


const ActivityForm = ({ activityName, duration, date, showCard, isModalVisible, saveActivity }) => (
    <Modal visible={isModalVisible} transparent={true} animationType='fade'>
        <View style={styles.modalContainer}>
            <View style={styles.card}>
                <TextInput
                    placeholder="Activity"
                    value={activityName}
                    style={styles.textInput} />
                <TextInput
                    placeholder="Duration"
                    style={styles.textInput}
                    value={duration}
                />
                <TextInput
                    placeholder="Date"
                    style={styles.textInput}
                    value={date}
                />
                <TouchableOpacity onPress={showCard}>
                    <Text>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={saveActivity}>
                    <Text>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
)

export default ActivityForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        backdropFilter: 'blur(10px)',
    },
    textInput: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 16,
    },
}); */