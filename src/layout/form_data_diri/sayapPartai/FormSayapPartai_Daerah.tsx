import React from "react";
import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  Input,
  Menu,
  ScrollArea,
  Select,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { AiOutlineDownCircle } from "react-icons/ai";
import COLOR from "../../../../fun/WARNA";

const FormSayapPartai_Daerah = () => {
  return (
    <>
      <Box bg={"#25262B"}>
        <Stack>
          <Grid>
            <Grid.Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <Group>
                <Flex
                  direction={{ base: "column", sm: "row" }}
                  gap={{ base: "sm", sm: "lg" }}
                  justify={{ sm: "flex-start" }}
                >
                  <Stack>
                    <Box
                      pb={30}
                      pt={30}
                      pl={50}
                      pr={50}
                      h={800}
                      sx={{
                        backgroundColor: COLOR.abuabu,
                      }}
                    >
                      <Text fw={700} fz={40} color={COLOR.hitam1}>
                        Form Data Diri
                      </Text>
                      <Text
                        fz={12}
                        component="a"
                        href="../../../formDataDiri/organisasiAfiliatif/OrganisasiAfiliatif"
                      >
                        Jika Termasuk Organisasi Afiliatif,{" "}
                        <strong>Klik Disini !</strong>
                      </Text>

                      <Group>
                        <Text color={COLOR.coklat}>**</Text>
                        <Text fz={12}>Wajib diisi</Text>
                      </Group>
                      <Menu width={300}>
                        <Menu.Target>
                          <Input radius={"md"} mt={20} component="button">
                            Sayap Partai
                          </Input>
                          {/* <Button mt={20} radius={"md"} fullWidth bg={COLOR.coklat} color="orange.9">Pilih Status Keanggotaan</Button> */}
                        </Menu.Target>
                        <Menu.Dropdown>
                          <Menu.Item
                            component="a"
                            href="../../../formDataDiri/strukturPartai/StrukturPartai"
                          >
                            Struktur Partai
                          </Menu.Item>
                          <Menu.Item
                            component="a"
                            href="../../../formDataDiri/sayapPartai/SayapPartai"
                          >
                            Sayap Partai
                          </Menu.Item>
                          <Menu.Item
                            component="a"
                            href="../../../formDataDiri/kaderPartai/KaderPartai"
                          >
                            Kader Partai
                          </Menu.Item>
                          <Menu.Item
                            component="a"
                            href="../../../formDataDiri/anggotaPartai/AnggotaPartai"
                          >
                            Anggota Partai
                          </Menu.Item>
                        </Menu.Dropdown>
                      </Menu>

                      <Menu width={300}>
                        <Menu.Target>
                          <Input radius={"md"} mt={20} component="button">
                            Dewan Pimpinan Daerah
                          </Input>
                        </Menu.Target>

                        <Menu.Dropdown>
                          <Menu.Item
                            component="a"
                            href="../../../formDataDiri/sayapPartai/SayapPartai_Pusat"
                          >
                            Dewan Pimpinan Pusat
                          </Menu.Item>
                          <Menu.Item
                            component="a"
                            href="../../../formDataDiri/sayapPartai/SayapPartai_Daerah"
                          >
                            Dewan Pimpinan Daerah
                          </Menu.Item>
                          <Menu.Item
                            component="a"
                            href="../../../formDataDiri/sayapPartai/SayapPartai_Cabang"
                          >
                            Dewan Pimpinan Cabang
                          </Menu.Item>
                          <Menu.Item
                            component="a"
                            href="../../../formDataDiri/sayapPartai/SayapPartai_AnakCabang"
                          >
                            Pimpinan Anak Cabang
                          </Menu.Item>
                        </Menu.Dropdown>
                      </Menu>
                      <Select
                        label="**"
                        mt={10}
                        radius={"md"}
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
                        data={[
                          { value: "Bali", label: "Bali" },
                          { value: "Jawa timur", label: "Jawa Timur" },
                        ]}
                        radius={"md"}
                        mt={10}
                        placeholder="Provinsi"
                        label="**"
                      />
                      <Select
                        label="**"
                        mt={10}
                        radius={"md"}
                        placeholder="Jabatan"
                        data={[
                          { value: "Ketua Umum", label: "Ketua Umum" },
                          {
                            value: "Wakil Ketua Umum ",
                            label: "Wakil Ketua Umum ",
                          },
                          { value: "Ketua Bidang", label: "Ketua Bidang" },
                          {
                            value: "Sekretaris Jenderal",
                            label: "Sekretaris Jenderal",
                          },
                          {
                            value: "Wakil Sekretaris Jenderal",
                            label: "Wakil Sekretaris Jenderal",
                          },
                          {
                            value: "Bendahara Umum ",
                            label: "Bendahara Umum ",
                          },
                          {
                            value: "Wakil Bendahara Umum",
                            label: "Wakil Bendahara Umum",
                          },
                        ]}
                      />
                      <TextInput
                        radius={"md"}
                        mt={10}
                        placeholder="Alamat Kantor"
                        label="**"
                      />
                      <TextInput
                        radius={"md"}
                        mt={10}
                        placeholder="Nomor WA Admin"
                        label="**"
                      />
                      <TextInput
                        radius={"md"}
                        mt={10}
                        placeholder="Add Media Social"
                        label="**"
                      />
                    </Box>
                  </Stack>
                </Flex>
                <Box w={200}>
                  <Button
                    component="a"
                    href="../../../home/home_user"
                    sx={{
                      position: "absolute",
                      bottom: "40px",
                      left: "130px",
                    }}
                    radius={"xl"}
                    bg={COLOR.coklat}
                    color="orange.9"
                  >
                    Simpan
                  </Button>
                </Box>
              </Group>
            </Grid.Col>
            <Grid.Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <Group>
                <Flex
                  direction={{ base: "column", sm: "row" }}
                  gap={{ base: "sm", sm: "lg" }}
                  justify={{ sm: "flex-end" }}
                >
                  <Box pt={250}>
                    <Center>
                      <Image
                        display={"block"}
                        width={400}
                        src={"/../logo.png"}
                        alt="a"
                      />
                    </Center>
                  </Box>
                </Flex>
              </Group>
            </Grid.Col>
          </Grid>
        </Stack>
      </Box>
    </>
  );
};

export default FormSayapPartai_Daerah;
