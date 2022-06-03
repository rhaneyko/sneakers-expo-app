import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(5)}px;

  flex-direction: row;

  margin-top: 30px;

  padding: 4px 8px;

  align-items: flex-start;
  justify-content: space-between;

  background-color: ${props => props.theme.colors.secondary};
`;

export const Title = styled.Text`
    font-family: ${props => props.theme.fonts.title};
    font-size: ${RFValue(24)}px;
    color: ${props => props.theme.colors.title};

    margin-top: -4px;
    margin-right: 170px;
`;

export const CartProducts = styled.View`
    flex-direction: column;

    margin-top: 20px;

    
`;

export const CartProduct = styled.View`
    flex-direction: row;

    width: 100%;
    height: 100px;

    align-items: center;

    border: 1px solid #000;
`;

export const CartHeader = styled.View`
    flex-direction: row;

`;



export const CartProductInfo = styled.View`
    flex-direction: column;
    
    margin-top: 20px;
    margin-left: 10px;
    
`;

export const CartProductImage = styled.Image`
    width: 80px;
    height: 80px;

    margin-top: 4px;
    margin-left: 10px;
`;

export const CartProductName = styled.Text`
    font-size: 18px;
    font-weight: bold;
    
    margin-top: -20px;
    margin-bottom: 10px;

`;

export const CartProductSize = styled.Text``;

export const CartProductPrice = styled.Text`
    font-weight: bold;

`;

