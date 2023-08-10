/*
  Warnings:

  - You are about to drop the `availabilities` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "availabilities" DROP CONSTRAINT "availabilities_dogWalkerProfileId_fkey";

-- DropTable
DROP TABLE "availabilities";

-- CreateTable
CREATE TABLE "dogWalkerAvailabilities" (
    "id" SERIAL NOT NULL,
    "dogWalkerProfileId" INTEGER NOT NULL,
    "weekday" "Weekday" NOT NULL,
    "startHour" INTEGER NOT NULL,
    "endHour" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dogWalkerAvailabilities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "dogWalkerAvailabilities_dogWalkerProfileId_key" ON "dogWalkerAvailabilities"("dogWalkerProfileId");

-- AddForeignKey
ALTER TABLE "dogWalkerAvailabilities" ADD CONSTRAINT "dogWalkerAvailabilities_dogWalkerProfileId_fkey" FOREIGN KEY ("dogWalkerProfileId") REFERENCES "dogWalkerProfiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
