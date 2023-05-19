/*
  Warnings:

  - You are about to drop the column `jenisKelamin` on the `DataDiri` table. All the data in the column will be lost.
  - Added the required column `masterJenisKelaminId` to the `DataDiri` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `DataDiri` DROP COLUMN `jenisKelamin`,
    ADD COLUMN `masterJenisKelaminId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `DataDiri` ADD CONSTRAINT `DataDiri_masterJenisKelaminId_fkey` FOREIGN KEY (`masterJenisKelaminId`) REFERENCES `MasterJenisKelamin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
