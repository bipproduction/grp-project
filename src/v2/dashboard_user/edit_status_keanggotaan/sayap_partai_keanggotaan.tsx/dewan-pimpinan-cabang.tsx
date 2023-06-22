import { Group, Modal, Text, UnstyledButton, createStyles, rem } from "@mantine/core";
import React from "react";
import COLOR from "../../../../../fun/WARNA";
import { useDisclosure } from "@mantine/hooks";
import { useAtom } from "jotai";
import { ambil_data_sayap } from "@/xg_state.ts/g_selected_page";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { atomWithStorage } from "jotai/utils";
import ModalSayapPimpinanCabang from "../modal_sayap_pimpinan_cabang";

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

const val_open_sayap_cabang = atomWithStorage("val_open_sayap_cabang", false);

function DewanPimpinanCabang() {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const [ambilDataSayap, setAmbilDataSayap] = useAtom(ambil_data_sayap);
  const [openSayapCabang, setOpenSayapCabang] = useAtom(val_open_sayap_cabang);
  return (
    <>
      <Modal
        size={"md"}
        opened={openSayapCabang}
        onClose={() => setOpenSayapCabang(false)}
        centered
      >
        <ModalSayapPimpinanCabang/>
      </Modal>
      <UnstyledButton
        className={classes.user}
        pr={20}
        pl={20}
        onClick={() => {
          setAmbilDataSayap({
            ...ambilDataSayap,
            masterTingkatSayapId: "3",
          });
          setOpenSayapCabang(true)
          // router.push("/v2/data-partai-v2/sayap-dewan-pimpinan-cabang2")
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

export default DewanPimpinanCabang;
