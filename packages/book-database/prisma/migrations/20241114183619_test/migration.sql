/*
  Warnings:

  - Added the required column `author_id` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Book` ADD COLUMN `author_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `books` VARCHAR(191) NULL,
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL;
