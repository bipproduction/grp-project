import { Box, Button, Footer, Navbar, Paper, Select, SimpleGrid, Text, TextInput, Textarea } from '@mantine/core'
import React from 'react'
import COLOR from '../../../../fun/WARNA'
import { DateInput } from '@mantine/dates'
const TambahRencanaKunjungan = () => {
    return (
        <>
            <Paper p={2} pt={14} pb={14} sx={{
                borderRadius: 10,
                background: COLOR.abuabu
            }}>
                <Text ml={10}>Aksi Nyata  - Tambah Rencana Kunjungan </Text>
            </Paper>
            <SimpleGrid
                mt={20}
                cols={2}
                breakpoints={[
                    { maxWidth: 980, cols: 2, spacing: 'xl' },
                    { maxWidth: 755, cols: 1, spacing: 'xl' },
                ]}
            >
                <Box
                 sx={{
                    backgroundColor: COLOR.abuabu,
                    borderRadius: 10,
                    padding: 30
                }} pb={40}
                >
                    <Box>
                        <TextInput radius={"md"} mt={10} placeholder="Masukkan Judul Rencana Kunjungan" label="**" />
                        <DateInput radius={"md"} mt={10} placeholder="Tanggal Kunjungan" label="**" />
                        <Textarea radius={"md"} mt={10} placeholder="Potret Lokasi Kunjungan" label="**" />
                        <Select data={[
                            { value: 'Pending', label: 'Pending' },
                            { value: 'Sedang Berjalan', label: 'Sedang Berjalan' },
                            { value: 'Berhasil', label: 'Berhasil' },
                            { value: 'Batal', label: 'Batal' },
                        ]} radius={"md"} mt={10} placeholder="Pilih Status Kunjungan" label="**" />
                    </Box>
                    <Box w={200} mt={50}>
                        <Button ta={'center'} fullWidth radius={'xl'} color='gray' bg={COLOR.coklat}>Simpan</Button>
                    </Box>
                </Box>
            </SimpleGrid>
        </>
    )
}

export default TambahRencanaKunjungan
