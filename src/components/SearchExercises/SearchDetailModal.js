import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native'
import React from 'react'

const SearchDetailModal = ({ isDetailModalVisible, selectedExercise, hideDetailModal }) => {
    return (
        <View style={styles.container}>
            <Modal visible={isDetailModalVisible} transparent={true} animationType='fade'>
                <View style={styles.modalContainer}>
                    <View style={styles.card}>
                        {selectedExercise && (
                            <>
                                <Text>Name: {selectedExercise.name}</Text>
                                <Text>Target: {selectedExercise.target}</Text>
                                <Text>Equipment: {selectedExercise.equipment}</Text>
                            </>
                        )}
                        <TouchableOpacity onPress={hideDetailModal}>
                            <Text>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default SearchDetailModal

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
        elevation: 15,
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