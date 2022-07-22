import { Request, Response } from "express";
import { UpdateCompanyUseCase } from "./UpdateCompanyUseCase";

export class UpdateCompanyController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name } = request.body;

    const updateCompanyUseCase = new UpdateCompanyUseCase();
    const result = await updateCompanyUseCase.execute({ id, name });

    return response.json(result);
  }
}
