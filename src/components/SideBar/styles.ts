import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled(Animated.View)`
  width: 290px;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding-top: 65px;
  padding-left: 18px;

  background-color: ${props => props.theme.colors.secondary};
`;

export const Header = styled.View`
  width: 100%;
  
  flex-direction: row;

`;

export const UserContent = styled.View`
  height: 40px;
  width: 40px;

  align-items: center;
  justify-content: center;

  border-radius: 30px;
  
  background: ${({ theme }) => theme.colors.primary};
`;

export const UserTextContent = styled.View`
  margin-left: 8px;
`;

export const UserName = styled.Text`
  font-size: 15px;
  color: white;
  
  margin-right: 50px;
  margin-bottom: 130px;
`;

export const CloseMenu = styled.TouchableOpacity.attrs({ activeOpacity: 0.9 })`
  margin-top: 3px;
`;

export const MenuItem = styled.TouchableOpacity.attrs({ activeOpacity: 0.9 })`
  width: 100%;

  flex-direction: row;
  
  align-items: center;

  padding: 12px 0;
  
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.primary};
`;


export const MenuTitle = styled.Text`
  margin-left: 10px;

  font-size: 17px;
  color: white;
`;

export const Bottom = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 12px 0;
  margin-left: 30px;
  align-items: center;
  position: absolute;
  bottom: 40px;
`;

export const Switch = styled.Switch`
  position: absolute;
  right: 0;
`;
