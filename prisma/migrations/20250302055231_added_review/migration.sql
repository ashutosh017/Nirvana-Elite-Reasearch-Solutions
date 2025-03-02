-- AlterTable
ALTER TABLE "review" ADD COLUMN     "profile" TEXT,
ADD COLUMN     "rating" INTEGER NOT NULL DEFAULT 5;
