import React, { useState } from 'react';

import { Product as A } from '../ProductsList';

import SizeButton from './SizeButton';
import {
  Container,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductSize,
  ProductAddBag,
} from './styles';

interface ProductProps {
  product: A;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const [size, setSize] = useState('');

  return (
    <Container>
      <ProductImage src={product.image} alt={product.name} />
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.regular_price}</ProductPrice>
        <ProductSize>
          <SizeButton
            size="P"
            onClick={() => setSize('P')}
            selected={size === 'P'}
          />
          <SizeButton
            size="G"
            onClick={() => setSize('G')}
            selected={size === 'G'}
          />
          <SizeButton
            size="GG"
            onClick={() => setSize('GG')}
            selected={size === 'GG'}
          />
        </ProductSize>
        <ProductAddBag>Adicionar à Sacola</ProductAddBag>
      </ProductInfo>
    </Container>
  );
};

export default Product;
