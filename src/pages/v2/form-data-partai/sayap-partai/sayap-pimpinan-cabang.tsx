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

function SayapPimpinanCabang() {
  const [jabatan, setJabatan] = useState<any | []>([])
  const [provinsi, setProvinsi] = useState<any | []>([]);
  const [sayap, setSayap] = useState<any | []>([])
  const [kabupaten, setKabupaten] = useState<any | []>([])

  useShallowEffect(() => {
    loadSayapPartai()
    loadProvinsi()
    loadKabupaten()
    loadJabatan()
  },[])

  async function loadProvinsi() {
    const res = await fetch(
      "/api/get/sumber-daya-partai/wilayah/api-get-provinsi"
    )
      .then((res) => res.json())
      .then((val) => setProvinsi(Object.values(val).map((e: any) => e.name)));
  }
  async function loadKabupaten() {
    const res = await fetch(
      "/api/get/sumber-daya-partai/wilayah/api-get-kabkot"
    )
      .then((res) => res.json())
      .then((val) => setKabupaten(Object.values(val).map((e: any) => e.name)));
  }
  async function loadJabatan() {
    const res = await fetch("/api/get/sumber-daya-partai/api-get-jabatan-dewan-pimpinan-cabang")
      .then((res) => res.json())
      .then((val) =>
        setJabatan(Object.values(val).map((e: any) => e.name))
      );
  }
  async function loadSayapPartai() {
    const res = await fetch("/api/get/sumber-daya-partai/api-get-sayap-partai")
      .then((res) => res.json())
      .then((val) =>
        setSayap(Object.values(val).map((e: any) => e.name))
      );
  }

  const formStrukturPartai = useForm({
    initialValues: {
      sayapPartai: "",
      provinsi: "",
      kabupaten: "",
      jabatan: "",
      alamatKantor: "",
      nomorWA: "",
      medsos: ""
    },
    validate: {
      sayapPartai: isNotEmpty("Tidak Boleh Kosong"),
      provinsi: isNotEmpty("Tidak Boleh Kosong"),
      kabupaten: isNotEmpty("Tidak Boleh Kosong"),
      jabatan: isNotEmpty("Tidak Boleh Kosong"),
      alamatKantor: isNotEmpty("Tidak Boleh Kosong"),
      nomorWA: isNotEmpty("Tidak Boleh Kosong"),
      medsos: isNotEmpty("Tidak Boleh Kosong"),
    },
  });

  const onDataPartai = () => {
    if (Object.values(formStrukturPartai.values).includes("")) {
      return toast("Lengkapi Data Sayap Partai");
    }
    router.replace("/v2/home");
  };

  const { classes } = useStyles();
  const router = useRouter()

  function afiliatif() {
    router.push("/v2/form-data-partai/organisasi-afiliatif")
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
  function sayapPimpinanPusat() {
    router.push("/v2/form-data-partai/sayap-partai/sayap-pimpinan-pusat");
  }
  function sayapPimpinanDaerah() {
    router.push(
      "/v2/form-data-partai/sayap-partai/sayap-pimpinan-daerah"
    );
  }
  function sayapPimpinanCabang() {
    router.push(
      "/v2/form-data-partai/sayap-partai/sayap-pimpinan-cabang"
    );
  }
  function sayapPimpinanAnakCabang() {
    router.push(
      "/v2/form-data-partai/sayap-partai/sayap-pimpinan-anak-cabang"
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
                    p={50}
                    h={790}
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
                        <strong style={{cursor: "pointer"}} onClick={afiliatif}>Klik disini ! </strong>
                      </Text>
                      <Text fz={11} mb={20}>
                        * Wajib diisi
                      </Text>
                    </Box>
                    <ScrollArea h={520} scrollbarSize={0}>
                    <Menu width={245}>
                    <Menu.Target>
                        <UnstyledButton
                          className={classes.user}
                          pr={20}
                          pl={20}
                        >
                          <Group>
                            <div style={{ flex: 1 }}>
                              <Text size="sm">Sayap Partai</Text>
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
                      <Menu width={245}>
                      <Menu.Target>
                        <UnstyledButton
                            className={classes.user}
                            pr={20}
                            pl={20}
                          >
                            <Group>
                              <div style={{ flex: 1 }}>
                                <Text size="sm">Dewan Pimpinan Cabang</Text>
                              </div>
                              <IoChevronDownCircle size="1.3rem" />
                            </Group>
                          </UnstyledButton>
                        </Menu.Target>
                        <Menu.Dropdown>
                        <Menu.Item onClick={sayapPimpinanPusat}>
                            Dewan Pimpinan Pusat
                          </Menu.Item>
                          <Menu.Item onClick={sayapPimpinanDaerah}>
                            Dewan Pimpinan Daerah
                          </Menu.Item>
                          <Menu.Item onClick={sayapPimpinanCabang}>
                            Dewan Pimpinan Cabang
                          </Menu.Item>
                          <Menu.Item onClick={sayapPimpinanAnakCabang}>
                            Pimpinan Anak Cabang
                          </Menu.Item>
                        </Menu.Dropdown>
                      </Menu>
                    </Box>
                    <Select
                    {...formStrukturPartai.getInputProps("sayapPartai")}
                      label="Pilih Sayap Partai"
                      mt={10}
                      radius={"md"}
                      withAsterisk
                      placeholder="Pilih Sayap Partai"
                      data={sayap}
                    />
                    <Select
                    {...formStrukturPartai.getInputProps("provinsi")}
                      data={provinsi}
                      radius={"md"}
                      mt={10}
                      placeholder="Provinsi"
                      label="Provinsi"
                      withAsterisk
                    />
                    <Select
                    {...formStrukturPartai.getInputProps("kabupaten")}
                      data={kabupaten}
                      radius={"md"}
                      mt={10}
                      placeholder="Kabupaten / Kota"
                      label="Kabupaten / Kota"
                      withAsterisk
                    />
                    <Select
                    {...formStrukturPartai.getInputProps("jabatan")}
                      label="Jabatan"
                      withAsterisk
                      mt={10}
                      radius={"md"}
                      placeholder="Jabatan"
                      data={jabatan}
                    />
                    <TextInput
                    {...formStrukturPartai.getInputProps("alamatKantor")}
                      radius={"md"}
                      mt={10}
                      withAsterisk
                      placeholder="Alamat Kantor"
                      label="Alamat Kantor"
                    />
                    <TextInput
                    {...formStrukturPartai.getInputProps("nomorWA")}
                      radius={"md"}
                      mt={10}
                      withAsterisk
                      placeholder="Nomor WA Admin"
                      label="Nomor WA Admin"
                      type="number"
                    />
                    <TextInput
                    {...formStrukturPartai.getInputProps("medsos")}
                      radius={"md"}
                      mt={10}
                      withAsterisk
                      placeholder="Add Media Social"
                      label="Add Media Social"
                    />
                    </ScrollArea>
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

export default SayapPimpinanCabang;
