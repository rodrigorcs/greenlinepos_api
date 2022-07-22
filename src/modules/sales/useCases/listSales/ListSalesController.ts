import { Request, Response } from "express";
import { ListSalesUseCase } from "./ListSalesUseCase";

export class ListSalesController {
  async handle(request: Request, response: Response) {
    const listSalesUseCase = new ListSalesUseCase();
    const result = await listSalesUseCase.execute();

    return response.json(result);
  }
}
