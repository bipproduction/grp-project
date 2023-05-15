-- DropForeignKey
ALTER TABLE `Eksekutif` DROP FOREIGN KEY `Eksekutif_masterJabatanEksekutifKabKotId_fkey`;

-- DropForeignKey
ALTER TABLE `Eksekutif` DROP FOREIGN KEY `Eksekutif_masterJabatanEksekutifKabupatenId_fkey`;

-- DropForeignKey
ALTER TABLE `Eksekutif` DROP FOREIGN KEY `Eksekutif_masterJabatanEksekutifKotaId_fkey`;

-- DropForeignKey
ALTER TABLE `Eksekutif` DROP FOREIGN KEY `Eksekutif_masterJabatanEksekutifProvinsiId_fkey`;

-- DropForeignKey
ALTER TABLE `Eksekutif` DROP FOREIGN KEY `Eksekutif_masterKabKotId_fkey`;

-- DropForeignKey
ALTER TABLE `Eksekutif` DROP FOREIGN KEY `Eksekutif_masterProvinceId_fkey`;

-- DropForeignKey
ALTER TABLE `Eksekutif` DROP FOREIGN KEY `Eksekutif_masterStatusEksekutifId_fkey`;

-- DropForeignKey
ALTER TABLE `Eksekutif` DROP FOREIGN KEY `Eksekutif_masterTingkatEksekutifId_fkey`;

-- DropForeignKey
ALTER TABLE `Legislatif` DROP FOREIGN KEY `Legislatif_masterKabKotId_fkey`;

-- DropForeignKey
ALTER TABLE `Legislatif` DROP FOREIGN KEY `Legislatif_masterProvinceId_fkey`;

-- DropForeignKey
ALTER TABLE `Legislatif` DROP FOREIGN KEY `Legislatif_masterTingkatLegislatifId_fkey`;

-- DropForeignKey
ALTER TABLE `SumberDayaPartai` DROP FOREIGN KEY `SumberDayaPartai_masterDesaId_fkey`;

-- DropForeignKey
ALTER TABLE `SumberDayaPartai` DROP FOREIGN KEY `SumberDayaPartai_masterJabatanDewanPembinaId_fkey`;

-- DropForeignKey
ALTER TABLE `SumberDayaPartai` DROP FOREIGN KEY `SumberDayaPartai_masterJabatanDewanPimpinanCabangId_fkey`;

-- DropForeignKey
ALTER TABLE `SumberDayaPartai` DROP FOREIGN KEY `SumberDayaPartai_masterJabatanDewanPimpinanDaerahId_fkey`;

-- DropForeignKey
ALTER TABLE `SumberDayaPartai` DROP FOREIGN KEY `SumberDayaPartai_masterJabatanDewanPimpinanPusatId_fkey`;

-- DropForeignKey
ALTER TABLE `SumberDayaPartai` DROP FOREIGN KEY `SumberDayaPartai_masterJabatanId_fkey`;

-- DropForeignKey
ALTER TABLE `SumberDayaPartai` DROP FOREIGN KEY `SumberDayaPartai_masterJabatanPerwakilanPartaiDiLuarNegeriI_fkey`;

-- DropForeignKey
ALTER TABLE `SumberDayaPartai` DROP FOREIGN KEY `SumberDayaPartai_masterJabatanPimpinanAnakCabangId_fkey`;

-- DropForeignKey
ALTER TABLE `SumberDayaPartai` DROP FOREIGN KEY `SumberDayaPartai_masterJabatanPimpinanRantingId_fkey`;

-- DropForeignKey
ALTER TABLE `SumberDayaPartai` DROP FOREIGN KEY `SumberDayaPartai_masterKabKotId_fkey`;

-- DropForeignKey
ALTER TABLE `SumberDayaPartai` DROP FOREIGN KEY `SumberDayaPartai_masterKaderPartaiId_fkey`;

-- DropForeignKey
ALTER TABLE `SumberDayaPartai` DROP FOREIGN KEY `SumberDayaPartai_masterKecamatanId_fkey`;

