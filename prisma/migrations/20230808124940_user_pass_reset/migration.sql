/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `userEmailConfirmations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "userEmailConfirmations" DROP COLUMN "updatedAt";

-- CreateTable
CREATE TABLE "UserPasswordReset" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserPasswordReset_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserPasswordReset_token_key" ON "UserPasswordReset"("token");
