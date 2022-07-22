/*
  Warnings:

  - You are about to drop the column `id_sales` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `sales` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_id_sales_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "id_sales";

-- AlterTable
ALTER TABLE "sales" DROP COLUMN "created_at",
ADD COLUMN     "products" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
