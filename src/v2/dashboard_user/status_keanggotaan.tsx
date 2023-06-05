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
} from "@/load_data/sumber_daya_partai/load_edit_sumber_daya_partai";
import { _editDataStruktur } from "../sumber_daya_partai/struktur_partai/table_struktur_partai";
import { _dataKeanggotaan } from "@/load_data/sayap_partai/load_sayap_partai";

const StatusKeanggotaanV2 = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      {/* {JSON.stringify(dataKeanggotan)} */}
      {/* <Modal opened={opened} onClose={close} centered size={"xl"}>
        <EditKeanggotaan />
      </Modal> */}

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
            backgroundColor: COLOR.abuabu,
            borderRadius: 10,
          }}
        >
          <Box>
            <Text fz={15}>Status Keanggotaan</Text>
            <Text fw={700}>Kader Partai</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StatusKeanggotaanV2;
