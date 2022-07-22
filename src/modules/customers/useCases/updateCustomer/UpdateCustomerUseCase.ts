import { prisma } from "../../../../database/prismaClient";

interface IUpdateCustomer {
  id: string;
  name?: string;
  id_company?: string;
}

export class UpdateCustomerUseCase {
  async execute({ id, name, id_company }: IUpdateCustomer) {
    let newName = name;
    let newCompanyId = id_company;
    const customerOldData = await prisma.customers.findFirst({
      where: {
        id,
      },
    });

    if (!customerOldData) throw new Error("customerDoesNotExists");

    if (!newName) newName = customerOldData.name;
    if (!newCompanyId) newCompanyId = customerOldData.id_company;

    const customer = await prisma.customers.update({
      where: {
        id,
      },
      data: {
        name: newName,
        id_company: newCompanyId,
      },
    });

    return customer;
  }
}
