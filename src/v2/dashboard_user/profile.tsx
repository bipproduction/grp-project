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
import { Simonetta } from "next/font/google";
import { useDisclosure } from "@mantine/hooks";
import COLOR from "../../../fun/WARNA";
import EditKTAV2 from "./edit_kta";

const DataProfileV2 = () => {
  const [opened, { open, close }] = useDisclosure(false);
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
          <Grid.Col span={12}>
            <Text mt={5} mb={5} ml={10}>
              {" "}
              Data Profile
            </Text>
          </Grid.Col>
        </Grid>
      </Paper>

      <Grid>
        <Grid.Col span={6}>
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
                Data Profile
              </Text>
              <Group>
                <Text color={COLOR.merah}>**</Text>
                <Text fz={10}>Wajib diisi</Text>
              </Group>

              <TextInput radius={"md"} mt={10} placeholder="NIK" label="**" readOnly />
              <TextInput radius={"md"} mt={10} placeholder="Nama" label="**" readOnly />
              <TextInput radius={"md"} mt={10} placeholder="Email" label="**" readOnly />
              <TextInput
                radius={"md"}
                mt={10}
                placeholder="Tempat Lahir"
                label="**"
                readOnly
              />
              <DateInput
                radius={"md"}
                mt={10}
                placeholder="Tanggal Lahir"
                label="**"
                readOnly
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
                readOnly
              />
              <TextInput
                radius={"md"}
                mt={10}
                placeholder="Nomor Handphone"
                label="**"
                readOnly
              />
              <TextInput
                radius={"md"}
                mt={10}
                placeholder="Instargram"
                label="**"
                readOnly
              />
              <TextInput
                radius={"md"}
                mt={10}
                placeholder="Facebook"
                label="**"
                readOnly
              />
              <TextInput radius={"md"} mt={10} placeholder="TikTok" label="**" readOnly />
              <TextInput radius={"md"} mt={10} placeholder="Twitter" label="**" readOnly />
            </Box>
          </Box>
        </Grid.Col>
        <Grid.Col span={6}>
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
              <Group mt={35}>
                <Text color={COLOR.merah}>**</Text>
                <Text fz={10}>Wajib diisi</Text>
              </Group>

              <Select readOnly
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
              <TextInput readOnly
                radius={"md"}
                mt={10}
                placeholder="Pekerjaan"
                label="**"
              />
              <TextInput radius={"md"} mt={10} placeholder="Alamat" label="**" readOnly />
              <Select
                readOnly
                data={[
                  { value: "Bali", label: "Bali" },
                  { value: "Jawa timur", label: "Jawa Timur" },
                ]}
                radius={"md"}
                mt={10}
                placeholder="Provinsi"
                label="**"
              />
              <Select readOnly
                data={[
                  { value: "Banyuwangi", label: "Banyuwangi" },
                  { value: "Malang", label: "Malang" },
                ]}
                radius={"md"}
                mt={10}
                placeholder="Kabupaten / Kota"
                label="**"
              />
              <Select readOnly
                data={[
                  { value: "Geteng", label: "Genteng" },
                  { value: "Glenmore", label: "Glenmore" },
                ]}
                radius={"md"}
                mt={10}
                placeholder="Kecamatan"
                label="**"
              />
              <TextInput readOnly
                radius={"md"}
                mt={10}
                placeholder="Desa / Cabang"
                label="**"
              />
              <TextInput readOnly
                radius={"md"}
                mt={10}
                placeholder="RT - __, RW - __"
                label="**"
              />
            </Box>
          </Box>
        </Grid.Col>
      </Grid>
      <Flex gap="md" pt={20}>
        <Modal opened={opened} onClose={close} fullScreen>
          <EditKTAV2 />
        </Modal>
        <Box w={150}>
          <Button
            fullWidth
            color="orange.9"
            bg={COLOR.merah}
            radius={"xl"}
            onClick={open}
          >
            Edit KTA
          </Button>
        </Box>
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

    </>
  );
};

export default DataProfileV2;
