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
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { useRouter } from "next/router";
import { useForm } from "@mantine/form";
import { sProvinsi } from "@/s_state/wilayah/s_provinsi";
import { _loadProvinsi } from "@/load_data/wilayah/load_provinsi";
import { sJabatanDewanPimpinanDaerah } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { _loadJabatanDewanPimpinanDaerah } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { useAtom } from "jotai";
import { ambil_data } from "@/xg_state.ts/g_selected_page";
import { atomWithStorage } from "jotai/utils";
import StrukturDewanPimpinanDaerah2 from "../struktur-dewan-pimpinan-daerah2";
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

const val_open_struktur_daerah = atomWithStorage(
  "val_open_struktur_daerah",
  false
);

function DewanPimpinanDaerah() {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const router = useRouter();
  const [value, setValue] = useState("");
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const [openStrukturDaerah, SetOpenStrukturDaerah] = useAtom(
    val_open_struktur_daerah
  );

  return (
    <>
      <Drawer
        opened={openStrukturDaerah}
        onClose={() => SetOpenStrukturDaerah(false)}
        size={490}
      >
        <StrukturDewanPimpinanDaerah2 />
      </Drawer>
      <UnstyledButton
        className={classes.user}
        pr={20}
        pl={20}
        onClick={() => {
          setAmbilData({
            ...ambilData,
            masterTingkatPengurusId: "3",
          });
          SetOpenStrukturDaerah(true);
          // router.push("/v2/data-partai-v2/struktur-dewan-pimpinan-daerah2")
        }}
      >
        <Group>
          <div style={{ flex: 1 }}>
            <Text size={15} fw={700}>
              Dewan Pimpinan Daerah
            </Text>
          </div>
          <IoArrowForwardCircleOutline size="1.5rem" />
        </Group>
      </UnstyledButton>
    </>
  );
}

export default DewanPimpinanDaerah;
