import React from "react";
import DewanPimpinanPusat from "./dewan-pimpinan-pusat";
import DewanPimpinanDaerah from "./dewan-pimpinan-daerah";
import DewanPimpinanCabang from "./dewan-pimpinan-cabang";
import PimpinanAnakCabang from "./pimpinan-anak-cabang";
import { Box, Stack } from "@mantine/core";
import COLOR from "../../../../../fun/WARNA";

function SayapPartaiKeanggotaanTsx() {
  return (
    <>
      <Box
        p={20}
        pt={20}
        pb={20}
        pl={30}
        pr={30}
        sx={{
          backgroundColor: COLOR.abuabu,
          borderRadius: 10,
        }}
      >
        <Stack pt={50} pb={50}>
          <DewanPimpinanPusat />
          <DewanPimpinanDaerah />
          <DewanPimpinanCabang />
          <PimpinanAnakCabang />
        </Stack>
      </Box>
    </>
  );
}

export default SayapPartaiKeanggotaanTsx;
