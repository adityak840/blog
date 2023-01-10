-- CreateTable
CREATE TABLE "Post" (
    "PostId" TEXT NOT NULL PRIMARY KEY,
    "UserId" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "ContentMarkdown" TEXT NOT NULL,
    "Slug" TEXT NOT NULL,
    "CreatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Tags" TEXT NOT NULL
);
