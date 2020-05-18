import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ISizeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: string;
  selected: boolean;
}

const SizeButton: React.FC<ISizeButtonProps> = ({
  size,
  selected,
  ...rest
}) => {
  return (
    <Container type="button" selected={selected} {...rest}>
      <span>{size}</span>
    </Container>
  );
};

export default SizeButton;
