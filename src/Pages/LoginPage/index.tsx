import React, { useState } from 'react';
import { Image } from 'react-native'
import { 
     Container,
     Title,
     Form,
     Fields,
     Input,
     LoginButton,
     LoginButtons,
     TextButton,
     Buttons,
     SocialButton,
     Text,
} from './styles'

import { useNavigation } from '@react-navigation/native';
import firebase from '../../Services/Firebase/firebase'
import { propsStack } from '../../routes/Stack/Models';


const LoginPage = () => {

    const navigation = useNavigation<propsStack>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (textEmail: string) => {
        setEmail(textEmail);
    }

    const onChangePassword = (textPassword: string) => {
        setPassword(textPassword);
    }

    const onLogin = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            navigation.navigate('HomePage');
        })
        .catch(() => {
            alert('Erro ao logar');
        })
    }


    return(
        <Container>
            <Title>Log in</Title>
            <Form>
               <Fields>
                  <Input
                    placeholder= 'E-mail'
                    keyboardType='email-address'
                    value={email}
                    onChangeText={textEmail => onChangeEmail(textEmail)}
                  />

                  <Input
                    placeholder= 'Password'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={textPassword => onChangePassword(textPassword)}
                  />
                  <Buttons>
               <LoginButton onPress={onLogin} >
                  <TextButton>Log in</TextButton>    
               </LoginButton> 
                 <Text>Or continue with</Text>
               <LoginButtons>
                  <SocialButton>
                      <Image 
                      source={require('../../img/Google-logo.png')} 
                      style={{ width: 40 }}/>
                  </SocialButton>
                  <SocialButton>
                      <Image 
                      source={require('../../img/Facebook-logo.png')} 
                      style={{ width: 30, height: 40 }}/>
                  </SocialButton>
               </LoginButtons>
            </Buttons>
               </Fields>
            </Form>
            
        </Container>
    )
}

export default LoginPage;
