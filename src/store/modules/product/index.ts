import { Reducer } from 'redux';

import { IProductState, ProductTypes, IProduct } from './types';

const INITIAL_STATE: IProductState = {
  data: {} as IProduct,
};

const reducer: Reducer<IProductState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductTypes.SET_PRODUCT:
      return {
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default reducer;
