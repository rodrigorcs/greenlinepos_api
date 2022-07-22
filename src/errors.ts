const errors = {
  companyAlreadyExists: {
    status: 400,
    message: "Company already exists",
  },
  companyDoesNotExists: {
    status: 404,
    message: "Company not found",
  },
};

export { errors };
