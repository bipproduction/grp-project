import {
    Box,
    Button,
    Flex,
    Grid,
    Group,
    Modal,
    Paper,
    ScrollArea,
    Select,
    SimpleGrid,
    Text,
    TextInput,
  } from "@mantine/core";
  import { DateInput } from "@mantine/dates";
  import React from "react";
import COLOR from "../../../fun/WARNA";
  
  const EditKTAV2 = () => {
    return (
      <>
        <Paper
          p={2}
          pt={3.5}
          pb={3.5}
          sx={{
            borderRadius: 10,
            background: COLOR.abuabu,
          }}
        >
          <Grid>
            <Grid.Col span={8}>
              <Text mt={10} mb={10} ml={10}>
                Edit Data Profile
              </Text>
            </Grid.Col>
            <Grid.Col span={4}>
              {/* <Group position="right" pr={10} p={5}>
                <Button color="orange.9" radius={"xl"} bg={COLOR.merah}>
                  Reset
                </Button>
              </Group> */}
            </Grid.Col>
          </Grid>
        </Paper>
  
        <Box pt={20}>
          <Box
            p={20}
            pl={30}
            pr={30}
            sx={{
              backgroundColor: COLOR.abuabu,
              borderRadius: 10,
            }}
          >
            <Text fz={22} color={"#525252"} fw={700}>
              Form Data Diri
            </Text>
            <Group>
              <Text color={COLOR.merah}>**</Text>
              <Text fz={10}>Wajib diisi</Text>
            </Group>
            <ScrollArea h={450}>
              <TextInput radius={"md"} mt={10} placeholder="NIK" label="**" />
              <TextInput radius={"md"} mt={10} placeholder="Nama" label="**" />
              <TextInput radius={"md"} mt={10} placeholder="Email" label="**" />
              <TextInput
                radius={"md"}
                mt={10}
                placeholder="Tempat Lahir"
                label="**"
              />
              <DateInput
                radius={"md"}
                mt={10}
                placeholder="Tanggal Lahir"
                label="**"
              />
              <Select
                radius={"md"}
                data={[
                  { value: "laki", label: "Laki-Laki" },
                  { value: "perempuan", label: "Perempuan" },
                ]}
                mt={10}
                placeholder="Jenis Kelamin"
                label="**"
              />
              <TextInput
                radius={"md"}
                mt={10}
                placeholder="Nomor Handphone"
                label="**"
              />
              <TextInput
                radius={"md"}
                mt={10}
                placeholder="Instargram"
                label="**"
              />
              <TextInput
                radius={"md"}
                mt={10}
                placeholder="Facebook"
                label="**"
              />
              <TextInput radius={"md"} mt={10} placeholder="TikTok" label="**" />
              <TextInput radius={"md"} mt={10} placeholder="Twitter" label="**" />
              <Select
                data={[
                  { value: "islam", label: "Islam" },
                  { value: "Protestan", label: "Protestan" },
                  { value: "Katolik", label: "Katolik" },
                  { value: "Hindu", label: "Hindu" },
                  { value: "Buddha", label: "Buddha" },
                  { value: "Khonghucu", label: "Khonghucu" },
                ]}
                radius={"md"}
                mt={10}
                placeholder="Agama"
                label="**"
              />
              <TextInput
                radius={"md"}
                mt={10}
                placeholder="Pekerjaan"
                label="**"
              />
              <TextInput radius={"md"} mt={10} placeholder="Alamat" label="**" />
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
                data={[
                  { value: "Banyuwangi", label: "Banyuwangi" },
                  { value: "Malang", label: "Malang" },
                ]}
                radius={"md"}
                mt={10}
                placeholder="Kabupaten / Kota"
                label="**"
              />
              <Select
                data={[
                  { value: "Geteng", label: "Genteng" },
                  { value: "Glenmore", label: "Glenmore" },
                ]}
                radius={"md"}
                mt={10}
                placeholder="Kecamatan"
                label="**"
              />
              <TextInput
                radius={"md"}
                mt={10}
                placeholder="Desa"
                label="**"
              />
              <TextInput
                radius={"md"}
                mt={10}
                placeholder="RT - __, RW - __"
                label="**"
              />
              <Flex gap="md" pt={20}>
                <Box w={150}>
                  <Button
                    fullWidth
                    color="orange.9"
                    bg={COLOR.orange}
                    radius={"xl"}
                  >
                    Simpan
                  </Button>
                </Box>
              </Flex>
            </ScrollArea>
          </Box>
        </Box>
      </>
    );
  };
  
  export default EditKTAV2;
  