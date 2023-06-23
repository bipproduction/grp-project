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
import { sJabatanPerwakilanLuarNegeri } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { sNegara } from "@/s_state/negara/s_negara";
import { useRouter } from "next/router";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { useForm } from "@mantine/form";
import { _loadNegara } from "@/load_data/negara/load_negara";
import {
  _loadJabatanDewanPimpinanDaerah,
  _loadJabtanPerwakilanLuarNegeri,
} from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { useAtom } from "jotai";
import { ambil_data } from "@/xg_state.ts/g_selected_page";
import { atomWithStorage } from "jotai/utils";
import StrukturPartaiLuarNegeri2 from "../struktur-partai-luar-negeri2";
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

const val_open_struktur_luar_negeri = atomWithStorage(
  "val_open_struktur_luar_negeri",
  false
);

function PartaiLuarNegeri() {
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const router = useRouter();
  const [openStrukturLuar, SetOpenStrukturLuar] = useAtom(
    val_open_struktur_luar_negeri
  );

  return (
    <>
      <Drawer
        opened={openStrukturLuar}
        onClose={() => SetOpenStrukturLuar(false)}
        size={490}
      >
        <StrukturPartaiLuarNegeri2 />
      </Drawer>
      <UnstyledButton
        className={classes.user}
        pr={20}
        pl={20}
        onClick={() => {
          setAmbilData({
            ...ambilData,
            masterTingkatPengurusId: "7",
          });
          SetOpenStrukturLuar(true);
          // router.push("/v2/data-partai-v2/struktur-partai-luar-negeri2");
        }}
      >
        <Group>
          <div style={{ flex: 1 }}>
            <Text size={15} fw={700}>
              Perwakilan Partai di Luar Negeri
            </Text>
          </div>
          <IoArrowForwardCircleOutline size="1.5rem" />
        </Group>
      </UnstyledButton>
    </>
  );
}

export default PartaiLuarNegeri;
