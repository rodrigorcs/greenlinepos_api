import { Request, Response } from "express";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

export class CreateCustomerController {
  async handle(request: Request, response: Response) {
    const { name, id_company } = request.body;

    const createCustomerUseCase = new CreateCustomerUseCase();
    const result = await createCustomerUseCase.execute({
      name,
      id_company,
    });

    return response.json(result);
  }
}
