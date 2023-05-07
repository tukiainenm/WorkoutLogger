import React from 'react'
import { TextInput, Text, Button } from 'react-native-paper'
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
                        <View style={styles.buttonContainer}>
                            <Button style={styles.button} mode='contained' compact={true} onPress={showModal}>
                                <Text>Close</Text>
                            </Button>
                            <Button style={styles.button} mode='contained' compact={true} onPress={saveActivity} >
                                <Text>Save</Text>
                            </Button>
                        </View>
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
    buttonContainer: {
        flexDirection: 'row',
        marginLeft: 180,
        justifyContent: 'space-evenly'
    },
    button: {
        marginHorizontal: 10,
        width: 55
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