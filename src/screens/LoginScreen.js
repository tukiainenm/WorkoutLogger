import { Button, TextInput, Provider as PaperProvider, Text } from 'react-native-paper';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("WorkoutLogger")
            }
        })
        return unsubscribe
    }, [])

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log("Registered as:", user.email);
            })
            .catch(error => console.error(error))
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log("Logged in as:", user.email);
            })
            .catch(error => console.error(error))
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior='height'
        >
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
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
                    <Text>Sign Up</Text>
                </Button>

                <Button
                    mode='contained'
                    style={styles.button}
                    onPress={handleLogin}
                >
                    <Text>Login</Text>
                </Button>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
        marginTop: 20,
    },
    button: {
        marginHorizontal: 10,
        width: 100
    },
})