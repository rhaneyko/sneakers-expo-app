import React, { useState } from 'react';

import { Image } from 'react-native'
import { 
     Container,
     Title,
     Form,
     Fields,
     Input,
     Buttons,
     RegisterButton,
     TextButton,
     Text,
     SocialButtons,
     SocialButton,
    
     
} from './styles'


import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import firebase from '../../Services/Firebase/firebase'




const RegisterPage = () => {
     
    const navigation = useNavigation<propsStack>();
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (textEmail: string) => {
        setEmail(textEmail);
    }

    const onChangePassword = (textPassword: string) => {
        setPassword(textPassword);
    }

    const onRegister = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
            navigation.navigate('LoginPage');
        }).catch(() => {
            alert('Erro ao cadastrar');
        })
    }

    return(
        <Container>
            <Title>Register</Title>
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
                      <RegisterButton 
                      onPress={onRegister} >
                            <TextButton>Register</TextButton>
                      </RegisterButton>

                        <Text>Or register with</Text>

                        <SocialButtons>
                            <SocialButton>
                                <Image
                                    source={require('../../img/Google-logo.png')} 
                                    style={{ width: 40 }}
                                />
                            </SocialButton>
                            <SocialButton>
                                <Image
                                    source={require('../../img/Facebook-logo.png')}
                                     style={{ width: 30, height: 40 }}
                                />
                            </SocialButton>
                        </SocialButtons>
                  </Buttons>

                  
               </Fields>
            </Form>
        </Container>
    )
}
export default RegisterPage;
