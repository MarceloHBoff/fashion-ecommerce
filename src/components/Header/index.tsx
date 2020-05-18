import React from 'react';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

import { openBag, openSearch } from '../../store/modules/sidebar/actions';

import {
  Container,
  HeaderContainer,
  HeaderLogo,
  HeaderIcons,
  HeaderIconsShoppingBag,
  Badge,
} from './styles';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <HeaderContainer>
        <HeaderLogo to="/">AMARO</HeaderLogo>
        <HeaderIcons>
          <button type="button" onClick={() => dispatch(openSearch(true))}>
            <FiSearch color="#fff" size={25} />
          </button>
          <HeaderIconsShoppingBag onClick={() => dispatch(openBag(true))}>
            <FiShoppingBag color="#fff" size={25} />
            <Badge>10</Badge>
          </HeaderIconsShoppingBag>
        </HeaderIcons>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
