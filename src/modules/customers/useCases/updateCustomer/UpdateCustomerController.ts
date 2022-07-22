import { Request, Response } from "express";
import { UpdateCustomerUseCase } from "./UpdateCustomerUseCase";

export class UpdateCustomerController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, id_company } = request.body;

    const updateCustomerUseCase = new UpdateCustomerUseCase();
    const result = await updateCustomerUseCase.execute({
      id,
      name,
      id_company,
    });

    return response.json(result);
  }
}
