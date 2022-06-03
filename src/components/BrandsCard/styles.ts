import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const Container = styled.View`
      background-color: ${({ theme }) => theme.colors.secondary};

      flex-direction: row;

      width: ${RFValue(300)}px;
      height: ${RFPercentage(30)}px;
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.colors.primary};

      padding: 19px 23px;
      padding-bottom: ${RFValue(42)}px;
`;

export const Header = styled.View`

`;

export const Title = styled.Text`

`;


