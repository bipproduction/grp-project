import { Box, ScrollArea, Stack } from "@mantine/core";
import React from "react";
import DewanPembina from "./dewan-pembina";
import DewanPimpinanPusat from "./dewan-pimpinan-pusat";
import DewanPimpinanDaerah from "./dewan-pimpinan-daerah";
import PimpinanCabang from "./pimpinan-cabang";
import PimpinanAnakCabang from "./pimpinan-anak-cabang";
import PimpinanRanting from "./pimpinan-ranting";
import PartaiLuarNegeri from "./partai-luar-negeri";
import COLOR from "../../../../../fun/WARNA";

function StrukturPartaiKeanggotaanTsx() {
  return (
    <>
      <Box
        p={20}
        pt={40}
        pb={30}
        pl={30}
        pr={30}
        sx={{
          backgroundColor: COLOR.abuabu,
          borderRadius: 10,
        }}
      >
        <ScrollArea h={300}>
        <Stack p={30} pt={35}>
          <DewanPembina />
          <DewanPimpinanPusat />
          <DewanPimpinanDaerah />
          <PimpinanCabang />
          <PimpinanAnakCabang />
          <PimpinanRanting />
          <PartaiLuarNegeri />
        </Stack>
        </ScrollArea>
      </Box>
    </>
  );
}

export default StrukturPartaiKeanggotaanTsx;
