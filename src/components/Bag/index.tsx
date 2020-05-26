import React from 'react';
import { useSelector } from 'react-redux';

import { IApplicationState } from '../../store';
import Sidebar from '../Sidebar';

import { BagContainer, BagItens, BagNone, BagTotal } from './styles';

const Bag: React.FC = () => {
  const open = useSelector<IApplicationState>(
    state => state.sidebar.data.openBag,
  );
  const cartProducts = useSelector(
    (state: IApplicationState) => state.cart.data,
  );

  return (
    <>
      {open && (
        <Sidebar
          title={`Sacola (${cartProducts.reduce(
            (accumulator, currentValue) => accumulator + currentValue.quantity,
            0,
          )})`}
        >
          <BagContainer>
            <BagItens>
              {cartProducts.length === 0 ? (
                <BagNone>Sua sacola está vazia :/</BagNone>
              ) : (
                <div>
                  {cartProducts.map(product => (
                    <div>{product.quantity}</div>
                  ))}
                </div>
              )}
            </BagItens>
            <BagTotal>Subtotal - R$ 0,00</BagTotal>
          </BagContainer>
        </Sidebar>
      )}
    </>
  );
};

export default Bag;
