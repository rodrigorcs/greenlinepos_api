/*
  Warnings:

  - Added the required column `id_company` to the `customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "customers" ADD COLUMN     "id_company" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
