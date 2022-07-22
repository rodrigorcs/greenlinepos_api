import { Router } from "express";
import { CreateCompanyController } from "./modules/companies/useCases/createCompany/CreateCompanyController";
import { DeleteCompanyController } from "./modules/companies/useCases/deleteCompany/DeleteCompanyController";
import { ListCompaniesController } from "./modules/companies/useCases/listCompanies/ListCompaniesController";
import { UpdateCompanyController } from "./modules/companies/useCases/updateCompany/UpdateCompanyController";

const router = Router();

const createCompanyController = new CreateCompanyController();
const deleteCompanyController = new DeleteCompanyController();
const listCompaniesController = new ListCompaniesController();
const updateCompaniesController = new UpdateCompanyController();

router.get("/companies/", listCompaniesController.handle);
router.post("/companies/", createCompanyController.handle);
router.put("/companies/:id", updateCompaniesController.handle);
router.delete("/companies/:id", deleteCompanyController.handle);

export { router };
