import {
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Modal,
  Paper,
  ScrollArea,
  Select,
  SimpleGrid,
  Text,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import React, { useState } from "react";
import COLOR from "../../../fun/WARNA";
import { atom, useAtom } from "jotai";
import {
  _desa,
  _kabupaten,
  _kecamatan,
  _provinsi,
  _selected_Desa,
  _selected_Kabkot,
  _selected_Kecamatan,
  _selected_Provinisi,
} from "@/s_state/wilayah/select_wilayah";
import { DataDiri, ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";
import { useShallowEffect } from "@mantine/hooks";
import { _loadAgama } from "@/load_data/load_agama";
import { _loadListPekerjaan } from "@/load_data/load_list_pekerjaan";
import { _loadSelectProvinsi } from "@/load_data/wilayah/load_selected_wilayah";
import { _loadJenisKelamin } from "@/load_data/load_jenis_kelamin";
import { useForm } from "@mantine/form";
import { apiGetMaster } from "@/lib/api-get-master";
import { api } from "@/lib/api-backend";
import toast from "react-simple-toasts";
import _ from "lodash";
import { _editDataStruktur } from "../sumber_daya_partai/struktur_partai/table_struktur_partai";
import { _datapartai_form, _datapartai_user } from "./profile";

const _listData = atom<DataDiri | null>(null);
const _listData2 = atom<ModelSumberDayaPartai | null>(null);
const EditKTAV2 = () => {
  const [isJabatan, setJabatan] = useState<any>();
  const [isProvinsi, setIsProvinsi] = useAtom(_provinsi);
  const [selectProvince, setSelectProvince] = useAtom(_selected_Provinisi);
  const [isKabupaten, setIsKabupaten] = useAtom(_kabupaten);
  const [selectedKabupaten, setSelectKabupaten] = useAtom(_selected_Kabkot);
  const [isKecamatan, setIsKecamatan] = useAtom(_kecamatan);
  const [selectKecamatan, setSelectKecamatan] = useAtom(_selected_Kecamatan);
  const [isDesa, setIsDesa] = useAtom(_desa);
  const [selectDesa, setSelectDesa] = useAtom(_selected_Desa);

  const [targetDataPartai, setTargetDataPartai] = useAtom(_datapartai_form);
  const [targetDataPartai2, setTargetDataPartai2] = useAtom(_datapartai_user);
  const [listData, setListData] = useAtom(_listData);
  const [listDat2, setListData2] = useAtom(_listData2);

  const [mediaListData, setMediaListData] = useState([
    {
      name: "",
      userId: "",
      masterMediaSocialId: 1,
    },
    {
      name: "",
      userId: "",
      masterMediaSocialId: 2,
    },
    {
      name: "",
      userId: "",
      masterMediaSocialId: 3,
    },
    {
      name: "",
      userId: "",
      masterMediaSocialId: 4,
    },
  ]);

  useShallowEffect(() => {
    _loadAgama();
    _loadListPekerjaan();
    _loadSelectProvinsi(
      setIsProvinsi,
      setIsKabupaten,
      setIsKecamatan,
      setIsDesa,
      setSelectProvince,
      setSelectKabupaten,
      setSelectKecamatan,
      setSelectDesa
    );
    _loadJenisKelamin();
  }, []);

  const formUpdateDataDiri = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        nik: "",
        name: "",
        email: "",
        tempatLahir: "",
        tanggalLahir: "",
        phoneNumber: "",
        alamat: "",
        rtRw: "",
        masterJenisKelaminId: "",
        masterAgamaId: "",
        masterPekerjaanId: "",
        masterProvinceId: "",
        masterKabKotId: "",
        masterKecamatanId: "",
        masterDesaId: "",
      },
      validate: {
        email: (value: string) =>
          /^\S+@\S+$/.test(value) ? null : "Invalid email",
      },
    },
  });

  const onDataUpdatepartai = async () => {
    console.log(formUpdateDataDiri.values.data)
    // const dataKosong = mediaListData.find((val) => _.values(val).includes(""));
    // if (dataKosong) return toast("Lengkapi data diri");

    // if (Object.values(formUpdateDataDiri.values.data).includes("")) {
    //   return toast("Lengkapi Data Diri");
    // }
    // const dataPertama = await fetch(api.apiDataDiriUpdate, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formUpdateDataDiri.values.data),
    // }).then(async (res) => {
    //   if (res.status === 201) {
    //     const data = await res.json();
    //     console.log(data);
    //     return data;
    //   }
    //   return null;
    // });
    // console.log(dataPertama);
    // if (!dataPertama) return toast("gagal");

    // for (let item of mediaListData) {
    //   await fetch(api.apiMediaSosialUserUpdate, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(item),
    //   });
    // }
  };

  const [listMediaSocial, setListMediaSocial] = useState<any[] | undefined>();

  // useShallowEffect(() => {
  //   fetch(api.apiMediaSosialUserUpdate)
  //   .then((val) =>  val.json())
  //   .then(setListMediaSocial)
  // },[])

  return (
    <>
      <Paper
        p={2}
        pt={3.5}
        pb={3.5}
        sx={{
          borderRadius: 10,
          background: COLOR.abuabu,
        }}
      >
        <Grid>
          <Grid.Col span={8}>
            <Text mt={10} mb={10} ml={10}>
              Edit Data Profile
            </Text>
          </Grid.Col>
          <Grid.Col span={4}>
            {/* <Group position="right" pr={10} p={5}>
                <Button color="orange.9" radius={"xl"} bg={COLOR.merah}>
                  Reset
                </Button>
              </Group> */}
          </Grid.Col>
        </Grid>
      </Paper>

      <Box pt={20}>
        <Box
          p={20}
          pl={30}
          pr={30}
          sx={{
            backgroundColor: COLOR.abuabu,
            borderRadius: 10,
          }}
        >
          <Text fz={22} color={"#525252"} fw={700}>
            Form Data Diri
          </Text>
          <Group>
            <Text color={COLOR.merah}>**</Text>
            <Text fz={10}>Wajib diisi</Text>
          </Group>
          <ScrollArea h={450}>
            <TextInput
              radius={"md"}
              mt={10}
              placeholder="NIK"
              label="NIK"
              value={targetDataPartai?.nik}
            />
            <TextInput radius={"md"} mt={10} placeholder="Nama" label="Nama"
            value={targetDataPartai?.name}
            onChange={() => {
              const data = _.clone(targetDataPartai)
              data?.name 
              setListData(data)
            }}
            />
            <TextInput radius={"md"} mt={10} placeholder="Email" label="Email"
            value={targetDataPartai2?.User.email}
            onChange={() => {
              const data = _.clone(targetDataPartai2)
              data?.User.email 
              setListData2(data)
            }}
            />
            <TextInput
              radius={"md"}
              mt={10}
              placeholder="Tempat Lahir"
              label="Tempat Lahir"
              value={targetDataPartai?.tempatLahir}
              onChange={() => {
                const data = _.clone(targetDataPartai)
                data?.tempatLahir
                setListData(data)
              }}
            />
            <DateInput
              radius={"md"}
              mt={10}
              placeholder="Tanggal Lahir"
              label="**"
            />
            <Select
              radius={"md"}
              data={[
                { value: "laki", label: "Laki-Laki" },
                { value: "perempuan", label: "Perempuan" },
              ]}
              mt={10}
              placeholder="Jenis Kelamin"
              label="**"
            />
            <TextInput
              radius={"md"}
              mt={10}
              placeholder="Nomor Handphone"
              label="**"
            />
            <TextInput
              radius={"md"}
              mt={10}
              placeholder="Instargram"
              label="**"
            />
            <TextInput
              radius={"md"}
              mt={10}
              placeholder="Facebook"
              label="**"
            />
            <TextInput radius={"md"} mt={10} placeholder="TikTok" label="**" />
            <TextInput radius={"md"} mt={10} placeholder="Twitter" label="**" />
            <Select
              data={[
                { value: "islam", label: "Islam" },
                { value: "Protestan", label: "Protestan" },
                { value: "Katolik", label: "Katolik" },
                { value: "Hindu", label: "Hindu" },
                { value: "Buddha", label: "Buddha" },
                { value: "Khonghucu", label: "Khonghucu" },
              ]}
              radius={"md"}
              mt={10}
              placeholder="Agama"
              label="**"
            />
            <TextInput
              radius={"md"}
              mt={10}
              placeholder="Pekerjaan"
              label="**"
            />
            <TextInput radius={"md"} mt={10} placeholder="Alamat" label="**" />
            <Select
              data={[
                { value: "Bali", label: "Bali" },
                { value: "Jawa timur", label: "Jawa Timur" },
              ]}
              radius={"md"}
              mt={10}
              placeholder="Provinsi"
              label="**"
            />
            <Select
              data={[
                { value: "Banyuwangi", label: "Banyuwangi" },
                { value: "Malang", label: "Malang" },
              ]}
              radius={"md"}
              mt={10}
              placeholder="Kabupaten / Kota"
              label="**"
            />
            <Select
              data={[
                { value: "Geteng", label: "Genteng" },
                { value: "Glenmore", label: "Glenmore" },
              ]}
              radius={"md"}
              mt={10}
              placeholder="Kecamatan"
              label="**"
            />
            <TextInput radius={"md"} mt={10} placeholder="Desa" label="**" />
            <TextInput
              radius={"md"}
              mt={10}
              placeholder="RT - __, RW - __"
              label="**"
            />
            <Flex gap="md" pt={20}>
              <Box w={150}>
                <Button
                  fullWidth
                  color="orange.9"
                  bg={COLOR.orange}
                  radius={"xl"}
                  onClick={onDataUpdatepartai}
                >
                  Simpan
                </Button>
              </Box>
            </Flex>
          </ScrollArea>
        </Box>
      </Box>
    </>
  );
};

export default EditKTAV2;
