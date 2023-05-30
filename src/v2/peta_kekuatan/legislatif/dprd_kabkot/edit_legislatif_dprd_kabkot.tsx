import { _loadKabkot } from "@/load_data/wilayah/load_kabkot";
import { _loadProvinsi } from "@/load_data/wilayah/load_provinsi";
import { sKabkot } from "@/s_state/wilayah/s_kabkot";
import { sProvinsi } from "@/s_state/wilayah/s_provinsi";
import { buttonSimpan } from "@/v2/component/button-toast";
import { Box, Button, Flex, Grid, Paper, Select, Text, TextInput } from "@mantine/core"
import { DateInput } from "@mantine/dates";
import { useShallowEffect } from "@mantine/hooks";
import COLOR from "../../../../../fun/WARNA"
import { useState } from "react";
import { ModelLegislatif } from "@/model/model_peta_kekuatan";
import { api } from "@/lib/api-backend";
import toast from "react-simple-toasts";



export const EditLegislatifDprdKabkotV2 = ({ thisClosed, data }: any) => {
  const [dataEdit, setDataEdit] = useState<ModelLegislatif | null>(null);
  const [inputProvince, setInputProvince] = useState<any | null>(null)
  const [inputKabKot, setinputKabKot] = useState<any | null>(null)
  const [inputJabatan, setInputJabatan] = useState("");
  const [inputPeriode, setInputPeriode] = useState("");
  const [inputNoUrut, setInputNoUrut] = useState<any | null>(null)
  const [inputDapil, setInputDapil] = useState("");
  const [inputCakupanWilayah, setInputCakupanWilayah] = useState("");
  const [inputAkd, setInputAkd] = useState("");

  const loadData = () => {
    fetch(api.apiLegislatifGetOne + `?id=${data}`)
      .then((v) => v.json())
      .then((v) => {
        setDataEdit(v);
        // console.log(v);
      });
  }

  useShallowEffect(() => {
    _loadProvinsi();
    loadData();
  }, []);

  const body = {
    id: dataEdit?.id,
    userId: dataEdit?.userId,
    masterTingkatLegislatifId: 3,
    masterProvinceId: inputProvince ? inputProvince : dataEdit?.masterProvinceId,
    masterKabKotId: inputKabKot ? inputKabKot : dataEdit?.masterKabKotId,
    jabatan: inputJabatan ? inputJabatan : dataEdit?.jabatan,
    periode: inputPeriode ? inputPeriode : dataEdit?.periode,
    noUrut: inputNoUrut ? inputNoUrut : dataEdit?.noUrut,
    dapil: inputDapil ? inputDapil : dataEdit?.dapil,
    cakupanWilayah: inputCakupanWilayah ? inputCakupanWilayah : dataEdit?.cakupanWilayah,
    akd: inputAkd ? inputAkd : dataEdit?.akd
  }

  const onEdit = () => {
    // console.log(body);
    if (Object.values(body).includes("")) {
      return toast("Lengkapi Data");
    }
    // disini pengaplikasian api
    fetch(api.apiLegislatifUpdate, {
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

  return <>
    <Box>
      <Paper bg={COLOR.abuabu} p={10}>
        <Grid>
          <Grid.Col span={12}>
            <Text size={20} fw={"bold"}>
              Edit Data Legislatif DPRD KabKot
            </Text>
          </Grid.Col>
        </Grid>
      </Paper>
      <Box>
        <Flex direction={"column"}>
          {/* <TextInput placeholder="NIK" label="NIK" withAsterisk />
          <TextInput placeholder="Nama" label="Nama" withAsterisk /> */}

          <Select
            withAsterisk
            placeholder={dataEdit?.MasterProvince?.name}
            label="Pilih Provinsi"
            data={sProvinsi.value.map((v) => ({
              label: v.name,
              value: v.id,
            }))}
            onChange={(val)=>{
              _loadKabkot
              setInputProvince(val)
            }}
          />

          <Select
            withAsterisk
            placeholder={dataEdit?.MasterKabKot?.name}
            label="Pilih Kabupaten"
            data={sKabkot.value.map((v) => ({
              label: v.name,
              value: v.id,
            }))}
            onChange={(val)=>{
              setinputKabKot(val)
            }}
          />

          <TextInput placeholder={dataEdit?.dapil} label="Dapil" withAsterisk onChange={(val)=>{setInputDapil(val.target.value)}}/>
          <TextInput
            placeholder={dataEdit?.cakupanWilayah}
            label="Cakupan Wilayah"
            withAsterisk
            onChange={(val)=>{setInputCakupanWilayah(val.target.value)}}
          />
          <TextInput
            placeholder={dataEdit?.akd}
            label="Komisi / AKD"
            withAsterisk
            onChange={(val)=>{setInputAkd(val.target.value)}}
          />
          <Select
            placeholder={String(dataEdit?.noUrut)}
            label="Nomor Urut"
            data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]}
            withAsterisk
            onChange={(val)=>{setInputNoUrut(Number(val))}}
          />
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
          />
          <TextInput
            placeholder="No Handphone"
            label="No Handphone"
            withAsterisk
          />
          <TextInput placeholder="Alamat " label="Alamat" withAsterisk />
          <TextInput placeholder="Email" label="Email" withAsterisk /> */}
          <TextInput placeholder={dataEdit?.periode} label="Periode" withAsterisk onChange={(val)=>{setInputPeriode(val.target.value)}} />
          <TextInput placeholder={dataEdit?.jabatan} label="Jabatan" withAsterisk onChange={(val)=>{setInputJabatan(val.target.value)}} />
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
}