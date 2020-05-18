import { combineReducers } from 'redux';

import product from './product';
import sidebar from './sidebar';

export default combineReducers({
  product,
  sidebar,
});
