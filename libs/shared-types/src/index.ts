export * from './lib/shared-types';

export interface IProduct {
  id: string,
  title: string,
  price: {
    currency: string,
    amount: number,
    decimals: number
  },
  picture: string,
  condition: string,
  free_shipping: boolean
}

export interface IProductDescription {
  sold_quantity: number,
  description: string,
}

export interface IProductAuthor {
  name: string,
  lastname: string,
}

export interface IProductItems {
  author: IProductAuthor,
  categories: string[],
  items: IProduct[]
}

export interface IProductItem {
  author: IProductAuthor,
  item: IProduct & IProductDescription,
}
