import React, { useMemo } from 'react';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import { IApplicationState } from '../../store';
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
  const cartProducts = useSelector(
    (state: IApplicationState) => state.cart.data,
  );

  const dispatch = useDispatch();

  const totalItens = useMemo(() => {
    return cartProducts.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      0,
    );
  }, [cartProducts]);

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
            <Badge>{totalItens}</Badge>
          </HeaderIconsShoppingBag>
        </HeaderIcons>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
