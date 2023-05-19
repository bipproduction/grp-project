/*
  Warnings:

  - You are about to drop the column `masterNomorUrutTPS` on the `TpsDpt` table. All the data in the column will be lost.
  - Added the required column `masterNomorUrutTPSId` to the `TpsDpt` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `TpsDpt` DROP FOREIGN KEY `TpsDpt_masterNomorUrutTPS_fkey`;

-- AlterTable
ALTER TABLE `TpsDpt` DROP COLUMN `masterNomorUrutTPS`,
    ADD COLUMN `masterNomorUrutTPSId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `TpsDpt` ADD CONSTRAINT `TpsDpt_masterNomorUrutTPSId_fkey` FOREIGN KEY (`masterNomorUrutTPSId`) REFERENCES `MasterNomorUrutTPS`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
