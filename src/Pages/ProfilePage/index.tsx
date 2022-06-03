import React from 'react';
import { Image, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '../../components/BottomSheet';
import {
    Container,
    UserProfile,
    Username,
    Configs,
    Config,
} from './styles'

const ProfilePage = () => {
    return(
      <GestureHandlerRootView style={{flex: 1}} >
        <Container>
             <UserProfile>
                <Image
                   source={{
                       uri: 'https://avatars.githubusercontent.com/u/49030804?v=4'}} 
                   style={{
                       width: 200,
                       height: 200,
                       borderRadius: 100}} 
                       />
                <Username>Nome Usuário</Username>
             </UserProfile>
              
             <BottomSheet/>
        </Container>
      </GestureHandlerRootView>
    )
}

export default ProfilePage;
