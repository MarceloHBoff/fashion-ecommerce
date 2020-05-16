import React from 'react';

import { Container, ImageShimmer, TextShimmer, PriceShimmer } from './styles';

const Shimmer: React.FC = () => {
  return (
    <Container>
      <ImageShimmer />
      <TextShimmer />
      <PriceShimmer />
    </Container>
  );
};

export default Shimmer;
