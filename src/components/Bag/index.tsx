import React from 'react';
import { useSelector } from 'react-redux';

import { IApplicationState } from '../../store';
import Sidebar from '../Sidebar';

import { BagContainer, BagItens, BagNone, BagTotal } from './styles';

const Bag: React.FC = () => {
  const open = useSelector<IApplicationState>(
    state => state.sidebar.data.openBag,
  );

  return (
    <>
      {open && (
        <Sidebar title="Sacola (0)">
          <BagContainer>
            <BagItens>
              <BagNone>Sua sacola está vazia :/</BagNone>
            </BagItens>
            <BagTotal>Subtotal - R$ 0,00</BagTotal>
          </BagContainer>
        </Sidebar>
      )}
    </>
  );
};

export default Bag;
