import { Request, Response } from "express";
import { CreateCompanyUseCase } from "./CreateCompanyUseCase";

export class CreateCompanyController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const createCompanyUseCase = new CreateCompanyUseCase();
    const result = await createCompanyUseCase.execute({
      name,
    });

    return response.json(result);
  }
}
