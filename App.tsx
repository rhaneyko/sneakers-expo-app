import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';


import theme from './src/Global/Styles/theme';

import Routes from './src/routes';

import { useFonts } from '@expo-google-fonts/averia-sans-libre';

import { 
  AveriaSansLibre_400Regular_Italic,
  AveriaSansLibre_400Regular,
  AveriaSansLibre_700Bold,
 } from '@expo-google-fonts/averia-sans-libre';
 
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [fontsLoaded] = useFonts({
    AveriaSansLibre_400Regular_Italic,
    AveriaSansLibre_400Regular,
    AveriaSansLibre_700Bold,
});

  if (!fontsLoaded) {
    return <></>;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        style='light'
        backgroundColor={theme.colors.secondary}
      />
      <Routes/>
    </ThemeProvider>
  );
}
