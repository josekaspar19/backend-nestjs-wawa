-- CreateTable
CREATE TABLE "busRoutes" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "origin" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "busRoutes_pkey" PRIMARY KEY ("id")
);
