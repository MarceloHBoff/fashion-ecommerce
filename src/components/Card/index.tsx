import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setProduct } from '../../store/modules/product/action';
import { IProduct } from '../../store/modules/product/types';

import {
  ProductContainer,
  ProductImage,
  ProductName,
  ProductValue,
  ProductSale,
  ProductPrice,
  ProductDiscount,
} from './styles';

interface ICardProps {
  product: IProduct;
}

const Card: React.FC<ICardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  function handleClick() {
    dispatch(setProduct(product));
    history.push('/product');
  }

  return (
    <ProductContainer onClick={handleClick}>
      <ProductImage src={product.image} />
      <ProductName>{product.name}</ProductName>
      <ProductValue>
        {product.on_sale && <ProductSale>{product.regular_price}</ProductSale>}
        <ProductPrice>{product.actual_price}</ProductPrice>
      </ProductValue>
      {product.discount_percentage && (
        <ProductDiscount>-{product.discount_percentage}</ProductDiscount>
      )}
    </ProductContainer>
  );
};

export default Card;
