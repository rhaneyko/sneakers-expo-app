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
    const navigation = useNavigation();

    const openProduct = () => {
      navigation.navigate('ProductDetailPage', {id: item.id});
    };

    return(
       <Container>
        <Pressable onPress={openProduct} >
          <LeftCard>
            <Image source={{uri: item.image}} />
          </LeftCard>
          <RightCard>
             <CardTitle>
               {item.title}
             </CardTitle>
          {/* Ratings */}
          {/* <View>
            {[0, 0, 0, 0, 0].map((el, i) => (
              <AntDesign
                key={`${item.id}-${i}`}
                size={18}
                color={'#e47911'}
              />
            ))}
          </View> */}
            <CardPrice >${item.price.toFixed(2)}
              {item.oldPrice && (
                <CardOldPrice > ${item.oldPrice.toFixed(2)}</CardOldPrice>
              )}
            </CardPrice>
          </RightCard>
        </Pressable>
      </Container>
    )
}

export default Product;



