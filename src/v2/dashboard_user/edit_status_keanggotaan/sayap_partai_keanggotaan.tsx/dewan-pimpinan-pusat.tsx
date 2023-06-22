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
import { ambil_data_sayap } from "@/xg_state.ts/g_selected_page";
import { useDisclosure } from "@mantine/hooks";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { atomWithStorage } from "jotai/utils";
import ModalSayapPimpinanPusat from "../modal_sayap_pimpinan_pusat";

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
  const [openSayapPusat, setOpenSayapPusat] = useAtom(val_open_sayap_pusat);
  return (
    <>
      <Modal
        size={"md"}
        opened={openSayapPusat}
        onClose={() => setOpenSayapPusat(false)}
        centered
      >
        <ModalSayapPimpinanPusat />
      </Modal>
      <UnstyledButton
        className={classes.user}
        pr={20}
        pl={20}
        onClick={() => {
          setAmbilDataSayap({
            ...ambilDataSayap,
            masterTingkatSayapId: "1",
          });
          setOpenSayapPusat(true)
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
