import { prisma } from "../../../../database/prismaClient";

interface IDeleteCompany {
  id: string;
}

export class DeleteCompanyUseCase {
  async execute({ id }: IDeleteCompany) {
    const companyAlreadyExists = await prisma.companies.findUnique({
      where: {
        id,
      },
    });

    if (!companyAlreadyExists) throw new Error("companyDoesNotExists");

    const company = await prisma.companies.delete({
      where: {
        id,
      },
    });

    const res = {
      message: "The company has been deleted",
      company,
    };

    return res;
  }
}
