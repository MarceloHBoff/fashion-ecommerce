import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setProduct } from '../../store/modules/product/action';
import { IProduct } from '../../store/modules/product/types';

import {
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
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
      <ProductPrice>{product.regular_price}</ProductPrice>
    </ProductContainer>
  );
};

export default Card;
