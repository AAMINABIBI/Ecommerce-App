import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import HomeScreen from './src/screen/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailsScree from './src/screen/ProductDetailsScreen';
import CartScreen from './src/screen/CartScreen';
import { CartContext, CartProvider } from './src/context/CartContext';
import SplashScreen from 'react-native-splash-screen';
import LoginPage from './src/screen/login&Register/Login';
import RegisterPage from './src/screen/login&Register/Register';
import EApp from './EApp'; // Adjust the path as necessary

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            SplashScreen.hide();
        }, 900);

        // Clean up the timer if the component unmounts
        return () => clearTimeout(timer);
    }, []); // Empty dependency array to run only once

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Login' component={LoginPage} />
                <Stack.Screen name='Register' component={RegisterPage} />
                <Stack.Screen name='EApp' component={EApp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
