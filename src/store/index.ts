import { createStore, Store } from 'redux';

import { ICartState } from './modules/cart/types';
import { IProductState } from './modules/product/types';
import rootReducer from './modules/rootReducer';
import { ISidebarState } from './modules/sidebar/types';

export interface IApplicationState {
  sidebar: ISidebarState;
  product: IProductState;
  cart: ICartState;
}

const store: Store<IApplicationState> = createStore(rootReducer);

export default store;
