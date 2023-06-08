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
  Col,
  Card,
} from "@mantine/core";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";

import { useRef, useState } from "react";
import { atomWithStorage } from "jotai/utils";
import { DataDiri } from "@/model/interface_sumber_daya_partai";
import { useAtom } from "jotai";
import { api } from "@/lib/api-backend";

import moment from "moment";
import { val_edit_modal } from "@/xg_state.ts/val_edit_modal";
import "moment/locale/id";
import { AiOutlineCloudDownload } from "react-icons/ai";
import COLOR from "../../../../fun/WARNA";
moment.locale("id");

export const _datapartai_form = atomWithStorage<DataDiri | null>("", null);
const val_open_edit_kta2 = atomWithStorage("val_open_edit_kta2", false);

export const _dataImages = atomWithStorage<DataDiri | null>("dataDiri", null);

const KTAV2 = () => {
  const ref = useRef();
  const [gambar, setGambar] = useState<any>();
  const [opened, { open, close }] = useDisclosure(false);
  const [listData1, setListData1] = useAtom(_datapartai_form);
  const [openModal, setOpenModal] = useAtom(val_edit_modal);
  const [openKta2, setOpenKta2] = useAtom(val_open_edit_kta2);
  const [image, setImage] = useAtom(_dataImages);

  async function loadKTA() {
    fetch(api.apiDataDiriGetOne + `?id=${localStorage.getItem("user_id")}`)
      // .then((val) => val.json())
      // .then(setListData);
      .then(async (val) => {
        if (val.status == 200) {
          const data = await val.json();
          setListData1(data);
          return;
        }
      });
  }

  useShallowEffect(() => {
    apa();
    loadKTA();
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
            border: "1px solid #7E1717",
            background: COLOR.coklat,
          }}
        >
          <Stack>
            <Center pt={40}>
              <Box mx="auto" ref={ref as any}>
                <BackgroundImage
                  src="../.././ktanewfoto.png"
                  w={{ base: 290, sm: 510, xs: 320 }}
                  h={{ sm: 350, base: 200, xs: 213 }}
                  radius={10}
                >
                  <Box
                  // pl={{ sm: 170, base: 80, xs: 95 }}
                  // pt={{ sm: 25, base: 15, xs: 16 }}
                  >
                    <Grid gutter="xs" pl={5}>
                      <Grid.Col span={3}>
                        <Flex
                          gap={5}
                          justify="flex-start"
                          align="flex-start"
                          direction="column"
                          wrap="wrap"
                        >

                           <Image
                            src={api.apiDataDiriGetGambar + `?id=${image?.id}`}
                            // w={{sm: 130, base: 300 }}
                            // h={{sm: 152, base: 300 }}
                            width={130}
                            height={152}
                            alt="img"
                            radius={5}
                            pl={20}
                            pt={25}
                          />
                        </Flex>
                      </Grid.Col>
                      <Grid.Col span={4}>
                        <Flex
                          gap={5}
                          justify="flex-start"
                          align="flex-start"
                          direction="column"
                          wrap="wrap"
                          pl={40}
                          pt={20}
                        >
                          <Text fw={"bold"} fz={{ base: 7, sm: 14, xs: 9 }}>
                            Name
                          </Text>
                          <Text fw={"bold"} fz={{ base: 7, sm: 14, xs: 9 }}>
                            Tempat
                          </Text>
                          <Text fw={"bold"} fz={{ base: 7, sm: 14, xs: 9 }}>
                            Tanggal
                          </Text>
                          <Text fw={"bold"} fz={{ base: 7, sm: 14, xs: 9 }}>
                            Kelurahan
                          </Text>
                          <Text fw={"bold"} fz={{ base: 7, sm: 14, xs: 9 }}>
                            Kecamatan
                          </Text>
                          <Text fw={"bold"} fz={{ base: 7, sm: 14, xs: 9 }}>
                            Kabupaten
                          </Text>
                          <Text fw={"bold"} fz={{ base: 7, sm: 14, xs: 9 }}>
                            Provinsi
                          </Text>
                          <Text fw={"bold"} fz={{ base: 7, sm: 14, xs: 9 }}>
                            Jenis Kelamin
                          </Text>
                        </Flex>
                      </Grid.Col>
                      <Grid.Col span={5}>
                        <Flex
                          gap={5}
                          justify="flex-start"
                          align="flex-start"
                          direction="column"
                          wrap="wrap"
                          pt={20}
                        >
                          <Text fz={{ base: 7, sm: 14, xs: 9 }}>
                            : {listData1?.name}
                          </Text>
                          <Text fz={{ base: 7, sm: 14, xs: 9 }}>
                            : {listData1?.tempatLahir}
                          </Text>
                          <Text fz={{ base: 7, sm: 14, xs: 9 }}>
                            : {moment(listData1?.tanggalLahir).format("LL")}
                          </Text>
                          <Text fz={{ base: 7, sm: 14, xs: 9 }}>
                            : {listData1?.MasterDesa?.name}
                          </Text>
                          <Text fz={{ base: 7, sm: 14, xs: 9 }}>
                            : {listData1?.MasterKecamatan?.name}
                          </Text>
                          <Text fz={{ base: 7, sm: 14, xs: 9 }}>
                            : {listData1?.MasterKabKot.name}
                          </Text>
                          <Text fz={{ base: 7, sm: 14, xs: 9 }}>
                            : {listData1?.MasterProvince.name}
                          </Text>
                          <Text fz={{ base: 7, sm: 14, xs: 9 }}>
                            : {listData1?.MasterJenisKelamin.name}
                          </Text>
                        </Flex>
                      </Grid.Col>
                    </Grid>
                  </Box>
                </BackgroundImage>
              </Box>
            </Center>
          </Stack>

          <Center pt={30} pb={40}>
            <Flex gap="md" pt={20}>
              {/* <Box w={150}>
                <Button
                  fullWidth
                  color="pink.9"
                  bg={COLOR.orange}
                  onClick={() => setOpenKta2(true)}
                  radius={"xl"}
                >
                  Edit KTA
                </Button>
              </Box> */}
              <Box w={160}>
                {/* <DownloadPng/> */}
                <Button
                  fullWidth
                  color="pink.9"
                  bg={COLOR.orange}
                  radius={"xl"}
                  leftIcon={<AiOutlineCloudDownload size={25} />}
                  onClick={() => gambar!.exportComponentAsPNG(ref as any)}
                >
                  Cetak KTA
                </Button>
              </Box>
            </Flex>
          </Center>
        </Box>
      </Box>
    </>
  );
};

export default KTAV2;
