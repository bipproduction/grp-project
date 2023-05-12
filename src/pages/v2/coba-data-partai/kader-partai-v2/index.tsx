import { Box, Button, Center, Select, Text, TextInput } from '@mantine/core';
import React from 'react';
import COLOR from '../../../../../fun/WARNA';

function KaderPartaiV2({setNilai}: any) {
  return (
    <>
      <Select
        label="Pilih Tingkat Pengurus"
        placeholder="Pilih Tingkat Pengurus"
        withAsterisk
        radius={"md"}
        mt={10}
        data={[
          "Manggala",
          "Madya",
          "Utama",
        ]}
        />
        <Center pt={20}>
        <Box w={350}>
          <Button
            sx={{
              position: "absolute",
              bottom: "40px",
              left: "150px",
            }}
            radius={"xl"}
            bg={COLOR.merah}
            color="orange.9"
            type="submit"
            // onClick={onDataPartai}
          >
            Simpan
          </Button>
        </Box>
      </Center>
    </>
  );
}

export default KaderPartaiV2;
