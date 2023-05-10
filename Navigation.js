import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';
import StackScreen from './Screens/StackScreen';
 
const HomeStackNavigator = createNativeStackNavigator();

function MyStack(){
    return(
        <HomeStackNavigator.Navigator
            initialRouteName="Perfil"
        >
            <HomeStackNavigator.Screen
                name="Perfil"
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name="Stack"
                component={StackScreen}
            />
        </HomeStackNavigator.Navigator>
    )
}


const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
                component={MyStack} 
                options={{
                    tabBarLabel:"Inicio",
                    tabBarIcon:({color,size})=>(
                        <MaterialCommunityIcons name ="account" color={color} size={size}/>
                    ),
                    tabBarBadge:3,
                    headerShown:false
                }}    
            />
            <Tab.Screen 
                name="Settings" 
                component={SettingsScreen} 
                options={{
                    tabBarLabel:"Ajustes",
                    tabBarIcon:({color,size})=>(
                        <MaterialCommunityIcons name ="image-multiple" color={color} size={size}/>
                    ),
                    tabBarBadge:15,
                    headerShown:false
                }}    
            />
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}
