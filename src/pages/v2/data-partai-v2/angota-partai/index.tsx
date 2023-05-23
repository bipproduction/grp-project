import {
  Alert,
  Box,
  Button,
  Group,
  Modal,
  Text,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import React from "react";
import COLOR from "../../../../../fun/WARNA";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FiAlertCircle } from "react-icons/fi";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { useRouter } from "next/router";
import { _loadStatusKeanggotaan } from "@/load_data/sumber_daya_partai/load_status_keanggotaan";
import { sStatusKeanggotaan } from "@/s_state/sumber_daya_partai/s_status_keanggotaan";
import { useAtom } from "jotai";
import { useForm } from "@mantine/form";
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

function AngotaPartaiV2() {
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const { classes } = useStyles();
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  function AnggotaPartai() {
    router.push("/v2/home");
  }
  const FormAnggotaPartai = () => {
    console.log(formAnggota.values.data);
    // if (Object.values(formAnggota.values.data).includes("")) {
    //   return toast("Lengkapi Data Diri");
    // }
    // fetch(api.apiSumberDayaPartaiPost, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formAnggota.values.data),
    // }).then((v) => {
    //   if (v.status === 201) {
    //     toast("Sukses");
    //     router.push("/v2/home");
    //   }
    //   // router.replace("v2/home");
    // });
  };

  const formAnggota = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterStatusKeanggotaanId: ambilData.masterStatusKeanggotaanId,
      },
    },
  });

  useShallowEffect(() => {
    _loadStatusKeanggotaan;
  });
  return (
    <>
      <UnstyledButton
        className={classes.user}
        pr={20}
        pl={20}
        onClick={() => {
          setAmbilData({
            ...ambilData,
            masterStatusKeanggotaanId: "4",
          });
          router.push("/v2/data-partai-v2/anggota-partai2");
        }}
      >
        <Group>
          <div style={{ flex: 1 }}>
            <Text size={15} fw={700}>
              Anggota Partai
            </Text>
          </div>
          <IoArrowForwardCircleOutline size="1.5rem" />
        </Group>
      </UnstyledButton>
    </>
  );
}

export default AngotaPartaiV2;
