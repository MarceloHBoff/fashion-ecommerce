import styled from 'styled-components';

export const BagContainer = styled.div`
  height: 100%;
  padding: 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const BagItens = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const BagNone = styled.div`
  font-size: 2rem;
  color: #bbb;
`;

export const BagTotal = styled.div`
  width: 100%;
  height: 80px;
  padding: 15px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  background: #111;
  font-size: 1.5rem;
`;
