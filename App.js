import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme
}
  from '@react-navigation/native';
import { MD2DarkTheme, MD2LightTheme } from 'react-native-paper';
import merge from 'deepmerge'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SearchScreen from './src/screens/SearchScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import CustomNavigationBar from './src/components/CustomNavigationBar'

const Stack = createNativeStackNavigator();
const CombinedDefaultTheme = merge(MD2LightTheme, NavigationDefaultTheme);
export const CombinedDarkTheme = merge(MD2DarkTheme, NavigationDarkTheme);

export default function App() {
  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login"
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />
          }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="WorkoutLogger" component={HomeScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}