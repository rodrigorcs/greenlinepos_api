import { prisma } from "../../../../database/prismaClient";

interface ICreateCompany {
  name: string;
}

export class CreateCompanyUseCase {
  async execute({ name }: ICreateCompany) {
    const companyAlreadyExists = await prisma.companies.findFirst({
      where: {
        name: {
          equals: name,
          mode: "insensitive",
        },
      },
    });

    if (companyAlreadyExists) throw new Error("companyAlreadyExists");

    const company = await prisma.companies.create({
      data: {
        name,
      },
    });

    return company;
  }
}
