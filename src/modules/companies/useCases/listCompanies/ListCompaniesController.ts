import { Request, Response } from "express";
import { ListCompaniesUseCase } from "./ListCompaniesUseCase";

export class ListCompaniesController {
  async handle(request: Request, response: Response) {
    const listCompaniesUseCase = new ListCompaniesUseCase();
    const result = await listCompaniesUseCase.execute();

    return response.json(result);
  }
}
