import {
  Box,
  Button,
  Center,
  Grid,
  Group,
  Paper,
  Text,
  Image,
  Flex,
  Modal,
  Stack,
  BackgroundImage,
} from "@mantine/core";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import COLOR from "../../../fun/WARNA";
import EditKTAV2 from "./edit_kta";
import CobaAja from "./data-png";
import { useRef, useState } from "react";
import { atomWithStorage } from "jotai/utils";
import { DataDiri } from "@/model/interface_sumber_daya_partai";
import { useAtom } from "jotai";
import { api } from "@/lib/api-backend";

export const _datapartai_form = atomWithStorage<DataDiri | null>("", null)

const KTAV2 = () => {
  const ref = useRef();
  const [gambar, setGambar] = useState<any>();
  const [opened, { open, close }] = useDisclosure(false);
  const [listData, setListData] = useAtom(_datapartai_form)

  useShallowEffect(() => {
    fetch(api.apiDataDiriGetOne + `?id=${localStorage.getItem("user_id")}`)
      .then((val) => val.json())
      .then(setListData);
  }, []);

  useShallowEffect(() => {
    apa();
  });

  async function apa() {
    const ini = await import("react-component-export-image");
    setGambar(ini as any);
  }

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
        {/* <pre>{JSON.stringify(listData, null, 2)}</pre> */}
        <Grid>
          <Grid.Col span={12}>
            <Text mt={5} mb={5} ml={10} fz={25} fw={700}>
              Kartu Tanda Anggota
            </Text>
          </Grid.Col>
        </Grid>
      </Paper>
      <Box pt={20}>
        <Box
          sx={{
            borderRadius: 10,
            backgroundColor: COLOR.orange,
          }}
        >
          <Center pt={40}>
            <Box mx="auto" ref={ref as any}>
              <BackgroundImage
                src="../.././KTANew10.png"
                w={560}
                h={370}
                radius={30}
              >
                <Box pl={170} pt={25}>
                  <Grid gutter="xs">
                    <Grid.Col span={4}>
                      <Flex
                        gap={5}
                        justify="flex-start"
                        align="flex-start"
                        direction="column"
                        wrap="wrap"
                      >
                        <Text fz={15} fw={"bold"}>Name</Text>
                        <Text fz={15} fw={"bold"}>Tempat</Text>
                        <Text fz={15} fw={"bold"}>Tanggal</Text>
                        <Text fz={15} fw={"bold"}>Kelurahan</Text>
                        <Text fz={15} fw={"bold"}>Kecamatan</Text>
                        <Text fz={15} fw={"bold"}>Kabupaten</Text>
                        <Text fz={15} fw={"bold"}>Provinsi</Text>
                        <Text fz={15} fw={"bold"}>Jenis Kelamin</Text>
                      </Flex>
                    </Grid.Col>
                    <Grid.Col span={8}>
                      <Flex
                        gap={5}
                        justify="flex-start"
                        align="flex-start"
                        direction="column"
                        wrap="wrap"
                      >
                        <Text fz={15} >: {listData?.name} </Text>
                        <Text fz={15} >: {listData?.tempatLahir}</Text>
                        <Text fz={15} >:  {listData?.tanggalLahir}</Text>
                        <Text fz={15} >: {listData?.MasterDesa.name}</Text>
                        <Text fz={15} >: {listData?.MasterKecamatan.name} </Text>
                        <Text fz={15} >: {listData?.MasterKabKot.name} </Text>
                        <Text fz={15} >: {listData?.MasterProvince.name}</Text>
                        <Text fz={15} >: {listData?.MasterJenisKelamin.name}</Text>
                      </Flex>
                    </Grid.Col>
                  </Grid>
                </Box>
              </BackgroundImage>
            </Box>
          </Center>

          <Center pt={30} pb={40}>
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
                  color="pink.9"
                  bg={COLOR.ungu}
                  onClick={open}
                  radius={"xl"}
                >
                  Edit KTA
                </Button>
              </Box>
              <Box w={150}>
                {/* <DownloadPng/> */}
                <Button
                  fullWidth
                  color="pink.9"
                  bg={COLOR.ungu}
                  radius={"xl"}
                  onClick={() => gambar!.exportComponentAsPNG(ref as any)}
                >
                  Cetak KTA
                </Button>
                {/* <PngDownload /> */}
                {/* <Coba/> */}
                {/* <CobaAja/> */}
              </Box>
            </Flex>
          </Center>
        </Box>
      </Box>
    </>
  );
};
export default KTAV2;
