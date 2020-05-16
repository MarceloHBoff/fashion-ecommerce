import React from 'react';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';

import {
  Container,
  HeaderContainer,
  HeaderLogo,
  HeaderIcons,
  HeaderIconsShoppingBag,
  Badge,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderLogo to="/">AMARO</HeaderLogo>
        <HeaderIcons>
          <FiSearch color="#fff" size={25} />
          <HeaderIconsShoppingBag>
            <FiShoppingBag color="#fff" size={25} />
            <Badge>10</Badge>
          </HeaderIconsShoppingBag>
        </HeaderIcons>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
