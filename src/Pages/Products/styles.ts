import styled from 'styled-components/native';


export const Container = styled.View`
    

    background-color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const ScrollView = styled.ScrollView.attrs({
    vertical: true,
    showVerticalScrollIndicator: false,
})`
    
    
`;

export const Feed = styled.View`
    flex-direction: column;
`;

export const CardsProducts = styled.View`
    flex-direction: row;

    align-items: center;
    justify-content: center;


`;

export const Header = styled.View`
`;

export const Title = styled.Text`
`; 

export const CardProduct = styled.View`
    flex-direction: column;
    align-items: center;

    margin: 15px;

    background-color:red;
`;

export const ImageProduct = styled.Image`
    height: 150px;
    width: 150px;

    margin-top: 10px;
`;

export const ProductName = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

export const ProductPrice = styled.Text`
    font-size: 16px;

    margin-top: 10px;
`;


