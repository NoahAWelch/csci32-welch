/*
  Warnings:

  - You are about to drop the column `user_id` on the `Book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Book` DROP COLUMN `user_id`;

-- CreateTable
CREATE TABLE `BookProperties` (
    `book_id` VARCHAR(191) NOT NULL,
    `author_id` VARCHAR(191) NOT NULL,
    `genre` VARCHAR(191) NOT NULL,
    `book_rating` INTEGER NOT NULL DEFAULT 0,
    `book_synopsis` VARCHAR(191) NULL,
    `book_reccomendation` VARCHAR(191) NULL,

    PRIMARY KEY (`book_id`, `author_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
