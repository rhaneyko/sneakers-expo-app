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
import { propsStack } from '../../../routes/Stack/Models';
import DetailProduct from '../../../components/Data/Products/products'

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
    const navigation = useNavigation<propsStack>();
    return (
        <Container>
            <AntDesign 
            name="arrowleft" 
            size={24} 
            color="#000" 
            onPress={() => navigation.goBack()}
            />
            <Image source={{ uri: item.image }} />
            <Title>{item.title}</Title>
            <Price>
                {item.price.toFixed(2)}
            </Price>
        </Container>
    )
}

export default ProductDetailPage;
