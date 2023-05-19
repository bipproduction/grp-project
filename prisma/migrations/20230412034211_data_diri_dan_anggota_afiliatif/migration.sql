-- CreateTable
CREATE TABLE `DataDiri` (
    `id` VARCHAR(191) NOT NULL,
    `nik` VARCHAR(191) NOT NULL,
    `tempatLahir` VARCHAR(191) NOT NULL,
    `tanggalLahir` DATETIME(3) NOT NULL,
    `jenisKelamin` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `rtRw` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` VARCHAR(191) NOT NULL,
    `masterAgamaId` INTEGER NOT NULL,
    `masterPekerjaanId` INTEGER NOT NULL,
    `masterProvinceId` INTEGER NOT NULL,
    `masterKabKotId` INTEGER NOT NULL,
    `masterKecamatanId` INTEGER NOT NULL,
    `masterDesaId` INTEGER NOT NULL,

    UNIQUE INDEX `DataDiri_nik_key`(`nik`),
    UNIQUE INDEX `DataDiri_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AnggotaAfiliatif` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` VARCHAR(191) NOT NULL,
    `masterOrganisasiAfiliatifId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DataDiri` ADD CONSTRAINT `DataDiri_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DataDiri` ADD CONSTRAINT `DataDiri_masterAgamaId_fkey` FOREIGN KEY (`masterAgamaId`) REFERENCES `MasterAgama`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DataDiri` ADD CONSTRAINT `DataDiri_masterPekerjaanId_fkey` FOREIGN KEY (`masterPekerjaanId`) REFERENCES `MasterPekerjaan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DataDiri` ADD CONSTRAINT `DataDiri_masterProvinceId_fkey` FOREIGN KEY (`masterProvinceId`) REFERENCES `MasterProvince`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DataDiri` ADD CONSTRAINT `DataDiri_masterKabKotId_fkey` FOREIGN KEY (`masterKabKotId`) REFERENCES `MasterKabKot`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DataDiri` ADD CONSTRAINT `DataDiri_masterKecamatanId_fkey` FOREIGN KEY (`masterKecamatanId`) REFERENCES `MasterKecamatan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DataDiri` ADD CONSTRAINT `DataDiri_masterDesaId_fkey` FOREIGN KEY (`masterDesaId`) REFERENCES `MasterDesa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AnggotaAfiliatif` ADD CONSTRAINT `AnggotaAfiliatif_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AnggotaAfiliatif` ADD CONSTRAINT `AnggotaAfiliatif_masterOrganisasiAfiliatifId_fkey` FOREIGN KEY (`masterOrganisasiAfiliatifId`) REFERENCES `MasterOrganisasiAfiliatif`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
