import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;


    align-items: center;
    justify-content: center;

    padding: 30px;

    background-color: ${props => props.theme.colors.secondary};
`;

export const Title = styled.Text`
    font-size: ${RFValue(50)}px;    
    font-family: ${props => props.theme.fonts.title};

    color: ${props => props.theme.colors.title};

    margin-top: 300px;
    margin-bottom: 35px;
`;



export const Subtitle = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${props => props.theme.fonts.subtitle};
    color: ${props => props.theme.colors.subtitle};

    margin-left: 90px;
`;

export const GetStarted = styled.View`
    flex-direction: row;

    margin-top: 150px;
`;
export const LoginButton = styled.TouchableOpacity`
    width: 100px;
    height: 40px;

    align-items: center;
    justify-content: center;

    margin: 10px;

    background-color: ${props => props.theme.colors.primary};
    border-radius: 10px;

`;
export const ButtonTitle = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${props => props.theme.fonts.buttonText};
`;
export const RegisterButton = styled.TouchableOpacity`
    width: 100px;
    height: 40px;

    align-items: center;
    justify-content: center;

    margin: 10px;

    
    background-color: ${props => props.theme.colors.buttonBackground};
    border-radius: 10px;
`;


