import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;
    
    background-color: ${props => props.theme.colors.secondary};
`;


export const Title = styled.Text`
    font-size: ${RFValue(50)}px;
    font-family: ${props => props.theme.fonts.title};
    color: ${props => props.theme.colors.title};

    margin-top: 200px;
    margin-bottom: 10px;
    margin-right: 200px;
`;



export const Form = styled.View`
    width: 100%;
    height: 500px;


    align-items: center;
    justify-content: center;

    padding: 24px;

    border-top-right-radius: 100px;

    background-color: ${props => props.theme.colors.whiteBackground};
`;

export const Fields  = styled.View`
    align-items: center;
    justify-content: center;
     
`;

export const Input = styled.TextInput`
    width: 300px;
    height: 50px;

    padding: 7px;
    margin: 10px;

    border-radius: 10px;

    background-color: #F7F7F7;
`;
export const LoginButton = styled.TouchableOpacity`
    width: 300px;
    height: 40px;

    justify-content: center;
    align-items: center;

    margin-top: 20px;

    border-radius: 10px;

    background-color: ${props => props.theme.colors.buttonBackground};
`;

export const TextButton = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${props => props.theme.fonts.buttonText};
    
`;
export const Buttons = styled.View`
    flex-direction: column;

    align-items: center;
`;

export const LoginButtons = styled.View`
    display: flex;
    flex-direction: row;

    align-items: center;

    margin-top: 20px;
`;

export const SocialButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
})`
    width: 50px;
    height: 55px;


    justify-content: center;
    align-items: center;

    margin: 10px;
`;

export const Text = styled.Text`
   color: #818181;

   margin-top: 30px;
`;

