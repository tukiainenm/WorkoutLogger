import React, { useState } from 'react'
import { TextInput, Text } from 'react-native-paper'
import { StyleSheet, View, Modal, TouchableOpacity } from 'react-native'

const ActivityModal = ({ isModalVisible, showModal, activityName, duration, date, setActivityName, setDuration, setDate, saveActivity }) => {
    return (
        <View style={styles.container}>
            <Modal visible={isModalVisible} transparent={true} animationType='fade'>
                <View style={styles.modalContainer}>
                    <View style={styles.card}>
                        <TextInput
                            placeholder="Activity"
                            value={activityName}
                            onChangeText={text => setActivityName(text)}
                            style={styles.textInput}
                        />
                        <TextInput
                            placeholder="Duration"
                            value={duration}
                            onChangeText={text => setDuration(text)}
                            style={styles.textInput}
                        />
                        <TextInput
                            placeholder="Date"
                            value={date}
                            onChangeText={text => setDate(text)}
                            style={styles.textInput}
                        />
                        <TouchableOpacity onPress={showModal}>
                            <Text>Close</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={saveActivity} >
                            <Text>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ActivityModal

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
});