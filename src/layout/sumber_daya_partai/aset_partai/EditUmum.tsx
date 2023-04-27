import {
  Box,
  Button,
  Center,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import React from "react";
import COLOR from "../../../../fun/WARNA";

const EditUmum = () => {
  return (
    <>
      <TextInput mt={10} radius={"md"} placeholder="ID System" label="**" />
      <TextInput mt={10} radius={"md"} placeholder="Nama Aset" label="**" />
      <TextInput
        mt={10}
        radius={"md"}
        placeholder="Nomor Seri / Serial Number"
        label="**"
      />
      <TextInput mt={10} radius={"md"} placeholder="Pengguna" label="**" />
      <TextInput
        mt={10}
        radius={"md"}
        placeholder="Penanggung Jawab"
        label="**"
      />
      <Select
        data={[
          { value: "Bergerak", label: "Bergerak" },
          { value: "Tidak Bergerak", label: "Tidak Bergerak" },
        ]}
        radius={"md"}
        mt={10}
        placeholder="Status Aset"
        label="**"
      />
      <Textarea
        radius={"md"}
        mt={10}
        placeholder="Keterangan Status"
        label="**"
      />
      <Select
        data={[
          { value: "Roda Dua", label: "Roda Dua" },
          { value: "Roda Empat", label: "Roda Empat" },
        ]}
        radius={"md"}
        mt={10}
        placeholder="Kategori"
        label="**"
      />
      <Textarea
        radius={"md"}
        mt={10}
        placeholder="Deskripsi Barang"
        label="**"
      />
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

export default EditUmum;
