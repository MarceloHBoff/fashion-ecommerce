import React, { useMemo } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';

import { IApplicationState } from '../../store';
import {
  removeFromCart,
  increment,
  decrement,
} from '../../store/modules/cart/actions';
import Sidebar from '../Sidebar';

import {
  Button,
  BagContainer,
  BagItens,
  BagNone,
  BagTotal,
  BagProduct,
  BagProductAsideImage,
  BagProductAsideInfo,
  BagProductAsideQuantity,
  BagProductPriceWrapper,
} from './styles';

const Bag: React.FC = () => {
  const dispatch = useDispatch();

  const open = useSelector<IApplicationState>(
    state => state.sidebar.data.openBag,
  );

  const cartProducts = useSelector(
    (state: IApplicationState) => state.cart.data,
  );

  const totalItens = useMemo(() => {
    return cartProducts.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      0,
    );
  }, [cartProducts]);

  const totalValue = useMemo(() => {
    return cartProducts.reduce(
      (accumulator, currentValue) =>
        accumulator +
        currentValue.quantity *
          Number(
            currentValue.actual_price.replace('R$ ', '').replace(',', '.'),
          ),
      0,
    );
  }, [cartProducts]);

  return (
    <>
      {open && (
        <Sidebar title={`Sacola (${totalItens})`}>
          <BagContainer>
            <BagItens>
              {cartProducts.length === 0 ? (
                <BagNone>Sua sacola está vazia :/</BagNone>
              ) : (
                <>
                  {cartProducts.map((product, i) => (
                    <BagProduct key={i}>
                      <BagProductAsideImage>
                        <img src={product.image} alt={product.name} />
                        <Button
                          onClick={() =>
                            dispatch(removeFromCart(product.name, product.size))
                          }
                        >
                          Remover item
                        </Button>
                      </BagProductAsideImage>

                      <BagProductAsideInfo>
                        <strong>{product.name}</strong>
                        <span>Tam.: {product.size}</span>

                        <BagProductAsideQuantity>
                          <Button
                            onClick={() =>
                              dispatch(decrement(product.name, product.size))
                            }
                          >
                            <FiMinus size={20} color="#000" />
                          </Button>
                          <strong>{product.quantity}</strong>
                          <Button
                            onClick={() =>
                              dispatch(increment(product.name, product.size))
                            }
                          >
                            <FiPlus size={20} color="#000" />
                          </Button>
                        </BagProductAsideQuantity>
                      </BagProductAsideInfo>

                      <BagProductPriceWrapper>
                        <strong>{product.actual_price}</strong>
                        <span>{product.installments}</span>
                      </BagProductPriceWrapper>
                    </BagProduct>
                  ))}
                </>
              )}
            </BagItens>
            <BagTotal>
              Subtotal -{' '}
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(totalValue)}
            </BagTotal>
          </BagContainer>
        </Sidebar>
      )}
    </>
  );
};

export default Bag;
