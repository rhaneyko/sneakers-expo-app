import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(5)}px;

  flex-direction: row;

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

export const UserProfile = styled.View`
    width: 100%;
    height: 350px;

    flex-direction: column;

    align-items: center;

    padding: 20px;
    margin-top: 30px;
 
    background-color: ${props => props.theme.colors.secondary};
    
`;

export const Username = styled.Text`
    margin-top: 10px;

    font-size: ${RFValue(24)}px;
    font-family: ${props => props.theme.fonts.title};
    color: ${props => props.theme.colors.title};
`;

export const Configs = styled.View`
    width: 100%;
    height: 620px;

    top: 300px;
    position: absolute;


    padding: 10px 10px;

    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    background-color: ${props => props.theme.colors.whiteBackground};
`;

export const Config = styled.Text`
    margin-top: 10px;

    font-size: ${RFValue(24)}px;
    font-family: ${props => props.theme.fonts.title};
    color: ${props => props.theme.colors.title};
`;
