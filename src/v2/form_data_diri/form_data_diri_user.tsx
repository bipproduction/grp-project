import {
  Autocomplete,
  Box,
  Button,
  Center,
  Container,
  Group,
  Image,
  Navbar,
  ScrollArea,
  Select,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  createStyles,
  rem,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import COLOR from "../../../fun/WARNA";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import WrapperDataDiriPartai from "../wrapper_data_diri_partai/wrapper_data_diri_partai";
import toast from "react-simple-toasts";
import { useHash, useHotkeys, useShallowEffect } from "@mantine/hooks";
import _, { isEmpty, isNumber, min, toNumber, uniqueId, values } from "lodash";
import { data } from "jquery";
import { api } from "@/lib/api-backend";
import { _loadListPekerjaan } from "@/load_data/load_list_pekerjaan";
import { _loadAgama } from "@/load_data/load_agama";
import { sAgama } from "@/s_state/sumber_daya_partai/s_agama";
import { sListPekerjaan } from "@/s_state/s_list_pekerjaan";
import { _loadJenisKelamin } from "@/load_data/load_jenis_kelamin";
import { _sJenisKelamin, sJenisKelamin } from "@/s_state/s_jenis_kelamin";
import { sUser } from "@/s_state/s_user";
import { number } from "echarts";
import { _loadMediaSocial } from "@/load_data/media_social/load_media_social";
import { sMediaSocial } from "@/s_state/media_social/s_media_social";
import { apiGetMaster } from "@/lib/api-get-master";
import { useAtom } from "jotai";
import LayoutDataPartaiV2 from "../layout_data_partai/layout_data_partai";
import LayoutDataDiriV2 from "../layout_data_partai/layout_data_diri";
import moment from "moment";
import { val_loading } from "@/xg_state.ts/val_loading";
import { generateName } from "@/pages/v2/use-hash";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(764),
    backgroundColor: COLOR.hitam,
  },
}));

