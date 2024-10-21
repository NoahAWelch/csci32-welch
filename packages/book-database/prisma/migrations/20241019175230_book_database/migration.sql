/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Ingredient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `IngredientMeasurment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Recipe` table. If the table is not empty, all the data it contains will be lost.
  - The required column `user_id` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    DROP COLUMN `emailVerified`,
    DROP COLUMN `id`,
    DROP COLUMN `name`,
    ADD COLUMN `password` VARCHAR(191) NULL,
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `user_name` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`user_id`);

-- DropTable
DROP TABLE `Ingredient`;

-- DropTable
DROP TABLE `IngredientMeasurment`;

-- DropTable
DROP TABLE `Recipe`;

-- CreateTable
CREATE TABLE `Book` (
    `book_id` VARCHAR(191) NOT NULL,
    `book_name` VARCHAR(191) NULL,
    `author_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`book_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Author` (
    `author_id` VARCHAR(191) NOT NULL,
    `author_name` VARCHAR(191) NULL,

    PRIMARY KEY (`author_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Misc` (
    `misc_id` VARCHAR(191) NOT NULL,
    `book_description` VARCHAR(191) NULL,
    `book_rating` INTEGER NOT NULL DEFAULT 0,
    `book_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Misc_book_id_key`(`book_id`),
    PRIMARY KEY (`misc_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
