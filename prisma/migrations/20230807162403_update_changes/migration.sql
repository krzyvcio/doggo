/*
  Warnings:

  - You are about to drop the column `breed` on the `dogs` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "dogOwnerProfiles" ADD COLUMN     "bio" TEXT;

-- AlterTable
ALTER TABLE "dogWalkerProfiles" ADD COLUMN     "bio" TEXT;

-- AlterTable
ALTER TABLE "dogs" DROP COLUMN "breed",
ADD COLUMN     "breedId" INTEGER,
ADD COLUMN     "image" TEXT,
ALTER COLUMN "age" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "name",
ADD COLUMN     "image" TEXT;

-- CreateTable
CREATE TABLE "breeds" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "breeds_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "dogs" ADD CONSTRAINT "dogs_breedId_fkey" FOREIGN KEY ("breedId") REFERENCES "breeds"("id") ON DELETE SET NULL ON UPDATE CASCADE;
