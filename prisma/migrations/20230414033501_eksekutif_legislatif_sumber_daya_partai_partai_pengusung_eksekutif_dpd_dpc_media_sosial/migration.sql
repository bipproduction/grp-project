/*
  Warnings:

  - You are about to drop the column `kategori` on the `AsetPartai` table. All the data in the column will be lost.
  - You are about to drop the column `statusAset` on the `AsetPartai` table. All the data in the column will be lost.
  - Added the required column `masterKategoriAsetId` to the `AsetPartai` table without a default value. This is not possible if the table is not empty.
  - Added the required column `masterStatusAsetId` to the `AsetPartai` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `AsetPartai` DROP COLUMN `kategori`,
    DROP COLUMN `statusAset`,
    ADD COLUMN `masterKategoriAsetId` INTEGER NOT NULL,
    ADD COLUMN `masterStatusAsetId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Eksekutif` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `masterProvinceId` INTEGER NOT NULL,
    `masterKabKotId` INTEGER NOT NULL,
    `masterTingkatEksekutifId` INTEGER NOT NULL,
    `masterJabatanEksekutifProvinsiId` INTEGER NOT NULL,
    `masterJabatanEksekutifKabKotId` INTEGER NOT NULL,
    `masterJabatanEksekutifKabupatenId` INTEGER NOT NULL,
    `masterJabatanEksekutifKotaId` INTEGER NOT NULL,
    `masterStatusEksekutifId` INTEGER NOT NULL,
    `namaLembaga` VARCHAR(191) NOT NULL,
    `periode` VARCHAR(191) NOT NULL,
    `alamatKantor` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Legislatif` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `masterProvinceId` INTEGER NOT NULL,
    `masterKabKotId` INTEGER NOT NULL,
    `masterTingkatLegislatifId` INTEGER NOT NULL,
    `jabatan` VARCHAR(191) NOT NULL,
    `periode` VARCHAR(191) NOT NULL,
    `noUrut` INTEGER NOT NULL,
    `dapil` VARCHAR(191) NOT NULL,
    `cakupanWilayah` VARCHAR(191) NOT NULL,
    `akd` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SumberDayaPartai` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `masterStatusKeanggotaanId` INTEGER NOT NULL,
    `masterTingkatPengurusId` INTEGER NOT NULL,
    `masterJabatanId` INTEGER NOT NULL,
    `masterJabatanDewanPembinaId` INTEGER NOT NULL,
    `masterJabatanDewanPimpinanPusatId` INTEGER NOT NULL,
    `masterJabatanDewanPimpinanDaerahId` INTEGER NOT NULL,
    `masterJabatanDewanPimpinanCabangId` INTEGER NOT NULL,
    `masterJabatanPimpinanAnakCabangId` INTEGER NOT NULL,
    `masterJabatanPimpinanRantingId` INTEGER NOT NULL,
    `masterJabatanPerwakilanPartaiDiLuarNegeriId` INTEGER NOT NULL,
    `masterSayapPartaiId` INTEGER NOT NULL,
    `masterKaderPartaiId` INTEGER NOT NULL,
    `masterProvinceId` INTEGER NOT NULL,
    `masterKabKotId` INTEGER NOT NULL,
    `masterKecamatanId` INTEGER NOT NULL,
    `masterDesaId` INTEGER NOT NULL,
    `masterNegaraId` INTEGER NOT NULL,
    `alamatKantor` VARCHAR(191) NOT NULL,
    `waAdmin` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PartaiPengusungEksekutif` (
    `id` VARCHAR(191) NOT NULL,
    `eksekutifId` VARCHAR(191) NOT NULL,
    `masterPartaiPengusungId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DPDDPCMediaSocial` (
    `id` VARCHAR(191) NOT NULL,
    `masterMediaSocialId` INTEGER NOT NULL,
    `sumberDayaPartaiId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AsetPartai` ADD CONSTRAINT `AsetPartai_masterStatusAsetId_fkey` FOREIGN KEY (`masterStatusAsetId`) REFERENCES `MasterStatusAset`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AsetPartai` ADD CONSTRAINT `AsetPartai_masterKategoriAsetId_fkey` FOREIGN KEY (`masterKategoriAsetId`) REFERENCES `MasterKategoriAset`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eksekutif` ADD CONSTRAINT `Eksekutif_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eksekutif` ADD CONSTRAINT `Eksekutif_masterProvinceId_fkey` FOREIGN KEY (`masterProvinceId`) REFERENCES `MasterProvince`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eksekutif` ADD CONSTRAINT `Eksekutif_masterKabKotId_fkey` FOREIGN KEY (`masterKabKotId`) REFERENCES `MasterKabKot`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eksekutif` ADD CONSTRAINT `Eksekutif_masterTingkatEksekutifId_fkey` FOREIGN KEY (`masterTingkatEksekutifId`) REFERENCES `MasterTingkatEksekutif`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eksekutif` ADD CONSTRAINT `Eksekutif_masterJabatanEksekutifProvinsiId_fkey` FOREIGN KEY (`masterJabatanEksekutifProvinsiId`) REFERENCES `MasterJabatanEksekutifProvinsi`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eksekutif` ADD CONSTRAINT `Eksekutif_masterJabatanEksekutifKabKotId_fkey` FOREIGN KEY (`masterJabatanEksekutifKabKotId`) REFERENCES `MasterJabatanEksekutifKabKot`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eksekutif` ADD CONSTRAINT `Eksekutif_masterJabatanEksekutifKabupatenId_fkey` FOREIGN KEY (`masterJabatanEksekutifKabupatenId`) REFERENCES `MasterJabatanEksekutifKabupaten`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eksekutif` ADD CONSTRAINT `Eksekutif_masterJabatanEksekutifKotaId_fkey` FOREIGN KEY (`masterJabatanEksekutifKotaId`) REFERENCES `MasterJabatanEksekutifKota`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eksekutif` ADD CONSTRAINT `Eksekutif_masterStatusEksekutifId_fkey` FOREIGN KEY (`masterStatusEksekutifId`) REFERENCES `MasterStatusEksekutif`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Legislatif` ADD CONSTRAINT `Legislatif_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Legislatif` ADD CONSTRAINT `Legislatif_masterProvinceId_fkey` FOREIGN KEY (`masterProvinceId`) REFERENCES `MasterProvince`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Legislatif` ADD CONSTRAINT `Legislatif_masterKabKotId_fkey` FOREIGN KEY (`masterKabKotId`) REFERENCES `MasterKabKot`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Legislatif` ADD CONSTRAINT `Legislatif_masterTingkatLegislatifId_fkey` FOREIGN KEY (`masterTingkatLegislatifId`) REFERENCES `MasterTingkatLegislatif`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterStatusKeanggotaanId_fkey` FOREIGN KEY (`masterStatusKeanggotaanId`) REFERENCES `MasterStatusKeanggotaan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterTingkatPengurusId_fkey` FOREIGN KEY (`masterTingkatPengurusId`) REFERENCES `MasterTingkatPengurus`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterJabatanId_fkey` FOREIGN KEY (`masterJabatanId`) REFERENCES `MasterJabatan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterJabatanDewanPembinaId_fkey` FOREIGN KEY (`masterJabatanDewanPembinaId`) REFERENCES `MasterJabatanDewanPembina`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterJabatanDewanPimpinanPusatId_fkey` FOREIGN KEY (`masterJabatanDewanPimpinanPusatId`) REFERENCES `MasterJabatanDewanPimpinanPusat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterJabatanDewanPimpinanDaerahId_fkey` FOREIGN KEY (`masterJabatanDewanPimpinanDaerahId`) REFERENCES `MasterJabatanDewanPimpinanDaerah`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterJabatanDewanPimpinanCabangId_fkey` FOREIGN KEY (`masterJabatanDewanPimpinanCabangId`) REFERENCES `MasterJabatanDewanPimpinanCabang`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterJabatanPimpinanAnakCabangId_fkey` FOREIGN KEY (`masterJabatanPimpinanAnakCabangId`) REFERENCES `MasterJabatanPimpinanAnakCabang`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterJabatanPimpinanRantingId_fkey` FOREIGN KEY (`masterJabatanPimpinanRantingId`) REFERENCES `MasterJabatanPimpinanRanting`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterJabatanPerwakilanPartaiDiLuarNegeriI_fkey` FOREIGN KEY (`masterJabatanPerwakilanPartaiDiLuarNegeriId`) REFERENCES `MasterJabatanPerwakilanPartaiDiluarNegeri`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterSayapPartaiId_fkey` FOREIGN KEY (`masterSayapPartaiId`) REFERENCES `MasterSayapPartai`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterKaderPartaiId_fkey` FOREIGN KEY (`masterKaderPartaiId`) REFERENCES `MasterKaderPartai`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterProvinceId_fkey` FOREIGN KEY (`masterProvinceId`) REFERENCES `MasterProvince`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterKabKotId_fkey` FOREIGN KEY (`masterKabKotId`) REFERENCES `MasterKabKot`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterKecamatanId_fkey` FOREIGN KEY (`masterKecamatanId`) REFERENCES `MasterKecamatan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterDesaId_fkey` FOREIGN KEY (`masterDesaId`) REFERENCES `MasterDesa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterNegaraId_fkey` FOREIGN KEY (`masterNegaraId`) REFERENCES `MasterNegara`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PartaiPengusungEksekutif` ADD CONSTRAINT `PartaiPengusungEksekutif_eksekutifId_fkey` FOREIGN KEY (`eksekutifId`) REFERENCES `Eksekutif`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PartaiPengusungEksekutif` ADD CONSTRAINT `PartaiPengusungEksekutif_masterPartaiPengusungId_fkey` FOREIGN KEY (`masterPartaiPengusungId`) REFERENCES `MasterPartaiPengusung`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DPDDPCMediaSocial` ADD CONSTRAINT `DPDDPCMediaSocial_masterMediaSocialId_fkey` FOREIGN KEY (`masterMediaSocialId`) REFERENCES `MasterMediaSocial`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DPDDPCMediaSocial` ADD CONSTRAINT `DPDDPCMediaSocial_sumberDayaPartaiId_fkey` FOREIGN KEY (`sumberDayaPartaiId`) REFERENCES `SumberDayaPartai`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
