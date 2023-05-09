import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SearchScreen from './src/screens/SearchScreen';
import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper';
import TopNavBar from './src/components/NavigationComponents/TopNavBar';
import BotNavBar from './src/components/NavigationComponents/BotNavBar';

const Stack = createNativeStackNavigator();


export default function App({ navigation }) {

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login"
          screenOptions={{
            header: (props) => <TopNavBar {...props} />
          }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="WorkoutLogger" component={HomeScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
        <BotNavBar />
      </NavigationContainer>
    </PaperProvider>
  );
}