import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;

  padding: 15px;
  color: #000;
  font-size: 1.5rem;

  border: 6px solid #ddd;
  border-radius: 4px;
  background: #eee;

  ::placeholder {
    color: #666;
  }

  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.2);
`;

export const SearchItens = styled.div`
  height: 100%;
  margin: 2rem;
`;

export const SearchNone = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 2rem;
    color: #333;
  }
`;

export const SearchedProducts = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding: 1rem 0;
  border-bottom: 1px solid #ccc;

  transition: all 0.2s;

  :hover {
    background: #bbb;
    transform: translateX(-10px);
  }
`;

export const SearchedProductsInfo = styled.div`
  width: 70%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SearchedProductsImage = styled.img`
  width: 70px;
`;

export const SearchedProductsName = styled.p`
  color: #000;
  font-size: 1.4rem;
  font-weight: bold;
  margin-left: 1rem;
`;

export const SearchedProductsPriceWrapper = styled.div`
  width: 30%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const SearchedProductsPrice = styled.p`
  color: #000;
  font-size: 1.6rem;
  font-weight: bold;
`;

export const SearchedProductsInstallments = styled.p`
  color: #666;
  font-size: 1.4rem;
`;
