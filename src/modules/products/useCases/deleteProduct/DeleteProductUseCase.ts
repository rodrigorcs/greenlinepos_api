import { prisma } from "../../../../database/prismaClient";

interface IDeleteProduct {
  id: string;
}

export class DeleteProductUseCase {
  async execute({ id }: IDeleteProduct) {
    const productAlreadyExists = await prisma.products.findUnique({
      where: {
        id,
      },
    });

    if (!productAlreadyExists) throw new Error("productDoesNotExists");

    const product = await prisma.products.delete({
      where: {
        id,
      },
    });

    const res = {
      message: "The product has been deleted",
      product,
    };

    return res;
  }
}
