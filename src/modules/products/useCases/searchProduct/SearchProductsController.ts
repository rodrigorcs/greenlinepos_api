import { Request, Response } from "express";
import { SearchProductsUseCase } from "./SearchProductsUseCase";

interface IQueryParams {
  name: string;
  bar_code: string;
}

export class SearchProductsController {
  async handle(request: Request<{}, {}, {}, IQueryParams>, response: Response) {
    const { name, bar_code } = request.query;

    const searchProductsUseCase = new SearchProductsUseCase();
    const result = await searchProductsUseCase.execute({
      name,
      bar_code,
    });

    return response.json(result);
  }
}
