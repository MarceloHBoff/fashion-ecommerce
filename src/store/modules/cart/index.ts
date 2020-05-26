import { Reducer } from 'redux';

import { CartTypes, ICartState } from './types';

const INITIAL_STATE: ICartState = {
  data: [],
};

const reducer: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.ADD_TO_CART:
      const newState = state.data;
      const newProduct = action.payload.product;

      const findProductIndex = state.data.findIndex(
        product => product.name === newProduct.name,
      );

      if (findProductIndex >= 0) {
        newProduct.quantity = newState[findProductIndex].quantity + 1;
      } else {
        newProduct.quantity = 1;
        newState.push(newProduct);
      }

      return {
        data: newState,
      };
    default:
      return state;
  }
};

export default reducer;
