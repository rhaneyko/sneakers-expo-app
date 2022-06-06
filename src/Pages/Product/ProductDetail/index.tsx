import React from 'react'
import {
    Container,
    Image,
    Title,
    Price,
    OldPrice,

} from './styles'

import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

interface DetailProps {
    item: {
        id: string;
        title: string;
        image: string;
        imgDetail: string;
        price: number;
        oldPrice?: number;
    }
}

const ProductDetailPage = ({ item }: DetailProps) => {
    const navigation = useNavigation();
    return (
        <Container>
            <AntDesign 
            name="arrowleft" 
            size={24} 
            color="#000" 
            onPress={() => navigation.goBack()}
            />
            <Image source={{uri: item.imgDetail}}/>
            <Title>{item.title}</Title>
            <Price>
                {item.oldPrice && (
                    <OldPrice>${item.oldPrice.toFixed(2)}</OldPrice>
                )}
            </Price>
        </Container>
    )
}

export default ProductDetailPage;
