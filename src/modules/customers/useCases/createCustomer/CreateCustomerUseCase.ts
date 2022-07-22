import { prisma } from "../../../../database/prismaClient";

interface ICreateCustomer {
  name: string;
  id_company: string;
}

export class CreateCustomerUseCase {
  async execute({ name, id_company }: ICreateCustomer) {
    const customer = await prisma.customers.create({
      data: {
        name,
        id_company,
      },
    });

    return customer;
  }
}
