/*
  Warnings:

  - Added the required column `expiresAt` to the `userEmailConfirmations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "userEmailConfirmations" ADD COLUMN     "expiresAt" TIMESTAMP(3) NOT NULL;