-- DropForeignKey
ALTER TABLE `SumberDayaPartai` DROP FOREIGN KEY `SumberDayaPartai_masterNegaraId_fkey`;

-- DropForeignKey
ALTER TABLE `SumberDayaPartai` DROP FOREIGN KEY `SumberDayaPartai_masterProvinceId_fkey`;

-- DropForeignKey
ALTER TABLE `SumberDayaPartai` DROP FOREIGN KEY `SumberDayaPartai_masterSayapPartaiId_fkey`;

-- DropForeignKey
ALTER TABLE `SumberDayaPartai` DROP FOREIGN KEY `SumberDayaPartai_masterStatusKeanggotaanId_fkey`;

-- DropForeignKey
ALTER TABLE `SumberDayaPartai` DROP FOREIGN KEY `SumberDayaPartai_masterTingkatPengurusId_fkey`;

-- AlterTable
ALTER TABLE `Eksekutif` MODIFY `masterProvinceId` INTEGER NULL,
    MODIFY `masterKabKotId` INTEGER NULL,
    MODIFY `masterTingkatEksekutifId` INTEGER NULL,
    MODIFY `masterJabatanEksekutifProvinsiId` INTEGER NULL,
    MODIFY `masterJabatanEksekutifKabKotId` INTEGER NULL,
    MODIFY `masterJabatanEksekutifKabupatenId` INTEGER NULL,
    MODIFY `masterJabatanEksekutifKotaId` INTEGER NULL,
    MODIFY `masterStatusEksekutifId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Legislatif` MODIFY `masterProvinceId` INTEGER NULL,
    MODIFY `masterKabKotId` INTEGER NULL,
    MODIFY `masterTingkatLegislatifId` INTEGER NULL;

