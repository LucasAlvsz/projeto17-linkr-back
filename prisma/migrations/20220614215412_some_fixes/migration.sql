/*
  Warnings:

  - You are about to drop the column `trendingId` on the `postTrendings` table. All the data in the column will be lost.
  - You are about to drop the `trendings` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `hashtagId` to the `postTrendings` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "postTrendings" DROP CONSTRAINT "postTrendings_trendingId_fkey";

-- AlterTable
ALTER TABLE "postTrendings" DROP COLUMN "trendingId",
ADD COLUMN     "hashtagId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "trendings";

-- CreateTable
CREATE TABLE "hashtags" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "hashtags_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "hashtags_name_key" ON "hashtags"("name");

-- AddForeignKey
ALTER TABLE "postTrendings" ADD CONSTRAINT "postTrendings_hashtagId_fkey" FOREIGN KEY ("hashtagId") REFERENCES "hashtags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
