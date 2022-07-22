import { Request, Response } from "express";
import { DeleteCompanyUseCase } from "./DeleteCompanyUseCase";

export class DeleteCompanyController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteCompanyUseCase = new DeleteCompanyUseCase();
    const result = await deleteCompanyUseCase.execute({
      id,
    });

    return response.json(result);
  }
}
