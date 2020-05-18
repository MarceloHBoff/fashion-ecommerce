/**
 * Action types
 */
export enum ProductTypes {
  SET_PRODUCT = '@product/SET_PRODUCT',
}

/**
 * Data types
 */
interface ISize {
  available: boolean;
  size: string;
  sku: string;
}

export interface IProduct {
  name: string;
  style: string;
  code_color: string;
  color_slug: string;
  color: string;
  on_sale: boolean;
  regular_price: string;
  actual_price: string;
  discount_percentage: string;
  installments: string;
  image: string;
  sizes: ISize[];
}

/**
 * State type
 */
export interface IProductState {
  readonly data: IProduct;
}
