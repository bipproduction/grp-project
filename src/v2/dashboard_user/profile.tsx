import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Group,
  Image,
  Modal,
  Paper,
  ScrollArea,
  Select,
  SimpleGrid,
  Stack,
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
import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import {
  DataDiri,
  ModelSumberDayaPartai,
  UserMediaSocial,
} from "@/model/interface_sumber_daya_partai";
import { _dataStruktur } from "@/load_data/sumber_daya_partai/load_edit_sumber_daya_partai";
import EditDataDiriNew from "./edit_data_diri_new";
import { Router } from "next/router";
import moment from "moment";
import { val_edit_modal } from "@/xg_state.ts/val_edit_modal";
import "moment/locale/id";
import {
  AiFillEdit,
  AiOutlineCloudUpload,
  AiOutlineEdit,
} from "react-icons/ai";
import EditMediaSocial from "./edit_media_social";
import EditFoto from "./edit_foto";
moment.locale("id");

export const _datapartai_form = atomWithStorage<DataDiri | null>(
  "dataDiri",
  null
);
export const _datapartai_user = atomWithStorage<ModelSumberDayaPartai | null>(
  "_list_database_data_diri",
  null
);
export const _dataImages = atomWithStorage<DataDiri | null>("dataDiri", null);

const val_open_edit_kta = atomWithStorage("val_open_edit_kta", false);
const val_open_edit_media = atomWithStorage("val_open_edit_media", false);

