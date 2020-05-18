import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { AppCenter } from '../../styles';

export const Container = styled.header`
  background: #da2f6c;
  position: fixed;
  z-index: 99999;
  width: 100%;
  height: 55px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled(AppCenter)`
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled(Link)`
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
`;

export const HeaderIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderIconsShoppingBag = styled.button`
  margin-left: 2rem;
  position: relative;
`;

export const Badge = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  height: 22px;
  width: 22px;
  border-radius: 50%;
  background: #fff;
  color: #000;
  font-size: 1.3rem;
  line-height: 2.2rem;
  font-weight: bold;
  text-align: center;
`;
