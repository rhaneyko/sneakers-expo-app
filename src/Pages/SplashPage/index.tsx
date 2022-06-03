import React from 'react';
import { 
    Container,
    Title,
    Subtitle,
    GetStarted,
    LoginButton,
    ButtonTitle,
    RegisterButton,
    } from './styles'

import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import { StatusBar } from 'expo-status-bar';

const SplashPage = () => {
    const navigation = useNavigation<propsStack>();

    return(
        <Container>
            <StatusBar
                style='light'
            />
            <Title>Welcome to sneaker app</Title>
            <Subtitle>Find your shoes</Subtitle>
            
            <GetStarted>
                <LoginButton  onPress={() => navigation.navigate('LoginPage') }>
                    <ButtonTitle>Login</ButtonTitle>
                </LoginButton>
                <RegisterButton onPress={() => navigation.navigate('RegisterPage') }>
                    <ButtonTitle>Register</ButtonTitle>
                </RegisterButton>
            </GetStarted>
        </Container>
    )
}

export default SplashPage;
