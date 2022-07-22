import { prisma } from "../../../../database/prismaClient";

interface IDeleteSale {
  id: string;
}

export class DeleteSaleUseCase {
  async execute({ id }: IDeleteSale) {
    const saleAlreadyExists = await prisma.sales.findUnique({
      where: {
        id,
      },
    });

    if (!saleAlreadyExists) throw new Error("saleDoesNotExists");

    const sale = await prisma.sales.delete({
      where: {
        id,
      },
    });

    const res = {
      message: "The sale has been deleted",
      sale,
    };

    return res;
  }
}
