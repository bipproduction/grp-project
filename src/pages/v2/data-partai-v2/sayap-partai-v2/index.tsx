import LayoutDataPartaiV2 from "@/v2/layout_data_partai/layout_data_partai";
import {
  ActionIcon,
  Box,
  Button,
  Group,
  Stack,
  Text,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import React from "react";
import { useRouter } from "next/router";
import {
  IoArrowBackCircleSharp,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import COLOR from "../../../../../fun/WARNA";
import DewanPimpinanPusat from "./dewan-pimpinan-pusat";
import DewanPimpinanDaerah from "./dewan-pimpinan-daerah";
import PimpinanCabang from "./dewan-pimpinan-cabang";
import PimpinanAnakCabang from "./pimpinan-anak-cabang";
import { ambil_data } from "@/xg_state.ts/g_selected_page";
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

function TingkatPengurusSayapPartai() {
  const { classes } = useStyles();
  const router = useRouter();
  function Afiliatif() {
    router.push("/v2/data-partai-v2/organisasi-afiliatif-v2");
  }
  function Back() {
    router.push("/v2/data-partai-v2");
  }
  return (
    <>
      <LayoutDataPartaiV2>
        <Box pl={40}>
          <Text fz={12} onClick={Afiliatif}>
            Jika Termasuk Organisasi Afiliatif,{" "}
            <strong style={{ cursor: "pointer" }}>Klik disini !</strong>
          </Text>
        </Box>
        <Box h={"100%"}>
          <Stack p={30} pt={20}>
            <ActionIcon onClick={Back} variant="transparent">
              <IoArrowBackCircleSharp size="2rem" color={COLOR.merah} />
            </ActionIcon>
            <DewanPimpinanPusat />
            <DewanPimpinanDaerah />
            <PimpinanCabang />
            <PimpinanAnakCabang />
          </Stack>
        </Box>
      </LayoutDataPartaiV2>
    </>
  );
}

export default TingkatPengurusSayapPartai;
