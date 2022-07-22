import { Decimal } from "@prisma/client/runtime";
import { prisma } from "../../../../database/prismaClient";

interface IUpdateSale {
  id: string;
  id_customer?: string;
}

export class UpdateSaleUseCase {
  async execute({ id, id_customer }: IUpdateSale) {
    let newCustomerId = id_customer;

    const saleOldData = await prisma.sales.findFirst({
      where: {
        id,
      },
    });

    if (!saleOldData) throw new Error("saleDoesNotExists");

    if (!newCustomerId) newCustomerId = saleOldData.id_customer;

    const sale = await prisma.sales.update({
      where: {
        id,
      },
      data: {
        id_customer: newCustomerId,
      },
    });

    return sale;
  }
}
