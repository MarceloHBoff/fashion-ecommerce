import { action } from 'typesafe-actions';

import { IProduct } from '../product/types';

import { CartTypes } from './types';

export const addToCart = (product: IProduct, size: string) =>
  action(CartTypes.ADD_TO_CART, { product, size });

export const removeFromCart = (name: string, size: string) =>
  action(CartTypes.REMOVE_FROM_CART, { name, size });

export const increment = (name: string, size: string) =>
  action(CartTypes.INCREMENT, { name, size });

export const decrement = (name: string, size: string) =>
  action(CartTypes.DECREMENT, { name, size });
