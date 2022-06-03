import React, { useState, useRef, useEffect } from "react";
import { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";


import { Button, ButtonContent, Container, Content, Shadow } from "./styles";

interface Props {
  openMenu: boolean;
}

export default function TabBar({ openMenu }: Props) {
  const contentTranslateY = useSharedValue(0);


  useEffect(() => {
    contentTranslateY.value = withSpring(openMenu ? 100 : 0, { damping: 13 });
  }, [openMenu]);

 

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: contentTranslateY.value }],
  }));

  return (
    <Container style={containerAnimatedStyle}>
      <Content>

      </Content>
    </Container>
  );
}
