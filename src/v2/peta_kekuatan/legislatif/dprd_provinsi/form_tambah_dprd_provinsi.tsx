import { _loadProvinsi } from "@/load_data/load_provinsi";
import { ModelProvinsi } from "@/model/model_wilayah";
import { sProvinsi } from "@/s_state/s_provinsi";
import { buttonSimpan } from "@/v2/component/button-toast";
import { Box, Button, Flex, Select, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import COLOR from "../../../../../fun/WARNA";

export const FormTambahLegislatifDprdProvinsiV2 = ({
  tutupModal,
  setNilai,
}: any) => {
  useShallowEffect(() => {
    _loadProvinsi();
  }, []);

  return (
    <>
      
      <Box>
        <Flex direction={"column"}>
          <TextInput placeholder="NIK" label="NIK" withAsterisk />
          <TextInput placeholder="Nama" label="Nama" withAsterisk />
          <Select
            placeholder="Nomoe Urut"
            label="Nomor Urut"
            data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]}
            withAsterisk
          />

          <Select
            withAsterisk
            placeholder="Pilih Provinsi"
            label="Pilih Provinsi"
            data={sProvinsi.value.map((v) => ({
              label: v.name,
              value: v.id,
            }))}
          />

          <TextInput placeholder="Dapil" label="Dapil" withAsterisk />
          <TextInput
            placeholder="Cakupan Wilayah"
            label="Cakupan Wilayah"
            withAsterisk
          />
          <TextInput
            placeholder="Komisi / AKD"
            label="Komisi / AKD"
            withAsterisk
          />
          <TextInput
            placeholder="Tempat Lahir"
            label="Tempat Lahir"
            withAsterisk
          />
          <DateInput placeholder="Tgl Lahir" label="Tgl Lahir" withAsterisk />
          <Select
            data={["Laki-laki", "Perempuan"]}
            placeholder="Jenis Kelamin"
            label="Jenis Kelamin"
            withAsterisk
          />
          <TextInput
            placeholder="No Handphone"
            label="No Handphone"
            withAsterisk
          />
          <TextInput placeholder="Alamat " label="Alamat" withAsterisk />
          <TextInput placeholder="Email" label="Email" withAsterisk />
          <TextInput placeholder="Periode" label="Periode" withAsterisk />
          <TextInput placeholder="Jabatan" label="Jabatan" withAsterisk />
          <TextInput placeholder="Facebook" label="Facebook" />
          <TextInput placeholder="Instagram" label="Instagram" />
          <TextInput placeholder="TikTok" label="TikTok" />
          <TextInput placeholder="Twitter" label="Twitter" />
          <Box pt={20}>
            <Button
              w={100}
              color="orange.9"
              bg={COLOR.orange}
              radius={"xl"}
              onClick={() => {
                buttonSimpan();
                tutupModal();
              }}
            >
              Simpan
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
