-- CreateEnum
CREATE TYPE "Weekday" AS ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('RegisteredUser', 'DogWalker', 'DogOwner', 'Admin');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('Blik', 'GoCardless', 'Card', 'PayPal');

-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('Walking', 'Feeding', 'PlayEtc', 'Carry');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "roles" "UserRole"[],
    "firstName" TEXT,
    "lastName" TEXT,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dogOwnerProfiles" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "bio" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dogOwnerProfiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dogWalkerProfiles" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "bio" TEXT,
    "experience" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dogWalkerProfiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "availabilities" (
    "id" SERIAL NOT NULL,
    "dogWalkerProfileId" INTEGER NOT NULL,
    "weekday" "Weekday" NOT NULL,
    "startHour" INTEGER NOT NULL,
    "endHour" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "availabilities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dogs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "breedId" INTEGER,
    "age" INTEGER,
    "image" TEXT,
    "dogOwnerProfileId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "breeds" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "breeds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "dogId" INTEGER NOT NULL,
    "walkerId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "Distance" DOUBLE PRECISION NOT NULL,
    "Cost" DOUBLE PRECISION NOT NULL,
    "stayDuration" INTEGER NOT NULL,
    "serviceType" "ServiceType" NOT NULL,
    "Tip" DOUBLE PRECISION,
    "dogOwnerProfileId" INTEGER,
    "dogWalkerProfileId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gps" (
    "id" SERIAL NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "orderId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "gps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" SERIAL NOT NULL,
    "Amount" DOUBLE PRECISION NOT NULL,
    "Method" "PaymentMethod" NOT NULL,
    "orderId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,
    "review" TEXT,
    "walkerId" INTEGER,
    "ownerId" INTEGER,
    "orderId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "dogOwnerProfiles_userId_key" ON "dogOwnerProfiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "dogWalkerProfiles_userId_key" ON "dogWalkerProfiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "availabilities_dogWalkerProfileId_key" ON "availabilities"("dogWalkerProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "payments_orderId_key" ON "payments"("orderId");

-- AddForeignKey
ALTER TABLE "dogOwnerProfiles" ADD CONSTRAINT "dogOwnerProfiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dogWalkerProfiles" ADD CONSTRAINT "dogWalkerProfiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "availabilities" ADD CONSTRAINT "availabilities_dogWalkerProfileId_fkey" FOREIGN KEY ("dogWalkerProfileId") REFERENCES "dogWalkerProfiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dogs" ADD CONSTRAINT "dogs_breedId_fkey" FOREIGN KEY ("breedId") REFERENCES "breeds"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dogs" ADD CONSTRAINT "dogs_dogOwnerProfileId_fkey" FOREIGN KEY ("dogOwnerProfileId") REFERENCES "dogOwnerProfiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_dogId_fkey" FOREIGN KEY ("dogId") REFERENCES "dogs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_walkerId_fkey" FOREIGN KEY ("walkerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_dogOwnerProfileId_fkey" FOREIGN KEY ("dogOwnerProfileId") REFERENCES "dogOwnerProfiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_dogWalkerProfileId_fkey" FOREIGN KEY ("dogWalkerProfileId") REFERENCES "dogWalkerProfiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gps" ADD CONSTRAINT "gps_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_walkerId_fkey" FOREIGN KEY ("walkerId") REFERENCES "dogWalkerProfiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "dogOwnerProfiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;
