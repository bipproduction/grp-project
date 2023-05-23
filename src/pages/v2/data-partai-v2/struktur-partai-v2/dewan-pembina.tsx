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
import { useDisclosure, useFullscreen, useShallowEffect } from "@mantine/hooks";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import { useForm } from "@mantine/form";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { sJabatanDewanPembina } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { _loadJabatanDewanPembina } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { useAtom } from "jotai";
import { number } from "echarts";
import { ambil_data } from "@/xg_state.ts/g_selected_page";
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



function DewanPembina() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const { classes } = useStyles();
  return (
    <>
        {/* {JSON.stringify(ambilData)} */}
      <UnstyledButton className={classes.user} pr={20} pl={20} 
      onClick={() => {
        setAmbilData({
          ...ambilData,
          masterTingkatPengurusId: "1",
        })
        router.push('/v2/data-partai-v2/struktur-dewan-pembina2')
      }}
      >
        <Group>
          <div style={{ flex: 1 }}>
            <Text size={15} fw={700}>
              Dewan Pembina
            </Text>
          </div>
          <IoArrowForwardCircleOutline size="1.5rem" />
        </Group>
      </UnstyledButton>
    </>
  );
}

export default DewanPembina;
