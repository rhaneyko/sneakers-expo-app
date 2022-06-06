import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { propsNavigationStack } from '../routes/Stack/Models'

import SplashPage from '../Pages/SplashPage'
import RegisterPage from '../Pages/RegisterPage'
import LoginPage from '../Pages/LoginPage'
import HomePage from '../Pages/HomePage'
import CartPage from '../Pages/CartPage'
import SavedPage from '../Pages/SavedPage'
import ProfilePage from '../Pages/ProfilePage'
import ProductDetailPage from '../Pages/Product/ProductDetail'


export default function AppRoutes() {
    const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

    return (
        <Navigator initialRouteName='HomePage' screenOptions={{headerShown: false}}>
            <Screen name='SplashPage' component={SplashPage} />
            <Screen name='RegisterPage' component={RegisterPage} />
            <Screen name='LoginPage' component={LoginPage} />
            <Screen name='HomePage' component={HomePage} />
            <Screen name='ProductDetailPage' component={ProductDetailPage} />
            <Screen name='CartPage' component={CartPage} />
            <Screen name='SavedPage' component={SavedPage} />
            <Screen name='ProfilePage' component={ProfilePage} />
        </Navigator>
    )  
}
