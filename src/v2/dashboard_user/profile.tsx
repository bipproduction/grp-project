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
import React, { useState } from "react";
import { Simonetta } from "next/font/google";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import COLOR from "../../../fun/WARNA";
import EditKTAV2 from "./edit_kta";
import { api } from "@/lib/api-backend";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { DataDiri, ModelSumberDayaPartai, UserMediaSocial } from "@/model/interface_sumber_daya_partai";

export const _datapartai_form = atomWithStorage<DataDiri | null>("", null)
export const _datapartai_user = atomWithStorage<ModelSumberDayaPartai | null>("_list_database_data_diri", null)

const DataProfileV2 = () => {
  const [opened, { open, close }] = useDisclosure(false);
  // const [listData, setListData] = useState<string | any>("");
  const [listData2, setListData2] = useAtom(_datapartai_user)
  const [listData, setListData] = useAtom(_datapartai_form)

  useShallowEffect(() => {
    fetch(api.apiDataDiriGetOne + `?id=${localStorage.getItem("user_id")}`)
      .then((val) => val.json())
      .then(setListData);
  }, []);

  useShallowEffect(() => {
    fetch(api.apiDataDiriGetOne + `?id=${localStorage.getItem("user_id")}`)
      .then((val) => val.json())
      .then(setListData2);
  }, []);
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
            <Text mt={5} mb={5} fz={25} ml={10} fw={700}>
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
              {/* <Text fz={22}  fw={700}>
                Data Profile
              </Text> */}
              {/* <Group>
                <Text color={COLOR.merah}>*</Text>
                <Text fz={10}>Wajib diisi</Text>
              </Group> */}
              <Box mt={20}>
                <Text fz={15}>NIK</Text>
                <Text fw={700}>{listData?.nik}</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Nama</Text>
                <Text fw={700}>{listData?.name}</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Email</Text>
                <Text fw={700}>{listData2?.User.email}</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Tempat Lahir</Text>
                <Text fw={700}>{listData?.tempatLahir}</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Tanggal Lahir</Text>
                <Text fw={700}>{listData?.tanggalLahir}</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Jenis Kelamin</Text>
                <Text fw={700}>{listData?.MasterJenisKelamin.name}</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Nomor Handphone</Text>
                <Text fw={700}>{listData?.phoneNumber}</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Instargram</Text>
                <Text fw={700}></Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Facebook</Text>
                <Text fw={700}></Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>TikTok</Text>
                <Text fw={700}></Text>
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
              pt={10}
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
                <Text fw={700}></Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Agama</Text>
                <Text fw={700}>{listData?.MasterAgama.name}</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Pekerjaan</Text>
                <Text fw={700}>{listData?.MasterPekerjaan.name}</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Alamat</Text>
                <Text fw={700}>{listData?.alamat}</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Provinsi</Text>
                <Text fw={700}>{listData?.MasterProvince.name}</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Kabupaten / Kota</Text>
                <Text fw={700}>{listData?.MasterKabKot.name}</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Kecamatan</Text>
                <Text fw={700}>{listData?.MasterKecamatan.name}</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>Desa</Text>
                <Text fw={700}>{listData?.MasterDesa.name}</Text>
              </Box>
              <Box mt={10}>
                <Text fz={15}>RT/RW</Text>
                <Text fw={700}>{listData?.rtRw}</Text>
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
