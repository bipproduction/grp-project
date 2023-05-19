-- CreateTable
CREATE TABLE `AsetPartai` (
    `id` VARCHAR(191) NOT NULL,
    `systemId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `serialNumber` VARCHAR(191) NOT NULL,
    `pengguna` VARCHAR(191) NOT NULL,
    `penanggungJawab` VARCHAR(191) NOT NULL,
    `harga` DOUBLE NOT NULL,
    `tglPembelian` DATETIME(3) NOT NULL,
    `lokasiPembelian` VARCHAR(191) NOT NULL,
    `garansi` VARCHAR(191) NOT NULL,
    `statusAset` BOOLEAN NOT NULL DEFAULT true,
    `keterangan` VARCHAR(191) NOT NULL,
    `kategori` VARCHAR(191) NOT NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `AsetPartai_systemId_key`(`systemId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
