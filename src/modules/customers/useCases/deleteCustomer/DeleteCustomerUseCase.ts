import { prisma } from "../../../../database/prismaClient";

interface IDeleteCustomer {
  id: string;
}

export class DeleteCustomerUseCase {
  async execute({ id }: IDeleteCustomer) {
    const customerAlreadyExists = await prisma.customers.findUnique({
      where: {
        id,
      },
    });

    if (!customerAlreadyExists) throw new Error("customerDoesNotExists");

    const customer = await prisma.customers.delete({
      where: {
        id,
      },
    });

    const res = {
      message: "The customer has been deleted",
      customer,
    };

    return res;
  }
}
