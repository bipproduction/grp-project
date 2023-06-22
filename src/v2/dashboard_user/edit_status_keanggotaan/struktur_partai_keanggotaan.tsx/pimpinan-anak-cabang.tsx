import { ambil_data } from "@/xg_state.ts/g_selected_page";
import {
  Group,
  Modal,
  Text,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React from "react";
import COLOR from "../../../../../fun/WARNA";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { atomWithStorage } from "jotai/utils";
import ModalStrukturAnakCabang from "../modal_struktur_anak_cabang";

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

const val_open_struktur_anak_cabang = atomWithStorage(
  "val_open_struktur_anak_cabang",
  false
);

function PimpinanAnakCabang() {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const router = useRouter();
  const [openStrukturAnakCabang, setOpenStrukturAnakCabang] = useAtom(
    val_open_struktur_anak_cabang
  );
  return (
    <>
      <Modal
        size={"md"}
        opened={openStrukturAnakCabang}
        onClose={() => setOpenStrukturAnakCabang(false)}
        centered
      >
        <ModalStrukturAnakCabang />
      </Modal>
      <UnstyledButton
        className={classes.user}
        pr={20}
        pl={20}
        onClick={() => {
          setAmbilData({
            ...ambilData,
            masterTingkatPengurusId: "5",
          });
          setOpenStrukturAnakCabang(true)
          // router.push("/v2/data-partai-v2/struktur-pimpinan-anak-cabang2");
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
