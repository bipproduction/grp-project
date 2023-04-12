-- CreateTable
CREATE TABLE `TpsDpt` (
    `id` VARCHAR(191) NOT NULL,
    `masterProvinceId` INTEGER NOT NULL,
    `masterKabKotId` INTEGER NOT NULL,
    `masterKecamatanId` INTEGER NOT NULL,
    `masterDesaId` INTEGER NOT NULL,
    `masterNomorUrutTPS` INTEGER NOT NULL,
    `dptLakilaki` INTEGER NOT NULL,
    `dptPerempuan` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TpsDpt` ADD CONSTRAINT `TpsDpt_masterProvinceId_fkey` FOREIGN KEY (`masterProvinceId`) REFERENCES `MasterProvince`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TpsDpt` ADD CONSTRAINT `TpsDpt_masterKabKotId_fkey` FOREIGN KEY (`masterKabKotId`) REFERENCES `MasterKabKot`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TpsDpt` ADD CONSTRAINT `TpsDpt_masterKecamatanId_fkey` FOREIGN KEY (`masterKecamatanId`) REFERENCES `MasterKecamatan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TpsDpt` ADD CONSTRAINT `TpsDpt_masterDesaId_fkey` FOREIGN KEY (`masterDesaId`) REFERENCES `MasterDesa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TpsDpt` ADD CONSTRAINT `TpsDpt_masterNomorUrutTPS_fkey` FOREIGN KEY (`masterNomorUrutTPS`) REFERENCES `MasterNomorUrutTPS`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
