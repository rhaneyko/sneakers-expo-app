import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import SideBar from '../../components/SideBar';
import Header from './Header';
import TabBar from '../../components/TabBar';


import * as S from './styles';


export default function Home() {
  const contentRotateY = useSharedValue(0);
  const contentTranslateX = useSharedValue(0);
  const contentScale = useSharedValue(0);

  const [openMenu, setOpenMenu] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);
  const [openOnboardModal, setOpenOnboardModal] = useState(false);

  useEffect(() => {
    const options = { damping: 14 };

    contentRotateY.value = withSpring(openMenu ? -30 : 0, options);
    contentTranslateX.value = withSpring(openMenu ? 265 : 0, options);
    contentScale.value = withSpring(openMenu ? 0.9 : 1, options);
    contentScale.value = withSpring(openOnboardModal ? 0.92 : 1, options);
  }, [openMenu, openOnboardModal]);

  const animatedContentSyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: 207 },
      { perspective: 400 },
      { rotateY: `${contentRotateY.value}deg` },
      { translateX: -207 },
      { translateX: contentTranslateX.value },
      { scale: contentScale.value },
    ],
  }));

  return (
    <S.Container style={[animatedContentSyle]} >
      <Header
        openMenu={openMenu}
        setIsOpenMenu={setOpenMenu}
        setOpenOnboardModal={setOpenOnboardModal}

      />
      <SideBar openMenu={openMenu}/>
      <TabBar openMenu={openMenu || openOnboardModal} />
    </S.Container>
  );
}
