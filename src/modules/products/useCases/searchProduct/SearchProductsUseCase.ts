import { prisma } from "../../../../database/prismaClient";

interface ISearchProducts {
  name: string;
  bar_code: string;
}

export class SearchProductsUseCase {
  async execute({ name, bar_code }: ISearchProducts) {
    const products = await prisma.products.findMany({
      where: {
        OR: [
          {
            name: {
              contains: name,
            },
          },
          {
            bar_code: {
              equals: bar_code,
            },
          },
        ],
      },
    });

    return products;
  }
}
