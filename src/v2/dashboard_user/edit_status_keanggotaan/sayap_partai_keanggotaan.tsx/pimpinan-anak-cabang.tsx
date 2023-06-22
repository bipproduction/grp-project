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
import { useRouter } from "next/router";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { atomWithStorage } from "jotai/utils";
import ModalSayapPimpinanAnakCabang from "../modal_sayap_pimpinan_anak_cabang";

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

const val_open_sayap_anak_cabang = atomWithStorage(
  "val_open_sayap_anak_cabang",
  false
);

function PimpinanAnakCabang() {
  const [ambilDataSayap, setAmbilDataSayap] = useAtom(ambil_data_sayap);
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const router = useRouter();
  const [openSayapAnakCabang, setOpenSayapAnakCabang] = useAtom(
    val_open_sayap_anak_cabang
  );
  return (
    <>
      <Modal
        size={"md"}
        opened={openSayapAnakCabang}
        onClose={() => setOpenSayapAnakCabang(false)}
        centered
      >
        <ModalSayapPimpinanAnakCabang />
      </Modal>
      <UnstyledButton
        className={classes.user}
        pr={20}
        pl={20}
        onClick={() => {
          setAmbilDataSayap({
            ...ambilDataSayap,
            masterTingkatSayapId: "4",
          });
          setOpenSayapAnakCabang(true);
          // router.push("/v2/data-partai-v2/sayap-pimpinan-anak-cabang2");
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
