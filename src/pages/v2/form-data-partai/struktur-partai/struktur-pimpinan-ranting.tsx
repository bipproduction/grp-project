import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Group,
  Image,
  Menu,
  ScrollArea,
  Select,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import Link from "next/link";
import WrapperDataDiriPartai from "@/v2/wrapper_data_diri_partai/wrapper_data_diri_partai";
import COLOR from "../../../../../fun/WARNA";
import { useRouter } from "next/router";
import { isNotEmpty, useForm } from "@mantine/form";
import toast from "react-simple-toasts";
import { IoChevronDownCircle } from "react-icons/io5";
import { useState } from "react";
import { useShallowEffect } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(764),
    backgroundColor: COLOR.hitam,
  },
  user: {
    display: "block",
    width: "100%",
    padding: 7,
    borderRadius: 8,
    color: "white",

    backgroundColor: COLOR.merah,
  },
}));

function StrukturPimpinanRanting() {
  const [provinsi, setProvinsi] = useState<any[]>([]);
  const [kabupaten, setKabupaten] = useState<any[]>([]);
  const [kecamatan, setKecamatan] = useState<any[]>([]);
  const [desa, setDesa] = useState<any[]>([]);
  const [jabatan, setJabatan] = useState<any | []>([]);

  useShallowEffect(() => {
    loadProvinsi();
    loadJabatan()
  }, []);

  const loadProvinsi = async () => {
    const res = await fetch(`/api/master/master-provinsi-get-all`);
    const ProviniData = await res.json();
    console.log(ProviniData);
    setProvinsi(ProviniData);
  };

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
  async function loadJabatan() {
    const res = await fetch("/api/get/sumber-daya-partai/api-get-jabatan-pimpinan-ranting")
      .then((res) => res.json())
      .then((val) =>
        setJabatan(Object.values(val).map((e: any) => e.name))
      );
  }

  const formStrukturPartai = useForm({
    initialValues: {
      // provinsi: "",
      // kabupaten: "",
      // kecamatan: "",
      // desa: "",
      jabatan: "",

    },
    validate: {
      // provinsi: isNotEmpty("Tidak Boleh Kosong"),
      // kabupaten: isNotEmpty("Tidak Boleh Kosong"),
      // kecamatan: isNotEmpty("Tidak Boleh Kosong"),
      // desa: isNotEmpty("Tidak Boleh Kosong"),
      jabatan: isNotEmpty("Tidak Boleh Kosong"),
    },
  });

  const onDataPartai = () => {
    if (Object.values(formStrukturPartai.values).includes("")) {
      return toast("Lengkapi Data Struktur Partai");
    }
    router.replace("/v2/home");
  };

  const { classes } = useStyles();
  const router = useRouter();

  function afiliatif() {
    router.push("/v2/form-data-partai/organisasi-afiliatif");
  }
  function strukturPartai() {
    router.push("/v2/form-data-partai/struktur-partai");
  }
  function sayapPartai() {
    router.push("/v2/form-data-partai/sayap-partai");
  }
  function kaderPartai() {
    router.push("/v2/form-data-partai/kader-partai");
  }
  function anggotaPartai() {
    router.push("/v2/form-data-partai/anggota-partai");
  }
  function strukturDewanPembina() {
    router.push("/v2/form-data-partai/struktur-partai/struktur-dewan-pembina");
  }
  function strukturPimpinanPusat() {
    router.push("/v2/form-data-partai/struktur-partai/struktur-pimpinan-pusat");
  }
  function strukturPimpinanDaerah() {
    router.push(
      "/v2/form-data-partai/struktur-partai/struktur-pimpinan-daerah"
    );
  }
  function strukturPimpinanCabang() {
    router.push(
      "/v2/form-data-partai/struktur-partai/struktur-pimpinan-cabang"
    );
  }
  function strukturPimpinanAnakCabang() {
    router.push(
      "/v2/form-data-partai/struktur-partai/struktur-pimpinan-anak-cabang"
    );
  }
  function strukturPimpinanRanting() {
    router.push(
      "/v2/form-data-partai/struktur-partai/struktur-pimpinan-ranting"
    );
  }
  function strukturPerwakilanLuarNegeri() {
    router.push(
      "/v2/form-data-partai/struktur-partai/struktur-perwakilan-partai-luar-negeri"
    );
  }
  return (
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
                    <Box>
                      <Text fw={700} fz={30}>
                        Form Data Diri
                      </Text>
                      <Text fz={10}>
                        Jika Termasuk Organisasi Afiliatif,{" "}
                        <strong
                          style={{ cursor: "pointer" }}
                          onClick={afiliatif}
                        >
                          Klik disini !{" "}
                        </strong>
                      </Text>
                      <Text fz={11} mb={20}>
                        * Wajib diisi
                      </Text>
                    </Box>
                    <Menu width={245}>
                    <Menu.Target>
                        <UnstyledButton
                          className={classes.user}
                          pr={20}
                          pl={20}
                        >
                          <Group>
                            <div style={{ flex: 1 }}>
                              <Text size="sm">Struktur Partai</Text>
                            </div>
                            <IoChevronDownCircle size="1.3rem" />
                          </Group>
                        </UnstyledButton>
                      </Menu.Target>
                      <Menu.Dropdown>
                        <Menu.Item onClick={strukturPartai}>
                          Struktur Partai
                        </Menu.Item>
                        <Menu.Item onClick={sayapPartai}>
                          Sayap Partai
                        </Menu.Item>
                        <Menu.Item onClick={kaderPartai}>
                          Kader Partai
                        </Menu.Item>
                        <Menu.Item onClick={anggotaPartai}>
                          Anggota Partai
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                    <Box mt={20}>
                      <Menu>
                      <Menu.Target>
                          <UnstyledButton
                            className={classes.user}
                            pr={20}
                            pl={20}
                          >
                            <Group>
                              <div style={{ flex: 1 }}>
                                <Text size="sm">Pimpinan Ranting</Text>
                              </div>
                              <IoChevronDownCircle size="1.3rem" />
                            </Group>
                          </UnstyledButton>
                        </Menu.Target>
                        <Menu.Dropdown>
                          <Menu.Item onClick={strukturDewanPembina}>
                            Dewan Pembina
                          </Menu.Item>
                          <Menu.Item onClick={strukturPimpinanPusat}>
                            Dewan Pimpinan Pusat
                          </Menu.Item>
                          <Menu.Item onClick={strukturPimpinanDaerah}>
                            Dewan Pimpinan Daerah
                          </Menu.Item>
                          <Menu.Item onClick={strukturPimpinanCabang}>
                            Dewan Pimpinan Cabang
                          </Menu.Item>
                          <Menu.Item onClick={strukturPimpinanAnakCabang}>
                            Pimpinan Anak Cabang
                          </Menu.Item>
                          <Menu.Item onClick={strukturPimpinanRanting}>
                            Pimpinan Ranting
                          </Menu.Item>
                          <Menu.Item onClick={strukturPerwakilanLuarNegeri}>
                            Perwakilan Partai di Luar Negeri
                          </Menu.Item>
                        </Menu.Dropdown>
                      </Menu>
                    </Box>
                    <Select
                    // {...formStrukturPartai.getInputProps("provinsi")}
                      data={provinsi.map((pro) => ({
                        value: pro.id,
                        label: pro.name
                      }))}
                      onChange={loadKabupaten}
                      radius={"md"}
                      mt={10}
                      placeholder="Provinsi"
                      label="Provinsi"
                      withAsterisk
                      searchable
                    />
                    <Select
                    // {...formStrukturPartai.getInputProps("kabupaten")}
                      data={kabupaten.map((kab) => ({
                        value: kab.id,
                        label: kab.name
                      }))}
                      onChange={loadKecamatan}
                      radius={"md"}
                      mt={10}
                      placeholder="Kabupaten / Kota"
                      label="Kabupaten / Kota"
                      withAsterisk
                      searchable
                    />
                    <Select
                    // {...formStrukturPartai.getInputProps("kecamatan")}
                      data={kecamatan.map((kec) => ({
                        value: kec.id,
                        label: kec.name
                      }))}
                      onChange={loadDesa}
                      radius={"md"}
                      mt={10}
                      placeholder="Kecamatan"
                      label="Kecamatan"
                      withAsterisk
                      searchable
                    />
                    <Select
                    // {...formStrukturPartai.getInputProps("desa")}
                      data={desa.map((des) => ({
                        value: des.id,
                        label: des.name
                      }))}
                      radius={"md"}
                      mt={10}
                      placeholder="Desa / Kelurahan"
                      label="Desa / Kelurahan"
                      withAsterisk
                      searchable
                    />
                    <Select
                    {...formStrukturPartai.getInputProps("jabatan")}
                      label="Jabatan"
                      withAsterisk
                      mt={10}
                      radius={"md"}
                      placeholder="Jabatan"
                      data={jabatan}
                      searchable
                    />

                    <Center pt={20}>
                      <Box w={350}>
                        <Button
                          sx={{
                            position: "absolute",
                            bottom: "40px",
                            left: "130px",
                          }}
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
                  </Box>
                </Box>
                <Box></Box>
                <Box>
                  <Container pt={300}>
                    <Image
                      right={40}
                      width={300}
                      src="../../../logo.png"
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
  );
}

export default StrukturPimpinanRanting;
