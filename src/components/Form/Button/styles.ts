import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity).attrs({
    activeOpacity: 0.7
})`
    width: 300px;
    height: 50px;

    margin: 10px;

    align-items: center;
    justify-content: center;

    background-color: #000;

    border-radius: 10px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(17)}px;
    color: ${props => props.theme.colors.secondary};

     
     
`;
