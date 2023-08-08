-- AlterTable
ALTER TABLE "users" ADD COLUMN     "isEmailConfirmed" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "userEmailConfirmations" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "userEmailConfirmations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userEmailConfirmations_userId_key" ON "userEmailConfirmations"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "userEmailConfirmations_token_key" ON "userEmailConfirmations"("token");

-- AddForeignKey
ALTER TABLE "userEmailConfirmations" ADD CONSTRAINT "userEmailConfirmations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
