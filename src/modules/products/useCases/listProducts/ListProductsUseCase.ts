import { prisma } from "../../../../database/prismaClient";

export class ListProductsUseCase {
  async execute() {
    const products = await prisma.products.findMany();

    console.log(products);

    return products;
  }
}
