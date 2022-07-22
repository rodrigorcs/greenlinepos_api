import { Request, Response } from "express";
import { UpdateSaleUseCase } from "./UpdateSaleUseCase";

export class UpdateSaleController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { id_customer } = request.body;

    const updateSaleUseCase = new UpdateSaleUseCase();
    const result = await updateSaleUseCase.execute({
      id,
      id_customer,
    });

    return response.json(result);
  }
}
