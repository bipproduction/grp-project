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

function StrukturPimpinanDaerah() {

  const [provinsi, setProvinsi] = useState<any[]>([]);
  const [jabatan, setJabatan] = useState<any | []>([])

  useShallowEffect(() => {
    loadProvinsi()
    loadJabatan()
  },[])

  const loadProvinsi = async () => {
    const res = await fetch(`/api/master/master-provinsi-get-all`);
    const ProviniData = await res.json();
    console.log(ProviniData);
    setProvinsi(ProviniData);
  };
  async function loadJabatan() {
    const res = await fetch("/api/get/sumber-daya-partai/api-get-jabatan-dewan-pimpinan-daerah")
      .then((res) => res.json())
      .then((val) =>
        setJabatan(Object.values(val).map((e: any) => e.name))
      );
  }


  const formStrukturPartai = useForm({
    initialValues: {
      provinsi: "",
      jabatan: "",
      alamatKantor: "",
      nomorWA: "",
      medsos: ""
    },
    validate: {
      provinsi: isNotEmpty("Tidak Boleh Kosong"),
      jabatan: isNotEmpty("Tidak Boleh Kosong"),
      alamatKantor: isNotEmpty("Tidak Boleh Kosong"),
      nomorWA: isNotEmpty("Tidak Boleh Kosong"),
      medsos: isNotEmpty("Tidak Boleh Kosong"),
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
                                <Text size="sm">Dewan Pimpinan Daerah</Text>
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
                        label: pro.name,
                      }))}
                      radius={"md"}
                      mt={10}
                      placeholder="Provinsi"
                      label="Provinsi"
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

export default StrukturPimpinanDaerah;
