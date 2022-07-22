import { Router } from "express";

import { ListCompaniesController } from "./modules/companies/useCases/listCompanies/ListCompaniesController";
import { CreateCompanyController } from "./modules/companies/useCases/createCompany/CreateCompanyController";
import { UpdateCompanyController } from "./modules/companies/useCases/updateCompany/UpdateCompanyController";
import { DeleteCompanyController } from "./modules/companies/useCases/deleteCompany/DeleteCompanyController";

import { ListCustomersController } from "./modules/customers/useCases/listCustomers/ListCustomersController";
import { CreateCustomerController } from "./modules/customers/useCases/createCustomer/CreateCustomerController";
import { DeleteCustomerController } from "./modules/customers/useCases/deleteCustomer/DeleteCustomerController";
import { UpdateCustomerController } from "./modules/customers/useCases/updateCustomer/UpdateCustomerController";

import { ListProductsController } from "./modules/products/useCases/listProducts/ListProductsController";
import { CreateProductController } from "./modules/products/useCases/createProduct/CreateProductController";
import { UpdateProductController } from "./modules/products/useCases/updateProduct/UpdateProductController";
import { DeleteProductController } from "./modules/products/useCases/deleteProduct/DeleteProductController";
import { SearchProductsController } from "./modules/products/useCases/searchProduct/SearchProductsController";

import { CreateSaleController } from "./modules/sales/useCases/createSale/CreateSaleController";
import { ListSalesController } from "./modules/sales/useCases/listSales/ListSalesController";
import { DeleteSaleController } from "./modules/sales/useCases/deleteSale/DeleteSaleController";
import { UpdateSaleController } from "./modules/sales/useCases/updateSale/UpdateSaleController";

const router = Router();

const listCompaniesController = new ListCompaniesController();
const createCompanyController = new CreateCompanyController();
const updateCompaniesController = new UpdateCompanyController();
const deleteCompanyController = new DeleteCompanyController();

const listCustomersController = new ListCustomersController();
const createCustomerController = new CreateCustomerController();
const updateCustomerController = new UpdateCustomerController();
const deleteCustomerController = new DeleteCustomerController();

const listProductsController = new ListProductsController();
const createProductController = new CreateProductController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();
const searchProductsController = new SearchProductsController();

const listSalesController = new ListSalesController();
const createSaleController = new CreateSaleController();
const updateSaleController = new UpdateSaleController();
const deleteSaleController = new DeleteSaleController();

// /companies
router.get("/companies/", listCompaniesController.handle);
router.post("/companies/", createCompanyController.handle);
router.put("/companies/:id", updateCompaniesController.handle);
router.delete("/companies/:id", deleteCompanyController.handle);

// /customers
router.get("/customers/", listCustomersController.handle);
router.post("/customers/", createCustomerController.handle);
router.put("/customers/:id", updateCustomerController.handle);
router.delete("/customers/:id", deleteCustomerController.handle);

// /products
router.get("/products/", listProductsController.handle);
router.post("/products/", createProductController.handle);
router.put("/products/:id", updateProductController.handle);
router.delete("/products/:id", deleteProductController.handle);
router.get("/products/search", searchProductsController.handle);

// /sales
router.get("/sales/", listSalesController.handle);
router.post("/sales/", createSaleController.handle);
router.put("/sales/:id", updateSaleController.handle);
router.delete("/sales/:id", deleteSaleController.handle);

export { router };
