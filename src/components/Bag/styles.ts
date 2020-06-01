import styled from 'styled-components';

export const BagContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const BagItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const BagNone = styled.div`
  margin: auto;
  font-size: 2rem;
  color: #333;
`;

export const BagTotal = styled.div`
  width: 100%;
  height: 100px;
  padding: 15px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  background: #111;
  color: #fff;
  font-size: 1.5rem;
`;

export const BagProduct = styled.div`
  background: #eee;
  height: 150px;
  padding: 10px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const BagProductAsideImage = styled.div`
  width: 25%;

  img {
    width: 90%;
  }

  button {
    margin-top: 5px;
    color: red;
  }
`;

export const BagProductAsideInfo = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;

  strong {
    color: #000;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  span {
    color: #a7a7a7;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;

export const BagProductAsideQuantity = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  strong {
    color: #000;
    margin: 0 10px;
  }

  svg {
    padding: 2px;
    border: 1px solid #000;
  }
`;

export const BagProductPriceWrapper = styled.div`
  width: 25%;

  color: #000;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  strong {
    color: #000;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  span {
    color: #a7a7a7;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;

export const Button = styled.button.attrs({
  type: 'button',
})``;
