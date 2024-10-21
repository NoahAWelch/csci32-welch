/*
  Warnings:

  - You are about to drop the `Misc` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `genre` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Book` ADD COLUMN `book_description` VARCHAR(191) NULL,
    ADD COLUMN `book_rating` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `genre` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Misc`;