const DataProfileV2 = () => {
  // const [opened, { open, close }] = useDisclosure(false);
  // const [listData, setListData] = useState<string | any>("");
  const [listData2, setListData2] = useAtom(_datapartai_user);
  const [listData, setListData] = useAtom(_datapartai_form);
  const [dataStuktur, setDataStruktur] = useAtom(_dataStruktur);
  const [openModal, setOpenModal] = useAtom(val_edit_modal);
  const [openKta, setOpenKta] = useAtom(val_open_edit_kta);
  const [openMedia, setOpenMedia] = useAtom(val_open_edit_media);

  useShallowEffect(() => {
    fetch(api.apiDataDiriGetOne + `?id=${localStorage.getItem("user_id")}`)
      // .then((val) => val.json())
      // .then(setListData);
      .then(async (val) => {
        if (val.status == 200) {
          const data = await val.json();
          setListData(data);
          return;
        }
      });
  }, []);

  useShallowEffect(() => {
    fetch(api.apiDataDiriGetOne + `?id=${localStorage.getItem("user_id")}`)
      // .then((val) => val.json())
      // .then(setListData2);
      .then(async (val) => {
        if (val.status == 200) {
          const data = await val.json();
          setListData2(data);
          return;
        }
      });
  }, []);
  const [image, setImage] = useAtom(_dataImages);
  const [gambarDataDiri, setGambarDataDiri] = useState<any | null>(null);

  // useShallowEffect(() => {
  //   fetch(api.apiDataDiriGetGambar + `?id=${image?.id}`)
  //   .then(async (val) => {
  //     if (val.status == 200) {
  //       console.log(val)
  //       // const data = await val.json()
  //       // console.log(data);
  //       // setGambarDataDiri(data);
  //       return
  //     }
  //   })
  // })

  return (
    <>
      {/* {JSON.stringify(image?.id)} */}

      {/* <pre>{JSON.stringify(listData2, null, 2)}</pre> */}
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
      <Box pt={20}>
        <Box
          sx={{
            backgroundColor: COLOR.coklat,
            borderRadius: 10,
          }}
        >
          <Box pt={20}>
            <Center>
              <Box
                w={200}
                h={200}
                sx={{
                  backgroundColor: "white",
                  borderRadius: 10,
                }}
              >
                <Stack>
                  <Center p={10}>
                    <Image
                      src={api.apiDataDiriGetGambar + `?id=${image?.id}`}
                      width={170}
                      height={180}
                      alt="img"
                      radius={5}
                    />
                  </Center>
                </Stack>
              </Box>
            </Center>
            {/* UPLOAD FOTO */}
            <EditFoto />
          </Box>
          <Box p={10}>
            <SimpleGrid
              cols={2}
              breakpoints={[
                { maxWidth: 980, cols: 2, spacing: "xl" },
                { maxWidth: 755, cols: 1, spacing: "xl" },
              ]}
            >
              {" "}
              <Box pt={20}>
                <Box
                  p={20}
                  pl={30}
                  pr={30}
                  h={620}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 10,
                  }}
                >
                  <Box>
                    <Text fz={15}>NIK</Text>
                    <Text fw={700}>{listData?.nik}</Text>
                  </Box>
                  <Box mt={10}>
                    <Text fz={15}>Nama</Text>
                    <Text fw={700}>{listData?.name}</Text>
                  </Box>
                  <Box mt={10}>
                    <Text fz={15}>Email</Text>
                    <Text fw={700}>{listData2?.User?.email}</Text>
                  </Box>
                  <Box mt={10}>
                    <Text fz={15}>Tempat Lahir</Text>
                    <Text fw={700}>{listData?.tempatLahir}</Text>
                  </Box>
                  <Box mt={10}>
                    <Text fz={15}>Tanggal Lahir</Text>
                    <Text fw={700}>
                      {moment(listData?.tanggalLahir).format("LL")}
                    </Text>
                  </Box>
                  <Box mt={10}>
                    <Text fz={15}>Jenis Kelamin</Text>
                    <Text fw={700}>{listData?.MasterJenisKelamin?.name}</Text>
                  </Box>
                  <Box mt={10}>
                    <Text fz={15}>Nomor Handphone</Text>
                    <Text fw={700}>{listData?.phoneNumber}</Text>
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

                  {/* BATAS */}
                </Box>
              </Box>
              <Box pt={20}>
                <Box
                  p={20}
                  pl={30}
                  pr={30}
                  pt={10}
                  h={620}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 10,
                  }}
                >
                  <Box mt={10}>
                    <Text fz={15}>
                      {listData2?.User?.UserMediaSocial.map((v, i) => (
                        <Box key={i}>
                          <Text fz={15} mt={10}>
                            {v.MasterMediaSocial.name}
                          </Text>
                          <Text fw={700}>{v.name}</Text>
                        </Box>
                      ))}
                    </Text>
                    <Text fw={700}></Text>
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
                  <Box mt={10} mb={7}>
                    <Text fz={15}>RT/RW</Text>
                    <Text fw={700}>{listData?.rtRw}</Text>
                  </Box>
                </Box>
              </Box>
            </SimpleGrid>
          </Box>
          <Group>
            <Flex gap="md" pt={20} pl={10} pb={30}>
              <Box w={200}>
                <Button
                  fullWidth
                  color="pink.9"
                  bg={COLOR.orange}
                  radius={"xl"}
                  onClick={() => setOpenKta(true)}
                  leftIcon={<AiOutlineEdit size={20} />}
                >
                  EDIT PROFILE
                </Button>
              </Box>
            </Flex>
            <Flex gap="md" pt={20} pl={10} pb={30}>
              <Box w={200}>
                <Button
                  fullWidth
                  color="pink.9"
                  bg={COLOR.orange}
                  radius={"xl"}
                  onClick={() => setOpenMedia(true)}
                  leftIcon={<AiOutlineEdit size={20} />}
                >
                  EDIT MEDIA SOSIAL
                </Button>
              </Box>
            </Flex>
          </Group>
        </Box>
      </Box>
      <ModalEditMediaSocial />
      <ModalEditData />
    </>
  );
};

export function ModalEditData() {
  const [openModal, setOpenModal] = useAtom(val_edit_modal);
  const [openKta, setOpenKta] = useAtom(val_open_edit_kta);
  return (
    <>
      <Modal
        size={"xl"}
        opened={openKta}
        onClose={() => setOpenKta(false)}
        // onClose={}
        centered
        overlayProps={{
          opacity: 0.5,
        }}
        // withCloseButton={false}
      >
        <EditDataDiriNew thisClosed={() => setOpenKta(false)} />
      </Modal>
    </>
  );
}

export function ModalEditMediaSocial() {
  const [openMedia, setOpenMedia] = useAtom(val_open_edit_media);
  return (
    <>
      <Modal
        size={"md"}
        opened={openMedia}
        onClose={() => setOpenMedia(false)}
        centered
        overlayProps={{
          opacity: 0.5,
        }}
      >
        <EditMediaSocial keluarMedia={() => setOpenMedia(false)} />
      </Modal>
    </>
  );
}

export default DataProfileV2;
