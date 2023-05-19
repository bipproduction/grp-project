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
              <Box mt={20}>
                <Text fz={15}>NIK</Text>
                <Text fw={700}>3510101212990003</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Nama</Text>
                <Text fw={700}>Moh Alif Al Lukman</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Email</Text>
                <Text fw={700}>allukman.lukman99@gmail.com</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Tempat Lahir</Text>
                <Text fw={700}>Kalimantan Tengah</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Tanggal Lahir</Text>
                <Text fw={700}>12 Desember 1999</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Jenis Kelamin</Text>
                <Text fw={700}>Laki - Laki</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Nomor Handphone</Text>
                <Text fw={700}>087701790942</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Instargram</Text>
                <Text fw={700}>Allukman12</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Facebook</Text>
                <Text fw={700}>Allukman</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>TikTok</Text>
                <Text fw={700}>Allukman</Text>
              </Box>
              {/* BATAS */}
            </Box>
          </Box>
        </Grid.Col>
        <Grid.Col span={6}>
          <Box pt={20}>
            <Box
              p={20}
              pl={30}
              pr={30}
              pt={65}
              sx={{
                backgroundColor: COLOR.abuabu,
                borderRadius: 10,
              }}
            >
              {/* <Group mt={35}>
                <Text color={COLOR.merah}>*</Text>
                <Text fz={10}>Wajib diisi</Text>
              </Group> */}
              <Box mt={10}>
                <Text fz={15}>Twitter</Text>
                <Text fw={700}>Allukman</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Agama</Text>
                <Text fw={700}>Islam</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Pekerjaan</Text>
                <Text fw={700}>Programmer</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Alamat</Text>
                <Text fw={700}>Jl.Gunung Anthena 1 No 11 A</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Alamat</Text>
                <Text fw={700}>Jl.Gunung Anthena 1 No 11 A</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Provinsi</Text>
                <Text fw={700}>Bali</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Kabupaten / Kota</Text>
                <Text fw={700}>Denpasar</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Kecamatan</Text>
                <Text fw={700}>Denpasar Barat</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Desa</Text>
                <Text fw={700}>Padang Sambian Klod</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>RT/RW</Text>
                <Text fw={700}>0000</Text>
              </Box>
            </Box>
          </Box>
        </Grid.Col>
      </Grid>
      <Flex gap="md" pt={20}>
        <Modal
          opened={opened}
          onClose={close}
          size="100%"
          // fullScreen
          overlayProps={{
            // color: theme.colorScheme === 'light' ? theme.colors.dark[9] : theme.colors.dark[2],
            opacity: 0.1,
          }}
        >
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
      </Flex>
    </>
  );
};

export default DataProfileV2;
