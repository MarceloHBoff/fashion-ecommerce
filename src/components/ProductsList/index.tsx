import React, { useState, useEffect } from 'react';

import data from '../../assets/data.json';
import Card from '../Card';
import Shimmer from '../Shimmer';

import { ProductCards } from './styles';

export interface Product {
  name: string;
  style: string;
  code_color: string;
  color_slug: string;
  color: string;
  on_sale: boolean;
  regular_price: string;
  actual_price: string;
  discount_percentage: string;
  installments: string;
  image: string;
}

const ProductsList: React.FC = () => {
  const shimmerArray = [1, 2, 3, 4, 5, 6, 7, 8];

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(data.products);

      // fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
      //   .then(response => response.json())
      //   .then(response => setProducts(response));
    }, 2000);
  }, []);

  return (
    <ProductCards>
      {products.length === 0
        ? shimmerArray.map(() => <Shimmer />)
        : products.map(product => <Card product={product} />)}
    </ProductCards>
  );
};

export default ProductsList;
