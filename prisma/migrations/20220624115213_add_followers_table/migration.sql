-- CreateTable
CREATE TABLE "followers" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "followerId" INTEGER,

    CONSTRAINT "followers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "followers" ADD CONSTRAINT "followers_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "followers" ADD CONSTRAINT "followers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
