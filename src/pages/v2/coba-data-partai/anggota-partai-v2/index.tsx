import { Box, Button, Center, Text, TextInput } from '@mantine/core';
import React from 'react';
import COLOR from '../../../../../fun/WARNA';

function AnggotaPartaiV2({setNilai}: any) {
  return (
    <>
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

export default AnggotaPartaiV2;
