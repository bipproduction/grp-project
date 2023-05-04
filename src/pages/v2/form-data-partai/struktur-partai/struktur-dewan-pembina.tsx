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

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(764),
    backgroundColor: COLOR.hitam,
  },
}));

function StrukturDewanPembina() {
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
                            Struktur Partai
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
                              <Text color="dark">Dewan Pembina</Text>
                            </Button>
                          </Menu.Target>
                          <Menu.Dropdown>
                            <Menu.Item>
                              <Link
                                style={{ textDecoration: 0, color: "#000000" }}
                                href={
                                  "/v2/form-data-partai/struktur-partai/struktur-dewan-pembina"
                                }
                              >
                                Dewan Pembina
                              </Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link
                                style={{ textDecoration: 0, color: "#000000" }}
                                href={
                                  "/v2/form-data-partai/struktur-partai/struktur-pimpinan-pusat"
                                }
                              >
                                Dewan Pimpinan Pusat
                              </Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link
                                style={{ textDecoration: 0, color: "#000000" }}
                                href={
                                  "/v2/form-data-partai/struktur-partai/struktur-pimpinan-daerah"
                                }
                              >
                                Dewan Pimpinan Daerah
                              </Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link
                                style={{ textDecoration: 0, color: "#000000" }}
                                href={
                                  "/v2/form-data-partai/struktur-partai/struktur-pimpinan-cabang"
                                }
                              >
                                Dewan Pimpinan Cabang
                              </Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link
                                style={{ textDecoration: 0, color: "#000000" }}
                                href={
                                  "/v2/form-data-partai/struktur-partai/struktur-pimpinan-anak-cabang"
                                }
                              >
                                Pimpinan Anak Cabang
                              </Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link
                                style={{ textDecoration: 0, color: "#000000" }}
                                href={
                                  "/v2/form-data-partai/struktur-partai/struktur-pimpinan-ranting"
                                }
                              >
                                Pimpinan Ranting
                              </Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link
                                style={{ textDecoration: 0, color: "#000000" }}
                                href={
                                  "/v2/form-data-partai/struktur-partai/struktur-perwakilan-partai-luar-negeri"
                                }
                              >
                                Perwakilan Partai di Luar Negeri
                              </Link>
                            </Menu.Item>
                          </Menu.Dropdown>
                        </Menu>
                      </Box>
                      <Select
                        label="Jabatan"
                        withAsterisk
                        mt={10}
                        radius={"md"}
                        placeholder="Jabatan"
                        data={[
                          {
                            value: "Ketua Dewan Pembina",
                            label: "Ketua Dewan Pembina",
                          },
                          {
                            value: "Wakil Ketua Dewan Pembina ",
                            label: "Wakil Ketua Dewan Pembina ",
                          },
                          {
                            value: "Sekretaris Dewan Pembina ",
                            label: "Sekretaris Dewan Pembina ",
                          },
                          {
                            value: "Anggota Dewan Pembina",
                            label: "Anggota Dewan Pembina",
                          },
                          {
                            value: "Ketua Dewan Penasihat",
                            label: "Ketua Dewan Penasihat",
                          },
                          {
                            value: "Wakil Ketua Dewan Penasihat ",
                            label: "Wakil Ketua Dewan Penasihat ",
                          },
                          {
                            value: "Anggota Dewan Penasihat",
                            label: "Anggota Dewan Penasihat",
                          },
                          {
                            value: "Ketua Dewan Pakar",
                            label: "Ketua Dewan Pakar",
                          },
                          {
                            value: "Wakil Ketua Dewan Pakar",
                            label: "Wakil Ketua Dewan Pakar",
                          },
                          {
                            value: "Sekretaris Dewan Pakar",
                            label: "Sekretaris Dewan Pakar",
                          },
                          {
                            value: "Anggota Dewan Pakar",
                            label: "Anggota Dewan Pakar",
                          },
                        ]}
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

export default StrukturDewanPembina;
