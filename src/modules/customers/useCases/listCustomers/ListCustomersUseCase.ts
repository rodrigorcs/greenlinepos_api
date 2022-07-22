import { prisma } from "../../../../database/prismaClient";

export class ListCustomersUseCase {
  async execute() {
    const customers = await prisma.customers.findMany();

    return customers;
  }
}
