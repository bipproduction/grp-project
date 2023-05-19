import {
  Box,
  Button,
  Center,
  Paper,
  Select,
  SimpleGrid,
  Text,
  TextInput,
} from "@mantine/core";
import React from "react";
import COLOR from "../../../../fun/WARNA";
import { DateInput } from "@mantine/dates";

const TambahDataCalonPotensial = () => {
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
        <Text ml={10}> Peta Kekuatan - Data Calon Pemilik Potensial</Text>
      </Paper>
      <SimpleGrid
        mt={20}
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
          <Box>
            <Select
              data={[
                { value: "Kategori A1", label: "Kategori A1" },
                { value: "Kategori A2", label: "Kategori A2" },
                { value: "Kategori A3", label: "Kategori A3" },
              ]}
              radius={"md"}
              mt={10}
              placeholder="Pilih Kategori Calon Pemilik Potensial"
              label="**"
            />
            <Select
              data={[
                { value: "Bali", label: "Bali" },
                { value: "Jawa timur", label: "Jawa Timur" },
              ]}
              radius={"md"}
              mt={10}
              placeholder="Provinsi"
              label="**"
            />
            <Select
              data={[
                { value: "Banyuwangi", label: "Banyuwangi" },
                { value: "Malang", label: "Malang" },
              ]}
              radius={"md"}
              mt={10}
              placeholder="Kabupaten / Kota"
              label="**"
            />
            <Select
              data={[
                { value: "Geteng", label: "Genteng" },
                { value: "Glenmore", label: "Glenmore" },
              ]}
              radius={"md"}
              mt={10}
              placeholder="Kecamatan"
              label="**"
            />
            <Select
              data={[
                { value: "Tulungrejo", label: "Tulungrejo" },
                { value: "Wadung", label: "Wadung" },
              ]}
              radius={"md"}
              mt={10}
              placeholder="Desa"
              label="**"
            />
            <Select
              data={[
                { value: "TPS 1", label: "TPS 1" },
                { value: "TPS 2", label: "TPS 2" },
                { value: "TPS 3", label: "TPS 3" },
                { value: "TPS 4", label: "TPS 4" },
                { value: "TPS 5", label: "TPS 5" },
              ]}
              radius={"md"}
              mt={10}
              placeholder="TPS 01 -50"
              label="**"
            />
            <TextInput radius={"md"} mt={10} placeholder="NIK" label="**" />
            <TextInput radius={"md"} mt={10} placeholder="Nama" label="**" />
            <TextInput radius={"md"} mt={10} placeholder="Email" label="**" />
            <TextInput
              radius={"md"}
              mt={10}
              placeholder="Pekerjaan"
              label="**"
            />
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: COLOR.abuabu,
            borderRadius: 10,
            padding: 30,
          }}
          pb={40}
        >
          <Box>
            <DateInput
              radius={"md"}
              mt={10}
              placeholder="Tanggal Lahir"
              label="**"
            />
            <Select
              radius={"md"}
              data={[
                { value: "laki", label: "Laki-Laki" },
                { value: "perempuan", label: "Perempuan" },
              ]}
              mt={10}
              placeholder="Jenis Kelamin"
              label="**"
            />
            <TextInput radius={"md"} mt={10} placeholder="Alamat" label="**" />
            <TextInput
              radius={"md"}
              mt={10}
              placeholder="Nomor Handphone"
              label="**"
            />
            <TextInput
              radius={"md"}
              mt={10}
              placeholder="Instargram"
              label="**"
            />
            <TextInput
              radius={"md"}
              mt={10}
              placeholder="Facebook"
              label="**"
            />
            <TextInput radius={"md"} mt={10} placeholder="TikTok" label="**" />
            <TextInput radius={"md"} mt={10} placeholder="Twitter" label="**" />
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
        </Box>
      </SimpleGrid>
    </>
  );
};

export default TambahDataCalonPotensial;
