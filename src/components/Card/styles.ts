import styled from 'styled-components';

export const ProductContainer = styled.button`
  background: #fff;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s;

  position: relative;

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

export const ProductValue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const ProductSale = styled.span`
  color: #666;
  font-size: 1.2rem;
  text-decoration: line-through;
  margin-right: 8px;
`;

export const ProductPrice = styled.span`
  font-size: 1.4rem;
  color: #000;
`;

export const ProductDiscount = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background: #da2f6c;
  color: #fff;
  font-size: 16px;
  border-radius: 4px;
  padding: 2px 5px;
`;
