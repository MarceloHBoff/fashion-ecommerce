import styled, { css } from 'styled-components';

interface ContainerProps {
  selected: boolean;
}

export const Container = styled.button<ContainerProps>`
  margin-right: 15px;
  border-radius: 4px;
  border: 2px solid #ccc;
  padding: 10px 15px;

  transition: all 0.2s;

  ${props =>
    props.selected &&
    css`
      border-color: #da2f6c;
      background: #da2f6c;
    `}

  :hover {
    border-color: #da2f6c;
  }

  span {
    color: #fff;
    font-size: 1.5rem;
  }
`;
