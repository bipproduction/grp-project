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
import { useShallowEffect } from "@mantine/hooks";
import _, { isEmpty, isNumber, min, uniqueId, values } from "lodash";
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

  const router = useRouter();
  const { id } = router.query;
  function dataDiriPartai() {
    router.push("/v2/form-data-partai");
  }

  const onDatadiri = async () => {
    // const adaKosong = listData.find((val) => _.values(val).includes(""));
    // if (adaKosong) return toast("Lengkapi data diri");

    if (valNik?.length != 16) return toast("nik harus 16 angka");

    formDataDiri.values.data.nik = valNik!;

    // console.log(formDataDiri.values.data)
    // return

    if (Object.values(formDataDiri.values.data).includes("")) {
      console.table(formDataDiri.values.data);
      return toast("Lengkapi Data Diri");
    }
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
      }
      return null;
    });

    console.log(pertama);
    // if (!pertama) return toast("gagal");

    for (let item of listData) {
      await fetch(api.apiMediaSosialUserPost, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
    }

    // localStorage.setItem("user_id", pertama.id);
    // sUser.value = pertama;
    // console.log(sUser.value);
    toast("succes");
    router.push("/v2/data-partai-v2");
  };

  const formMediaSocial = useForm({
    initialValues: {
      data: {
        // listData(),
        // link: "prosess",
        // name: "",
        // userId: localStorage.getItem("user_id"),
        // masterMediaSocialId: onchange={()},
      },
    },
  });

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
  // const onDataPartai = () => {
  //   if (Object.values(formDataDiri.values.data).includes("")) {
  //     return toast("Lengkapi Data diri");
  //   }
  //   // if (
  //   //   formDataDiri.values.validate.email(formDataDiri.values.data.email) != null) {
  //   //   return toast("Invalid email");
  //   // }
  //   router.replace("/v2/form-data-partai");
  // };

  const [listMediaSocial, setListMediaSocial] = useState<any[] | undefined>();

  useShallowEffect(() => {
    fetch(apiGetMaster.apiMediaSocial)
      .then((val) => val.json())
      .then(setListMediaSocial);
  }, []);

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
              description={
                valNik && valNik.length != 16 ? (
                  <Text>Nik 16 Angka Length</Text>
                ) : (
                  ""
                )
              }
              error={valNik && valNik.length != 16}
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
            {/* <TextInput
                                placeholder="Email"
                                withAsterisk
                                label="Email"
                                radius={"md"}
                                {...formDataDiri.getInputProps("data.email")}
                              /> */}
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
                  if (tanggal < 18) {
                    formDataDiri.setValues({
                      data: {
                        ...formDataDiri.values.data,
                        tanggalLahir: "",
                      },
                    });

                    return toast(
                      "Anda tidak boleh mengisi data dengan usia kurang dari 18 tahun"
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
              placeholder="Nomor Handphone"
              withAsterisk
              label="Nomor Handphone"
              radius={"md"}
              mt={10}
              type="number"
              {...formDataDiri.getInputProps("data.phoneNumber")}
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
              value={selectedProvince.name}
              label="Provinsi"
              withAsterisk
              searchable
              onChange={(val) => {
                if (val) {
                  setSelectedProvince(provinsi.find((v) => v.id == val));
                  loadKabupaten(val);
                }
                formDataDiri.values.data.masterProvinceId = val!;
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
              value={selectedKabupaten.name}
              radius={"md"}
              mt={10}
              label="Kabupaten / Kota"
              withAsterisk
              searchable
              onChange={(val) => {
                setSelectedKabupaten(kabupaten.find((v) => v.id == val));
                loadKecamatan(val!);
                formDataDiri.values.data.masterKabKotId = val!;
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
              value={selectedKecamatan.name}
              label="Kecamatan"
              withAsterisk
              searchable
              onChange={(val) => {
                setSelectedKecamatan(kecamatan.find((v) => v.id == val));
                loadDesa(val!);
                formDataDiri.values.data.masterKecamatanId = val!;
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
              value={selectedDesa.name}
              label="Desa"
              withAsterisk
              onChange={(val) => {
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
              // onClick={onMediaSocial}
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
