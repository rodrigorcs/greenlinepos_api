import { Decimal } from "@prisma/client/runtime";
import { prisma } from "../../../../database/prismaClient";

interface IUpdateProduct {
  id: string;
  name?: string;
  bar_code?: string;
  price?: Decimal;
}

export class UpdateProductUseCase {
  async execute({ id, name, bar_code, price }: IUpdateProduct) {
    let newName = name;
    let newBarCode = bar_code;
    let newPrice = price;

    const productOldData = await prisma.products.findFirst({
      where: {
        id,
      },
    });

    if (!productOldData) throw new Error("productDoesNotExists");

    if (!newName) newName = productOldData.name;
    if (!newBarCode) newBarCode = productOldData.bar_code;
    if (!newPrice) newPrice = productOldData.price;

    const product = await prisma.products.update({
      where: {
        id,
      },
      data: {
        name: newName,
        bar_code: newBarCode,
        price: newPrice,
      },
    });

    return product;
  }
}
