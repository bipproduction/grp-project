import {
  Box,
  Button,
  Center,
  Paper,
  Select,
  SimpleGrid,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import React from "react";
import COLOR from "../../../../fun/WARNA";
import { DateInput } from "@mantine/dates";

const TambahDataAset = () => {
  return (
    <>
      <Paper
        p={2}
        pt={14}
        pb={14}
        sx={{
          borderRadius: 10,
          background: COLOR.abuabu,
        }}
      >
        <Text ml={10}>Tambah Data Asset</Text>
      </Paper>
      <Box pt={20}>
        <SimpleGrid
          cols={2}
          breakpoints={[
            { maxWidth: 980, cols: 2, spacing: "xl" },
            { maxWidth: 755, cols: 1, spacing: "xl" },
          ]}
        >
          <Box
            sx={{
              backgroundColor: COLOR.abuabu,
              borderRadius: 10,
              padding: 30,
            }}
            pb={40}
          >
            <TextInput
              radius={"md"}
              mt={10}
              placeholder="ID System (autoincrement)"
              label="**"
            />
            <TextInput
              radius={"md"}
              mt={10}
              placeholder="Nama Asset"
              label="**"
            />
            <TextInput
              radius={"md"}
              mt={10}
              placeholder="Nomor Seri / Serial Number"
              label="**"
            />
            <TextInput
              radius={"md"}
              mt={10}
              placeholder="Pengguna"
              label="**"
            />
            <TextInput
              radius={"md"}
              mt={10}
              placeholder="Penanggung Jawab"
              label="**"
            />
            <TextInput radius={"md"} mt={10} placeholder="Harga" label="**" />
            <DateInput
              radius={"md"}
              mt={10}
              placeholder="Tanggal Pembelian"
              label="**"
            />
          </Box>
          <Box
            sx={{
              backgroundColor: COLOR.abuabu,
              borderRadius: 10,
              padding: 30,
            }}
            pb={40}
          >
            <TextInput
              radius={"md"}
              mt={10}
              placeholder="Lokasi Pembelian"
              label="**"
            />
            <TextInput radius={"md"} mt={10} placeholder="Garansi" label="**" />
            <Select
              radius={"md"}
              data={[
                { value: "Bergerak", label: "Bergerak" },
                { value: "Tidak Bergerak", label: "Tidak Bergerak" },
              ]}
              mt={10}
              placeholder="Jenis Kelamin"
              label="**"
            />
            <Textarea
              radius={"md"}
              mt={10}
              placeholder="Keterangan Status"
              label="**"
            />
            <Select
              radius={"md"}
              data={[
                { value: "Kedaraan Roda 2", label: "Kedaraan Roda 2" },
                { value: "Kendaraan Roda 4", label: "Kendaraan Roda 4" },
              ]}
              mt={10}
              placeholder="Jenis Kelamin"
              label="**"
            />
            <Textarea
              radius={"md"}
              mt={10}
              placeholder="Deskripsi Barang"
              label="**"
            />
            <Center>
              <Box w={200} mt={20}>
                <Button
                  ta={"center"}
                  fullWidth
                  radius={"xl"}
                  color="gray"
                  bg={COLOR.coklat}
                >
                  Simpan
                </Button>
              </Box>
            </Center>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default TambahDataAset;
