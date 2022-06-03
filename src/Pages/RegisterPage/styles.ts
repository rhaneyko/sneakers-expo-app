import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native'

export const Container = styled.View`
     flex: 1;

justify-content: center;
align-items: center;

background-color: #17296C;
`;

export const Title = styled.Text`
    font-size: ${RFValue(40)}px;

    margin-top: 230px;
    margin-right: 150px;
    color: #FAC405;
`;

export const Form = styled.View`
    width: 100%;
    height: 500px;


    align-items: center;
    justify-content: center;

    padding: 24px;

    border-top-right-radius: 100px;

    background-color: #FFF;
      
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

export const Buttons = styled.View`
   flex-direction: column;

   justify-content: center;
   align-items: center;

`;

export const RegisterButton = styled.TouchableOpacity`
    width: 300px;
    height: 40px;

    align-items: center;
    justify-content: center;

    border-radius: 10px;

    margin-top: 25px;

    background-color: #FAC405;
    
`;

export const TextButton = styled.Text`

`;

export const Text = styled.Text`
    font-size: ${RFValue(13)}px;

    color: #A4A4A4;

    margin-top: 25px;
`;

export const SocialButtons = styled.View`
    flex-direction: row;

    align-items: center;
    justify-content: center;
`;

export const SocialButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8
})`
    width: 50px;
    height: 55px;

    justify-content: center;
    align-items: center;

    margin: 25px 10px;

`;
