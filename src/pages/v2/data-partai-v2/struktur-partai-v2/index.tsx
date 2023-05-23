import LayoutDataPartaiV2 from "@/v2/layout_data_partai/layout_data_partai";
import {
  ActionIcon,
  Box,
  Button,
  Drawer,
  Group,
  Stack,
  Text,
  TextInput,
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
import { useDisclosure } from "@mantine/hooks";
import DewanPembina from "./dewan-pembina";
import DewanPimpinanPusat from "./dewan-pimpinan-pusat";
import DewanPimpinanDaerah from "./dewan-pimpinan-daerah";
import PimpinanCabang from "./pimpinan-cabang";
import PimpinanAnakCabang from "./pimpinan-anak-cabang";
import PimpinanRanting from "./pimpinan-ranting";
import PartaiLuarNegeri from "./partai-luar-negeri";
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

function TingkatPengurusStrukturPartai() {
  const { classes } = useStyles();
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  function Afiliatif() {
    router.push("/v2/data-partai-v2/organisasi-afiliatif-v2");
  }
  function Back() {
    router.push("/v2/data-partai-v2");
  }
  return (
    <>
      <LayoutDataPartaiV2>
        <Box h={"100%"}>
          <Box pl={40}>
            <Text fz={12} onClick={Afiliatif}>
              Jika Termasuk Organisasi Afiliatif,{" "}
              <strong style={{ cursor: "pointer" }}>Klik disini !</strong>
            </Text>
          </Box>
          <Stack p={30} pt={35}>
            {/* <Button w={120} onClick={Back} leftIcon={<IoArrowBackCircleSharp size="1rem"/>} bg={COLOR.merah} color="orange.9" radius="xl">
              Kembali
            </Button> */}
            <ActionIcon onClick={Back} variant="transparent">
              <IoArrowBackCircleSharp size="2rem" color={COLOR.merah} />
            </ActionIcon>
            <DewanPembina />
            <DewanPimpinanPusat />
            <DewanPimpinanDaerah />
            <PimpinanCabang />
            <PimpinanAnakCabang />
            <PimpinanRanting />
            <PartaiLuarNegeri />
          </Stack>
        </Box>
      </LayoutDataPartaiV2>
    </>
  );
}

export default TingkatPengurusStrukturPartai;
