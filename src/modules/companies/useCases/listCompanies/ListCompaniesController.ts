import { Request, Response } from "express";
import { ListCompaniesUseCase } from "./ListCompaniesUseCase";

export class ListCompaniesController {
  async handle(request: Request, response: Response) {
    const showCustomers = request.query.showCustomers === "true";
    const listCompaniesUseCase = new ListCompaniesUseCase();
    const result = await listCompaniesUseCase.execute({
      showCustomers,
    });

    return response.json(result);
  }
}
