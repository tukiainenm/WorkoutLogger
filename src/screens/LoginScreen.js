import { Button, TextInput, Provider as PaperProvider, Text } from 'react-native-paper';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const navigation = useNavigation();


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
            .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log("Logged in as:", user.email);
            })
            .catch(error => alert(error.message))
    }

    return (
        <PaperProvider>
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
                        onPress={handleLogin}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </Button>

                    <Button
                        onPress={handleSignUp}
                        style={[styles.button, styles.buttonOutline]}
                    >
                        <Text style={styles.buttonOutlineText}>Sign Up</Text>
                    </Button>
                </View>
            </KeyboardAvoidingView>
        </PaperProvider>
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
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
})