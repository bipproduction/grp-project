-- CreateTable
CREATE TABLE `UserMediaSocial` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` VARCHAR(191) NOT NULL,
    `masterMediaSocialId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserMediaSocial` ADD CONSTRAINT `UserMediaSocial_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserMediaSocial` ADD CONSTRAINT `UserMediaSocial_masterMediaSocialId_fkey` FOREIGN KEY (`masterMediaSocialId`) REFERENCES `MasterMediaSocial`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
