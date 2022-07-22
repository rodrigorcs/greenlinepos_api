/*
  Warnings:

  - You are about to drop the column `products` on the `sales` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "sales" DROP COLUMN "products",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
