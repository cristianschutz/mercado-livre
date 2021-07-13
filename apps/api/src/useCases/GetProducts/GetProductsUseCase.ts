import { IProductProvider } from "../../providers/IProductProvider";

interface IExecute {
  id?:string;
  q?: any;
}

export class GetProductsUseCase {
  constructor(
    private productProvider: IProductProvider
  ){}

  async execute({id, q}: IExecute){
    if(id){
      return await this.productProvider.getItem(id);
    }

    if(q){
      return await this.productProvider.searchItems(q);
    }

    return await this.productProvider.getItems();
  }
}
