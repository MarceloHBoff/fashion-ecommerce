import { combineReducers } from 'redux';

import cart from './cart';
import product from './product';
import sidebar from './sidebar';

export default combineReducers({
  product,
  sidebar,
  cart,
});
