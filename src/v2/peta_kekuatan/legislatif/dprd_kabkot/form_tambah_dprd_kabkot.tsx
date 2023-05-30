import { _loadKabkot } from "@/load_data/wilayah/load_kabkot";
import { _loadProvinsi } from "@/load_data/wilayah/load_provinsi";
import { ModelProvinsi } from "@/model/model_wilayah";
import { sKabkot } from "@/s_state/wilayah/s_kabkot";
import { sProvinsi } from "@/s_state/wilayah/s_provinsi";
import { buttonSimpan } from "@/v2/component/button-toast";
import { Box, Button, Flex, Select, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import COLOR from "../../../../../fun/WARNA";
import { ModelEksekutifDataDiri } from "@/model/model_peta_kekuatan";
import { api } from "@/lib/api-backend";
import toast from "react-simple-toasts";
import _ from "lodash";
import { _loadSelectKabkot } from "@/load_data/wilayah/load_selected_wilayah";
import { useAtom } from "jotai";
import { _kabupaten, _provinsi, _selected_Kabkot, _selected_Provinisi } from "@/s_state/wilayah/select_wilayah";

export const FormTambahLegislatifDprdKabkotV2 = ({
  tutupModal,
  setNilai,
}: any) => {
  const [dataDiri, setDataDiri] = useState<ModelEksekutifDataDiri | undefined>(undefined);
  const [inputNIK, setInputNIK] = useState("");
  const [inputProvince, setInputProvince] = useState<any | null>(null);
  const [inputKabKot, setInputKabKot] = useState<any | null>(null);
  const [inputJabatan, setInputJabatan] = useState("");
  const [inputPeriode, setInputPeriode] = useState("");
  const [inputNoUrut, setInputNoUrut] = useState<any | null>(null);
  const [inputDapil, setInputDapil] = useState("");
  const [inputCakupanWilayah, setInputCakupanWilayah] = useState("");
  const [inputAkd, setInputAkd] = useState("");
  const [isProvinsi, setIsProvinsi] = useAtom(_provinsi);
  const [selectProvince, setSelectProvince] = useAtom(_selected_Provinisi);
  const [isKabupaten, setIsKabupaten] = useAtom(_kabupaten);
  const [selectKabupaten, setSelectKabupaten] = useAtom(_selected_Kabkot);


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
    masterTingkatLegislatifId: 3,
    masterProvinceId: inputProvince,
    masterKabKotId: inputKabKot,
    jabatan: inputJabatan,
    periode: inputPeriode,
    noUrut: Number(inputNoUrut),
    dapil: inputDapil,
    cakupanWilayah: inputCakupanWilayah,
    akd: inputAkd
  }

  useShallowEffect(() => {
    _loadProvinsi();
  }, []);

  const onAdd = () => {
    if (Object.values(body).includes("")) {
      return toast("Lengkapi Data");
    }

    // disini pengaplikasian api
    fetch(api.apiLegislatifPost, {
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
      } else {
        toast(data.message);
      }
    });
  }

  return (
    <>
      {/* {JSON.stringify(sListProvinsi.value)} */}
      <Box>
        <Flex direction={"column"}>
          <Select
            withAsterisk
            placeholder="Pilih Provinsi"
            label="Pilih Provinsi"
            data={sProvinsi.value.map((v) => ({
              label: v.name,
              value: v.id,
            }))}
            onChange={(val: any) => {
              setInputProvince(val);
              setSelectProvince(
                isProvinsi.find((e) => e.id == val)
              );
              _loadSelectKabkot(val, setIsKabupaten, setSelectKabupaten);
            }}
          />

          <Select
            withAsterisk
            placeholder="Pilih Kabupaten"
            label="Pilih Kabupaten"
            data={
              _.isEmpty(isKabupaten)
                ? []
                : isKabupaten.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))
            }
            onChange={(val) => {
              setInputKabKot(val);
            }}
          />

          <TextInput placeholder="Dapil" label="Dapil" withAsterisk onChange={(val) => { setInputDapil(val.target.value) }} />
          <TextInput
            placeholder="Cakupan Wilayah"
            label="Cakupan Wilayah"
            withAsterisk
            onChange={(val) => { setInputCakupanWilayah(val.target.value) }}
          />
          <TextInput
            placeholder="Komisi / AKD"
            label="Komisi / AKD"
            withAsterisk
            onChange={(val) => { setInputAkd(val.target.value) }}
          />
          <Select
            placeholder="Nomor Urut"
            label="Nomor Urut"
            data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]}
            withAsterisk
            onChange={(val) => { setInputNoUrut(val) }}
          />
          <TextInput placeholder="Periode" label="Periode" withAsterisk onChange={(val) => { setInputPeriode(val.target.value) }} />
          <TextInput placeholder="Jabatan" label="Jabatan" withAsterisk onChange={(val) => { setInputJabatan(val.target.value) }} />
          <TextInput placeholder="NIK" label="NIK" withAsterisk onChange={(val) => { setInputNIK(val.target.value) }} />
          <Button onClick={onFind}>Cek</Button>
          {dataDiri && (
            <>
              <TextInput placeholder="Nama" label="Nama" withAsterisk value={dataDiri.name}/>

              {/* <TextInput
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
                  /> */}
              <TextInput
                placeholder="No Handphone"
                label="No Handphone"
                withAsterisk
                value={dataDiri.phoneNumber}
              />
              <TextInput placeholder="Alamat " label="Alamat" withAsterisk value={dataDiri.alamat} />
              <TextInput placeholder="Email" label="Email" withAsterisk  value={dataDiri.User.email}/>

              {/* <TextInput placeholder="Facebook" label="Facebook" />
                    <TextInput placeholder="Instagram" label="Instagram" />
                    <TextInput placeholder="TikTok" label="TikTok" />
                    <TextInput placeholder="Twitter" label="Twitter" /> */}
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
