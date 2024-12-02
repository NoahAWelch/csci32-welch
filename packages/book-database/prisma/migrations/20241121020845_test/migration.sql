/*
  Warnings:

  - You are about to drop the column `book_name` on the `Book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Author` ADD COLUMN `is_deleted` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `Book` DROP COLUMN `book_name`;
