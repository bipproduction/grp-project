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
import { ambil_data } from "@/xg_state.ts/g_selected_page";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { atomWithStorage } from "jotai/utils";
import ModalStrukturPembina from "../modal_struktur_pembina";
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

const val_open_struktur_pembina = atomWithStorage(
  "val_open_struktur_pembina",
  false
);

function DewanPembina() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const { classes } = useStyles();
  const [openStrukturPembina, setOpenStrukturPembina] = useAtom(
    val_open_struktur_pembina
  );

  return (
    <>
      <Modal
        size={"md"}
        opened={openStrukturPembina}
        onClose={() => setOpenStrukturPembina(false)}
        centered
      >
        <ModalStrukturPembina />
      </Modal>
      {/* {JSON.stringify(ambilData)} */}
      <UnstyledButton
        className={classes.user}
        pr={20}
        pl={20}
        onClick={() => {
          setAmbilData({
            ...ambilData,
            masterTingkatPengurusId: "1",
          });
          setOpenStrukturPembina(true)
          // router.push('/v2/data-partai-v2/struktur-dewan-pembina2')
        }}
      >
        <Group>
          <div style={{ flex: 1 }}>
            <Text size={15} fw={700}>
              Dewan Pembina
            </Text>
          </div>
          <IoArrowForwardCircleOutline size="1.5rem" />
        </Group>
      </UnstyledButton>
    </>
  );
}

export default DewanPembina;
