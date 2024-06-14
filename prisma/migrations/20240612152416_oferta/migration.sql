-- CreateEnum
CREATE TYPE "OfferType" AS ENUM ('DogOwner', 'DogWalker');

-- AlterTable
ALTER TABLE "offers" ADD COLUMN     "dogName" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "isAnonymous" BOOLEAN,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "offerType" "OfferType",
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "priceFor15Minutes" DOUBLE PRECISION,
ADD COLUMN     "priceFor30Minutes" DOUBLE PRECISION,
ADD COLUMN     "priceFor60Minutes" DOUBLE PRECISION;
