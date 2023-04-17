import React from 'react'
import { Box, Button, Flex, Grid, Group, Paper, Select, Text } from "@mantine/core"
import { AiFillFilter, AiOutlineSave } from "react-icons/ai"
import COLOR from "../../../../fun/WARNA"
import { warna } from '@/styles/warna'


const DataStrukturAnggota = () => {
  return (
    <>
      <Paper p={2} pt={14} pb={14} sx={{
        borderRadius: 10,
        background: COLOR.abuabu
      }}>
        <Text ml={10}> Sumber Daya Partai - Edit Data Struktur Partai</Text>
      </Paper>
      <Flex gap="md" pt={20}>
        <Box w={150}>
          <Button fullWidth color='orange.9' bg={COLOR.orange} radius={"xl"} >
            Simpan
          </Button>
        </Box>
        <Box w={150}>
          <Button fullWidth color='orange.9' bg={COLOR.orange} radius={"xl"} >
            Reset
          </Button>
        </Box>
      </Flex>
      <Box
      pt={20}
      >
        <Box
          sx={{
            backgroundColor: COLOR.abuabu,
            borderRadius: 10,
            padding: 30
          }} pb={40}
        >

          <Select label="**" mt={10} radius={"md"} placeholder="Status Keanggotaan" data={[
            { value: 'Struktur Partai', label: 'Struktur Partai' },
            { value: 'Sayap Partai', label: 'Sayap Partai' },
            { value: 'Kader Partai', label: 'Kader Partai' },
            { value: 'Anggota Partai', label: 'Anggota Partai' },
          ]} />
          <Select label="**" mt={10} radius={"md"} placeholder="Tingkatan Pengurus" data={[
            { value: 'Dewan Pembina', label: 'Dewan Pembina' },
            { value: 'Dewan Pimpinan Pusat ', label: 'Dewan Pimpinan Pusat ' },
            { value: 'Dewan Pimpinan Daerah', label: 'Dewan Pimpinan Daerah' },
            { value: 'Dewan Pimpinan Cabang', label: 'Dewan Pimpinan Cabang' },
            { value: 'Pimpinan Anak Cabang', label: 'Pimpinan Anak Cabang' },
            { value: 'Pimpinan Ranting', label: 'Pimpinan Ranting' },
            { value: 'Perwakilan Partai di Luar Negeri', label: 'Perwakilan Partai di Luar Negeri' },
          ]} />
          <Select label="**" mt={10} radius={"md"} placeholder="Jabatan" data={[
            { value: 'Ketua Dewan Pembina', label: 'Ketua Dewan Pembina' },
            { value: 'Wakil Ketua Dewan Pembina ', label: 'Wakil Ketua Dewan Pembina ' },
            { value: 'Sekretaris Dewan Pembina ', label: 'Sekretaris Dewan Pembina ' },
            { value: 'Anggota Dewan Pembina', label: 'Anggota Dewan Pembina' },
            { value: 'Ketua Dewan Penasihat', label: 'Ketua Dewan Penasihat' },
            { value: 'Wakil Ketua Dewan Penasihat ', label: 'Wakil Ketua Dewan Penasihat ' },
            { value: 'Anggota Dewan Penasihat', label: 'Anggota Dewan Penasihat' },
            { value: 'Ketua Dewan Pakar', label: 'Ketua Dewan Pakar' },
            { value: 'Wakil Ketua Dewan Pakar', label: 'Wakil Ketua Dewan Pakar' },
            { value: 'Sekretaris Dewan Pakar', label: 'Sekretaris Dewan Pakar' },
            { value: 'Anggota Dewan Pakar', label: 'Anggota Dewan Pakar' },
          ]}
          />
        </Box>
      </Box>
    </>
  )
}

export default DataStrukturAnggota
