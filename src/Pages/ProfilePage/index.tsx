import React from 'react';
import { Image, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
    Container,
    Header,
    Title,
    UserProfile,
    ProfilePicture,
    Username,
    Configs,
    Config,
} from './styles'

import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons'
const ProfilePage = () => {

  const navigation = useNavigation();
    return(
      <GestureHandlerRootView style={{flex: 1}} >
        <Container>
             
             <UserProfile>
               <Header>
                  
                 <AntDesign 
                   name='left' 
                   size={30} 
                   color='#FAC405' 
                   onPress={() => navigation.goBack()} />
                   <Title>Perfil</Title>
               </Header>
                <ProfilePicture />
               
                <Username>Nome Usuário</Username>
             </UserProfile>
              
        </Container>
      </GestureHandlerRootView>
    )
}

export default ProfilePage;

