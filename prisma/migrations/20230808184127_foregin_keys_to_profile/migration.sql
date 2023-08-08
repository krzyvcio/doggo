/*
  Warnings:

  - A unique constraint covering the columns `[dogOwnerProfileId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[dogWalkerProfileId]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "dogOwnerProfileId" INTEGER,
ADD COLUMN     "dogWalkerProfileId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "users_dogOwnerProfileId_key" ON "users"("dogOwnerProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "users_dogWalkerProfileId_key" ON "users"("dogWalkerProfileId");
