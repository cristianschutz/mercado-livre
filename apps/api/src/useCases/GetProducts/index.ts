import { ProductProvider } from "../../providers/implementations/ProductProvider";
import { GetProductsUseCase } from "./GetProductsUseCase";
import { GetProductsController } from "./GetProductsController";

const productProvider = new ProductProvider()

const getProductsUseCase = new GetProductsUseCase(
  productProvider,
)

const getProductsController = new GetProductsController(
  getProductsUseCase
)

export { getProductsUseCase, getProductsController }
