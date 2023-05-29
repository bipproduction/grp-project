import { api } from "@/lib/api-backend";
import { apiGetMaster } from "@/lib/api-get-master";
import {
  _loadJabatanEksekutifKabKot,
  _loadJabatanEksekutifKabupaten,
  _loadJabatanEksekutifKota,
} from "@/load_data/eksekutif/load_jabatan_eksekutif";
import { _loadKabkot } from "@/load_data/wilayah/load_kabkot";
import { _loadListPartai } from "@/load_data/load_list_partai";
import { _loadProvinsi } from "@/load_data/wilayah/load_provinsi";
import { _loadStatusEksekutif } from "@/load_data/eksekutif/load_status_eksekutif";
import {
  sJabatanEksekutifKabKot,
  sJabatanEksekutifKabupaten,
  sJabatanEksekutifKota,
} from "@/s_state/eksekutif/s_jabatan_eksekutif";
import { sListEksekutif } from "@/s_state/eksekutif/s_list_eksekutif";
import { sStatusEksekutif } from "@/s_state/eksekutif/s_status_eksekutif";
import { sKabkot } from "@/s_state/wilayah/s_kabkot";
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

export const EditEksekutifKabkotV2 = ({ thisClosed, data }: any) => {
  console.log(data);
  const [value, setValue] = useState<any>();
  const [dataEdit, setDataEdit] = useState<ModelEksekutif | null>(null);
  const [inputProvince, setInputProvince] = useState<any | null>(null);
  const [inputKabKot, setInputKabKot] = useState<any | null>(null);
  const [inputJabatanProvince, setInputJabatanProvince] = useState<any | null>(null);
  const [inputJabatanKabKot, setInputJabatanKabKot] = useState<any | null>(null);
  const [inputJabatanKabupaten, setInputJabatanKabupaten] = useState<any | null>(null);
  const [inputJabatanKota, setInputJabatanKota] = useState<any | null>(null);
  const [inputStatusEksekutif, setInputStatusEksekutif] = useState<any | null>(null);
  const [inputPeriode, setInputPeriode] = useState("");
  const [inputAlamatKantor, setInputAlamatKantor] = useState("");

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
    _loadJabatanEksekutifKabKot();
    _loadJabatanEksekutifKota();
    _loadJabatanEksekutifKabupaten();
    _loadStatusEksekutif();
    _loadListPartai();
  }, []);

  const body = {
    id: dataEdit?.id,
    userId: dataEdit?.userId,
    masterTingkatEksekutifId: 3,
    masterProvinceId: inputProvince ? inputProvince : dataEdit?.MasterProvince?.id,
    masterKabKotId: inputKabKot ? inputKabKot : dataEdit?.MasterKabKot?.id,
    masterJabatanEksekutifKabKotId: inputJabatanKabKot ? inputJabatanKabKot : dataEdit?.masterJabatanEksekutifKabKotId,
    masterJabatanEksekutifKabupatenId: inputJabatanKabupaten ? inputJabatanKabupaten : dataEdit?.MasterJabatanEksekutifKabupaten?.id,
    masterJabatanEksekutifKotaId: inputJabatanKota ? inputJabatanKota : dataEdit?.MasterJabatanEksekutifKota?.id,
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
              placeholder={dataEdit?.MasterJabatanEksekutifKabKot?.name}
              data={sJabatanEksekutifKabKot.value.map((e) => ({
                value: e.id,
                label: e.name,
              }))}
              onChange={(val) => {
                setInputJabatanKabKot(val)
                if (val == "2") {
                  setValue(
                    <Select
                      data={sJabatanEksekutifKota.value.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))}
                      placeholder={dataEdit?.MasterJabatanEksekutifKota?.name}
                      label="Pilih Jabatan Kota"
                      withAsterisk
                      onChange={(val) => {
                        setInputJabatanKota(val);
                        setInputJabatanKabupaten(null);
                      }}
                    />
                  );
                } else {
                  setValue(
                    <Select
                      data={sJabatanEksekutifKabupaten.value.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))}
                      placeholder={dataEdit?.MasterJabatanEksekutifKabupaten?.name}
                      label="Pilih Jabatan Kabupaten"
                      withAsterisk
                      onChange={() => {
                        setInputJabatanKota(null);
                        setInputJabatanKabupaten(val);
                      }}
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
              placeholder={dataEdit?.MasterProvince?.name}
              data={sProvinsi.value.map((e) => ({
                value: e.id,
                label: e.name,
              }))}
              onChange={(val) => {
                _loadKabkot
                setInputProvince(val);
              }}
            />

            <Select
              withAsterisk
              searchable
              label={"Pilih Kabupaten"}
              placeholder={dataEdit?.MasterKabKot?.name}
              data={sKabkot.value.map((e) => ({
                value: e.id,
                label: e.name,
              }))}
              onChange={(val) => {
                setInputKabKot(val);
              }}
            />

            <TextInput placeholder={dataEdit?.periode} label="Periode" withAsterisk onChange={(val) => { setInputPeriode(val.target.value) }} />
            {/* <TextInput placeholder="Nama" label="Nama" withAsterisk />
            <TextInput placeholder="NIK" label="NIK" withAsterisk />
            <TextInput placeholder="Email" label="Email" withAsterisk />
            <TextInput
              placeholder="Alamat Tinggal / Domisili"
              label="Alamat Tinggal / Domisili"
              withAsterisk
            /> */}
            <TextInput
              placeholder={dataEdit?.alamatKantor}
              label="*Alamat Kantor"
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
              withAsterisk
              data={sListPartaiPengusung.value.map((e) => ({
                value: e.id,
                label: e.name,
              }))}
              label={"Pilih Partai Pengusung"}
              placeholder={"Pilih Partai Pengusung"}
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
