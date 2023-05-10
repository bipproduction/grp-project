import { api } from "@/lib/api-backend";
import { apiGetMaster } from "@/lib/api-get-master";
import { sListEksekutif } from "@/s_state/s_list_eksekutif";
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
    loadLevelEksekutif();
    loadDataProvinsi();
    loadJabatanProv()
    loadStatus()
    loadDataPartai()
  }, []);

  async function loadLevelEksekutif() {
    const res = await fetch(apiGetMaster.apiGetTingkatEksekutif)
      .then((res) => res.json())
      .then((val) => setEks(Object.values(val).map((e: any) => e.name)));
  }

  const [prov, setProv] = useState<any | []>([]);
  const [dataJab, setJab]= useState<any>([])
  const [dataStatus, setStatus] = useState<any>([])
  const [dataPartai, setPartai] = useState<any>([])


  async function loadDataProvinsi() {
    const res = await fetch(
        api.apiMasterProvinsiGetAll
    )
      .then((res) => res.json())
      .then((val) => setProv(Object.values(val).map((e: any) => e.name)));
  }

  async function loadJabatanProv(){
    const res = await fetch("/api/get/peta-kekuatan/api-get-jabatan-eksekutif-provinsi")
    .then((res) => res.json())
    .then((val) => setJab(Object.values(val).map((e: any) => e.name)))
  }

  async function loadStatus() {
    const res = await fetch("/api/get/peta-kekuatan/api-get-status-eksekutif")
    .then((res) => res.json()
    .then((val) => setStatus(Object.values(val).map((e : any) => e.name))))
  }

  async function loadDataPartai() {
    const res = await fetch("/api/get/peta-kekuatan/api-get-partai-pengusung")
    .then((res) => res.json())
    .then((val) => setPartai((Object.values(val).map((e : any) => e.name))))
  }
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
        <Box pt={20}>
        <Flex direction={"column"}>
          {/* <TextInput placeholder="Nama Kementrian Lembaga" label="**" /> */}
          <Select label={"**"} placeholder={"Pilih Provinsi"} data={prov} />
          <Select label={"**"} placeholder={"Pilih Jabtan"} data={dataJab} />
          <TextInput placeholder="Periode" label="**" />
          <TextInput placeholder="Nama" label=" " />
          <TextInput placeholder="NIK" label=" " />
          <TextInput placeholder="Email" label="**" />
          <TextInput placeholder="Alamat Tinggal / Domisili" label="**" />
          <TextInput placeholder="Alamat Kantor" label="**" />
          <TextInput placeholder="No Handphone" label="**" />
          <TextInput placeholder="Media Sosial" label=" " />
          <Select
          data={dataStatus}
          label={"**"}
          placeholder={"Pilih Status"}
          />
          <MultiSelect
          data={dataPartai}
          label={"**"}
          placeholder={"Pilih Partai"}
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
