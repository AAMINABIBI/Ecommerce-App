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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailsScree from './src/screen/ProductDetailsScreen';
import CartScreen from './src/screen/CartScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
    return (
        <View>
            <Text>Home</Text>
        </View>
    );
}

const myHomeStack=()=>{
    return(
        <Stack.Navigator screenOptions={
            {
                headerShown:false
            }
        }
        initialRouteName='CART'
        >
        <Stack.Screen name="HOME" component={HomeScreen} />
        <Stack.Screen name="PRODUCT_DETAILS"
         component={ProductDetailsScree} />

      </Stack.Navigator>
    )
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
                    name="HOME_STACK"
                    component={myHomeStack}
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
                <Tab.Screen name="Cart" component={CartScreen}
                 options={{
                    tabBarIcon: ({ size, color, focused }) => {
                        return <MaterialCommunityIcons
                         name={"cart"} size={size} color={color}/>
                    }
                }} />
                <Tab.Screen name="reorder" 
                component={Home}
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
