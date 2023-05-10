import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Group,
  Header,
  Image,
  MultiSelect,
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
import { Form, isEmail, isNotEmpty, useForm } from "@mantine/form";
import { useRouter } from "next/router";
import WrapperDataDiriPartai from "../wrapper_data_diri_partai/wrapper_data_diri_partai";
import toast from "react-simple-toasts";
import { useShallowEffect } from "@mantine/hooks";
import _, { functions, get, identity, lowerCase, values } from "lodash";
import $ from "jquery";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(764),
    backgroundColor: COLOR.hitam,
  },
}));

const FormDataDiriUser = () => {
  const [jenisKelamin, setJenisKelamin] = useState<any | []>([]);
  const [agama, setAgama] = useState<any | []>([]);
  const [provinsi, setProvinsi] = useState<any[]>([]);
  // const [provinsi, setProvinsi] = useState([]);
  // const [kabupaten, setKabupaten] = useState<any[]>([]);
  const [listKabupaten, setListKabupaten] = useState<any[]>([]);
  const [kabupaten, setKabupaten] = useState<any[]>([]);
  const [kecamatan, setKecamatan] = useState<any[]>([]);
  const [desa, setDesa] = useState<any[]>([]);
  const [pekerjaan, setPekerjaan] = useState<any | []>([]);
  const { classes } = useStyles();
  const [nameValue, setNameValue] = useState<string>("");

  useShallowEffect(() => {
    loadJenisKelamin();
    loadAgama();
    loadProvinsi();
    // loadDesa();
    loadPekerjaan();
  }, []);

  // useShallowEffect(() => {
  //     fetch(`/api/master/master-kabkot-get-by-provinsi` + `?idProvinsi=${provinsi.map((v) => v.id)}`)
  //       .then((v) => v.json())
  //       .then(setKabupaten);
  // }, []);

  async function loadJenisKelamin() {
    const res = await fetch("/api/get/sumber-daya-partai/api-get-jenis-kelamin")
      .then((res) => res.json())
      .then((val) =>
        setJenisKelamin(Object.values(val).map((e: any) => e.name))
      );
  }

  async function loadAgama() {
    const res = await fetch("/api/get/sumber-daya-partai/api-get-agama")
      .then((res) => res.json())
      .then((val) => setAgama(Object.values(val).map((e: any) => e.name)));
  }

  const loadProvinsi = async () => {
    const res = await fetch(`/api/master/master-provinsi-get-all`);
    const ProviniData = await res.json();
    setProvinsi(ProviniData);
  };

  // const kabupatenlist = async () => {
  //   const res = await fetch(`/api/master/master-kabkot-get-by-provinsi` + `?idProvinsi=${undefined}`);
  //   const ProviniData = await res.json();
  //   setListKabupaten(ProviniData);
  // }

  const loadKabupaten = async (idProvinsi: string) => {
    const res = await fetch(
      `/api/master/master-kabkot-get-by-provinsi` + `?idProvinsi=${idProvinsi}`
    )
      .then((res) => res.json())
      .then(setKabupaten);
  };

  async function loadKecamatan(idKabkot: string) {
    const res = await fetch(
      // "/api/get/sumber-daya-partai/wilayah/api-get-kecamatan"
      `/api/master/master-kecamatan-get-by-kabkot` + `?idKabkot=${idKabkot}`
    )
      .then((res) => res.json())
      .then(setKecamatan);
  }
  async function loadDesa(idKecamatan: string) {
    const res = await fetch(
      // "/api/get/sumber-daya-partai/wilayah/api-get-desa"
      `/api/master/master-desa-get-by-kecamatan` + `?idKecamatan=${idKecamatan}`
    )
      .then((res) => res.json())
      .then(setDesa);
  }
  async function loadPekerjaan() {
    const res = await fetch("/api/get/sumber-daya-partai/api-get-pekerjaan")
      .then((res) => res.json())
      .then((val) => setPekerjaan(Object.values(val).map((e: any) => e.name)));
  }

  const router = useRouter();
  function dataDiriPartai() {
    router.push("/v2/form-data-partai");
  }

  const formDataDiri = useForm({
    initialValues: {
      nik: "",
      name: "",
      email: "",
      tempatLahir: "",
      tanggalLahir: "",
      jenisKelamin: "",
      phoneNumber: "",
      instagram: "",
      facebook: "",
      tiktok: "",
      twitter: "",
      agama: "",
      pekerjaan: "",
      alamat: "",
      // provinsi: "",
      // kabupaten: "",
      // kecamatan: "",
      // desa: "",
      rtrw: "",
    },
    validate: {
      nik: isNotEmpty("Tidak Boleh Kosong"),
      name: isNotEmpty("Tidak Boleh Kosong"),
      email: isEmail("Invalid email"),
      tempatLahir: isNotEmpty("Tidak Boleh Kosong"),
      tanggalLahir: isNotEmpty("Tidak Boleh Kosong"),
      jenisKelamin: isNotEmpty("Tidak Boleh Kosong"),
      phoneNumber: isNotEmpty("Tidak Boleh Kosong"),
      instagram: isNotEmpty("Tidak Boleh Kosong"),
      facebook: isNotEmpty("Tidak Boleh Kosong"),
      tiktok: isNotEmpty("Tidak Boleh Kosong"),
      twitter: isNotEmpty("Tidak Boleh Kosong"),
      agama: isNotEmpty("Tidak Boleh Kosong"),
      pekerjaan: isNotEmpty("Tidak Boleh Kosong"),
      alamat: isNotEmpty("Tidak Boleh Kosong"),
      // provinsi: isNotEmpty("Tidak Boleh Kosong"),
      // kabupaten: isNotEmpty("Tidak Boleh Kosong"),
      // kecamatan: isNotEmpty("Tidak Boleh Kosong"),
      // desa: isNotEmpty("Tidak Boleh Kosong"),
      rtrw: isNotEmpty("Tidak Boleh Kosong"),
    },
  });
  const onDataPartai = () => {
    if (Object.values(formDataDiri.values).includes("")) {
      return toast("Lengkapi Data diri");
    }
    router.replace("/v2/form-data-partai");
  };
  // console.log(onDataPartai);
  // const [data, setData] = useState([
  //   { value: "Pegawai Negeri", label: "Pegawai Negeri" },
  //   { value: "Swasta", label: "Swasta" },
  //   { value: "Pengajar", label: "Pengajar" },
  // ]);
  return (
    <>
      <WrapperDataDiriPartai>
        <Box className={classes.wrapper}>
          <Box>
            <Stack>
              <Box>
                <SimpleGrid
                  cols={4}
                  breakpoints={[
                    { maxWidth: 980, cols: 2, spacing: "xl" },
                    { maxWidth: 755, cols: 1, spacing: "xl" },
                  ]}
                >
                  <Box>
                    <Box
                      p={30}
                      h={790}
                      w={400}
                      sx={{
                        backgroundColor: COLOR.abuabu,
                      }}
                    >
                      <Box sx={{ position: "sticky", top: 0 }}>
                        <Text fw={700} fz={30}>
                          Form Data Diri
                        </Text>
                        <Text mb={20}>* Wajib diisi</Text>
                      </Box>
                      <Box>
                        <ScrollArea h={630} scrollbarSize={0}>
                          <Box
                            component="form"
                            maw={400}
                            mx="auto"
                            onSubmit={formDataDiri.onSubmit(() => {})}
                          >
                            <Stack>
                              <TextInput
                                placeholder="NIK"
                                withAsterisk
                                mt={10}
                                label="NIK"
                                radius={"md"}
                                type="number"
                                {...formDataDiri.getInputProps("nik")}
                              />
                              <TextInput
                                placeholder="Nama"
                                withAsterisk
                                label="Nama"
                                radius={"md"}
                                {...formDataDiri.getInputProps("name")}
                              />
                              <TextInput
                                placeholder="Email"
                                withAsterisk
                                label="Email"
                                radius={"md"}
                                {...formDataDiri.getInputProps("email")}
                              />
                              <TextInput
                                placeholder="Tempat Lahir"
                                withAsterisk
                                label="Tempat Lahir"
                                radius={"md"}
                                {...formDataDiri.getInputProps("tempatLahir")}
                              />
                              <DateInput
                                placeholder="Tanggal Lahir"
                                withAsterisk
                                label="Tanggal Lahir"
                                radius={"md"}
                                {...formDataDiri.getInputProps("tanggalLahir")}
                              />
                              <Select
                                placeholder="Jenis Kelamin"
                                label="Jenis Kelamin"
                                radius={"md"}
                                withAsterisk
                                searchable
                                data={jenisKelamin}
                                {...formDataDiri.getInputProps("jenisKelamin")}
                              />
                              <TextInput
                                placeholder="Nomor Handphone"
                                withAsterisk
                                label="Nomor Handphone"
                                radius={"md"}
                                type="number"
                                {...formDataDiri.getInputProps("phoneNumber")}
                              />
                              <TextInput
                                placeholder="Instagram"
                                withAsterisk
                                label="Instagram"
                                radius={"md"}
                                {...formDataDiri.getInputProps("instagram")}
                              />
                              <TextInput
                                placeholder="Facebook"
                                withAsterisk
                                label="Facebook"
                                radius={"md"}
                                {...formDataDiri.getInputProps("facebook")}
                              />
                              <TextInput
                                placeholder="Tiktok"
                                withAsterisk
                                label="Tiktok"
                                radius={"md"}
                                {...formDataDiri.getInputProps("tiktok")}
                              />
                              <TextInput
                                placeholder="Twitter"
                                withAsterisk
                                label="Twitter"
                                radius={"md"}
                                {...formDataDiri.getInputProps("twitter")}
                              />
                              <Select
                                data={agama}
                                radius={"md"}
                                placeholder="Agama"
                                label="Agama"
                                searchable
                                withAsterisk
                                {...formDataDiri.getInputProps("agama")}
                              />
                              <Select
                                radius={"md"}
                                placeholder="Pekerjaan"
                                label="Pekerjaan"
                                data={[
                                  {
                                    value: "Pegawai Negeri",
                                    label: "Pegawai Negeri",
                                  },
                                  { value: "Swasta", label: "Swasta" },
                                  { value: "Pengajar", label: "Pengajar" },
                                ]}
                                {...formDataDiri.getInputProps("pekerjaan")}
                              />
                              <TextInput
                                placeholder="Alamat"
                                withAsterisk
                                label="Alamat"
                                radius={"md"}
                                {...formDataDiri.getInputProps("alamat")}
                              />
                              {/* {JSON.stringify(provinsi)} */}
                              <Select
                                data={provinsi.map((pro) => ({
                                  value: pro.id,
                                  label: pro.name,
                                }))}
                                radius={"md"}
                                placeholder="Provinsi"
                                label="Provinsi"
                                withAsterisk
                                searchable
                                // {...formDataDiri.getInputProps("provinsi")}
                                onChange={loadKabupaten}
                              />
                              <Select
                                data={kabupaten.map((v) => ({
                                  value: v.id,
                                  label: v.name,
                                }))}
                                radius={"md"}
                                placeholder="Kabupaten / Kota"
                                label="Kabupaten / Kota"
                                withAsterisk
                                searchable
                                // {...formDataDiri.getInputProps("kabupaten")}
                                onChange={loadKecamatan}
                              />
                              <Select
                                data={kecamatan.map((v) => ({
                                  value: v.id,
                                  label: v.name,
                                }))}
                                radius={"md"}
                                placeholder="Kecamatan"
                                label="Kecamatan"
                                withAsterisk
                                searchable
                                // {...formDataDiri.getInputProps("kecamatan")}
                                onChange={loadDesa}
                              />
                              <Select
                                data={desa.map((des) => ({
                                  value: des.id,
                                  label: des.name,
                                }))}
                                radius={"md"}
                                placeholder="Desa"
                                label="Desa"
                                withAsterisk
                                searchable
                                // {...formDataDiri.getInputProps("desa")}
                              />
                              <TextInput
                                placeholder="RT/RW"
                                withAsterisk
                                label="RT/RW"
                                radius={"md"}
                                type="number"
                                {...formDataDiri.getInputProps("rtrw")}
                              />
                              <Center pt={20}>
                                <Box w={150}>
                                  <Button
                                    fullWidth
                                    radius={"xl"}
                                    bg={COLOR.merah}
                                    color="orange.9"
                                    type="submit"
                                    onClick={onDataPartai}
                                  >
                                    Simpan
                                  </Button>
                                </Box>
                              </Center>
                            </Stack>
                          </Box>
                        </ScrollArea>
                      </Box>
                    </Box>
                  </Box>
                  <Box></Box>
                  <Box>
                    <Container pt={300}>
                      <Image
                        right={40}
                        width={300}
                        src="../.././logo.png"
                        alt="image data diri"
                      />
                    </Container>
                  </Box>
                  <Box></Box>
                </SimpleGrid>
              </Box>
            </Stack>
          </Box>
        </Box>
      </WrapperDataDiriPartai>
    </>
  );
};

export default FormDataDiriUser;
