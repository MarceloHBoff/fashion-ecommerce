import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { IApplicationState } from '../../store';
import { IProduct } from '../../store/modules/product/types';

import SizeButton from './SizeButton';
import {
  Container,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPriceWrapper,
  ProductPrice,
  ProductInstallments,
  ProductSelectSize,
  ProductInvalidSize,
  ProductSize,
  ProductAddBag,
} from './styles';

const Product: React.FC = () => {
  const product = useSelector<IApplicationState>(
    state => state.product.data,
  ) as IProduct;

  const [size, setSize] = useState('');
  const [invalidSize, setInvalidSize] = useState(false);

  if (!product.sizes) return null;

  function handleAddToBag() {
    if (!size) {
      setInvalidSize(true);
    }
  }

  return (
    <Container>
      <ProductImage src={product.image} alt={product.name} />
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPriceWrapper>
          <ProductPrice>{product.regular_price}</ProductPrice>
          <ProductInstallments>
            em até {product.installments}
          </ProductInstallments>
        </ProductPriceWrapper>
        <ProductSelectSize>Escolha o tamanho</ProductSelectSize>
        {invalidSize && (
          <ProductInvalidSize>
            É necessário escolher um tamanho
          </ProductInvalidSize>
        )}
        <ProductSize>
          {product.sizes.map(
            s =>
              s.available && (
                <SizeButton
                  size={s.size}
                  onClick={() => setSize(s.size)}
                  selected={size === s.size}
                />
              ),
          )}
        </ProductSize>
        <ProductAddBag onClick={handleAddToBag}>
          Adicionar à Sacola
        </ProductAddBag>
      </ProductInfo>
    </Container>
  );
};

export default Product;
