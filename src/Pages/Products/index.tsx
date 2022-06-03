import React from 'react';
import product from '../../components/Data/Products/product';

import { 
     Container,
     Header,
     Title,
     Feed,
     CardsProducts,
     CardProduct,
     ImageProduct,
     ProductName,
     ProductPrice,
     ScrollView,
      } from './styles';

const Products = () => {
    return(
        <Container>
            <Feed>
             <CardsProducts>
               <CardProduct>
                 <ImageProduct  source={require('../../img/jordan-produto.jpeg')}/>
                 <ProductName>Produto nome</ProductName>
                 <ProductPrice> ${product.price.toFixed(2)} {product.oldPrice && (<ProductPrice> ${product.oldPrice.toFixed(2)}</ProductPrice>)}</ProductPrice>
               </CardProduct>

                <CardProduct>
                  <ImageProduct  source={require('../../img/jordan-produto.jpeg')}/>
                  <ProductName>Produto nome</ProductName>
                  <ProductPrice> ${product.price.toFixed(2)} {product.oldPrice && (<ProductPrice> ${product.oldPrice.toFixed(2)}</ProductPrice>)}</ProductPrice>
                </CardProduct>

               </CardsProducts>
    
            </Feed> 
        </Container>
    )
}

export default Products;
