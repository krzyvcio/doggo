/*
  Warnings:

  - A unique constraint covering the columns `[foreginKey]` on the table `cities` will be added. If there are existing duplicate values, this will fail.
  - Made the column `foreginKey` on table `cities` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "cities" ALTER COLUMN "foreginKey" SET NOT NULL,
ALTER COLUMN "foreginKey" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "cities_foreginKey_key" ON "cities"("foreginKey");
