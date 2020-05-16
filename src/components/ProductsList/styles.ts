import styled from 'styled-components';

export const ProductContainer = styled.section``;

export const ProductCards = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  grid-gap: 15px;
`;
