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
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { useForm } from "@mantine/form";
import { sSayapPartai } from "@/s_state/sayap_partai/s_sayap_partai";
import { sProvinsi } from "@/s_state/wilayah/s_provinsi";
import { sJabatanDewanPimpinanDaerah } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { _loadProvinsi } from "@/load_data/wilayah/load_provinsi";
import { _loadJabatanDewanPimpinanDaerah } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { sUser } from "@/s_state/s_user";
import { useAtom } from "jotai";
import { ambil_data, ambil_data_sayap } from "@/xg_state.ts/g_selected_page";
import { atomWithStorage } from "jotai/utils";
import SayapDewanPimpinanDaeraht2 from "../sayap-dewan-pimpinan-daeraht2";
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

const val_open_sayap_daerah = atomWithStorage("val_open_sayap_darah", false);

function DewanPimpinanDaerah() {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const [value, setValue] = useState("");
  const router = useRouter();
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const [ambilDataSayap, setAmbilDataSayap] = useAtom(ambil_data_sayap);
  const [openSayapDaerah, setOpenSayapDaerah] = useAtom(val_open_sayap_daerah);

  return (
    <>
      <Drawer
        opened={openSayapDaerah}
        onClose={() => setOpenSayapDaerah(false)}
        size={490}
      >
        <SayapDewanPimpinanDaeraht2/>
      </Drawer>
      <UnstyledButton
        className={classes.user}
        pr={20}
        pl={20}
        onClick={() => {
          setAmbilDataSayap({
            ...ambilDataSayap,
            masterTingkatSayapId: "2",
          });
          setOpenSayapDaerah(true)
          // router.push("/v2/data-partai-v2/sayap-dewan-pimpinan-daeraht2");
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
