-- AlterTable
ALTER TABLE `CPTMediaSocial` MODIFY `name` VARCHAR(191) NULL,
    MODIFY `link` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `DPDDPCMediaSocial` MODIFY `name` VARCHAR(191) NULL,
    MODIFY `link` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Eksekutif` MODIFY `namaLembaga` VARCHAR(191) NULL DEFAULT '',
    MODIFY `periode` VARCHAR(191) NULL,
    MODIFY `alamatKantor` VARCHAR(191) NULL,
    MODIFY `jabatanNasional` VARCHAR(191) NULL DEFAULT '';

-- AlterTable
ALTER TABLE `Legislatif` MODIFY `jabatan` VARCHAR(191) NULL,
    MODIFY `periode` VARCHAR(191) NULL,
    MODIFY `noUrut` INTEGER NULL,
    MODIFY `dapil` VARCHAR(191) NULL,
    MODIFY `cakupanWilayah` VARCHAR(191) NULL,
    MODIFY `akd` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `SumberDayaPartai` MODIFY `alamatKantor` VARCHAR(191) NULL,
    MODIFY `waAdmin` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `UserMediaSocial` MODIFY `name` VARCHAR(191) NULL,
    MODIFY `link` VARCHAR(191) NULL;
