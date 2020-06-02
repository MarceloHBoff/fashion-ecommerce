import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

import { openBag, openSearch } from '../../store/modules/sidebar/actions';

import {
  Container,
  SidebarContainer,
  SidebarHeader,
  SidebarTitle,
} from './styles';

interface ISidebarProps {
  title?: string;
}

const Sidebar: React.FC<ISidebarProps> = ({ children, title = '' }) => {
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(openBag(false));
    dispatch(openSearch(false));
  }

  return (
    <Container>
      <SidebarContainer>
        <SidebarHeader>
          <button type="button" onClick={handleClose}>
            <FiArrowRight color="#000" size={20} />
          </button>

          <SidebarTitle>{title}</SidebarTitle>
        </SidebarHeader>
        {children}
      </SidebarContainer>
    </Container>
  );
};

export default Sidebar;
