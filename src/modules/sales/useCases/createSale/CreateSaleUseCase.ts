import { prisma } from "../../../../database/prismaClient";

interface ICreateSale {
  id_customer: string;
  productsIds: string[];
}

export class CreateSaleUseCase {
  async execute({ id_customer, productsIds }: ICreateSale) {
    // const productsInSale = productsIds.map((productId) => {
    //   return { id: productId };
    // });

    const sale = await prisma.sales.create({
      data: {
        id_customer,
      },
    });

    return sale;
  }
}
