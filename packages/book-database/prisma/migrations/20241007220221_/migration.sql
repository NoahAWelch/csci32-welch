/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `Recipe` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Recipe_user_id_key` ON `Recipe`(`user_id`);
