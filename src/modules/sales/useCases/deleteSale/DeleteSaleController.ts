import { Request, Response } from "express";
import { DeleteSaleUseCase } from "./DeleteSaleUseCase";

export class DeleteSaleController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteSaleUseCase = new DeleteSaleUseCase();
    const result = await deleteSaleUseCase.execute({
      id,
    });

    return response.json(result);
  }
}
