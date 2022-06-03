import React from 'react';
import { AntDesign } from '@expo/vector-icons'; 

import { 
    Container,
    Header,
    Title,
 } from './styles';


 export default function BrandsCard() {
    return(
        <Container>
            <Header>
                <Title>Title</Title>
                <AntDesign
                    name='shoppingcart'
                    size={24}
                    color='#000'
                />


            </Header>
        </Container>
    )
 }
