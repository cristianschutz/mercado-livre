import { Router } from "express";
import { getProductsController } from "./useCases/GetProducts";

const router = Router();

router.get('/items', (request, response) => {
  return getProductsController.handle(request, response);
});

router.get('/items/:id', (request, response) => {
  return getProductsController.handle(request, response);
});

export { router };
