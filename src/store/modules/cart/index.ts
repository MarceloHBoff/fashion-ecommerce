import { Reducer } from 'redux';

import { CartTypes, ICartState } from './types';

const INITIAL_STATE: ICartState = {
  data: [],
};

const reducer: Reducer<ICartState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case CartTypes.ADD_TO_CART:
      const findProduct = state.data.find(
        product =>
          product.name === payload.product.name &&
          product.size === payload.size,
      );

      if (findProduct) {
        return {
          data: state.data.map(product =>
            product.name === findProduct.name &&
            product.size === findProduct.size
              ? { ...findProduct, quantity: findProduct.quantity + 1 }
              : product,
          ),
        };
      }

      return {
        data: [
          ...state.data,
          { ...payload.product, size: payload.size, quantity: 1 },
        ],
      };
    case CartTypes.REMOVE_FROM_CART:
      return {
        data: state.data.filter(
          product =>
            product.name !== payload.name || product.size !== payload.size,
        ),
      };
    case CartTypes.INCREMENT:
      return {
        data: state.data.map(product =>
          product.name === payload.name && product.size === payload.size
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        ),
      };
    case CartTypes.DECREMENT:
      const findProductDecrement = state.data.find(
        product =>
          product.name === payload.name && product.size === payload.size,
      );

      if (findProductDecrement && findProductDecrement.quantity === 1) {
        return {
          data: state.data.filter(
            product =>
              product.name !== payload.name || product.size !== payload.size,
          ),
        };
      }

      return {
        data: state.data.map(product =>
          product.name === payload.name && product.size === payload.size
            ? { ...product, quantity: product.quantity - 1 }
            : product,
        ),
      };
    default:
      return state;
  }
};

export default reducer;
