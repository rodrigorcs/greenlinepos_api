import { prisma } from "../../../../database/prismaClient";

export class ListCompaniesUseCase {
  async execute() {
    const companies = await prisma.companies.findMany();

    return companies;
  }
}
