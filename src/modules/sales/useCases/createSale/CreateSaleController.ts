import { Request, Response } from "express";
import { CreateSaleUseCase } from "./CreateSaleUseCase";

export class CreateSaleController {
  async handle(request: Request, response: Response) {
    const { id_customer, productsIds } = request.body;

    const createSaleUseCase = new CreateSaleUseCase();
    const result = await createSaleUseCase.execute({
      id_customer,
      productsIds,
    });

    return response.json(result);
  }
}
