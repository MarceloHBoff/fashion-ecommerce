import { createStore, applyMiddleware, Store } from 'redux';
// import createSagaMiddleware from 'redux-saga';

import { IProductState } from './modules/product/types';
import rootReducer from './modules/rootReducer';
import { ISidebarState } from './modules/sidebar/types';
// import rootSaga from './ducks/rootSaga';

export interface IApplicationState {
  sidebar: ISidebarState;
  product: IProductState;
}

// const sagaMiddleware = createSagaMiddleware();

const store: Store<IApplicationState> = createStore(
  rootReducer,
  // applyMiddleware(sagaMiddleware),
);

// sagaMiddleware.run(rootSaga);

export default store;
