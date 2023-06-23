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
import { sSayapPartai } from "@/s_state/sayap_partai/s_sayap_partai";
import { sJabatanDewanPimpinanPusat } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import { _loadJabatanDewanPimpinanPusat } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { _loadSayapPartai } from "@/load_data/sayap_partai/load_sayap_partai";
import { useAtom } from "jotai";
import { ambil_data, ambil_data_sayap } from "@/xg_state.ts/g_selected_page";
import { atomWithStorage } from "jotai/utils";
import SayapDewanPimpinanPusat2 from "../sayap-dewan-pimpinan-pusat2";
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

const val_open_sayap_pusat = atomWithStorage("val_open_sayap_pusat", false);

function DewanPimpinanPusat() {
  const [ambilDataSayap, setAmbilDataSayap] = useAtom(ambil_data_sayap);
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const [value, setValue] = useState<any>();
  const router = useRouter();
  const [openSayap, setOpenSayap] = useAtom(val_open_sayap_pusat);

  return (
    <>
      <Drawer
        opened={openSayap}
        onClose={() => setOpenSayap(false)}
        size={490}
      >
        <SayapDewanPimpinanPusat2/>
      </Drawer>
      <UnstyledButton
        className={classes.user}
        pr={20}
        pl={20}
        onClick={() => {
          setAmbilDataSayap({
            ...ambilDataSayap,
            masterTingkatSayapId: "1",
          });
          setOpenSayap(true)
          // router.push("/v2/data-partai-v2/sayap-dewan-pimpinan-pusat2");
        }}
      >
        <Group>
          <div style={{ flex: 1 }}>
            <Text size={15} fw={700}>
              Dewan Pimpinan Pusat
            </Text>
          </div>
          <IoArrowForwardCircleOutline size="1.5rem" />
        </Group>
      </UnstyledButton>
    </>
  );
}

export default DewanPimpinanPusat;
