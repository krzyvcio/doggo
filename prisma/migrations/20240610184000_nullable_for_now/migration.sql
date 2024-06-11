-- DropForeignKey
ALTER TABLE "dogWalkerAvailabilities" DROP CONSTRAINT "dogWalkerAvailabilities_dogWalkerProfileId_fkey";

-- DropForeignKey
ALTER TABLE "dogs" DROP CONSTRAINT "dogs_dogOwnerProfileId_fkey";

-- DropForeignKey
ALTER TABLE "gps" DROP CONSTRAINT "gps_orderId_fkey";

-- DropForeignKey
ALTER TABLE "offers" DROP CONSTRAINT "offers_dogId_fkey";

-- DropForeignKey
ALTER TABLE "offers" DROP CONSTRAINT "offers_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "offers" DROP CONSTRAINT "offers_walkerId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_dogId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_walkerId_fkey";

-- DropForeignKey
ALTER TABLE "payments" DROP CONSTRAINT "payments_orderId_fkey";

-- DropForeignKey
ALTER TABLE "wallets" DROP CONSTRAINT "wallets_userId_fkey";

-- AlterTable
ALTER TABLE "dogWalkerAvailabilities" ALTER COLUMN "dogWalkerProfileId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "dogs" ALTER COLUMN "dogOwnerProfileId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "gps" ALTER COLUMN "latitude" DROP NOT NULL,
ALTER COLUMN "longitude" DROP NOT NULL,
ALTER COLUMN "orderId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "offers" ALTER COLUMN "walkerId" DROP NOT NULL,
ALTER COLUMN "ownerId" DROP NOT NULL,
ALTER COLUMN "dogId" DROP NOT NULL,
ALTER COLUMN "date" DROP NOT NULL,
ALTER COLUMN "status" DROP NOT NULL;

-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "dogId" DROP NOT NULL,
ALTER COLUMN "walkerId" DROP NOT NULL,
ALTER COLUMN "Distance" DROP NOT NULL,
ALTER COLUMN "Cost" DROP NOT NULL,
ALTER COLUMN "stayDuration" DROP NOT NULL,
ALTER COLUMN "serviceType" DROP NOT NULL;

-- AlterTable
ALTER TABLE "payments" ALTER COLUMN "orderId" DROP NOT NULL,
ALTER COLUMN "amount" DROP NOT NULL,
ALTER COLUMN "method" DROP NOT NULL,
ALTER COLUMN "status" DROP NOT NULL;

-- AlterTable
ALTER TABLE "wallets" ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "balance" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "dogWalkerAvailabilities" ADD CONSTRAINT "dogWalkerAvailabilities_dogWalkerProfileId_fkey" FOREIGN KEY ("dogWalkerProfileId") REFERENCES "dogWalkerProfiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dogs" ADD CONSTRAINT "dogs_dogOwnerProfileId_fkey" FOREIGN KEY ("dogOwnerProfileId") REFERENCES "dogOwnerProfiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_dogId_fkey" FOREIGN KEY ("dogId") REFERENCES "dogs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_walkerId_fkey" FOREIGN KEY ("walkerId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wallets" ADD CONSTRAINT "wallets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gps" ADD CONSTRAINT "gps_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "offers" ADD CONSTRAINT "offers_walkerId_fkey" FOREIGN KEY ("walkerId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "offers" ADD CONSTRAINT "offers_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "offers" ADD CONSTRAINT "offers_dogId_fkey" FOREIGN KEY ("dogId") REFERENCES "dogs"("id") ON DELETE SET NULL ON UPDATE CASCADE;
