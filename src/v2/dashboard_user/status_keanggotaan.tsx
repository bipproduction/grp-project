import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Group,
  Input,
  Menu,
  Modal,
  Paper,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import COLOR from "../../../fun/WARNA";
import { AiOutlineEdit } from "react-icons/ai";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { api } from "@/lib/api-backend";
import { data } from "jquery";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import {
  DataDiri,
  ModelSumberDayaPartai,
} from "@/model/interface_sumber_daya_partai";
import {
  _dataStruktur,
  _loadUserSumberDayaPartai_ById,
} from "@/load_data/sumber_daya_partai/load_sumber_daya_partai";
import { _editDataStruktur } from "../sumber_daya_partai/struktur_partai/table_struktur_partai";
import { _dataKeanggotaan } from "@/load_data/sayap_partai/load_sayap_partai";
import EditStatusKeanggotaan from "./edit_status_keanggotaan/edit_status_keanggotaan";

export const _keanggotaan_user = atomWithStorage<
  ModelSumberDayaPartai[] | null
>("_list_database_Keaggotaan", null);

const StatusKeanggotaanV2 = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [listDataKeanggotaan, setListDataKeanggotaan] =
    useAtom(_keanggotaan_user);

  useShallowEffect(() => {
    fetch(
      api.apiSumberDayaPartaiGetByUser +
        `?user=${localStorage.getItem("user_id")}`
    )
      // .then((val) => val.json())
      // .then(setListData);
      .then(async (val) => {
        if (val.status == 200) {
          const data = await val.json();
          setListDataKeanggotaan(data);
          return;
        }
      });
  }, []);

  return (
    <>
      {/* <pre>{JSON.stringify(listDataKeanggotaan, null, 2)}</pre> */}
      <Modal opened={opened} onClose={close} centered size={"lg"} >
        <EditStatusKeanggotaan/>
      </Modal>

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
              Status Keanggotaan
            </Text>
          </Grid.Col>
        </Grid>
      </Paper>

      <Box pt={20}>
        <Box
          pl={30}
          p={20}
          sx={{
            backgroundColor: COLOR.coklat,
            borderRadius: 10,
          }}
        >
          {/* <Text fz={15} color="white">Status Keanggotaan</Text> */}
          <Group position="apart">
            <Box>
              {listDataKeanggotaan?.map((v, i) => (
                <Box key={i}>
                  <Text fw={700} color="white" fz={20}>
                    {v.MasterStatusKeanggotaan.name}
                  </Text>
                </Box>
              ))}
            </Box>
          <Button color="orange.9" bg={COLOR.orange} radius={20} onClick={open}>Edit Status</Button>
          </Group>
        </Box>
      </Box>
    </>
  );
};

export default StatusKeanggotaanV2;
