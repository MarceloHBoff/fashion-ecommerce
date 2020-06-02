import { RootStateOrAny } from 'react-redux';

import { createStore, Store } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { ICartState } from './modules/cart/types';
import { IProductState } from './modules/product/types';
import rootReducer from './modules/rootReducer';
import { ISidebarState } from './modules/sidebar/types';

export interface IApplicationState {
  sidebar: ISidebarState;
  product: IProductState;
  cart: ICartState;
}

const persistReducerConfigured = persistReducer<RootStateOrAny>(
  {
    key: '@fashionista',
    storage,
    blacklist: ['sidebar'],
  },
  rootReducer,
);

const store: Store<IApplicationState> = createStore(persistReducerConfigured);

const persistor = persistStore(store);

export { store, persistor };
