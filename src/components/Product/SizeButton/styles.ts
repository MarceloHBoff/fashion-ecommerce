import styled, { css } from 'styled-components';

interface IContainerProps {
  selected: boolean;
}

export const Container = styled.button<IContainerProps>`
  margin-right: 15px;
  border-radius: 4px;
  border: 2px solid #ccc;
  padding: 10px 15px;

  transition: all 0.2s;

  :hover {
    border-color: #da2f6c;
  }

  span {
    color: #000;
    font-size: 1.5rem;
  }

  ${props =>
    props.selected &&
    css`
      border-color: #da2f6c;
      background: #da2f6c;

      span {
        color: #fff;
      }
    `}
`;
