import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, bar_code, price } = request.body;

    const createProductUseCase = new CreateProductUseCase();
    const result = await createProductUseCase.execute({
      name,
      bar_code,
      price,
    });

    return response.json(result);
  }
}
