-- DropForeignKey
ALTER TABLE "dogWalkerAvailabilities" DROP CONSTRAINT "dogWalkerAvailabilities_dogWalkerProfileId_fkey";

-- DropIndex
DROP INDEX "dogWalkerAvailabilities_dogWalkerProfileId_key";

-- CreateTable
CREATE TABLE "_DogWalkerAvailabilityToDogWalkerProfile" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DogWalkerAvailabilityToDogWalkerProfile_AB_unique" ON "_DogWalkerAvailabilityToDogWalkerProfile"("A", "B");

-- CreateIndex
CREATE INDEX "_DogWalkerAvailabilityToDogWalkerProfile_B_index" ON "_DogWalkerAvailabilityToDogWalkerProfile"("B");

-- AddForeignKey
ALTER TABLE "_DogWalkerAvailabilityToDogWalkerProfile" ADD CONSTRAINT "_DogWalkerAvailabilityToDogWalkerProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "dogWalkerAvailabilities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DogWalkerAvailabilityToDogWalkerProfile" ADD CONSTRAINT "_DogWalkerAvailabilityToDogWalkerProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "dogWalkerProfiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
