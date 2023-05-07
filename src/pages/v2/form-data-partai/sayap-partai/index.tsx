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
import { IoChevronDownCircle } from "react-icons/io5";

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

function SayapPartai() {
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
                                <Text size="sm">Pilih Tingkatan Pengurus</Text>
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
      </Box>
    </WrapperDataDiriPartai>
  );
}

export default SayapPartai;
