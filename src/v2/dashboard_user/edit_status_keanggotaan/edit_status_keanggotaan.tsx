import { api } from "@/lib/api-backend";
import { apiGetMaster } from "@/lib/api-get-master";
import { _loadStatusKeanggotaan } from "@/load_data/sumber_daya_partai/load_status_keanggotaan";
import { sStatusKeanggotaan } from "@/s_state/sumber_daya_partai/s_status_keanggotaan";
import {
  Box,
  Button,
  Drawer,
  Group,
  Modal,
  NativeSelect,
  Select,
  Stack,
  Text,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import React, { useState } from "react";
import COLOR from "../../../../fun/WARNA";
import { useAtom } from "jotai";
import {
  ambil_data,
  ambil_data_edit_keanggotaan,
  ambil_data_sayap,
} from "@/xg_state.ts/g_selected_page";
import { atomWithStorage } from "jotai/utils";
import { ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";
import { useForm } from "@mantine/form";
import { json } from "stream/consumers";
import { number } from "echarts";
import toast from "react-simple-toasts";
import { _datapartai_user } from "../profile";
import { _new_loadEditByModel } from "@/load_data/sumber_daya_partai/load_sumber_daya_partai";
import { useRouter } from "next/router";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import AnggotaPartaiTsx from "./anggota_partai_keanggotaan.tsx";
import KaderPartaiKeanggotaanTsx from "./kader_partai_keanggotaan.tsx";
import StrukturPartaiKeanggotaanTsx from "./struktur_partai_keanggotaan.tsx";
import SayapPartaiKeanggotaanTsx from "./sayap_partai_keanggotaan.tsx";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(764),
    backgroundColor: COLOR.orange,
  },
  user: {
    display: "block",
    width: "100%",
    padding: 15,
    borderRadius: 8,
    color: "white",

    backgroundColor: COLOR.coklat,
  },
}));

const val_open_struktur = atomWithStorage("val_open_struktur", false);
const val_open_sayap = atomWithStorage("val_open_sayap", false);

function EditStatusKeanggotaan({keluarPusat}: any) {
  const { classes } = useStyles();
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const [ambilDataSayap, setAmbilDataSayap] = useAtom(ambil_data_sayap);
  const [openStruktur, setOpenStruktur] = useAtom(val_open_struktur);
  const [openSayap, setOpenSayap] = useAtom(val_open_sayap);

  return (
    <>
      {/* {JSON.stringify(ambilData)}
      {JSON.stringify(ambilDataSayap)} */}
      <Box
        p={20}
        pt={40}
        pb={30}
        pl={30}
        pr={30}
        sx={{
          backgroundColor: COLOR.abuabu,
          borderRadius: 10,
        }}
      >
        <Group pl={20} pr={20} pb={20} pt={10}>
          <UnstyledButton
            className={classes.user}
            pr={20}
            pl={20}
            onClick={() => {
              setAmbilData({
                ...ambilData,
                masterStatusKeanggotaanId: "1",
                // sayapPartai: ""
              });
              // StrukturPartai();
              setOpenStruktur(true);
              keluarPusat(true)
            }}
          >
            <Group>
              <div style={{ flex: 1 }}>
                <Text size={15} fw={700}>
                  Struktur Partai
                </Text>
              </div>
              <IoArrowForwardCircleOutline size="1.5rem" />
            </Group>
          </UnstyledButton>
          <UnstyledButton
            className={classes.user}
            pr={20}
            pl={20}
            onClick={() => {
              setAmbilDataSayap({
                ...ambilDataSayap,
                masterStatusKeanggotaanId: "2",
                // strukturpartaiId: ""
              });
              // SayapPartai()
              setOpenSayap(true);
              keluarPusat(true)
            }}
          >
            <Group>
              <div style={{ flex: 1 }}>
                <Text size={15} fw={700}>
                  Sayap Partai
                </Text>
              </div>
              <IoArrowForwardCircleOutline size="1.5rem" />
            </Group>
          </UnstyledButton>
          <KaderPartaiKeanggotaanTsx />
          <AnggotaPartaiTsx />
        </Group>
      </Box>
      <ModalStruktur />
      <ModalSayap />
    </>
  );
}

export function ModalStruktur() {
  const [openStruktur, setOpenStruktur] = useAtom(val_open_struktur);
  return (
    <>
      <Modal
        size={"md"}
        opened={openStruktur}
        onClose={() => setOpenStruktur(false)}
        centered
      >
        <StrukturPartaiKeanggotaanTsx/>
      </Modal>
    </>
  );
}

export function ModalSayap() {
  const [openSayap, setOpenSayap] = useAtom(val_open_sayap);
  return (
    <>
      <Modal
        size={"md"}
        opened={openSayap}
        onClose={() => setOpenSayap(false)}
        centered
      >
        <SayapPartaiKeanggotaanTsx/>
      </Modal>
    </>
  );
}

export default EditStatusKeanggotaan;
