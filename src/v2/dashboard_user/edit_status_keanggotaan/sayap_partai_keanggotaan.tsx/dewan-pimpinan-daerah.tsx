import {
  Group,
  Modal,
  Text,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import React, { useState } from "react";
import COLOR from "../../../../../fun/WARNA";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { ambil_data, ambil_data_sayap } from "@/xg_state.ts/g_selected_page";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { atomWithStorage } from "jotai/utils";
import ModalSayapPimpinanDaerah from "../modal_sayap_pimpinan_daerah";

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

const val_open_sayap_daerah = atomWithStorage("val_open_sayap_daerah", false);

function DewanPimpinanDaerah() {
  const { classes } = useStyles();
  const [value, setValue] = useState("");
  const router = useRouter();
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const [ambilDataSayap, setAmbilDataSayap] = useAtom(ambil_data_sayap);
  const [openSayapDaerah, setOpenSayapDaerah] = useAtom(val_open_sayap_daerah);
  return (
    <>
      <Modal
        size={"md"}
        opened={openSayapDaerah}
        onClose={() => setOpenSayapDaerah(false)}
        centered
      >
        <ModalSayapPimpinanDaerah />
      </Modal>
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
