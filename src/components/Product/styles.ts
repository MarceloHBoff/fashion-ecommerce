import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: baseline;
  align-items: flex-start;
`;

export const ProductImage = styled.img`
  width: 50%;
`;

export const ProductInfo = styled.div`
  width: 50%;
  padding: 0px 20px;

  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.h3`
  font-weight: bold;
  font-size: 2rem;
  margin: 1rem 0;
`;

export const ProductPrice = styled.span`
  font-size: 1.6rem;
  margin-bottom: 2rem;
`;

export const ProductSize = styled.div`
  margin-bottom: 1rem;
`;

export const ProductAddBag = styled.button`
  width: 50%;
  color: #fff;
  background: #da2f6c;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 4px;
  padding: 10px 0;

  transition: all 0.2s;

  box-shadow: 0px 5px 10px 10px rgba(0, 0, 0, 0.2);

  :active {
    transform: scale(0.95);
  }
`;
