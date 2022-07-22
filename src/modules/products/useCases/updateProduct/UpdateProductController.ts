import { Request, Response } from "express";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

export class UpdateProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, bar_code, price } = request.body;

    const updateProductUseCase = new UpdateProductUseCase();
    const result = await updateProductUseCase.execute({
      id,
      name,
      bar_code,
      price,
    });

    return response.json(result);
  }
}
