/*
  Warnings:

  - Added the required column `dogsOwned` to the `dogOwnerProfiles` table without a default value. This is not possible if the table is not empty.
  - Made the column `dogOwnerProfileId` on table `dogs` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "dogs" DROP CONSTRAINT "dogs_dogOwnerProfileId_fkey";

-- AlterTable
ALTER TABLE "dogOwnerProfiles" ADD COLUMN     "dogsOwned" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "dogs" ALTER COLUMN "dogOwnerProfileId" SET NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "isUserDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "dogs" ADD CONSTRAINT "dogs_dogOwnerProfileId_fkey" FOREIGN KEY ("dogOwnerProfileId") REFERENCES "dogOwnerProfiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
