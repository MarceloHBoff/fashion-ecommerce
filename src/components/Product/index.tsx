import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IApplicationState } from '../../store';
import { addToCart } from '../../store/modules/cart/actions';
import { IProduct } from '../../store/modules/product/types';

import SizeButton from './SizeButton';
import {
  Container,
  ProductImageWrapper,
  ProductImage,
  ProductDiscount,
  ProductInfo,
  ProductName,
  ProductPriceWrapper,
  ProductSale,
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

  const dispatch = useDispatch();

  const [size, setSize] = useState('');
  const [invalidSize, setInvalidSize] = useState(false);

  if (!product.sizes) return null;

  function handleAddToBag() {
    if (!size) {
      setInvalidSize(true);
      return;
    }

    dispatch(addToCart(product, size));
  }

  return (
    <Container>
      <ProductImageWrapper>
        <ProductImage src={product.image} alt={product.name} />
        {product.discount_percentage && (
          <ProductDiscount>-{product.discount_percentage}</ProductDiscount>
        )}
      </ProductImageWrapper>
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPriceWrapper>
          {product.on_sale && (
            <ProductSale>{product.regular_price}</ProductSale>
          )}
          <ProductPrice>{product.actual_price}</ProductPrice>
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
                  key={s.size}
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
