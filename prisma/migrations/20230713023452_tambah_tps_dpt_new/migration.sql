-- CreateTable
CREATE TABLE `TpsDptNew` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idProv` INTEGER NOT NULL,
    `namaProv` VARCHAR(191) NOT NULL,
    `idKab` INTEGER NOT NULL,
    `namaKab` VARCHAR(191) NOT NULL,
    `jumlahKec` INTEGER NOT NULL,
    `jumlahKel` INTEGER NOT NULL,
    `jumlahTps` INTEGER NOT NULL,
    `jumlahTpsDptb` INTEGER NOT NULL,
    `lakilaki` INTEGER NOT NULL,
    `perempuan` INTEGER NOT NULL,
    `jumlah` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
