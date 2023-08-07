-- CreateEnum
CREATE TYPE "Weekday" AS ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

-- AlterTable
ALTER TABLE "dogs" ADD COLUMN     "dogOwnerProfileId" INTEGER;

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "dogOwnerProfileId" INTEGER,
ADD COLUMN     "dogWalkerProfileId" INTEGER;

-- CreateTable
CREATE TABLE "dogOwnerProfiles" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "dogOwnerProfiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dogWalkerProfiles" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "experience" TEXT,

    CONSTRAINT "dogWalkerProfiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "availabilities" (
    "id" SERIAL NOT NULL,
    "dogWalkerProfileId" INTEGER NOT NULL,
    "weekday" "Weekday" NOT NULL,
    "startHour" INTEGER NOT NULL,
    "endHour" INTEGER NOT NULL,

    CONSTRAINT "availabilities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,
    "review" TEXT,
    "walkerId" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "dogOwnerProfiles_userId_key" ON "dogOwnerProfiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "dogWalkerProfiles_userId_key" ON "dogWalkerProfiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "availabilities_dogWalkerProfileId_key" ON "availabilities"("dogWalkerProfileId");

-- AddForeignKey
ALTER TABLE "dogOwnerProfiles" ADD CONSTRAINT "dogOwnerProfiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dogWalkerProfiles" ADD CONSTRAINT "dogWalkerProfiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "availabilities" ADD CONSTRAINT "availabilities_dogWalkerProfileId_fkey" FOREIGN KEY ("dogWalkerProfileId") REFERENCES "dogWalkerProfiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dogs" ADD CONSTRAINT "dogs_dogOwnerProfileId_fkey" FOREIGN KEY ("dogOwnerProfileId") REFERENCES "dogOwnerProfiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_dogOwnerProfileId_fkey" FOREIGN KEY ("dogOwnerProfileId") REFERENCES "dogOwnerProfiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_dogWalkerProfileId_fkey" FOREIGN KEY ("dogWalkerProfileId") REFERENCES "dogWalkerProfiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_walkerId_fkey" FOREIGN KEY ("walkerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
