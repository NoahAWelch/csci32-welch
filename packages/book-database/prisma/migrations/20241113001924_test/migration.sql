/*
  Warnings:

  - You are about to drop the column `author_id` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `book_rating` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `genre` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Book` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `Author` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Author` ADD COLUMN `user_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Book` DROP COLUMN `author_id`,
    DROP COLUMN `book_rating`,
    DROP COLUMN `genre`,
    DROP COLUMN `user_id`;

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
