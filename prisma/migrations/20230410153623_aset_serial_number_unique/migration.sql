/*
  Warnings:

  - You are about to drop the column `systemId` on the `asetpartai` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[serialNumber]` on the table `AsetPartai` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `AsetPartai_systemId_key` ON `asetpartai`;

-- AlterTable
ALTER TABLE `asetpartai` DROP COLUMN `systemId`;

-- CreateIndex
CREATE UNIQUE INDEX `AsetPartai_serialNumber_key` ON `AsetPartai`(`serialNumber`);
