import React from 'react';

import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Header,
    Title,
    CartProducts,
    CartProduct,
    CartHeader,
    CartProductInfo,
    CartProductImage,
    CartProductName,
    CartProductSize,
    CartProductPrice,
} from './styles';

import { propsStack } from '../../routes/Stack/Models';

const CartPage = () => {
    const navigation = useNavigation<propsStack>();
    return (
        <Container>
            <Header>
              <AntDesign 
              name='arrowleft' 
              size={24} color='#FAC405'
              onPress={() => navigation.goBack()}
              />
              <Title>Cart</Title>
            </Header>

            <CartProducts>
                <CartProduct>
                    <CartHeader>
                        <CartProductImage source={{ 
                            uri: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60' 
                            }} 
                            />
                        <CartProductInfo>
                           <CartProductName>Product Name</CartProductName>
                           <CartProductSize>Size</CartProductSize>
                           <CartProductPrice>$100</CartProductPrice>
                        </CartProductInfo> 
                        <AntDesign size={24} name='close' color='#000'/>
                    </CartHeader>
                </CartProduct>
            </CartProducts>
            
        </Container>
    );
}
export default CartPage;
