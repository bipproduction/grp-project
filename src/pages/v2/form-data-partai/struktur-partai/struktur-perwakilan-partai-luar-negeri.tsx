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
} from "@mantine/core";
import Link from "next/link";
import WrapperDataDiriPartai from "@/v2/wrapper_data_diri_partai/wrapper_data_diri_partai";
import COLOR from "../../../../../fun/WARNA";

function StrukturPerwakilanPartaiLuarNegeri() {
  return (
    <WrapperDataDiriPartai>
    <BackgroundImage src="../../../BG.png" h={"100vh"}>
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
                  h={763}
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
                      <strong>
                        {" "}
                        <Link
                           href={"/v2/form-data-partai/organisasi-afiliatif"}
                        >
                          Klik Disini !
                        </Link>
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
                          <Text color="dark">Pimpinan Anak Cabang</Text>
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
                              href={"/v2/form-data-partai/struktur-partai/struktur-perwakilan-partai-luar-negeri"}
                            >
                            Perwakilan Partai di Luar Negeri
                            </Link>
                          </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                  </Box>
                  <Select
                        data={[
                          { value: "Malaysia", label: "Malaysia" },
                          { value: "Jepang", label: "Jepang" },
                          { value: "Korea Selatan", label: "Korea Selatan" },
                        ]}
                        radius={"md"}
                        mt={10}
                        placeholder="Negara"
                        label="Negara"
                      />
                  <Select
                    label="Jabatan"
                    withAsterisk
                    mt={10}
                    radius={"md"}
                    placeholder="Jabatan"
                    data={[
                      { value: "Ketua ", label: "Ketua " },
                      { value: "Wakil Ketua ", label: "Wakil Ketua " },
                      { value: "Sekretaris", label: "Sekretaris" },
                      {
                        value: "Wakil Sekretaris",
                        label: "Wakil Sekretaris",
                      },
                      { value: "Bendahara", label: "Bendahara" },
                      {
                        value: "Wakil Bendahara",
                        label: "Wakil Bendahara",
                      },
                      { value: "Biro", label: "Biro" },
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
    </BackgroundImage>
  </WrapperDataDiriPartai>
  );
}

export default StrukturPerwakilanPartaiLuarNegeri;
