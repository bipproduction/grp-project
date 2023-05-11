import { api } from "@/lib/api-backend";
import { apiGetMaster } from "@/lib/api-get-master";
import {
  _loadJabatanEksekutifKabKot,
  _loadJabatanEksekutifKabupaten,
  _loadJabatanEksekutifKota,
} from "@/load_data/load_jabatan_eksekutif";
import { _loadKabkot } from "@/load_data/load_kabkot";
import { _loadListPartai } from "@/load_data/load_list_partai";
import { _loadProvinsi } from "@/load_data/load_provinsi";
import { _loadStatusEksekutif } from "@/load_data/load_status_eksekutif";
import {
  sJabatanEksekutifKabKot,
  sJabatanEksekutifKabupaten,
  sJabatanEksekutifKota,
} from "@/s_state/eksekutif/s_jabatan_eksekutif";
import { sListEksekutif } from "@/s_state/eksekutif/s_list_eksekutif";
import { sStatusEksekutif } from "@/s_state/eksekutif/s_status_eksekutif";
import { sKabkot } from "@/s_state/s_kabkot";
import { sListPartaiPengusung } from "@/s_state/s_list_partai_pengusung";
import { sProvinsi } from "@/s_state/s_provinsi";
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

export const EditEksekutifKabkotV2 = ({ thisClosed }: any) => {
  const [value, setValue] = useState<any>();

  useShallowEffect(() => {
    _loadProvinsi();
    _loadJabatanEksekutifKabKot();
    _loadJabatanEksekutifKota();
    _loadJabatanEksekutifKabupaten();
    _loadStatusEksekutif();
    _loadListPartai();
  }, []);
  return (
    <>
      {/* {JSON.stringify(dataEks)} */}
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={12}>
              <Text size={20} fw={"bold"}>
                Edit Data Eksekutif Kabupaten / Kota
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>
        <Box>
          <Flex direction={"column"}>
            {/* <TextInput placeholder="Nama Kementrian Lembaga" label="**" /> */}
            <Select
              label={"Pilih Jabatan Bupati / Walikota"}
              placeholder="Bupati / Walikota"
              data={sJabatanEksekutifKabKot.value.map((e) => ({
                value: e.name,
                label: e.name,
              }))}
              onChange={(val) => {
                //   console.log(val);
                if (val == "Walikota") {
                  setValue(
                    <Select
                      data={sJabatanEksekutifKota.value.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))}
                      placeholder={"Pilih Jabatan Kota"}
                      label="Pilih Jabatan Kota"
                      withAsterisk
                    />
                  );
                } else {
                  setValue(
                    <Select
                      data={sJabatanEksekutifKabupaten.value.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))}
                      placeholder={"Pilih Jabatan Kabupaten"}
                      label="Pilih Jabatan Kabupaten"
                      withAsterisk
                    />
                  );
                }
              }}
            />
            {value && <>{value}</>}

            <Select
              withAsterisk
              searchable
              label={"Pilih Provinsi"}
              placeholder={"Pilih Provinsi"}
              data={sProvinsi.value.map((e) => ({
                value: e.id,
                label: e.name,
              }))}
              onChange={_loadKabkot}
            />

            <Select
              withAsterisk
              searchable
              label={"Pilih Kab"}
              placeholder={"Pilih Kab"}
              data={sKabkot.value.map((e) => ({
                value: e.id,
                label: e.name,
              }))}
            />

            <TextInput placeholder="Periode" label="Periode" withAsterisk />
            <TextInput placeholder="Nama" label="Nama" withAsterisk />
            <TextInput placeholder="NIK" label="NIK" withAsterisk />
            <TextInput placeholder="Email" label="Email" withAsterisk />
            <TextInput
              placeholder="Alamat Tinggal / Domisili"
              label="Alamat Tinggal / Domisili"
              withAsterisk
            />
            <TextInput
              placeholder="Alamat Kantor"
              label="*Alamat Kantor"
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
              withAsterisk
              data={sListPartaiPengusung.value.map((e) => ({
                value: e.id,
                label: e.name,
              }))}
              label={"Pilih Partai Pengusung"}
              placeholder={"Pilih Partai Pengusung"}
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
