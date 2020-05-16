import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface SizeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: string;
  selected: boolean;
}

const SizeButton: React.FC<SizeButtonProps> = ({ size, selected, ...rest }) => {
  return (
    <Container type="button" selected={selected} {...rest}>
      <span>{size}</span>
    </Container>
  );
};

export default SizeButton;
