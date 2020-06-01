import { IProduct } from '../product/types';
/**
 * Action types
 */
export enum CartTypes {
  ADD_TO_CART = '@cart/ADD_TO_CART',
  REMOVE_FROM_CART = '@cart/REMOVE_FROM_CART',
  INCREMENT = '@cart/INCREMENT',
  DECREMENT = '@cart/DECREMENT',
}

export interface ICart extends IProduct {
  quantity: number;
  size: string;
}

/**
 * State type
 */
export interface ICartState {
  readonly data: ICart[];
}
