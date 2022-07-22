/*
  Warnings:

  - Made the column `id_customer` on table `sales` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "sales" ALTER COLUMN "id_customer" SET NOT NULL;
