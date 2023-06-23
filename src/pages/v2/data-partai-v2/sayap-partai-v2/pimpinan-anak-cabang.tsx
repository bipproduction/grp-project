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
import { useRouter } from "next/router";
import { api } from "@/lib/api-backend";
import _ from "lodash";
import toast from "react-simple-toasts";
import { useForm } from "@mantine/form";
import { sSayapPartai } from "@/s_state/sayap_partai/s_sayap_partai";
import { sJabatanPimpinanAnakCabang } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { _loadJabatanPimpinanAnakCabang } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { useAtom } from "jotai";
import { ambil_data, ambil_data_sayap } from "@/xg_state.ts/g_selected_page";
import { atomWithStorage } from "jotai/utils";
import SayapPimpinanAnakCabang2 from "../sayap-pimpinan-anak-cabang2";
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

const val_open_anakCabang = atomWithStorage("val_open_anakCabang", false);

function PimpinanAnakCabang() {
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const [ambilDataSayap, setAmbilDataSayap] = useAtom(ambil_data_sayap);
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const router = useRouter();
  const [openSayapAnakCab, setOpenSayapAnakCab] = useAtom(val_open_anakCabang);

  return (
    <>
      <Drawer
        opened={openSayapAnakCab}
        onClose={() => setOpenSayapAnakCab(false)}
        size={490}
      >
        <SayapPimpinanAnakCabang2/>
      </Drawer>
      <UnstyledButton
        className={classes.user}
        pr={20}
        pl={20}
        onClick={() => {
          setAmbilDataSayap({
            ...ambilDataSayap,
            masterTingkatSayapId: "4",
          });
          setOpenSayapAnakCab(true)
          // router.push("/v2/data-partai-v2/sayap-pimpinan-anak-cabang2");
        }}
      >
        <Group>
          <div style={{ flex: 1 }}>
            <Text size={15} fw={700}>
              Pimpinan Anak cabang
            </Text>
          </div>
          <IoArrowForwardCircleOutline size="1.5rem" />
        </Group>
      </UnstyledButton>
    </>
  );
}

export default PimpinanAnakCabang;
