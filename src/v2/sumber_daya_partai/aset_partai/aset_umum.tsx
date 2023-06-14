import {
  _loadKategoriAset,
  _loadStatusAset,
} from "@/load_data/sumber_daya_partai/aset_partai/load_aset_partai";
import {
  sKategoriAset,
  sStatusAset,
} from "@/s_state/sumber_daya_partai/s_aset";
import {
  Box,
  Flex,
  NumberInput,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";

export const AsetUmumV2 = () => {
  useShallowEffect(() => {
    _loadKategoriAset();
    _loadStatusAset();
  }, []);

  const formEditAset = useForm({
    initialValues: {
      data: {
        namaAset: "",
        nomorSeri: "",
        pengguna: "",
        penanggungJawab: "",
        harga: "",
        tanggalPembelian: "",
        lokasiPembelian: "",
        garansi: "",
        statusAset: "",
        keteranagnAset: "",
        kategoriAset: "",
        deskripsiAset: "",
      },
    },
  });

  return (
    <>
    <Box>

      <Box>
        <Flex direction={"column"}>
          <TextInput
            placeholder="Nama Aset"
            label="Nama Aset"
            withAsterisk
            {...formEditAset.getInputProps(`data.namaAset`)}
          />
          <TextInput
            placeholder="Nomor Serial"
            label="Nomor Serial"
            withAsterisk
            {...formEditAset.getInputProps(`data.nomorSeri`)}
          />
          <TextInput
            placeholder="Pengguna"
            label="Pengguna"
            withAsterisk
            {...formEditAset.getInputProps(`data.pengguna`)}
          />
          <TextInput
            placeholder="Penangung Jawab"
            label="Penangung Jawab"
            withAsterisk
            {...formEditAset.getInputProps(`data.penanggungJawab`)}
          />
          <NumberInput
            placeholder="Harga"
            label="Harga"
            withAsterisk
            {...formEditAset.getInputProps(`data.harga`)}
          />
          <DateInput
            placeholder="Tanggal Pembelian"
            label="Tanggal Pembelian"
            withAsterisk
            {...formEditAset.getInputProps(`data.tanggalPembelian`)}
          />
          <TextInput
            placeholder="Lokasi Pembelian"
            label="Lokasi Pembelian"
            withAsterisk
            {...formEditAset.getInputProps(`data.lokasiPembelian`)}
          />
          <TextInput
            placeholder="Garansi"
            label="Garansi"
            withAsterisk
            {...formEditAset.getInputProps(`data.garansi`)}
          />
        </Flex>
      </Box>
      <Box>
        <Flex direction={"column"}>
          <Select
            data={sStatusAset.value.map((e) => ({
              label: e.name,
              value: e.id,
            }))}
            placeholder={"Status Aset"}
            label={"Status Aset"}
            withAsterisk
            {...formEditAset.getInputProps(`data.statusAset`)}
          />
          <Textarea
            placeholder="Bergerak, contoh: dengan kondisi ban belakang kurang angin, dll"
            label="Keterangan Status"
            
            autosize
            minRows={2}
            maxRows={4}
            withAsterisk
            {...formEditAset.getInputProps(`data.keteranagnAset`)}
          />

          <Select
            data={sKategoriAset.value.map((e) => ({
              label: e.name,
              value: e.id,
            }))}
            placeholder={"Kategori Aset"}
            label={"Kategori Aset"}
            withAsterisk
            {...formEditAset.getInputProps(`data.kategoriAset`)}
          />
          <Textarea
            placeholder="contoh: barang berwarna merah, memiliki ban serep 2, dll"
            label="Deskripsi Aset"
            autosize
            minRows={2}
            maxRows={4}
            withAsterisk
            {...formEditAset.getInputProps(`data.deskripsiAset`)}
          />
        </Flex>
      </Box>
    </Box>

    </>
  );
};
