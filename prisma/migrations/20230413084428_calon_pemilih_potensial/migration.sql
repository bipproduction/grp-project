-- CreateTable
CREATE TABLE `CalonPemilihPotensial` (
    `id` VARCHAR(191) NOT NULL,
    `masterCalonPemilihPotensialId` INTEGER NOT NULL,
    `masterAgamaId` INTEGER NOT NULL,
    `masterPekerjaanId` INTEGER NOT NULL,
    `masterProvinceId` INTEGER NOT NULL,
    `masterKabKotId` INTEGER NOT NULL,
    `masterKecamatanId` INTEGER NOT NULL,
    `masterDesaId` INTEGER NOT NULL,
    `masterNomorUrutTPSId` INTEGER NOT NULL,
    `masterJenisKelaminId` INTEGER NOT NULL,
    `nik` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `tanggalLahir` DATETIME(3) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `statusSosial` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `CalonPemilihPotensial_nik_key`(`nik`),
    UNIQUE INDEX `CalonPemilihPotensial_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CPTMediaSocial` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `calonPemilihPotensialId` VARCHAR(191) NOT NULL,
    `masterMediaSocialId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RencanaKunjunganPrabowo` (
    `id` VARCHAR(191) NOT NULL,
    `judul` VARCHAR(191) NOT NULL,
    `tanggal` DATETIME(3) NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `masterStatusAksiNyataId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ListUndanganPrabowo` (
    `id` VARCHAR(191) NOT NULL,
    `rencanaKunjunganPrabowoId` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RencanaKunjunganGerindra` (
    `id` VARCHAR(191) NOT NULL,
    `judul` VARCHAR(191) NOT NULL,
    `tanggal` DATETIME(3) NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `masterStatusAksiNyataId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ListUndanganGerindra` (
    `id` VARCHAR(191) NOT NULL,
    `rencanaKunjunganGerindraId` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CalonPemilihPotensial` ADD CONSTRAINT `CalonPemilihPotensial_masterCalonPemilihPotensialId_fkey` FOREIGN KEY (`masterCalonPemilihPotensialId`) REFERENCES `MasterCalonPemilihPotensial`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CalonPemilihPotensial` ADD CONSTRAINT `CalonPemilihPotensial_masterAgamaId_fkey` FOREIGN KEY (`masterAgamaId`) REFERENCES `MasterAgama`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CalonPemilihPotensial` ADD CONSTRAINT `CalonPemilihPotensial_masterPekerjaanId_fkey` FOREIGN KEY (`masterPekerjaanId`) REFERENCES `MasterPekerjaan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CalonPemilihPotensial` ADD CONSTRAINT `CalonPemilihPotensial_masterProvinceId_fkey` FOREIGN KEY (`masterProvinceId`) REFERENCES `MasterProvince`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CalonPemilihPotensial` ADD CONSTRAINT `CalonPemilihPotensial_masterKabKotId_fkey` FOREIGN KEY (`masterKabKotId`) REFERENCES `MasterKabKot`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CalonPemilihPotensial` ADD CONSTRAINT `CalonPemilihPotensial_masterKecamatanId_fkey` FOREIGN KEY (`masterKecamatanId`) REFERENCES `MasterKecamatan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CalonPemilihPotensial` ADD CONSTRAINT `CalonPemilihPotensial_masterDesaId_fkey` FOREIGN KEY (`masterDesaId`) REFERENCES `MasterDesa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CalonPemilihPotensial` ADD CONSTRAINT `CalonPemilihPotensial_masterNomorUrutTPSId_fkey` FOREIGN KEY (`masterNomorUrutTPSId`) REFERENCES `MasterNomorUrutTPS`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CalonPemilihPotensial` ADD CONSTRAINT `CalonPemilihPotensial_masterJenisKelaminId_fkey` FOREIGN KEY (`masterJenisKelaminId`) REFERENCES `MasterJenisKelamin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CPTMediaSocial` ADD CONSTRAINT `CPTMediaSocial_calonPemilihPotensialId_fkey` FOREIGN KEY (`calonPemilihPotensialId`) REFERENCES `CalonPemilihPotensial`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CPTMediaSocial` ADD CONSTRAINT `CPTMediaSocial_masterMediaSocialId_fkey` FOREIGN KEY (`masterMediaSocialId`) REFERENCES `MasterMediaSocial`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RencanaKunjunganPrabowo` ADD CONSTRAINT `RencanaKunjunganPrabowo_masterStatusAksiNyataId_fkey` FOREIGN KEY (`masterStatusAksiNyataId`) REFERENCES `MasterStatusAksiNyata`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ListUndanganPrabowo` ADD CONSTRAINT `ListUndanganPrabowo_rencanaKunjunganPrabowoId_fkey` FOREIGN KEY (`rencanaKunjunganPrabowoId`) REFERENCES `RencanaKunjunganPrabowo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RencanaKunjunganGerindra` ADD CONSTRAINT `RencanaKunjunganGerindra_masterStatusAksiNyataId_fkey` FOREIGN KEY (`masterStatusAksiNyataId`) REFERENCES `MasterStatusAksiNyata`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ListUndanganGerindra` ADD CONSTRAINT `ListUndanganGerindra_rencanaKunjunganGerindraId_fkey` FOREIGN KEY (`rencanaKunjunganGerindraId`) REFERENCES `RencanaKunjunganGerindra`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
