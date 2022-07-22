const errors = {
  // /companies
  companyAlreadyExists: {
    status: 400,
    message: "Company already exists",
  },
  companyDoesNotExists: {
    status: 404,
    message: "Company not found",
  },

  // /customers
  customerDoesNotExists: {
    status: 404,
    message: "Customer not found",
  },

  // /products
  productDoesNotExists: {
    status: 404,
    message: "Product not found",
  },

  // /sales
  salesDoesNotExists: {
    status: 404,
    message: "Sale not found",
  },
};

export { errors };