const FormDataDiriUser = () => {
  const [value, setValue] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState<any | []>([]);
  const [agama, setAgama] = useState<any | []>([]);
  const [provinsi, setProvinsi] = useState<any[]>([]);
  // const [provinsi, setProvinsi] = useState([]);
  // const [kabupaten, setKabupaten] = useState<any[]>([]);
  const [listKabupaten, setListKabupaten] = useState<any[]>([]);
  const [kabupaten, setKabupaten] = useState<any[]>([]);
  const [selectedKabupaten, setSelectedKabupaten] = useState<any>({
    id: "",
    name: "",
  });
  const [selectedKecamatan, setSelectedKecamatan] = useState<any>({
    id: "",
    name: "",
  });
  const [selectedDesa, setSelectedDesa] = useState<any>({
    id: "",
    name: "",
  });

  const [valNik, setValNik] = useState<string | null>(null);
  const [noHP, setNoHP] = useState<string | null>(null);
  const [kecamatan, setKecamatan] = useState<any[]>([]);
  const [desa, setDesa] = useState<any[]>([]);
  const [pekerjaan, setPekerjaan] = useState<any | []>([]);
  const { classes } = useStyles();
  const [nameValue, setNameValue] = useState<string>("");
  const [selectedProvince, setSelectedProvince] = useState<any>({
    id: "",
    name: "",
  });
  const [isJenisKelamin, setIsJenisKelamin] = useAtom(_sJenisKelamin);
  const [selectJenisKelamin, setSelectJenisKelamin] = useAtom(_sJenisKelamin);
  const [isLoading, setIsLoading] = useAtom(val_loading);
  const [hash, setHash] = useHash();

  useHotkeys([["mod+a", otomatis]]);

  useShallowEffect(() => {
    _loadJenisKelamin();
    _loadAgama();
    loadProvinsi();
    _loadListPekerjaan();
    _loadMediaSocial();
  }, []);

  // useShallowEffect(() => {
  //     fetch(`/api/master/master-kabkot-get-by-provinsi` + `?idProvinsi=${provinsi.map((v) => v.id)}`)
  //       .then((v) => v.json())
  //       .then(setKabupaten);
  // }, []);

  // async function loadJenisKelamin() {
  //   const res = await fetch("/api/get/sumber-daya-partai/api-get-jenis-kelamin")
  //     .then((res) => res.json())
  //     .then((val) =>
  //       setJenisKelamin(Object.values(val).map((e: any) => e.name))
  //     );
  // }

  // async function loadAgama() {
  //   const res = await fetch("/api/get/sumber-daya-partai/api-get-agama")
  //     .then((res) => res.json())
  //     .then((val) => setAgama(Object.values(val).map((e: any) => e.name)));
  // }

  const loadProvinsi = async () => {
    const res = await fetch(`/api/master/master-provinsi-get-all`);
    const ProviniData = await res.json();
    setProvinsi(ProviniData);
  };

  const loadKabupaten = async (idProvinsi: string) => {
    const res = await fetch(
      `/api/master/master-kabkot-get-by-provinsi` + `?idProvinsi=${idProvinsi}`
    )
      .then((res) => res.json())
      .then(async (val) => {
        if (!_.isEmpty(val)) {
          setKabupaten(val);
          setSelectedKabupaten({});
        } else {
          setKabupaten([]);
        }
      });
  };

  async function loadKecamatan(idKabkot: string) {
    const res = await fetch(
      // "/api/get/sumber-daya-partai/wilayah/api-get-kecamatan"
      `/api/master/master-kecamatan-get-by-kabkot` + `?idKabkot=${idKabkot}`
    )
      .then((res) => res.json())
      .then(async (val) => {
        if (!_.isEmpty(val)) {
          setKecamatan(val);
          setSelectedKecamatan({});
        } else {
          setKecamatan([]);
        }
      });
    // .then((res) => res.json())
    // .then(setKecamatan);
  }
  async function loadDesa(idKecamatan: string) {
    const res = await fetch(
      // "/api/get/sumber-daya-partai/wilayah/api-get-desa"
      `/api/master/master-desa-get-by-kecamatan` + `?idKecamatan=${idKecamatan}`
    )
      .then((res) => res.json())
      .then(async (val) => {
        if (!_.isEmpty(val)) {
          setDesa(val);
          setSelectedDesa({});
        } else {
          setDesa([]);
        }
      });
  }
  // async function loadPekerjaan() {
  //   const res = await fetch("/api/get/sumber-daya-partai/api-get-pekerjaan")
  //     .then((res) => res.json())
  //     .then((val) => setPekerjaan(Object.values(val).map((e: any) => e.name)));
  // }
  const [listData, setListData] = useState([
    {
      name: "",
      userId: localStorage.getItem("user_id"),
      masterMediaSocialId: 1,
    },
    {
      name: "",
      userId: localStorage.getItem("user_id"),
      masterMediaSocialId: 2,
    },
    {
      name: "",
      userId: localStorage.getItem("user_id"),
      masterMediaSocialId: 3,
    },
    {
      name: "",
      userId: localStorage.getItem("user_id"),
      masterMediaSocialId: 4,
    },
  ]);

  const router = useRouter();
  const { id } = router.query;
  function dataDiriPartai() {
    router.push("/v2/form-data-partai");
  }

  const onDatadiri = async () => {
    console.log(formDataDiri.values.data);
    listData.find((val) => _.values(val).includes(""));
    // if (adaKosong) return toast("Lengkapi data diri");

    // console.log(formDataDiri.values.data)
    // return

    if (Object.values(formDataDiri.values.data).includes("")) {
      console.table(formDataDiri.values.data);
      return toast("Lengkapi Data Diri");
    }

    if (formDataDiri.values.data.nik.length != 16)
      return toast("NIK harus 16 angka");

    formDataDiri.values.data.nik = valNik!;

    if (formDataDiri.values.data.phoneNumber.length <= 10)
      return toast("Panjang Nomor Maksimal 11 sampai 15  Karakter");
    if (formDataDiri.values.data.phoneNumber.length >= 16)
      return toast("Panjang Nomor Maksimal 11 sampai 15  Karakter");
    formDataDiri.values.data.phoneNumber = noHP!;

    const pertama = await fetch(api.apiDataDiriPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataDiri.values.data),
    }).then(async (res) => {
      if (res.status === 201) {
        const data = await res.json();
        console.log(data);
        return data;
      } else {
        res.status === 209;
        const data = await res.json();
        console.log(data.message);
        toast(data.message);
      }
      setIsLoading(false);
      await new Promise((r) => setTimeout(r, 500));
      return null;
    });
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 500));

    console.log(pertama);
    if (!pertama) return toast("gagal");

    for (let item of listData) {
      await fetch(api.apiMediaSosialUserPost, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      // console.log(item)
    }

    // localStorage.setItem("user_id", pertama.id);
    // sUser.value = pertama;
    // console.log(sUser.value);
    toast("sukses");
    router.push("/v2/data-partai-v2");
    setIsLoading(false);
  };

  const formDataDiri = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        nik: "",
        name: "",
        tempatLahir: "",
        tanggalLahir: "",
        phoneNumber: "",
        alamat: "",
        rtRw: "",
        masterJenisKelaminId: new Number(),
        masterAgamaId: new Number(),
        masterPekerjaanId: new Number(),
        masterProvinceId: new Number(),
        masterKabKotId: new Number(),
        masterKecamatanId: new Number(),
        masterDesaId: new Number(),
      },
      validate: {
        email: (value: string) =>
          /^\S+@\S+$/.test(value) ? null : "Invalid email",
      },
    },
  });

  const [listMediaSocial, setListMediaSocial] = useState<any[] | undefined>();

  useShallowEffect(() => {
    fetch(apiGetMaster.apiMediaSocial)
      .then((val) => val.json())
      .then(setListMediaSocial);
  }, []);

  // `````````````` HASH ``````````````//
  const onExCreate = (coba: any) => {
    setIsLoading(true);
    console.log(formDataDiri.values.data);
    if (coba == 1) {
      router.push("/v2/use-hash");
      setIsLoading(false);
    }
  };

  // pengisian otomatis
  function otomatis() {
    setValNik(
      "" +
        `${
          Math.floor(Math.random() * 9999999999999999 - 1111111111111111) +
          1111111111111111
        }`
    );
    formDataDiri.setValues({
      data: {
        userId: localStorage.getItem("user_id"),
        nik: `1234123412341234`,
        name: generateName(),
        tempatLahir: "Denpasar",
        tanggalLahir: moment("2002-01-01").format("YYYY-MM-DD"),
        phoneNumber: "082341908765",
        alamat: `Jalan Toh Pati no : ${Math.floor(Math.random() * 100)}`,
        rtRw: `${Math.floor(Math.random() * 100)}`,
        masterJenisKelaminId: _.toNumber(
          `${Math.floor(Math.random() * 2 - 0) + 1}`
        ),
        masterAgamaId: _.toNumber(`${Math.floor(Math.random() * 5 - 0) + 1}`),
        masterPekerjaanId: toNumber(`${Math.floor(Math.random() * 3 - 0) + 1}`),
        masterProvinceId: toNumber(`${Math.floor(Math.random() * 38 - 0) + 1}`),
        masterKabKotId: toNumber(`${Math.floor(Math.random() * 500 - 0) + 1}`),
        masterKecamatanId: toNumber(
          `${Math.floor(Math.random() * 1000 - 0) + 1}`
        ),
        masterDesaId: toNumber(`${Math.floor(Math.random() * 3000 - 0) + 1}`),
      },
    });
  }

  if (!formDataDiri) return <></>;
  return (
    <>
      <LayoutDataDiriV2>
        <Stack pl={40} pr={40}>
          <Box
            component="form"
            // // maw={400}
            // mx="auto"
            onSubmit={formDataDiri.onSubmit(() => {})}
          >
            <TextInput
              value={`${valNik}`}
              description={valNik && valNik.length != 16 ? <Text></Text> : ""}
              error={
                valNik && valNik.length != 16 ? (
                  <Text>Panjang Nik Harus 16 Angka</Text>
                ) : (
                  ""
                )
              }
              placeholder="NIK"
              withAsterisk
              mt={10}
              minLength={16}
              maxLength={16}
              label="NIK"
              radius={"md"}
              type="number"
              // pattern="[0-16]"
              // {...formDataDiri.getInputProps("data.nik")}
              onChange={(val) => {
                const data = val.currentTarget.value;
                if (val) {
                  setValNik(val.currentTarget.value);
                  formDataDiri.values.data.nik = val.currentTarget.value;
                }
              }}
            />
            <TextInput
              placeholder="Nama"
              withAsterisk
              mt={10}
              label="Nama"
              radius={"md"}
              {...formDataDiri.getInputProps("data.name")}
            />
            <TextInput
              placeholder="Tempat Lahir"
              withAsterisk
              mt={10}
              label="Tempat Lahir"
              radius={"md"}
              {...formDataDiri.getInputProps("data.tempatLahir")}
            />
            <DateInput
              placeholder="Tanggal Lahir"
              withAsterisk
              // rightSection={<AiOutlineCalendar size="1.3rem" />}
              label="Tanggal Lahir"
              radius={"md"}
              mt={10}
              value={
                _.isEmpty(formDataDiri.values.data.tanggalLahir)
                  ? null
                  : new Date(formDataDiri.values.data.tanggalLahir)
              }
              onChange={(val) => {
                if (val) {
                  const tanggal = moment(new Date()).diff(val, "years");
                  if (tanggal < 17) {
                    formDataDiri.setValues({
                      data: {
                        ...formDataDiri.values.data,
                        tanggalLahir: "",
                      },
                    });

                    return toast(
                      "Anda tidak boleh mengisi data dengan usia kurang dari 17 tahun"
                    );
                  }

                  formDataDiri.setValues({
                    data: {
                      ...formDataDiri.values.data,
                      tanggalLahir: moment(val).format("YYYY-MM-DD"),
                    },
                  });
                }
              }}
              // {...formDataDiri.getInputProps("data.tanggalLahir")}
            />
            <Select
              data={sJenisKelamin.value.map((ag) => ({
                value: ag.id,
                label: ag.name,
              }))}
              placeholder="Jenis Kelamin"
              label="Jenis Kelamin"
              radius={"md"}
              withAsterisk
              mt={10}
              searchable
              {...formDataDiri.getInputProps("data.masterJenisKelaminId")}
            />
            <TextInput
              description={
                noHP && noHP.length < 11 ? (
                  <Text></Text>
                ) : noHP && noHP.length > 15 ? (
                  <Text></Text>
                ) : (
                  ""
                )
              }
              error={
                noHP && noHP.length < 11 ? (
                  <Text>Panjang Nomor Maksimal 11 sampai 15 Karakter </Text>
                ) : noHP && noHP.length > 15 ? (
                  <Text>Panjang Nomor Maksimal 11 sampai 15 Karakter</Text>
                ) : (
                  ""
                )
              }
              placeholder="Nomor Handphone"
              withAsterisk
              label="Nomor Handphone"
              radius={"md"}
              mt={10}
              type="number"
              onChange={(val) => {
                if (val) {
                  setNoHP(val.currentTarget.value);
                  formDataDiri.values.data.phoneNumber =
                    val.currentTarget.value;
                }
              }}
              // {...formDataDiri.getInputProps("data.phoneNumber")}
            />
            {/* {JSON.stringify(sMediaSocial)} */}
            <TextInput
              onChange={(val) => {
                const index = listData?.findIndex(
                  (v) => v.masterMediaSocialId == 1
                );
                listData[index].name = val.currentTarget.value;
                listData[index].userId = localStorage.getItem("user_id")!;
                setListData(listData);
              }}
              // {...formMediaSocial.values.data}
              placeholder="Instagram"
              // withAsterisk
              mt={10}
              label="Instagram"
              radius={"md"}
            />
            <TextInput
              placeholder="Facebook"
              mt={10}
              onChange={(val) => {
                const index = listData?.findIndex(
                  (v) => v.masterMediaSocialId == 2
                );
                listData[index].name = val.currentTarget.value;
                listData[index].userId = localStorage.getItem("user_id")!;
                setListData(listData);
              }}
              // {...formMediaSocial.values.data}
              // withAsterisk
              label="Facebook"
              // rightSection={<AiOutlineFacebook size="1.3rem" />}
              radius={"md"}
              // {...formMediaSocial.getInputProps(
              //   "data.name"
              // )}
            />
            <TextInput
              placeholder="Tiktok"
              // withAsterisk
              label="Tiktok"
              mt={10}
              onChange={(val) => {
                const index = listData?.findIndex(
                  (v) => v.masterMediaSocialId == 3
                );
                listData[index].name = val.currentTarget.value;
                listData[index].userId = localStorage.getItem("user_id")!;
                setListData(listData);
              }}
              // {...formMediaSocial.values.data}
              // rightSection={<BsTiktok size="1.3rem" />}
              radius={"md"}
              // {...formMediaSocial.getInputProps(
              //   "data.name"
              // )}
            />
            <TextInput
              placeholder="Twitter"
              // withAsterisk
              label="Twitter"
              mt={10}
              onChange={(val) => {
                const index = listData?.findIndex(
                  (v) => v.masterMediaSocialId == 4
                );
                listData[index].name = val.currentTarget.value;
                listData[index].userId = localStorage.getItem("user_id")!;
                setListData(listData);
              }}
              // rightSection={<AiOutlineTwitter size="1.3rem" />}
              radius={"md"}
              // {...formMediaSocial.getInputProps(
              //   "data.name"
              // )}
            />
            <Select
              data={sAgama.value.map((ag) => ({
                value: ag.id,
                label: ag.name,
              }))}
              radius={"md"}
              mt={10}
              placeholder="Agama"
              label="Agama"
              searchable
              withAsterisk
              {...formDataDiri.getInputProps("data.masterAgamaId")}
            />
            <Select
              radius={"md"}
              placeholder="Pekerjaan"
              label="Pekerjaan"
              withAsterisk
              mt={10}
              data={sListPekerjaan.value.map((pe) => ({
                value: pe.id,
                label: pe.name,
              }))}
              {...formDataDiri.getInputProps("data.masterPekerjaanId")}
            />
            <TextInput
              placeholder="Alamat"
              withAsterisk
              label="Alamat"
              radius={"md"}
              mt={10}
              {...formDataDiri.getInputProps("data.alamat")}
            />
            {/* {JSON.stringify(selectedProvince)} */}
            <Select
              data={provinsi.map((pro) => ({
                value: pro.id,
                label: pro.name,
              }))}
              radius={"md"}
              mt={10}
              placeholder={selectedProvince.name}
              value={selectedProvince.id}
              label="Provinsi"
              withAsterisk
              searchable
              onChange={(val: any) => {
                if (val) {
                  setSelectedProvince(provinsi.find((v) => v.id == val));
                  loadKabupaten(val);
                  
                }
                formDataDiri.values.data.masterProvinceId = val!;
                selectedKabupaten.name=""
                selectedKabupaten.id=""
              }}

              // onChange={selectedProvince}
            />
            {/* {JSON.stringify(selectedKabupaten)} */}
            <Select
              key={Math.random()}
              data={
                _.isEmpty(kabupaten)
                  ? []
                  : kabupaten.map((v) => ({
                      value: v.id,
                      label: v.name,
                    }))
              }
              // {...formDataDiri.getInputProps("data.kabkot")}
              placeholder={selectedKabupaten.name}
              value={selectedKabupaten.id}
              radius={"md"}
              mt={10}
              label="Kabupaten / Kota"
              withAsterisk
              searchable
              onChange={(val: any) => {
                setSelectedKabupaten(kabupaten.find((v) => v.id == val));
                loadKecamatan(val!);
                formDataDiri.values.data.masterKabKotId = val!;
                selectedKecamatan.name=""
                selectedKecamatan.id=""
              }}
            />
            {/* {JSON.stringify(selectedKecamatan.name)} */}
            <Select
              key={Math.random()}
              data={
                _.isEmpty(kecamatan)
                  ? []
                  : kecamatan.map((val) => ({
                      value: val.id,
                      label: val.name,
                    }))
              }
              radius={"md"}
              mt={10}
              placeholder={selectedKecamatan.name}
              // {...formDataDiri.getInputProps(
              //   "data.kecamatan"
              // )}
              value={selectedKecamatan.id}
              label="Kecamatan"
              withAsterisk
              searchable
              onChange={(val: any) => {
                setSelectedKecamatan(kecamatan.find((v) => v.id == val));
                loadDesa(val!);
                formDataDiri.values.data.masterKecamatanId = val!;
                selectedDesa.name=""
                selectedDesa.id=""
              }}
            />
            {/* {JSON.stringify(selectedDesa.name)} */}
            <Select
              key={Math.random()}
              data={
                _.isEmpty(desa)
                  ? []
                  : desa.map((val) => ({
                      value: val.id,
                      label: val.name,
                    }))
              }
              radius={"md"}
              mt={10}
              placeholder={selectedDesa.name}
              // {...formDataDiri.getInputProps(
              //   "data.desa"
              // )}
              value={selectedDesa.id}
              label="Desa"
              withAsterisk
              onChange={(val: any) => {
                setSelectedDesa(desa.find((v) => v.id == val));
                formDataDiri.values.data.masterDesaId = val!;
              }}
              searchable
            />
            <TextInput
              placeholder="RT/RW"
              withAsterisk
              label="RT/RW"
              radius={"md"}
              type="number"
              mt={10}
              {...formDataDiri.getInputProps("data.rtRw")}
            />
          </Box>
          <Box pb={30} pt={10}>
            <Button
              fullWidth
              radius={"xl"}
              bg={COLOR.merah}
              color="orange.9"
              type="submit"
              // onClick={() =>
              //   console.log(formDataDiri.values, formMediaSocial.values)
              // }
              onClick={onDatadiri}
              // onClick={() => {
              //   onExCreate(1)
              // }}
            >
              Simpan
            </Button>
          </Box>
        </Stack>
      </LayoutDataDiriV2>
    </>
  );
};

export default FormDataDiriUser;
