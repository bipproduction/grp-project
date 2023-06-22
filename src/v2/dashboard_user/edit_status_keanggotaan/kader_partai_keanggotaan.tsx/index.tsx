import {
  Drawer,
  Group,
  Modal,
  Text,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import React, { useState } from "react";
import COLOR from "../../../../../fun/WARNA";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { useAtom } from "jotai";
import { ambil_data } from "@/xg_state.ts/g_selected_page";
import { useRouter } from "next/router";
import { _loadKaderPartai } from "@/load_data/kader_partai/load_kader_partai";
import { useForm } from "@mantine/form";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { atomWithStorage } from "jotai/utils";
import ModalKaderPartai from "../modal_kader_partai";
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

    backgroundColor: COLOR.coklat,
  },
}));

const val_open_kader = atomWithStorage("val_open_kader", false);

function KaderPartaiKeanggotaanTsx() {
  const [opened, { open, close }] = useDisclosure(false);
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const { classes } = useStyles();
  const [value, setValue] = useState("");
  const router = useRouter();
  const [openKader, setOpenKader] = useAtom(val_open_kader);
  return (
    <>
      <Modal
      size={"md"}
        opened={openKader}
        onClose={() => setOpenKader(false)}
        centered
      >
        <ModalKaderPartai/>
      </Modal>
      <UnstyledButton
        className={classes.user}
        pr={20}
        pl={20}
        onClick={() => {
          setAmbilData({
            ...ambilData,
            masterStatusKeanggotaanId: "3",
          });
          setOpenKader(true)
          // router.push("/v2/data-partai-v2/kader-partai2");
        }}
      >
        <Group>
          <div style={{ flex: 1 }}>
            <Text size={15} fw={700}>
              Kader Partai
            </Text>
          </div>
          <IoArrowForwardCircleOutline size="1.5rem" />
        </Group>
      </UnstyledButton>
    </>
  );
}

export default KaderPartaiKeanggotaanTsx;
