import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import HomeScreen from './src/screen/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';  // Correct import
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';  // Correct import
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';  // Correct import
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';  // Correct import
import { pink100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const Tab = createBottomTabNavigator();

function Home() {
    return (
        <View>
            <Text>Home</Text>
        </View>
    );
}

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor:'pink'
            }}>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ size, color, focused }) => {
                            return <Entypo name={"home"} size={size} color={color}/>
                        }
                    }}
                />
                <Tab.Screen name="Reorder" component={Home} 
                  options={{
                    tabBarIcon: ({ size, color, focused }) => {
                        return <MaterialIcons name={"reorder"} size={size} color={color}/>
                    }
                }}/>
                <Tab.Screen name="Cart" component={Home}
                 options={{
                    tabBarIcon: ({ size, color, focused }) => {
                        return <MaterialCommunityIcons
                         name={"cart"} size={size} color={color}/>
                    }
                }} />
                <Tab.Screen name="reorder" component={Home}
                  options={{
                    tabBarIcon: ({ size, color, focused }) => {
                        return <FontAwesome6
                         name={"user"} size={size} color={color}/>
                    }
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
