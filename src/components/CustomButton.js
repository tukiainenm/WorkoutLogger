import React from 'react'
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const CustomButton = () => {
    return (
        <Button style={styles.button} icon="plus" mode="text" compact="" onPress={() => console.log('Pressed')}>
            
        </Button>
    );
}

export default CustomButton

const styles = StyleSheet.create({
    buttonContainer: {
        
    }
})