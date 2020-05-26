import { action } from 'typesafe-actions';

import { IProduct } from '../product/types';

import { CartTypes } from './types';

export const addToCart = (product: IProduct) =>
  action(CartTypes.ADD_TO_CART, { product });
