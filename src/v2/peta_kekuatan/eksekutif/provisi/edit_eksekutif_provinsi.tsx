import { api } from "@/lib/api-backend";
import { apiGetMaster } from "@/lib/api-get-master";
import { _loadJabatanEksekutifProvinisi } from "@/load_data/eksekutif/load_jabatan_eksekutif";
import { _loadListPartai } from "@/load_data/load_list_partai";
import { _loadProvinsi } from "@/load_data/wilayah/load_provinsi";
import { _loadStatusEksekutif } from "@/load_data/eksekutif/load_status_eksekutif";
import { sJabatanEksekutifProvinsi } from "@/s_state/eksekutif/s_jabatan_eksekutif";
import { sListEksekutif } from "@/s_state/eksekutif/s_list_eksekutif";
import { sStatusEksekutif } from "@/s_state/eksekutif/s_status_eksekutif";
import { sListPartaiPengusung } from "@/s_state/s_list_partai_pengusung";
import { sProvinsi } from "@/s_state/wilayah/s_provinsi";
import { buttonSimpan } from "@/v2/component/button-toast";
import {
  Box,
  Button,
  Flex,
  Grid,
  MultiSelect,
  Paper,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import COLOR from "../../../../../fun/WARNA";

export const EditEksekutifProvinsiV2 = ({ thisClosed }: any) => {
  const [dataEks, setEks] = useState<any | []>([]);

  useShallowEffect(() => {
    _loadProvinsi();
    _loadListPartai();
    _loadJabatanEksekutifProvinisi();
    _loadStatusEksekutif();
  }, []);

 
  return (
    <>
      {/* {JSON.stringify(dataEks)} */}
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={12}>
              <Text size={20} fw={"bold"}>
                Edit Data Eksekutif Provinsi
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>
        <Box>
        <Flex direction={"column"}>
          <Select
            withAsterisk
            searchable
            label={"Pilih Provinsi"}
            placeholder={"Pilih Provinsi"}
            data={sProvinsi.value.map((e) => ({
              value: e.id,
              label: e.name,
            }))}
          />
          <Select
            withAsterisk
            label={"Pilih Jabatan"}
            placeholder={"Pilih Jabatan"}
            data={sJabatanEksekutifProvinsi.value.map((e) => ({
              value: e.id,
              label: e.name,
            }))}
          />
          <TextInput placeholder="Periode" label="Periode" withAsterisk />
          <TextInput placeholder="Nama" label="Nama" withAsterisk />
          <TextInput placeholder="NIK" label="NIK" withAsterisk />
          <TextInput placeholder="Email" label="*Email*" withAsterisk />
          <TextInput
            placeholder="Alamat Tinggal / Domisili"
            label="*Alamat Tinggal / Domisili*"
            withAsterisk
          />
          <TextInput
            placeholder="Alamat Kantor"
            label="Alamat Kantor"
            withAsterisk
          />
          <TextInput
            placeholder="No Handphone"
            label="No Handphone"
            withAsterisk
          />
          <TextInput placeholder="Facebook" label="Facebook" />
          <TextInput placeholder="Instagram" label="Instagram" />
          <TextInput placeholder="TikTok" label="TikTok" />
          <TextInput placeholder="Twitter" label="Twitter" />
          <Select
            data={sStatusEksekutif.value.map((e) => ({
              value: e.id,
              label: e.name,
            }))}
            label={"Pilih Status"}
            placeholder={"Pilih Status"}
            withAsterisk
          />
          <MultiSelect
            data={sListPartaiPengusung.value.map((e) => ({
              value: e.id,
              label: e.name,
            }))}
            label={"Pilih Partai"}
            placeholder={"Pilih Partai"}
            withAsterisk
          />
          <Box pt={20}>
            <Button
              w={100}
              color="orange.9"
              bg={COLOR.orange}
              radius={"xl"}
              onClick={() => {
                buttonSimpan();
                thisClosed();
              }}
            >
              Simpan
            </Button>
          </Box>
        </Flex>
      </Box>
      </Box>
    </>
  );
};
