-- AlterTable
ALTER TABLE "products" ADD COLUMN     "id_sales" TEXT;

-- CreateTable
CREATE TABLE "companies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sales" (
    "id" TEXT NOT NULL,
    "id_customer" TEXT NOT NULL,

    CONSTRAINT "sales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductsOnSales" (
    "id_product" TEXT NOT NULL,
    "id_sale" TEXT NOT NULL,
    "assigned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductsOnSales_pkey" PRIMARY KEY ("id_product","id_sale")
);

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_id_sales_fkey" FOREIGN KEY ("id_sales") REFERENCES "sales"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsOnSales" ADD CONSTRAINT "ProductsOnSales_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsOnSales" ADD CONSTRAINT "ProductsOnSales_id_sale_fkey" FOREIGN KEY ("id_sale") REFERENCES "sales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
