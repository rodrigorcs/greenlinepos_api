import { Router } from "express";
import { ListCompaniesController } from "./modules/companies/useCases/listCompanies/ListCompaniesController";
import { CreateCompanyController } from "./modules/companies/useCases/createCompany/CreateCompanyController";
import { UpdateCompanyController } from "./modules/companies/useCases/updateCompany/UpdateCompanyController";
import { DeleteCompanyController } from "./modules/companies/useCases/deleteCompany/DeleteCompanyController";

import { ListCustomersController } from "./modules/customers/useCases/listCustomers/ListCustomersController";
import { CreateCustomerController } from "./modules/customers/useCases/createCustomer/CreateCustomerController";
import { DeleteCustomerController } from "./modules/customers/useCases/deleteCustomer/DeleteCustomerController";
import { UpdateCustomerController } from "./modules/customers/useCases/updateCustomer/UpdateCustomerController";

const router = Router();

const createCompanyController = new CreateCompanyController();
const deleteCompanyController = new DeleteCompanyController();
const listCompaniesController = new ListCompaniesController();
const updateCompaniesController = new UpdateCompanyController();

const listCustomersController = new ListCustomersController();
const createCustomerController = new CreateCustomerController();
const updateCustomerController = new UpdateCustomerController();
const deleteCustomerController = new DeleteCustomerController();

router.get("/companies/", listCompaniesController.handle);
router.post("/companies/", createCompanyController.handle);
router.put("/companies/:id", updateCompaniesController.handle);
router.delete("/companies/:id", deleteCompanyController.handle);

router.get("/customers/", listCustomersController.handle);
router.post("/customers/", createCustomerController.handle);
router.put("/customers/:id", updateCustomerController.handle);
router.delete("/customers/:id", deleteCustomerController.handle);

export { router };
