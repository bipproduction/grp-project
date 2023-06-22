import {
  Drawer,
  Group,
  Modal,
  Text,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import React from "react";
import COLOR from "../../../../../fun/WARNA";
import { ambil_data } from "@/xg_state.ts/g_selected_page";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { atomWithStorage } from "jotai/utils";
import ModalAnggotaPartai from "../modal_anggota_partai";
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

const val_open_anggota = atomWithStorage("val_open_anggota", false);

function AnggotaPartaiTsx() {
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const { classes } = useStyles();
  const router = useRouter();
  const [openAnggota, setOpenAnggota] = useAtom(val_open_anggota);
  return (
    <>
      <Modal
        size={"md"}
        opened={openAnggota}
        onClose={() => setOpenAnggota(false)}
        // onClose={}
        centered
      >
        <ModalAnggotaPartai />
      </Modal>
      <UnstyledButton
        className={classes.user}
        pr={20}
        pl={20}
        onClick={() => {
          setAmbilData({
            ...ambilData,
            masterStatusKeanggotaanId: "4",
          });
          setOpenAnggota(true);
          // router.push("/v2/data-partai-v2/anggota-partai2");
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

export default AnggotaPartaiTsx;
