-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Year" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "year" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "ProjectAuthor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "project" TEXT,
    "name" TEXT NOT NULL DEFAULT '',
    "class" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "ProjectAuthor_project_fkey" FOREIGN KEY ("project") REFERENCES "Project" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL DEFAULT '',
    "year" TEXT,
    "category" TEXT NOT NULL,
    "bannerImg_id" TEXT,
    "bannerImg_filesize" INTEGER,
    "bannerImg_width" INTEGER,
    "bannerImg_height" INTEGER,
    "bannerImg_extension" TEXT,
    "slides_filesize" INTEGER,
    "slides_filename" TEXT,
    "summary" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '[{"type":"paragraph","children":[{"text":""}]}]',
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Project_year_fkey" FOREIGN KEY ("year") REFERENCES "Year" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Year_year_key" ON "Year"("year");

-- CreateIndex
CREATE INDEX "ProjectAuthor_project_idx" ON "ProjectAuthor"("project");

-- CreateIndex
CREATE INDEX "Project_year_idx" ON "Project"("year");
