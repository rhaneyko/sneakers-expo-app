import React, { useEffect, useState } from 'react'
import {
    Container,
    Image,
    Title,
    Price,
    OldPrice,

} from './styles'

import { AntDesign } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native';
import { propsStack } from '../../../routes/Stack/Models';
import { Product } from '../../../models';

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
    // const [product, setProduct] = useState<Product | undefined>(undefined);

    // const [selectedOption, setSelectedOption] = useState<string | undefined>(
    //     undefined,
    //   );

    //   useEffect(() => {
    //     if (!route.params?.id) {
    //       return;
    //     }
    //     DataStore.query(Product, route.params.id).then(setProduct);
    //   }, [route.params?.id]);
    
    //   useEffect(() => {
    //     if (product?.options) {
    //       setSelectedOption(product.options[0]);
    //     }
    //   }, [product]);



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
            <Price>{item.price.toFixed(2)}</Price>
            {item.oldPrice && (
                <OldPrice>{item.oldPrice.toFixed(2)}</OldPrice>
            )}

        </Container>
    )
}

export default ProductDetailPage;
