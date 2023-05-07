import { View, KeyboardAvoidingView, StyleSheet, Image } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import React from 'react'

const LoginForm = ({ email, setEmail, password, setPassword, handleLogin, handleSignUp }) => {
    return (
        <KeyboardAvoidingView
            style={styles.container}
        >
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../../assets/barbell.webp')} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    mode='contained'
                    style={styles.button}
                    onPress={handleSignUp}
                >
                    Sign Up
                </Button>
                <Button
                    mode='contained'
                    style={styles.button}
                    onPress={handleLogin}
                >
                    Login
                </Button>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    button: {
        marginHorizontal: 10,
        width: 100
    },
    image: {
        width: '50%',
        height: '50%'
    },
    imageContainer: {
        width: '100%',
        height: 185,
        alignItems: 'center',
        justifyContent: 'center',
    },
})