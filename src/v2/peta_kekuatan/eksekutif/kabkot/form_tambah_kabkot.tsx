import { api } from "@/lib/api-backend";
import { _loadKabkot } from "@/load_data/load_kabkot";
import { _loadProvinsi } from "@/load_data/load_provinsi";
import { ModelProvinsi } from "@/model/model_wilayah";
import { sKabkot } from "@/s_state/s_kabkot";
import { sProvinsi } from "@/s_state/s_provinsi";
import { buttonSimpan } from "@/v2/component/button-toast";
import {
  Box,
  Button,
  Flex,
  MultiSelect,
  NumberInput,
  Select,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import COLOR from "../../../../../fun/WARNA";

export const FormTambahEksekutifKabKotV2 = ({ tutupModal, setNilai }: any) => {
  const [value, setValue] = useState<any>();
  // const [prov, setProv] = useState<any[]>([]);
  // const [kab, setKab] = useState<any[]>([]);

  const [dataJab, setJab] = useState<any>([]);
  const [dataStatus, setStatus] = useState<any>([]);
  const [dataPartai, setPartai] = useState<any>([]);
  const [isKota, setKota] = useState<any>([]);
  const [isKabupaten, setKabupaten] = useState<any>([]);

  useShallowEffect(() => {
    _loadProvinsi();
    loadJabatanKabkot();
    loadStatus();
    loadDataPartai();
    loadJabatanKota();
    loadJabatanKabupaten();
  }, []);

  // async function loadDataProvinsi() {
  //   const res = await fetch(api.apiMasterProvinsiGetAll)
  //     .then((res) => res.json())
  //     .then(setProv);
  // }

  // async function laodDataKabupaten(idProvinsi: string) {
  //   const res = await fetch(
  //     api.apiMasterKabkotByProvinsi + `?idProvinsi=${idProvinsi}`
  //   )
  //     .then((res) => res.json())
  //     .then(setKab);
  // }

  async function loadJabatanKabkot() {
    const res = await fetch(
      "/api/get/peta-kekuatan/api-get-jabatan-eksekutif-kabkot"
    )
      .then((res) => res.json())
      .then((val) => setJab(Object.values(val).map((e: any) => e.name)));
  }

  async function loadStatus() {
    const res = await fetch(
      "/api/get/peta-kekuatan/api-get-status-eksekutif"
    ).then((res) =>
      res
        .json()
        .then((val) => setStatus(Object.values(val).map((e: any) => e.name)))
    );
  }

  async function loadDataPartai() {
    const res = await fetch("/api/get/peta-kekuatan/api-get-partai-pengusung")
      .then((res) => res.json())
      .then((val) => setPartai(Object.values(val).map((e: any) => e.name)));
  }

  async function loadJabatanKota() {
    const res = await fetch(
      "/api/get/peta-kekuatan/api-get-jabatan-eksekutif-kota"
    )
      .then((res) => res.json())
      .then((val) => setKota(Object.values(val).map((e: any) => e.name)));
  }

  async function loadJabatanKabupaten() {
    const res = await fetch(
      "/api/get/peta-kekuatan/api-get-jabatan-eksekutif-kabupaten"
    )
      .then((res) => res.json())
      .then((val) => setKabupaten(Object.values(val).map((e: any) => e.name)));
  }

  return (
    <>
      {/* {JSON.stringify(sProvinsi.value.map((e) => e.name))} */}
      {/* {JSON.stringify(sKabkot.value.map((e) => e.name))} */}
      <Box>
        <Flex direction={"column"}>
          {/* <TextInput placeholder="Nama Kementrian Lembaga" label="**" /> */}
          <Select
            label={"**"}
            placeholder="Pilih Tingkat"
            data={dataJab}
            onChange={(val) => {
              //   console.log(val);
              if (val == "Walikota") {
                setValue(
                  <Select
                    data={isKota}
                    placeholder={"Pilih Jabatan"}
                    label="**"
                  />
                );
              } else {
                setValue(
                  <Select
                    data={isKabupaten}
                    placeholder={"Pilih Jabatan"}
                    label="**"
                  />
                );
              }
            }}
          />
          {value && <>{value}</>}

          <Select
            searchable
            label={"**"}
            placeholder={"Pilih Provinsi"}
            data={sProvinsi.value.map((e) => ({
              value: e.id,
              label: e.name,
            }))}
            onChange={_loadKabkot}
          />

          <Select
          
          
            searchable
            label={"**"}
            placeholder={"Pilih Kab"}
            data={sKabkot.value.map((e) => ({
              value: e.id,
              label: e.name,
            }))}
          />

          <TextInput placeholder="Periode" label="**" />
          <TextInput placeholder="Nama" label=" " />
          <TextInput placeholder="NIK" label=" " />
          <TextInput placeholder="Email" label="**" />
          <TextInput placeholder="Alamat Tinggal / Domisili" label="**" />
          <TextInput placeholder="Alamat Kantor" label="**" />
          <TextInput placeholder="No Handphone" label="**" />
          <TextInput placeholder="Media Sosial" label=" " />
          <Select data={dataStatus} label={"**"} placeholder={"Pilih Status"} />
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
