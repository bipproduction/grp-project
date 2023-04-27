import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Paper,
  Select,
  Text,
} from "@mantine/core";
import { AiFillFilter, AiOutlineSave } from "react-icons/ai";
import COLOR from "../../../../fun/WARNA";
import { warna } from "@/styles/warna";

const DataAnggotaAnggota = () => {
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
        <Text ml={10}> Sumber Daya Partai - Edit Data Anggota Partai</Text>
      </Paper>
      <Flex gap="md" pt={20} pb={20}>
        <Box w={150}>
          <Button fullWidth color="orange.9" bg={COLOR.orange} radius={"xl"}>
            Simpan
          </Button>
        </Box>
        <Box w={150}>
          <Button fullWidth color="orange.9" bg={COLOR.orange} radius={"xl"}>
            Reset
          </Button>
        </Box>
      </Flex>
      <Box
        sx={{
          backgroundColor: COLOR.abuabu,
          borderRadius: 10,
          padding: 30,
        }}
        pb={40}
      >
        <Select
          label="**"
          mt={10}
          radius={"md"}
          placeholder="Status Keanggotaan"
          data={[
            { value: "Struktur Partai", label: "Struktur Partai" },
            { value: "Sayap Partai", label: "Sayap Partai" },
            { value: "Kader Partai", label: "Kader Partai" },
            { value: "Anggota Partai", label: "Anggota Partai" },
          ]}
        />
      </Box>
    </>
  );
};

export default DataAnggotaAnggota;
