/*
  Warnings:

  - You are about to drop the `_DogWalkerAvailabilityToDogWalkerProfile` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[dogWalkerProfileId,weekday]` on the table `dogWalkerAvailabilities` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "_DogWalkerAvailabilityToDogWalkerProfile" DROP CONSTRAINT "_DogWalkerAvailabilityToDogWalkerProfile_A_fkey";

-- DropForeignKey
ALTER TABLE "_DogWalkerAvailabilityToDogWalkerProfile" DROP CONSTRAINT "_DogWalkerAvailabilityToDogWalkerProfile_B_fkey";

-- DropTable
DROP TABLE "_DogWalkerAvailabilityToDogWalkerProfile";

-- CreateIndex
CREATE UNIQUE INDEX "dogWalkerAvailabilities_dogWalkerProfileId_weekday_key" ON "dogWalkerAvailabilities"("dogWalkerProfileId", "weekday");

-- AddForeignKey
ALTER TABLE "dogWalkerAvailabilities" ADD CONSTRAINT "dogWalkerAvailabilities_dogWalkerProfileId_fkey" FOREIGN KEY ("dogWalkerProfileId") REFERENCES "dogWalkerProfiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
