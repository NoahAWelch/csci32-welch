-- CreateTable
CREATE TABLE `Book` (
    `book_id` VARCHAR(191) NOT NULL,
    `book_name` VARCHAR(191) NULL,
    `book_description` VARCHAR(191) NULL,
    `author_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`book_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
