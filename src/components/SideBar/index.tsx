import React, { useState, useRef, useEffect } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import {
    Container,
    Header,
    UserContent,
    UserTextContent,
    UserName,
    CloseMenu,
    MenuItem,
    MenuTitle,
  }from './styles';

import { AntDesign } from '@expo/vector-icons';

interface Props {
  openMenu: boolean;
}

export default function SideBar({ openMenu}: Props) {
  const contentTranslateY = useSharedValue(0);
  const contentOpacity = useSharedValue(0);

  useEffect(() => {
    contentTranslateY.value = withSpring(openMenu ? 0 : -280, { damping: 14 });
    contentOpacity.value = withTiming(openMenu ? 1 : 0);
  }, [openMenu]);

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: contentOpacity.value,
    transform: [{ translateX: contentTranslateY.value }],
  }));

  return (
    <Container style={containerAnimatedStyle}>
        <Header>
            <UserContent>
                <AntDesign name='user' size={32} color='#fff' />
            </UserContent>
            <UserTextContent>
          <UserName>Rhaneyko Honorio</UserName>
        </UserTextContent>
        {/* <CloseMenu>        
          <AntDesign name='close' size={40} color='#fff' />
        </CloseMenu>  */}
        </Header>

      
        <MenuItem>
            <AntDesign name='home' size={24} color='#fff' />
            <MenuTitle>Home</MenuTitle>
        </MenuItem>
        <MenuItem>
            <AntDesign name='search1' size={24} color='#fff' />
            <MenuTitle>Pesquisar</MenuTitle>
        </MenuItem>
        <MenuItem>
            <AntDesign name='staro' size={24} color='#fff' />
            <MenuTitle>Favoritos</MenuTitle>
        </MenuItem>
        <MenuItem>
            <AntDesign name='user' size={24} color='#fff' />
            <MenuTitle>Perfil</MenuTitle>
        </MenuItem>
        <MenuItem>
            <AntDesign name='setting' size={24} color='#fff' />
            <MenuTitle>Configurações</MenuTitle>
        </MenuItem>
    </Container>
  );
}
