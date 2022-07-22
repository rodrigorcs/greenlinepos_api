import { Request, Response } from "express";
import { DeleteCustomerUseCase } from "./DeleteCustomerUseCase";

export class DeleteCustomerController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteCustomerUseCase = new DeleteCustomerUseCase();
    const result = await deleteCustomerUseCase.execute({
      id,
    });

    return response.json(result);
  }
}
