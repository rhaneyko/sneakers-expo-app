import Animated from 'react-native-reanimated';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
   width: 100%;
   height: ${RFPercentage(7)}px;

   align-items: center;
   justify-content: space-between;

   flex-direction: row;

   margin-top: 30px;

   padding: 4px 8px;

   background-color: ${props => props.theme.colors.secondary};
`;

export const AppName = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${props => props.theme.fonts.title};
  color: ${props => props.theme.colors.title};	
  
  margin-top: -4px;
  margin-right: 147px;
`;

export const Button = styled.TouchableOpacity.attrs({ activeOpacity: 0.9 })``;

export const MenuButton = styled.TouchableOpacity.attrs({ activeOpacity: 0.9 })``;
