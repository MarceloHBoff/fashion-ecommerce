import React, { useState, useEffect } from 'react';

import { IProduct } from '../../store/modules/product/types';
import Card from '../Card';
import Shimmer from '../Shimmer';

import { ProductCards } from './styles';

const ProductsList: React.FC = () => {
  const shimmerArray = [1, 2, 3, 4, 5, 6, 7, 8];

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
        .then(response => response.json())
        .then(response => setProducts(response));
    }, 1);
  }, []);

  return (
    <ProductCards>
      {products.length === 0
        ? shimmerArray.map((_, i) => <Shimmer key={i} />)
        : products.map((product, i) => <Card key={i} product={product} />)}
    </ProductCards>
  );
};

export default ProductsList;
