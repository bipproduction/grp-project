-- CreateTable
CREATE TABLE `LampiranAsetPartai` (
    `id` VARCHAR(191) NOT NULL,
    `asetPartaiId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `file` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `LampiranAsetPartai` ADD CONSTRAINT `LampiranAsetPartai_asetPartaiId_fkey` FOREIGN KEY (`asetPartaiId`) REFERENCES `AsetPartai`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
