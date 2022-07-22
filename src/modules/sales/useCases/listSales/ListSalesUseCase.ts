import { prisma } from "../../../../database/prismaClient";

export class ListSalesUseCase {
  async execute() {
    const sales = await prisma.sales.findMany();

    return sales;
  }
}
