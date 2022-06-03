import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { AntDesign, Feather } from '@expo/vector-icons'

import { propsNavigationStack } from '../routes/Stack/Models'


import SplashPage from '../Pages/SplashPage'
import RegisterPage from '../Pages/RegisterPage'
import LoginPage from '../Pages/LoginPage'
import HomePage from '../Pages/HomePage'
import CartPage from '../Pages/CartPage'
import SavedPage from '../Pages/SavedPage'
import ProfilePage from '../Pages/ProfilePage'


export default function AppRoutes() {
    const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

    return (
        <Navigator initialRouteName='HomePage' screenOptions={{headerShown: false}}>
            <Screen name='SplashPage' component={SplashPage} />
            <Screen name='RegisterPage' component={RegisterPage} />
            <Screen name='LoginPage' component={LoginPage} />
            <Screen name='HomePage' component={HomePage} />
            <Screen name='CartPage' component={CartPage} />
        </Navigator>
    )  
}
        function TabRoutes() {
           const Tab = createBottomTabNavigator();

           return (
                <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    unmountOnBlur: true,
                    tabBarShowLabel: false,
                    tabBarStyle: { 
                        width: '100%',
                        height: 50, 
                        backgroundColor: '#FFF',
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                    }
                }}
                >
                <Tab.Screen
                  name='Salvos'
                  component={SavedPage}
                  options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Feather
                                name='bookmark'
                                size={25}
                                color={focused ? '#FAC405' : '#17296C'}/>
                        </>
                    )}}
            />
            <Tab.Screen
                  name='Home'
                  component={HomePage}
                  options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <AntDesign
                                name='home'
                                size={25}
                                color={focused ? '#FAC405' : '#17296C'}/>
                        </>
                )}}
            />
            <Tab.Screen
                  name='Profile'
                  component={ProfilePage}
                  options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Feather
                                name='user'
                                size={25}
                                color={focused ? '#FAC405' : '#17296C'}/>
                        </>
                    )}}
            />
                </Tab.Navigator>
            )
   
}
