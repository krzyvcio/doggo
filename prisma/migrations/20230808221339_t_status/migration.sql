/*
  Warnings:

  - Added the required column `transactionStatus` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TransactionStatus" AS ENUM ('Pending', 'Completed', 'Failed');

-- AlterTable
ALTER TABLE "transactions" ADD COLUMN     "transactionStatus" "TransactionStatus" NOT NULL;
