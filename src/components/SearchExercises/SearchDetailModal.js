import { View, Text, StyleSheet, Modal, TouchableOpacity, Image } from 'react-native'

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
                                <View style={styles.gifContainer}>
                                    <Image style={styles.gif} source={{ uri: selectedExercise.gifUrl }} />
                                </View>
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
    gifContainer: {
        width: '70%',
        height: 185,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gif: {
        width: '80%',
        height: '80%',
    },
});