import { prisma } from "../../../../database/prismaClient";

export class ListProductsUseCase {
  async execute() {
    const products = await prisma.products.findMany();

    return products;
  }
}
