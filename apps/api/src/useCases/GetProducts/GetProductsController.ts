import { Request, Response } from "express";
import { GetProductsUseCase } from "./GetProductsUseCase";

export class GetProductsController {
  constructor(
    private getProductsUseCase: GetProductsUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { q } = request.query;

      const data = await this.getProductsUseCase.execute({id, q});
      return response.status(201).send(data);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
