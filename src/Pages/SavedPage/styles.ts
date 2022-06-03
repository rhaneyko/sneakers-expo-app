import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
   background-color: white;
   flex: 1;
`;

export const Header = styled.View`
   width: 100%;
   height: ${RFPercentage(5)}px;

   align-items: center;
   justify-content: center;

   margin-top: 30px;

   padding: 4px 8px;

   background-color: ${props => props.theme.colors.secondary};
`;

export const Title = styled.Text`
   font-family: ${props => props.theme.fonts.title};
   font-size: ${RFValue(24)}px;
   color: ${props => props.theme.colors.title};

   margin-top: -4px;
`;
