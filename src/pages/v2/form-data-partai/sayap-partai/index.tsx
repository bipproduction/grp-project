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

function SayapPartai() {
  return (
    <WrapperDataDiriPartai>
    <BackgroundImage src="../../BG.png" h={"100vh"}>
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
                    <Menu width={245}>
                      <Menu.Target>
                        <Button
                          radius={"md"}
                          color="gray.4"
                          bg={"white"}
                          fullWidth
                        >
                          <Text color="dark">Pilih tingkat pengurus</Text>
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
                  <TextInput
                    mt={20}
                    radius={"md"}
                    placeholder="Pilih Sayap Partai"
                    disabled
                  />
                  <TextInput
                    mt={20}
                    radius={"md"}
                    placeholder="Jabatan"
                    disabled
                  />
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
    </BackgroundImage>
  </WrapperDataDiriPartai>
  );
}

export default SayapPartai;
