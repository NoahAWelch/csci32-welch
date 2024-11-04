/*
  Warnings:

  - You are about to drop the `IngredientMeasurment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `IngredientMeasurment`;

-- CreateTable
CREATE TABLE `IngredientMeasurement` (
    `ingredient_id` VARCHAR(191) NOT NULL,
    `recipe_id` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL DEFAULT 0,
    `unit` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ingredient_id`, `recipe_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