-- AlterTable
ALTER TABLE `SumberDayaPartai` MODIFY `masterStatusKeanggotaanId` INTEGER NULL,
    MODIFY `masterTingkatPengurusId` INTEGER NULL,
    MODIFY `masterJabatanId` INTEGER NULL,
    MODIFY `masterJabatanDewanPembinaId` INTEGER NULL,
    MODIFY `masterJabatanDewanPimpinanPusatId` INTEGER NULL,
    MODIFY `masterJabatanDewanPimpinanDaerahId` INTEGER NULL,
    MODIFY `masterJabatanDewanPimpinanCabangId` INTEGER NULL,
    MODIFY `masterJabatanPimpinanAnakCabangId` INTEGER NULL,
    MODIFY `masterJabatanPimpinanRantingId` INTEGER NULL,
    MODIFY `masterJabatanPerwakilanPartaiDiLuarNegeriId` INTEGER NULL,
    MODIFY `masterSayapPartaiId` INTEGER NULL,
    MODIFY `masterKaderPartaiId` INTEGER NULL,
    MODIFY `masterProvinceId` INTEGER NULL,
    MODIFY `masterKabKotId` INTEGER NULL,
    MODIFY `masterKecamatanId` INTEGER NULL,
    MODIFY `masterDesaId` INTEGER NULL,
    MODIFY `masterNegaraId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Eksekutif` ADD CONSTRAINT `Eksekutif_masterProvinceId_fkey` FOREIGN KEY (`masterProvinceId`) REFERENCES `MasterProvince`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eksekutif` ADD CONSTRAINT `Eksekutif_masterKabKotId_fkey` FOREIGN KEY (`masterKabKotId`) REFERENCES `MasterKabKot`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eksekutif` ADD CONSTRAINT `Eksekutif_masterTingkatEksekutifId_fkey` FOREIGN KEY (`masterTingkatEksekutifId`) REFERENCES `MasterTingkatEksekutif`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eksekutif` ADD CONSTRAINT `Eksekutif_masterJabatanEksekutifProvinsiId_fkey` FOREIGN KEY (`masterJabatanEksekutifProvinsiId`) REFERENCES `MasterJabatanEksekutifProvinsi`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eksekutif` ADD CONSTRAINT `Eksekutif_masterJabatanEksekutifKabKotId_fkey` FOREIGN KEY (`masterJabatanEksekutifKabKotId`) REFERENCES `MasterJabatanEksekutifKabKot`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eksekutif` ADD CONSTRAINT `Eksekutif_masterJabatanEksekutifKabupatenId_fkey` FOREIGN KEY (`masterJabatanEksekutifKabupatenId`) REFERENCES `MasterJabatanEksekutifKabupaten`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eksekutif` ADD CONSTRAINT `Eksekutif_masterJabatanEksekutifKotaId_fkey` FOREIGN KEY (`masterJabatanEksekutifKotaId`) REFERENCES `MasterJabatanEksekutifKota`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Eksekutif` ADD CONSTRAINT `Eksekutif_masterStatusEksekutifId_fkey` FOREIGN KEY (`masterStatusEksekutifId`) REFERENCES `MasterStatusEksekutif`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Legislatif` ADD CONSTRAINT `Legislatif_masterProvinceId_fkey` FOREIGN KEY (`masterProvinceId`) REFERENCES `MasterProvince`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Legislatif` ADD CONSTRAINT `Legislatif_masterKabKotId_fkey` FOREIGN KEY (`masterKabKotId`) REFERENCES `MasterKabKot`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Legislatif` ADD CONSTRAINT `Legislatif_masterTingkatLegislatifId_fkey` FOREIGN KEY (`masterTingkatLegislatifId`) REFERENCES `MasterTingkatLegislatif`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterStatusKeanggotaanId_fkey` FOREIGN KEY (`masterStatusKeanggotaanId`) REFERENCES `MasterStatusKeanggotaan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterTingkatPengurusId_fkey` FOREIGN KEY (`masterTingkatPengurusId`) REFERENCES `MasterTingkatPengurus`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterJabatanId_fkey` FOREIGN KEY (`masterJabatanId`) REFERENCES `MasterJabatan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterJabatanDewanPembinaId_fkey` FOREIGN KEY (`masterJabatanDewanPembinaId`) REFERENCES `MasterJabatanDewanPembina`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterJabatanDewanPimpinanPusatId_fkey` FOREIGN KEY (`masterJabatanDewanPimpinanPusatId`) REFERENCES `MasterJabatanDewanPimpinanPusat`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterJabatanDewanPimpinanDaerahId_fkey` FOREIGN KEY (`masterJabatanDewanPimpinanDaerahId`) REFERENCES `MasterJabatanDewanPimpinanDaerah`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterJabatanDewanPimpinanCabangId_fkey` FOREIGN KEY (`masterJabatanDewanPimpinanCabangId`) REFERENCES `MasterJabatanDewanPimpinanCabang`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterJabatanPimpinanAnakCabangId_fkey` FOREIGN KEY (`masterJabatanPimpinanAnakCabangId`) REFERENCES `MasterJabatanPimpinanAnakCabang`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterJabatanPimpinanRantingId_fkey` FOREIGN KEY (`masterJabatanPimpinanRantingId`) REFERENCES `MasterJabatanPimpinanRanting`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterJabatanPerwakilanPartaiDiLuarNegeriI_fkey` FOREIGN KEY (`masterJabatanPerwakilanPartaiDiLuarNegeriId`) REFERENCES `MasterJabatanPerwakilanPartaiDiluarNegeri`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterSayapPartaiId_fkey` FOREIGN KEY (`masterSayapPartaiId`) REFERENCES `MasterSayapPartai`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterKaderPartaiId_fkey` FOREIGN KEY (`masterKaderPartaiId`) REFERENCES `MasterKaderPartai`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterProvinceId_fkey` FOREIGN KEY (`masterProvinceId`) REFERENCES `MasterProvince`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterKabKotId_fkey` FOREIGN KEY (`masterKabKotId`) REFERENCES `MasterKabKot`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterKecamatanId_fkey` FOREIGN KEY (`masterKecamatanId`) REFERENCES `MasterKecamatan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterDesaId_fkey` FOREIGN KEY (`masterDesaId`) REFERENCES `MasterDesa`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SumberDayaPartai` ADD CONSTRAINT `SumberDayaPartai_masterNegaraId_fkey` FOREIGN KEY (`masterNegaraId`) REFERENCES `MasterNegara`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
