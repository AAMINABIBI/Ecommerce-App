import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import HomeScreen from './src/screen/HomeScreen';
import ProductDetailsScree from './src/screen/ProductDetailsScreen';
import CartScreen from './src/screen/CartScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { CartContext } from './src/context/CartContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ProductDetails" component={ProductDetailsScree} />
        </Stack.Navigator>
    );
};

const EApp = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'pink'
        }}>
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="home" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Reorder"
                component={Home} // Ensure this is the correct component
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="reorder" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ size, color }) => {
                        const { carts } = useContext(CartContext);
                        return (
                            <View style={{ position: 'relative' }}>
                                <MaterialCommunityIcons name="cart" size={size} color={color} />
                                <View style={{
                                    height: 14,
                                    width: 14,
                                    borderRadius: 7,
                                    backgroundColor: color,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    top: -10,
                                    right: -5
                                }}>
                                    <Text style={{ fontSize: 10, color: 'white', fontWeight: '500' }}>{carts.length}</Text>
                                </View>
                            </View>
                        );
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Home} // Ensure this is the correct component
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome6 name="user" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default EApp;
