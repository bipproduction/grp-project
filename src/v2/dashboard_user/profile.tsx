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
              {/* <Group>
                <Text color={COLOR.merah}>*</Text>
                <Text fz={10}>Wajib diisi</Text>
              </Group> */}

              <TextInput radius={"md"} mt={10} placeholder="3510101212990003" label="NIK" required  readOnly disabled />
              <TextInput radius={"md"} mt={10} placeholder="Moh Alif Al Lukman" label="Nama" required readOnly disabled />
              <TextInput radius={"md"} mt={10} placeholder="allukman.lukman99@gmail.com" label="Email" required readOnly disabled />
              <TextInput
                radius={"md"}
                mt={10}
                placeholder="Kalimantan Tengah"
                label="Tempat Lahir"
                readOnly
                disabled
                required
              />
              <DateInput
                radius={"md"}
                mt={10}
                placeholder="12 Desember 1999"
                label="Tanggal Lahir"
                readOnly
                disabled
                required
              />
              <TextInput
                radius={"md"}
                mt={10}
                placeholder="Laki - Laki"
                label="Jenis Kelamin"
                readOnly
                disabled
                required
              />
              <TextInput
                radius={"md"}
                mt={10}
                placeholder="087701790942"
                label="Nomor Handphone"
                readOnly
                disabled
                required
              />
              <TextInput
                radius={"md"}
                mt={10}
                placeholder="Allukman12"
                label="Instargram"
                readOnly
                disabled
                required
              />
              <TextInput
                radius={"md"}
                mt={10}
                placeholder="Allukman"
                label="Facebook"
                readOnly
                disabled
                required
              />
              <TextInput radius={"md"} mt={10} placeholder="Allukman" label="TikTok" required readOnly  disabled/>
              <TextInput radius={"md"} mt={10} placeholder="Allukman" label="Twitter" required readOnly  disabled/>
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
              {/* <Group mt={35}>
                <Text color={COLOR.merah}>*</Text>
                <Text fz={10}>Wajib diisi</Text>
              </Group> */}

              <TextInput readOnly
                radius={"md"}
                mt={10}
                placeholder="Islam"
                label="Agama"
                disabled
                required
              />
              <TextInput readOnly
                radius={"md"}
                mt={10}
                placeholder="Programmer"
                label="Pekerjaan"
                disabled
                required
              />
              <TextInput radius={"md"} mt={10} placeholder="Jl.Gunung Anthena 1 No 11 A" label="Alamat" readOnly disabled required />
              <TextInput
                readOnly
                disabled
                radius={"md"}
                mt={10}
                placeholder="Bali"
                label="Provinsi"
                required
              />
              <TextInput readOnly
                radius={"md"}
                mt={10}
                placeholder="Denpasar"
                label="Kabupaten / Kota"
                disabled
                required
              />
              <TextInput readOnly
                radius={"md"}
                mt={10}
                placeholder="Denpasar Barat"
                label="Kecamatan"
                disabled
                required
              />
              <TextInput readOnly
                radius={"md"}
                mt={10}
                placeholder="Padang Sambian Klod"
                label="Desa"
                disabled
                required
              />
              <TextInput readOnly
                radius={"md"}
                mt={10}
                placeholder="0000"
                label="RT/RW"
                disabled
                required
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
