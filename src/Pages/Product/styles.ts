import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;

  border: 1px solid;
  border-radius: 10px;

  margin: 10px;

`;

export const Pressable = styled.Pressable`
  flex-direction: row;

  align-items: center;
  
  
  margin: 5px;
`;

export const LeftCard = styled.View``;

export const RightCard = styled.View`
   margin-left: 10px;
`;


export const Image = styled.Image`
  width: 150px;
  height: 110px;
`;

export const CardTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const CardPrice = styled.Text`
  margin-top: 20px;

  font-size: 20px;
  font-weight: bold;
`;

export const CardOldPrice = styled.Text`
  margin-left: 10px;

  font-size: 12px;
  font-weight: bold;

  text-decoration: line-through;
`;
