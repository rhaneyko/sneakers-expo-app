import React, { useRef } from 'react';
import Rive, { RiveRef } from 'rive-react-native';
import { AntDesign } from '@expo/vector-icons';

import { 
   Container,
   AppName 
  } from './styles';

import { useNavigation } from '@react-navigation/native';

import { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { propsStack } from '../../../routes/Stack/Models';

interface Props {
  openMenu: boolean;
  setIsOpenMenu(openMenu: boolean): void;
  setOpenOnboardModal(openMenu: boolean): void;
}

export default function Header({ openMenu, setIsOpenMenu, setOpenOnboardModal }: Props) {
  const navigation = useNavigation<propsStack>()
 
  const containerTranlateX = useSharedValue(0);


  

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: containerTranlateX.value }],
  }));

  return (
    <Container style={containerAnimatedStyle}>
       <AppName>Sneakers App</AppName>
       <AntDesign 
         name='shoppingcart' 
         size={30} 
         color='#FAC405' 
         onPress={() => navigation.navigate('CartPage')} 
         />  
      <AntDesign
         name='user' 
         size={30} 
         color='#FAC405' 
         onPress={() => navigation.navigate('ProfilePage')} 
         />
      
       
    </Container>
  );
}
