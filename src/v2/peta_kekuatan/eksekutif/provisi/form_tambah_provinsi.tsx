import { api } from "@/lib/api-backend";
import { _loadJabatanEksekutifProvinisi } from "@/load_data/eksekutif/load_jabatan_eksekutif";
import { _loadListPartai } from "@/load_data/load_list_partai";
import { _loadProvinsi } from "@/load_data/wilayah/load_provinsi";
import { _loadStatusEksekutif } from "@/load_data/eksekutif/load_status_eksekutif";
import { ModelProvinsi } from "@/model/model_wilayah";
import { sJabatanEksekutifProvinsi } from "@/s_state/eksekutif/s_jabatan_eksekutif";
import { sStatusEksekutif } from "@/s_state/eksekutif/s_status_eksekutif";
import { sListPartaiPengusung } from "@/s_state/s_list_partai_pengusung";
import { sProvinsi } from "@/s_state/wilayah/s_provinsi";
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
import { ModelEksekutifDataDiri } from "@/model/model_peta_kekuatan";
import toast from "react-simple-toasts";
import _ from "lodash";
import { _dataEksekutifProvinsi, _loadDataEksekutif } from "@/load_data/peta_kekuatan/load_eksekutif";
import { useAtom } from "jotai";

export const FormTambahEksekutifProvinsiV2 = ({
  tutupModal,
  setNilai,
}: any) => {
  const [dataDiri, setDataDiri] = useState<ModelEksekutifDataDiri | undefined>(undefined);
  const [inputNIK, setInputNIK] = useState("");
  const [inputProvince, setInputProvince] = useState<any | null>(null);
  const [inputJabatanProvince, setInputJabatanProvince] = useState<any | null>(null);
  const [inputStatusEksekutif, setInputStatusEksekutif] = useState<any | null>(null);
  const [inputPeriode, setInputPeriode] = useState("");
  const [inputAlamatKantor, setInputAlamatKantor] = useState("");
  const [listDataNew, setListDataNew] = useAtom(_dataEksekutifProvinsi);

  useShallowEffect(() => {
    _loadProvinsi();
    _loadListPartai();
    _loadJabatanEksekutifProvinisi();
    _loadStatusEksekutif();
  }, []);


  async function onFind() {
    const res = await fetch(api.apiDataDiriGetByNIK + `?nik=${inputNIK}`);
    const datanya = await res.json();

    if (datanya && !_.isEmpty(datanya)) {
      return setDataDiri(datanya);
    }

    setDataDiri(undefined);
    toast("Data tidak ditemukan");
  }


  const body = {
    userId: dataDiri?.User.id,
    masterTingkatEksekutifId: 2,
    masterProvinceId: inputProvince,
    masterJabatanEksekutifProvinsiId: inputJabatanProvince,
    masterStatusEksekutifId: inputStatusEksekutif,
    periode: inputPeriode,
    alamatKantor: inputAlamatKantor,
  }

  const onAdd = () => {
    if (Object.values(body).includes("")) {
      return toast("Lengkapi Data");
    }

    // disini pengaplikasian api
    fetch(api.apiEksekutifPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(async (res) => {
      const data = await res.json();
      if (res.status === 201) {
        buttonSimpan();
        tutupModal();
        _loadDataEksekutif(2, "", setListDataNew);
      } else {
        toast(data.message);
      }
    });

  }

  return (
    <>
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
            onChange={(val) => { setInputProvince(val) }}
          />
          <Select
            withAsterisk
            label={"Pilih Jabatan"}
            placeholder={"Pilih Jabatan"}
            data={sJabatanEksekutifProvinsi.value.map((e) => ({
              value: e.id,
              label: e.name,
            }))}
            onChange={(val) => { setInputJabatanProvince(val) }}
          />
          <TextInput placeholder="Periode" label="Periode" withAsterisk onChange={(val) => { setInputPeriode(val.target.value) }} />
          <TextInput placeholder="NIK" label="NIK" withAsterisk onChange={(val) => { setInputNIK(val.target.value) }} />
          <Button onClick={onFind}>Cek</Button>
          {dataDiri && (
            <>
              <TextInput placeholder="Nama" label="Nama" withAsterisk value={dataDiri.name} />
              <TextInput placeholder="Email" label="*Email*" withAsterisk value={dataDiri.User.email} />
              <TextInput
                placeholder="Alamat Tinggal / Domisili"
                label="*Alamat Tinggal / Domisili*"
                withAsterisk
                value={dataDiri.alamat}
              />
              <TextInput
                placeholder="Alamat Kantor"
                label="Alamat Kantor"
                withAsterisk
                onChange={(val) => { setInputAlamatKantor(val.target.value) }}
              />
              <TextInput
                placeholder="No Handphone"
                label="No Handphone"
                withAsterisk
                value={dataDiri.phoneNumber}
              />
              {/* <TextInput placeholder="Facebook" label="Facebook" />
              <TextInput placeholder="Instagram" label="Instagram" />
              <TextInput placeholder="TikTok" label="TikTok" />
              <TextInput placeholder="Twitter" label="Twitter" /> */}
              <Select
                data={sStatusEksekutif.value.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))}
                label={"Pilih Status"}
                placeholder={"Pilih Status"}
                withAsterisk
                onChange={(val) => { setInputStatusEksekutif(val) }}
              />
              {/* <MultiSelect
                data={sListPartaiPengusung.value.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))}
                label={"Pilih Partai"}
                placeholder={"Pilih Partai"}
                withAsterisk
              /> */}
              <Box pt={20}>
                <Button
                  w={100}
                  color="orange.9"
                  bg={COLOR.orange}
                  radius={"xl"}
                  onClick={() => {
                    onAdd();
                  }}
                >
                  Simpan
                </Button>
              </Box>
            </>
          )}
        </Flex>
      </Box>
    </>
  );
};
