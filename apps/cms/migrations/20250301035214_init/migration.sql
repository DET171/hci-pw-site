-- CreateEnum
CREATE TYPE "ProjectCategoryType" AS ENUM ('cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6', 'cat7', 'cat8', 'cat9', 'cat10');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Year" (
    "id" TEXT NOT NULL,
    "year" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Year_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectAuthor" (
    "id" TEXT NOT NULL,
    "project" TEXT,
    "name" TEXT NOT NULL DEFAULT '',
    "class" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "ProjectAuthor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "year" TEXT,
    "category" "ProjectCategoryType" NOT NULL,
    "bannerImg_id" TEXT,
    "bannerImg_filesize" INTEGER,
    "bannerImg_width" INTEGER,
    "bannerImg_height" INTEGER,
    "bannerImg_extension" TEXT,
    "slides_filesize" INTEGER,
    "slides_filename" TEXT,
    "summary" TEXT NOT NULL DEFAULT '',
    "description" JSONB NOT NULL DEFAULT '[{"type":"paragraph","children":[{"text":""}]}]',
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Year_year_key" ON "Year"("year");

-- CreateIndex
CREATE INDEX "ProjectAuthor_project_idx" ON "ProjectAuthor"("project");

-- CreateIndex
CREATE INDEX "Project_year_idx" ON "Project"("year");

-- AddForeignKey
ALTER TABLE "ProjectAuthor" ADD CONSTRAINT "ProjectAuthor_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_year_fkey" FOREIGN KEY ("year") REFERENCES "Year"("id") ON DELETE SET NULL ON UPDATE CASCADE;
