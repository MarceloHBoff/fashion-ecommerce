import React, { useEffect, useState } from 'react';

import data from '../../assets/data.json';
import Product from '../../components/Product';
import { Product as A } from '../../components/ProductsList';

import { Container } from './styles';

const Detail: React.FC = () => {
  const [a, setA] = useState<A>();

  useEffect(() => {
    setA(data.products[0]);
  }, []);

  return <Container>{a && <Product product={a} />}</Container>;
};

export default Detail;
