/*
  Warnings:

  - You are about to drop the `ProductsOnSales` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductsOnSales" DROP CONSTRAINT "ProductsOnSales_id_product_fkey";

-- DropForeignKey
ALTER TABLE "ProductsOnSales" DROP CONSTRAINT "ProductsOnSales_id_sale_fkey";

-- DropTable
DROP TABLE "ProductsOnSales";

-- CreateTable
CREATE TABLE "products_on_sales" (
    "id_product" TEXT NOT NULL,
    "id_sale" TEXT NOT NULL,
    "assigned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_on_sales_pkey" PRIMARY KEY ("id_product","id_sale")
);

-- AddForeignKey
ALTER TABLE "products_on_sales" ADD CONSTRAINT "products_on_sales_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_on_sales" ADD CONSTRAINT "products_on_sales_id_sale_fkey" FOREIGN KEY ("id_sale") REFERENCES "sales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
