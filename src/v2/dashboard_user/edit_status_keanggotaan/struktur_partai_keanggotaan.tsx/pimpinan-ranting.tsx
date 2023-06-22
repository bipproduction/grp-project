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
import { useDisclosure } from "@mantine/hooks";
import { useAtom } from "jotai";
import { ambil_data } from "@/xg_state.ts/g_selected_page";
import { useRouter } from "next/router";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { atomWithStorage } from "jotai/utils";
import ModalStrukturRanting from "../modal_struktur_ranting";

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

const val_open_struktur_ranting = atomWithStorage(
  "val_open_struktur_ranting",
  false
);

function PimpinanRanting() {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const router = useRouter();
  const [openStrukturRanting, setOpenStrukturRanting] = useAtom(
    val_open_struktur_ranting
  );

  return (
    <>
      <Modal
        size={"md"}
        opened={openStrukturRanting}
        onClose={() => setOpenStrukturRanting(false)}
        centered
      >
        <ModalStrukturRanting />
      </Modal>
      <UnstyledButton
        className={classes.user}
        pr={20}
        pl={20}
        onClick={() => {
          setAmbilData({
            ...ambilData,
            masterTingkatPengurusId: "6",
          });
          setOpenStrukturRanting(true)
          // router.push("/v2/data-partai-v2/struktur-pimpinan-ranting2");
        }}
      >
        <Group>
          <div style={{ flex: 1 }}>
            <Text size={15} fw={700}>
              Pimpinan Ranting
            </Text>
          </div>
          <IoArrowForwardCircleOutline size="1.5rem" />
        </Group>
      </UnstyledButton>
    </>
  );
}

export default PimpinanRanting;
