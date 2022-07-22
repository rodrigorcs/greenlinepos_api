import { prisma } from "../../../../database/prismaClient";

interface IListCompanies {
  showCustomers: boolean;
}

export class ListCompaniesUseCase {
  async execute({ showCustomers }: IListCompanies) {
    const companies = await prisma.companies.findMany({
      include: {
        customers: showCustomers,
      },
    });

    return companies;
  }
}
