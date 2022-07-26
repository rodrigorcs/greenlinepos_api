import { prisma } from "../../../../database/prismaClient";
interface ICreateProduct {
  name: string;
  bar_code: string;
  price: number;
}

export class CreateProductUseCase {
  async execute({ name, bar_code, price }: ICreateProduct) {
    const customer = await prisma.products.create({
      data: {
        name,
        bar_code,
        price,
      },
    });

    return customer;
  }
}
