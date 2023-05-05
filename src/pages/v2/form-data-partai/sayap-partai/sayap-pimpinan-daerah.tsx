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
  createStyles,
  rem,
} from "@mantine/core";
import Link from "next/link";
import WrapperDataDiriPartai from "@/v2/wrapper_data_diri_partai/wrapper_data_diri_partai";
import COLOR from "../../../../../fun/WARNA";
import { useRouter } from "next/router";
import { isNotEmpty, useForm } from "@mantine/form";
import toast from "react-simple-toasts";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(764),
    backgroundColor: COLOR.hitam,
  },
}));

function SayapPimpinanDaerah() {
  const formStrukturPartai = useForm({
    initialValues: {
      sayapPartai: "",
      provinsi: "",
      jabatan: "",
      alamatKantor: "",
      nomorWA: "",
      medsos: "",
    },
    validate: {
      sayapPartai: isNotEmpty("Tidak Boleh Kosong"),
      provinsi: isNotEmpty("Tidak Boleh Kosong"),
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
  const router = useRouter();

  function afiliatif() {
    router.push("/v2/form-data-partai/organisasi-afiliatif");
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
                        <Button
                          radius={"md"}
                          color="orange.9"
                          bg={COLOR.merah}
                          fullWidth
                        >
                          Sayap Partai
                        </Button>
                      </Menu.Target>
                      <Menu.Dropdown>
                        <Menu.Item>
                          <Link
                            style={{ textDecoration: 0, color: "#000000" }}
                            href={"/v2/form-data-partai/struktur-partai"}
                          >
                            Struktur Partai
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            style={{ textDecoration: 0, color: "#000000" }}
                            href={"/v2/form-data-partai/sayap-partai"}
                          >
                            Sayap Partai
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            style={{ textDecoration: 0, color: "#000000" }}
                            href={"/v2/form-data-partai/kader-partai"}
                          >
                            Kader Partai
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            style={{ textDecoration: 0, color: "#000000" }}
                            href={"/v2/form-data-partai/anggota-partai"}
                          >
                            Anggota Partai
                          </Link>
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                    <Box mt={20}>
                      <Menu>
                        <Menu.Target>
                          <Button
                            radius={"md"}
                            color="gray.4"
                            bg={"white"}
                            fullWidth
                          >
                            <Text color="dark">Dewan Pimpinan Daerah</Text>
                          </Button>
                        </Menu.Target>
                        <Menu.Dropdown>
                          <Menu.Item>
                            <Link
                              style={{ textDecoration: 0, color: "#000000" }}
                              href={
                                "/v2/form-data-partai/sayap-partai/sayap-pimpinan-pusat"
                              }
                            >
                              Dewan Pimpinan Pusat
                            </Link>
                          </Menu.Item>
                          <Menu.Item>
                            <Link
                              style={{ textDecoration: 0, color: "#000000" }}
                              href={
                                "/v2/form-data-partai/sayap-partai/sayap-pimpinan-daerah"
                              }
                            >
                              Dewan Pimpinan Daerah
                            </Link>
                          </Menu.Item>
                          <Menu.Item>
                            <Link
                              style={{ textDecoration: 0, color: "#000000" }}
                              href={
                                "/v2/form-data-partai/sayap-partai/sayap-pimpinan-cabang"
                              }
                            >
                              Dewan Pimpinan Cabang
                            </Link>
                          </Menu.Item>
                          <Menu.Item>
                            <Link
                              style={{ textDecoration: 0, color: "#000000" }}
                              href={
                                "/v2/form-data-partai/sayap-partai/sayap-pimpinan-anak-cabang"
                              }
                            >
                              Pimpinan Anak Cabang
                            </Link>
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
                      data={[
                        { value: "PAPERA ", label: "PAPERA " },
                        { value: "TIDAR ", label: "TIDAR " },
                        { value: "JARI RAYA", label: "JARI RAYA" },
                        { value: "SATRIA", label: "SATRIA" },
                        { value: "GEMIRA", label: "GEMIRA" },
                        { value: "KESIRA", label: "KESIRA" },
                        { value: "GEKIRA", label: "GEKIRA" },
                        { value: "GEMA SADHANA", label: "GEMA SADHANA" },
                        { value: "PIRA", label: "PIRA" },
                        { value: "SEGARA", label: "SEGARA" },
                        { value: "PETIR", label: "PETIR" },
                        { value: "PPIR", label: "PPIR" },
                        { value: "BGM", label: "BGM" },
                        { value: "GMI", label: "GMI" },
                      ]}
                    />
                    <Select
                      {...formStrukturPartai.getInputProps("provinsi")}
                      data={[
                        { value: "Bali", label: "Bali" },
                        { value: "Jawa timur", label: "Jawa Timur" },
                      ]}
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
                      data={[
                        { value: "Ketua Umum", label: "Ketua Umum" },
                        {
                          value: "Wakil Ketua",
                          label: "Wakil Ketua",
                        },
                        {
                          value: "Sekretaris",
                          label: "Sekretaris",
                        },
                        {
                          value: "Wakil Sekretaris",
                          label: "Wakil Sekretaris",
                        },
                        {
                          value: "Bendahara",
                          label: "Bendahara",
                        },
                        {
                          value: "Wakil Bendahara",
                          label: "Wakil Bendahara",
                        },
                        {
                          value: "Biro",
                          label: "Biro",
                        },
                      ]}
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

export default SayapPimpinanDaerah;
