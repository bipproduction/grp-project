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
import { ModelEksekutif } from "@/model/model_peta_kekuatan";
import toast from "react-simple-toasts";
import { _dataEksekutifProvinsi, _dataSearchEksekutifProvinsi, _loadDataEksekutif } from "@/load_data/peta_kekuatan/load_eksekutif";
import { useAtom } from "jotai";

export const EditEksekutifProvinsiV2 = ({ thisClosed, data }: any) => {
  const [dataEdit, setDataEdit] = useState<ModelEksekutif | null>(null);
  const [dataEks, setEks] = useState<any | []>([]);
  const [inputProvince, setInputProvince] = useState<any | null>(null);
  const [inputJabatanProvince, setInputJabatanProvince] = useState<any | null>(null);
  const [inputStatusEksekutif, setInputStatusEksekutif] = useState<any | null>(null);
  const [inputPeriode, setInputPeriode] = useState<any | null>(null);
  const [inputAlamatKantor, setInputAlamatKantor] = useState<any | null>(null);
  const [listDataNew, setListDataNew] = useAtom(_dataEksekutifProvinsi);
  const [inputSearch, setInputSearch] = useAtom(_dataSearchEksekutifProvinsi);

  const loadData = () => {
    fetch(api.apiEksekutifGetOne + `?id=${data}`)
      .then((v) => v.json())
      .then((v) => {
        setDataEdit(v);
      });
  }

  useShallowEffect(() => {
    loadData();
    _loadProvinsi();
    _loadListPartai();
    _loadJabatanEksekutifProvinisi();
    _loadStatusEksekutif();
  }, []);


  const body = {
    id: dataEdit?.id,
    userId: dataEdit?.userId,
    masterTingkatEksekutifId: 2,
    masterProvinceId: inputProvince ? inputProvince : dataEdit?.MasterProvince?.id,
    masterJabatanEksekutifProvinsiId: inputJabatanProvince ? inputJabatanProvince : dataEdit?.MasterJabatanEksekutifProvinsi?.id,
    masterStatusEksekutifId: inputStatusEksekutif ? inputStatusEksekutif : dataEdit?.MasterStatusEksekutif?.id,
    periode: inputPeriode ? inputPeriode : dataEdit?.periode,
    alamatKantor: inputAlamatKantor ? inputAlamatKantor : dataEdit?.alamatKantor,
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
        _loadDataEksekutif(2, inputSearch, setListDataNew);
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
              placeholder={dataEdit?.MasterProvince?.name}
              data={sProvinsi.value.map((e) => ({
                value: e.id,
                label: e.name,
              }))}
              onChange={(val) => {
                setInputProvince(val);
              }}
            />
            <Select
              withAsterisk
              label={"Pilih Jabatan"}
              placeholder={dataEdit?.MasterJabatanEksekutifProvinsi?.name}
              data={sJabatanEksekutifProvinsi.value.map((e) => ({
                value: e.id,
                label: e.name,
              }))}
              onChange={(val) => {
                setInputJabatanProvince(val)
              }}
            />
            <TextInput placeholder={dataEdit?.periode} label="Periode" withAsterisk onChange={(val) => {
              setInputPeriode(val.target.value)
            }} />
            {/* <TextInput placeholder="Nama" label="Nama" withAsterisk />
            <TextInput placeholder="NIK" label="NIK" withAsterisk />
            <TextInput placeholder="Email" label="*Email*" withAsterisk />
            <TextInput
              placeholder="Alamat Tinggal / Domisili"
              label="*Alamat Tinggal / Domisili*"
              withAsterisk
            /> */}
            <TextInput
              placeholder={dataEdit?.alamatKantor}
              label="Alamat Kantor"
              withAsterisk
              onChange={(val) => {
                setInputAlamatKantor(val.target.value)
              }}
            />
            {/* <TextInput
              placeholder="No Handphone"
              label="No Handphone"
              withAsterisk
            />
            <TextInput placeholder="Facebook" label="Facebook" />
            <TextInput placeholder="Instagram" label="Instagram" />
            <TextInput placeholder="TikTok" label="TikTok" />
            <TextInput placeholder="Twitter" label="Twitter" /> */}
            <Select
              data={sStatusEksekutif.value.map((e) => ({
                value: e.id,
                label: e.name,
              }))}
              label={"Pilih Status"}
              placeholder={dataEdit?.MasterStatusEksekutif?.name}
              withAsterisk
              onChange={(val) => {
                setInputStatusEksekutif(val)
              }}
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
