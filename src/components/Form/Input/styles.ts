import styled from "styled-components";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled(TextInput).attrs({
    placeholderTextColor: '#1B354E',
    })`
     width: 100%;
     padding: 16px 18px;
     
     font-size: ${RFValue(14)}px;
     
     
     background-color: ${props => props.theme.colors.background_input};
     color: ${({ theme }) => theme.colors.primary};

     border: 1px solid ${({ theme }) => theme.colors.primary};

     margin-bottom: 8px;
     

`;
