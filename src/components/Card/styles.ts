import styled from 'styled-components';

export const ProductContainer = styled.button`
  background: #fff;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s;

  :hover {
    transform: translateY(-5px) scale(1.01);
  }
`;

export const ProductImage = styled.img`
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
`;

export const ProductName = styled.span`
  color: #000;
  font-size: 1.4rem;
  font-weight: bold;
  margin: 1rem 0;
`;

export const ProductPrice = styled.div`
  color: #000;
  font-size: 1.4rem;
  margin-bottom: 5px;
`;
