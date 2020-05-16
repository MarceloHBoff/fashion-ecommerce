import React from 'react';

import ProductsList from '../../components/ProductsList';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ProductsList />
    </Container>
  );
};

export default Dashboard;
