/*
  Warnings:

  - You are about to drop the column `socialLink` on the `review` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "review" DROP COLUMN "socialLink",
ADD COLUMN     "socialLinks" TEXT[] DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "email" DROP NOT NULL;
