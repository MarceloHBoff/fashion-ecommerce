import React from 'react';

import {
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
} from './styles';

interface Product {
  name: string;
  image: string;
  regular_price: string;
}

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <ProductContainer>
      <ProductImage src={product.image} />
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{product.regular_price}</ProductPrice>
    </ProductContainer>
  );
};

export default Card;
