import { action } from 'typesafe-actions';

import { ProductTypes, IProduct } from './types';

export const setProduct = (data: IProduct) =>
  action(ProductTypes.SET_PRODUCT, { data });
