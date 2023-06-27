-- CreateTable
CREATE TABLE `Prov` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `value1` VARCHAR(191) NULL,
    `value2` VARCHAR(191) NULL,
    `urut` INTEGER NULL,

    UNIQUE INDEX `Prov_urut_key`(`urut`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kab` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `provId` INTEGER NULL,
    `value1` VARCHAR(191) NULL,
    `value2` VARCHAR(191) NULL,
    `kabPro` VARCHAR(191) NULL,
    `urut` INTEGER NULL,

    UNIQUE INDEX `Kab_kabPro_key`(`kabPro`),
    UNIQUE INDEX `Kab_urut_key`(`urut`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kec` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `kabId` INTEGER NULL,
    `value1` VARCHAR(191) NULL,
    `value2` VARCHAR(191) NULL,
    `kecKab` VARCHAR(191) NULL,
    `urut` INTEGER NULL,

    UNIQUE INDEX `Kec_kecKab_key`(`kecKab`),
    UNIQUE INDEX `Kec_urut_key`(`urut`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `kecId` INTEGER NULL,
    `value1` VARCHAR(191) NULL,
    `value2` VARCHAR(191) NULL,
    `kelKec` VARCHAR(191) NULL,
    `urut` INTEGER NULL,

    UNIQUE INDEX `Kel_kelKec_key`(`kelKec`),
    UNIQUE INDEX `Kel_urut_key`(`urut`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Kab` ADD CONSTRAINT `Kab_provId_fkey` FOREIGN KEY (`provId`) REFERENCES `Prov`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Kec` ADD CONSTRAINT `Kec_kabId_fkey` FOREIGN KEY (`kabId`) REFERENCES `Kab`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Kel` ADD CONSTRAINT `Kel_kecId_fkey` FOREIGN KEY (`kecId`) REFERENCES `Kec`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
