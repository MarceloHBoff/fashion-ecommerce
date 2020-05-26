import { IProduct } from '../product/types';
/**
 * Action types
 */
export enum CartTypes {
  ADD_TO_CART = '@cart/ADD_TO_CART',
}

export interface ICart extends IProduct {
  quantity: number;
}

/**
 * State type
 */
export interface ICartState {
  readonly data: ICart[];
}
