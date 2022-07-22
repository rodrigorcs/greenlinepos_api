import { prisma } from "../../../../database/prismaClient";

interface IUpdateCompany {
  id: string;
  name: string;
}

export class UpdateCompanyUseCase {
  async execute({ id, name }: IUpdateCompany) {
    const companyAlreadyExists = await prisma.companies.findFirst({
      where: {
        id,
      },
    });

    if (!companyAlreadyExists) throw new Error("companyDoesNotExists");

    const company = await prisma.companies.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });

    return company;
  }
}
