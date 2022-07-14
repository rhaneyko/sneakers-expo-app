import React from 'react'



import {
    Container,
    Image,
    Pressable,
    LeftCard,
    RightCard,
    CardTitle,
    CardPrice,
    CardOldPrice,

} from './styles';

import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';

interface ProductItemProps {
item: {
    id: string;
    title: string;
    image: string;
    imgDetail: string;
    price: number;
    oldPrice?: number;
}
}

const Product = ({ item}: ProductItemProps) => {
    const navigation = useNavigation<propsStack>();

    return(
       <Container>
        <Pressable  
        >
          <LeftCard>
            <Image source={{uri: item.image}} />
          </LeftCard>
          <RightCard>
             <CardTitle>
               {item.title}
             </CardTitle>
            <CardPrice >${item.price.toFixed(2)}
              {item.oldPrice && (
                <CardOldPrice>  ${item.oldPrice.toFixed(2)}</CardOldPrice>
              )}
            </CardPrice>
          </RightCard>
        </Pressable>
      </Container>
    )
}

export default Product;



