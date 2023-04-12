import React from 'react'
import { Box, Button, Flex, Grid, Group, Paper, Select, Text } from "@mantine/core"
import { AiFillFilter, AiOutlineSave } from "react-icons/ai"
import COLOR from "../../../../fun/WARNA"
import { warna } from '@/styles/warna'


const DataSayapAnggota = () => {
  return (
    <>
      <Paper p={2} pt={14} pb={14} sx={{
        borderRadius: 10,
        background: COLOR.abuabu
      }}>
        <Text ml={10}> Sumber Daya Partai - Edit Data Sayap Partai</Text>
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
      <Select label="**" mt={10} radius={"md"} placeholder="Status Keanggotaan" data={[
        { value: 'Struktur Partai', label: 'Struktur Partai' },
        { value: 'Sayap Partai', label: 'Sayap Partai' },
        { value: 'Kader Partai', label: 'Kader Partai' },
        { value: 'Anggota Partai', label: 'Anggota Partai' },
      ]} />
      <Select label="**" mt={10} radius={"md"} placeholder="Pilih Sayap Partai" data={[
        { value: 'PAPERA ', label: 'PAPERA ' },
        { value: 'TIDAR ', label: 'TIDAR ' },
        { value: 'JARI RAYA', label: 'JARI RAYA' },
        { value: 'SATRIA', label: 'SATRIA' },
        { value: 'GEMIRA', label: 'GEMIRA' },
        { value: 'KESIRA', label: 'KESIRA' },
        { value: 'GEKIRA', label: 'GEKIRA' },
        { value: 'GEMA SADHANA', label: 'GEMA SADHANA' },
        { value: 'PIRA', label: 'PIRA' },
        { value: 'SEGARA', label: 'SEGARA' },
        { value: 'PETIR', label: 'PETIR' },
        { value: 'PPIR', label: 'PPIR' },
        { value: 'BGM', label: 'BGM' },
        { value: 'GMI', label: 'GMI' },
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
        { value: 'Ketua ', label: 'Ketua ' },
        { value: 'Wakil Ketua ', label: 'Wakil Ketua ' },
        { value: 'Sekretaris', label: 'Sekretaris' },
        { value: 'Wakil Sekretaris', label: 'Wakil Sekretaris' },
        { value: 'Bendahara', label: 'Bendahara' },
        { value: 'Wakil Bendahara', label: 'Wakil Bendahara' },
        { value: 'Kelompok', label: 'Kelompok' }
      ]}
      />
    </>
  )
}

export default DataSayapAnggota
