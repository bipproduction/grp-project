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
import { DateInput } from "@mantine/dates";
import COLOR from "../../../../../fun/WARNA";
import { useState } from "react";
import { ModelLegislatif } from "@/model/model_peta_kekuatan";
import { api } from "@/lib/api-backend";
import { useShallowEffect } from "@mantine/hooks";
import toast from "react-simple-toasts";
import { _dataLegislatifNasional, _dataPageLegislatifNasional, _dataSearchLegislatifNasional, _dataTotalPageLegislatifNasional, _loadDataLegislatif } from "@/load_data/peta_kekuatan/load_legislatif";
import { useAtom } from "jotai";
import { _postLogUser } from "@/load_data/log_user/post_log_user";

export const EditLegislatifDprRiV2 = ({ thisClosed, data }: any) => {
  const [dataEdit, setDataEdit] = useState<ModelLegislatif | null>(null);
  const [inputJabatan, setInputJabatan] = useState("");
  const [inputPeriode, setInputPeriode] = useState("");
  const [inputNoUrut, setInputNoUrut] = useState<any | null>(null)
  const [inputDapil, setInputDapil] = useState("");
  const [inputCakupanWilayah, setInputCakupanWilayah] = useState("");
  const [inputAkd, setInputAkd] = useState("");
  const [listDataNew, setListDataNew] = useAtom(_dataLegislatifNasional);
  const [inputSearch, setInputSearch] = useAtom(_dataSearchLegislatifNasional);
  const [inputPage, setInputPage] = useAtom(_dataPageLegislatifNasional);
  const [totalPage, setTotalPage] = useAtom(_dataTotalPageLegislatifNasional);

  const loadData = () => {
    fetch(api.apiLegislatifGetOne + `?id=${data}`)
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
    masterTingkatLegislatifId: 1,
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
        _loadDataLegislatif(1, inputSearch, setListDataNew, inputPage, setTotalPage);
        _postLogUser(localStorage.getItem("user_id"), "UBAH", "User mengubah data legislatif tingkat DPR RI")
      } else {
        toast(data.message);
      }
    });
  }

  if (dataEdit === undefined) return <></>
  return (
    <>
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={12}>
              <Text size={20} fw={"bold"}>
                Edit Data Legislatif DPR RI
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>
        <Flex direction={"column"} pt={20}>
          {/* <TextInput placeholder="NIK" label="NIK" withAsterisk />
          <TextInput placeholder="Nama" label="Nama" withAsterisk /> */}
          <TextInput placeholder={dataEdit?.dapil} label="Dapil" withAsterisk onChange={(val) => { setInputDapil(val.target.value) }} />
          <TextInput
            placeholder={dataEdit?.cakupanWilayah}
            label="Cakupan Wilayah"
            withAsterisk
            onChange={(val) => {
              setInputCakupanWilayah(val.target.value)
            }}
          />
          <TextInput
            placeholder={dataEdit?.akd}
            label="Komisi / AKD"
            withAsterisk
            onChange={(val) => { setInputAkd(val.target.value) }}
          />
          <Select
            placeholder={String(dataEdit?.noUrut)}
            label="Nomor Urut"
            data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]}
            withAsterisk
            onChange={(val) => { setInputNoUrut(Number(val)) }}
          />

          {/* <TextInput
            placeholder="Tempat Lahir"
            label="Tempat Lahir"
            withAsterisk
          />
          <DateInput placeholder="Tgl Lahir" label="Tgl Lahir" withAsterisk /> */}
          {/* <Select
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
          <TextInput placeholder={dataEdit?.periode} label="Periode" withAsterisk onChange={(val) => { setInputPeriode(val.target.value) }} />
          <TextInput placeholder={dataEdit?.jabatan} label="Jabatan" withAsterisk onChange={(val) => { setInputJabatan(val.target.value) }} />
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
    </>
  );
};
