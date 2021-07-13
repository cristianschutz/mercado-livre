import { IProductItems, IProductItem } from '@mercado-livre/shared-types';

export interface IProductProvider {
  getItems(): Promise<IProductItems>;
  searchItems(q: string): Promise<IProductItems>;
  getItem(id: string): Promise<IProductItem>;
}
