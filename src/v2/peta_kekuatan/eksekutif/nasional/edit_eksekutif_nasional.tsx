import { apiGetMaster } from "@/lib/api-get-master";
import { _loadTingkatEksekutif } from "@/load_data/eksekutif/load_tingkat_eksekutif";
import { sListEksekutif } from "@/s_state/eksekutif/s_list_eksekutif";
import { buttonSimpan } from "@/v2/component/button-toast";
import {
  Box,
  Button,
  Flex,
  Grid,
  Paper,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import COLOR from "../../../../../fun/WARNA";
import { ModelEksekutif } from "@/model/model_peta_kekuatan";
import { api } from "@/lib/api-backend";
import _ from "lodash";
import toast from "react-simple-toasts";
import { _dataEksekutifNasional, _dataSearchEksekutifNasional, _loadDataEksekutif } from "@/load_data/peta_kekuatan/load_eksekutif";
import { useAtom } from "jotai";

export const EditEksekutifNasionalV2 = ({ thisClosed, data }: any) => {
  const [dataEdit, setDataEdit] = useState<ModelEksekutif | null>(null);
  const [inputNamaLembaga, setInputNamaLembaga] = useState("");
  const [inputPeriode, setInputPeriode] = useState("");
  const [inputAlamatKantor, setInputAlamatKantor] = useState("");
  const [inputJabatanNasional, setInputJabatanNasional] = useState("");
  const [listDataNew, setListDataNew] = useAtom(_dataEksekutifNasional);
  const [inputSearch, setInputSearch] = useAtom(_dataSearchEksekutifNasional);

  const loadData = () => {
    fetch(api.apiEksekutifGetOne + `?id=${data}`)
      .then((v) => v.json())
      .then((v) => {
        setDataEdit(v);
      });
  }

  useShallowEffect(() => {
    loadData();
  }, []);

  const body = {
    id: dataEdit?.id,
    userId: dataEdit?.userId,
    masterTingkatEksekutifId: 1,
    namaLembaga: inputNamaLembaga ? inputNamaLembaga : dataEdit?.namaLembaga,
    periode: inputPeriode ? inputPeriode : dataEdit?.periode,
    alamatKantor: inputAlamatKantor ? inputAlamatKantor : dataEdit?.alamatKantor,
    jabatanNasional: inputJabatanNasional ? inputJabatanNasional : dataEdit?.jabatanNasional
  }

  const onEdit = () => {
    if (Object.values(body).includes("")) {
      return toast("Lengkapi Data");
    }
    // disini pengaplikasian api
    fetch(api.apiEksekutifUpdate, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(async (res) => {
      const data = await res.json();
      if (res.status === 201) {
        buttonSimpan();
        thisClosed();
        _loadDataEksekutif(1, inputSearch, setListDataNew);
      } else {
        toast(data.message);
      }
    });
  }

  if (dataEdit === undefined) return <></>
  return (
    <>
      {/* {JSON.stringify(dataEks)} */}
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={12}>
              <Text size={20} fw={"bold"}>
                Edit Data Eksekutif Nasional
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>

        <Box>
          <Flex direction={"column"}>
            {/* <Select
            placeholder="Tingkat Eksekutif"
            data={sListEksekutif.value.map((e) => ({
              value: e.id,
              label: e.name,
            }))}
            label="Tingkat Eksekutif"
            withAsterisk
            /> */}
            <TextInput
              placeholder={dataEdit?.namaLembaga}
              label="Nama Kementrian Lembaga"
              withAsterisk
              onChange={(val) => { setInputNamaLembaga(val.target.value) }}
            />
            <TextInput placeholder={dataEdit?.jabatanNasional} label="Jabatan" withAsterisk onChange={(val) => { setInputJabatanNasional(val.target.value) }} />
            <TextInput placeholder={dataEdit?.periode} label="Periode" withAsterisk onChange={(val) => { setInputPeriode(val.target.value) }} />
            {/* <TextInput placeholder="Nama" label="Nama" withAsterisk value={dataEdit?.User.DataDiri.name} />
              <TextInput placeholder="NIK" label="NIK" withAsterisk value={dataEdit?.User.DataDiri.nik} />
              <TextInput placeholder="Email" label="*Email*" withAsterisk value={dataEdit?.User.email} />
              <TextInput
                placeholder="Alamat Tinggal / Domisili"
                label="*Alamat Tinggal / Domisili*"
                withAsterisk
                value={dataEdit?.User.DataDiri.alamat}
              /> */}
            <TextInput
              placeholder={dataEdit?.alamatKantor}
              label="Alamat Kantor*"
              withAsterisk
              onChange={(val) => { setInputAlamatKantor(val.target.value) }}
            />
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
                  onEdit();
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
