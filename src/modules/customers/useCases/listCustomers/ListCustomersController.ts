import { Request, Response } from "express";
import { ListCustomersUseCase } from "./ListCustomersUseCase";

export class ListCustomersController {
  async handle(request: Request, response: Response) {
    const listCustomersUseCase = new ListCustomersUseCase();
    const result = await listCustomersUseCase.execute();

    return response.json(result);
  }
}
