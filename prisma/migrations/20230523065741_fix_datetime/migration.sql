-- AlterTable
ALTER TABLE `AsetPartai` MODIFY `tglPembelian` DATE NOT NULL;

-- AlterTable
ALTER TABLE `CalonPemilihPotensial` MODIFY `tanggalLahir` DATE NOT NULL;

-- AlterTable
ALTER TABLE `DataDiri` MODIFY `tanggalLahir` DATE NOT NULL;

-- AlterTable
ALTER TABLE `RencanaKunjunganGerindra` MODIFY `tanggal` DATE NOT NULL;

-- AlterTable
ALTER TABLE `RencanaKunjunganPrabowo` MODIFY `tanggal` DATE NOT NULL;
