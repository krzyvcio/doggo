/*
  Warnings:

  - You are about to alter the column `size` on the `images` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Added the required column `imageFor` to the `images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originalFilename` to the `images` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ImageFormat" AS ENUM ('JPG', 'PNG', 'GIF', 'WEBP');

-- CreateEnum
CREATE TYPE "ImageFor" AS ENUM ('UserProfile', 'DogProfile', 'DogWalkerProfile', 'DogOwnerProfile');

-- AlterTable
ALTER TABLE "images" ADD COLUMN     "encoding" TEXT,
ADD COLUMN     "imageFor" "ImageFor" NOT NULL,
ADD COLUMN     "originalFilename" TEXT NOT NULL,
ALTER COLUMN "filepath" DROP NOT NULL,
ALTER COLUMN "size" DROP NOT NULL,
ALTER COLUMN "size" SET DATA TYPE INTEGER,
ALTER COLUMN "mimetype" DROP NOT NULL;
