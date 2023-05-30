import { buttonSimpan } from "@/v2/component/button-toast";
import { Box, Button, Flex, NumberInput, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import COLOR from "../../../../../fun/WARNA";
import { useState } from "react";
import { api } from "@/lib/api-backend";
import toast from "react-simple-toasts";
import _ from "lodash";
import { ModelEksekutifDataDiri } from "@/model/model_peta_kekuatan";
import { _dataEksekutifNasional, _loadDataEksekutif } from "@/load_data/peta_kekuatan/load_eksekutif";
import { useAtom } from "jotai";

export const FormTambahEksekutifNasionalV2 = ({
  tutupModal,
  setNilai,
}: any) => {
  const [dataDiri, setDataDiri] = useState<ModelEksekutifDataDiri | undefined>(undefined);
  const [inputNIK, setInputNIK] = useState("");
  const [inputNamaLembaga, setInputNamaLembaga] = useState("");
  const [inputPeriode, setInputPeriode] = useState("");
  const [inputAlamatKantor, setInputAlamatKantor] = useState("");
  const [inputJabatanNasional, setInputJabatanNasional] = useState("");
  const [listDataNew, setListDataNew] = useAtom(_dataEksekutifNasional);

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
    masterTingkatEksekutifId: 1,
    namaLembaga: inputNamaLembaga,
    periode: inputPeriode,
    alamatKantor: inputAlamatKantor,
    jabatanNasional: inputJabatanNasional
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
        _loadDataEksekutif(1, "", setListDataNew);
      } else {
        toast(data.message);
      }
    });

  }

  return (
    <>
      {/* {JSON.stringify(setNilai)} */}
      <Box>
        <Flex direction={"column"}>
          <TextInput
            placeholder="Nama Kementrian Lembaga"
            label="Nama Kementrian Lembaga"
            withAsterisk
            onChange={(val) => { setInputNamaLembaga(val.target.value) }}
          />
          <TextInput
            placeholder="Jabatan"
            label="Jabatan"
            withAsterisk
            onChange={(val) => { setInputJabatanNasional(val.target.value) }}
          />
          <TextInput placeholder="Periode" label="Periode" withAsterisk onChange={(val) => { setInputPeriode(val.target.value) }} />
          <TextInput placeholder="NIK" label="NIK" withAsterisk onChange={(val) => { setInputNIK(val.target.value) }} />
          <Button onClick={onFind}>Cek</Button>
          {dataDiri && (
            <>
              <TextInput placeholder="Nama" label="Nama" withAsterisk value={dataDiri.name} />
              <TextInput placeholder="Email" label="*Email*" withAsterisk value={dataDiri.User.email} />
              <TextInput
                value={dataDiri.alamat}
                placeholder="Alamat Tinggal / Domisili"
                label="*Alamat Tinggal / Domisili*"
                withAsterisk />
              <TextInput
                placeholder="Alamat Kantor"
                label="*Alamat Kantor*"
                withAsterisk
                onChange={(val) => { setInputAlamatKantor(val.target.value) }} />
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
              </Box></>
          )}
        </Flex>
      </Box>
    </>
  );
};

