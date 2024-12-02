/*
  Warnings:

  - Made the column `genre` on table `BookProperties` required. This step will fail if there are existing NULL values in that column.
  - Made the column `book_synopsis` on table `BookProperties` required. This step will fail if there are existing NULL values in that column.
  - Made the column `book_reccomendation` on table `BookProperties` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `BookProperties` MODIFY `genre` VARCHAR(191) NOT NULL,
    MODIFY `book_synopsis` VARCHAR(191) NOT NULL,
    MODIFY `book_reccomendation` VARCHAR(191) NOT NULL;
