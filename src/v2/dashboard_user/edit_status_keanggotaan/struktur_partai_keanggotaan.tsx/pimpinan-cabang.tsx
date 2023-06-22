import {
  Group,
  Modal,
  Text,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import React from "react";
import COLOR from "../../../../../fun/WARNA";
import { useAtom } from "jotai";
import { ambil_data } from "@/xg_state.ts/g_selected_page";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { atomWithStorage } from "jotai/utils";
import ModalStrukturCabang from "../modal_struktur_cabang";

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

const val_open_struktur_cabang = atomWithStorage(
  "val_open_struktur_cabang",
  false
);

function PimpinanCabang() {
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const router = useRouter();
  const [openStrukturCabang, setOpenStrukturCabang] = useAtom(
    val_open_struktur_cabang
  );

  return (
    <>
      <Modal
        size={"md"}
        opened={openStrukturCabang}
        onClose={() => setOpenStrukturCabang(false)}
        centered
      >
        <ModalStrukturCabang />
      </Modal>
      <UnstyledButton
        className={classes.user}
        pr={20}
        pl={20}
        onClick={() => {
          setAmbilData({
            ...ambilData,
            masterTingkatPengurusId: "4",
          });
          setOpenStrukturCabang(true)
          // router.push("/v2/data-partai-v2/struktur-dewan-pimpinan-cabang2");
        }}
      >
        <Group>
          <div style={{ flex: 1 }}>
            <Text size={15} fw={700}>
              Dewan Pimpinan Cabang
            </Text>
          </div>
          <IoArrowForwardCircleOutline size="1.5rem" />
        </Group>
      </UnstyledButton>
    </>
  );
}

export default PimpinanCabang;
