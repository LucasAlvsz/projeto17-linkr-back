/*
  Warnings:

  - You are about to drop the `postTrendings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `trendings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "postTrendings" DROP CONSTRAINT "postTrendings_postId_fkey";

-- DropForeignKey
ALTER TABLE "postTrendings" DROP CONSTRAINT "postTrendings_trendingId_fkey";

-- DropTable
DROP TABLE "postTrendings";

-- DropTable
DROP TABLE "trendings";

-- CreateTable
CREATE TABLE "hashtags" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "hashtags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "postHashtag" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "hashtagId" INTEGER NOT NULL,

    CONSTRAINT "postHashtag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "postHashtag" ADD CONSTRAINT "postHashtag_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postHashtag" ADD CONSTRAINT "postHashtag_hashtagId_fkey" FOREIGN KEY ("hashtagId") REFERENCES "hashtags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
