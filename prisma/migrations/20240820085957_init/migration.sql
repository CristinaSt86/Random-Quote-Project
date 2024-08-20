-- CreateTable
CREATE TABLE "VisitorCount" (
    "id" SERIAL NOT NULL,
    "count" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VisitorCount_pkey" PRIMARY KEY ("id")
);
