import { Box, Button, Center, TextInput } from "@mantine/core";
import React from "react";
import COLOR from "../../../../fun/WARNA";
import { DateInput } from "@mantine/dates";

const EditPembelian = () => {
  return (
    <>
      <TextInput mt={10} radius={"md"} placeholder="ID System" label="**" />
      <TextInput mt={10} radius={"md"} placeholder="Harga" label="**" />
      <DateInput
        mt={10}
        radius={"md"}
        placeholder="Tanggal Pembelian"
        label="**"
      />
      <TextInput
        mt={10}
        radius={"md"}
        placeholder="Lokasi Pembelian"
        label="**"
      />
      <TextInput mt={10} radius={"md"} placeholder="Garansi" label="**" />
      <Center>
        <Box w={150}>
          <Button
            fullWidth
            radius="xl"
            mt={20}
            bg={COLOR.orange}
            color="orange.9"
          >
            Simpan
          </Button>
        </Box>
      </Center>
    </>
  );
};

export default EditPembelian;
