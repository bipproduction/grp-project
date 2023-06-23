import {
  Button,
  Drawer,
  Group,
  Select,
  Text,
  TextInput,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import React, { useState } from "react";
import COLOR from "../../../../../fun/WARNA";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { api } from "@/lib/api-backend";
import _ from "lodash";
import { useRouter } from "next/router";
import toast from "react-simple-toasts";
import { useForm } from "@mantine/form";
import { sJabatanPimpinanRanting } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { _loadJabatanPimpinanRanting } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { useAtom } from "jotai";
import { ambil_data } from "@/xg_state.ts/g_selected_page";
import { atomWithStorage } from "jotai/utils";
import StrukturPimpinanRanting2 from "../struktur-pimpinan-ranting2";
const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(764),
    backgroundColor: COLOR.hitam,
  },
  user: {
    display: "block",
    width: "100%",
    padding: 15,
    borderRadius: 8,
    color: "white",

    backgroundColor: COLOR.merah,
  },
}));

const val_open_struktur_ranting = atomWithStorage(
  "val_open_struktur_ranting",
  false
);

function PimpinanRanting() {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const [openStrukturRanting, setOpenStrukturRanting] = useAtom(
    val_open_struktur_ranting
  );

  return (
    <>
      <Drawer
        opened={openStrukturRanting}
        onClose={() => setOpenStrukturRanting(false)}
        size={490}
      >
        <StrukturPimpinanRanting2 />
      </Drawer>
      <UnstyledButton
        className={classes.user}
        pr={20}
        pl={20}
        onClick={() => {
          setAmbilData({
            ...ambilData,
            masterTingkatPengurusId: "6",
          });
          setOpenStrukturRanting(true);
          // router.push("/v2/data-partai-v2/struktur-pimpinan-ranting2");
        }}
      >
        <Group>
          <div style={{ flex: 1 }}>
            <Text size={15} fw={700}>
              Pimpinan Ranting
            </Text>
          </div>
          <IoArrowForwardCircleOutline size="1.5rem" />
        </Group>
      </UnstyledButton>
    </>
  );
}

export default PimpinanRanting;
