import { Box, Button, MultiSelect, Paper, Select, SimpleGrid, Text, TextInput, Textarea } from '@mantine/core'
import React, { useState } from 'react'
import COLOR from '../../../../fun/WARNA'
import { DateInput } from '@mantine/dates'

const TambahListUndangan = () => {
    const [data, setData] = useState([
        { value: 'Gubernur Bali', label: 'Gubernur Bali' },
    ])
    return (
        <>
            <Paper p={2} pt={14} pb={14} sx={{
                borderRadius: 10,
                background: COLOR.abuabu
            }}>
                <Text ml={10}>Aksi Nyata  - Tambah List Undangan</Text>
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
                        <TextInput radius={"md"} mt={10} placeholder="Masukkan Judul Rencana & Agenda" label="**" />
                        <DateInput radius={"md"} mt={10} placeholder="Tanggal Kunjungan" label="**" />
                        <TextInput radius={"md"} mt={10} placeholder="Nama Tamu Undangan" label="**" />
                        <MultiSelect
                            label="**"
                            data={data}
                            placeholder="Tambah List Undangan"
                            searchable
                            creatable
                            mt={10}
                            radius={"md"}
                            getCreateLabel={(query) => `+ Create ${query}`}
                            onCreate={(query) => {
                                const item = { value: query, label: query };
                                setData((current) => [...current, item]);
                                return item;
                            }}
                        />
                    </Box>
                    <Box w={200} mt={50}>
                        <Button ta={'center'} fullWidth radius={'xl'} color='gray' bg={COLOR.coklat}>Simpan</Button>
                    </Box>
                </Box>
            </SimpleGrid>
        </>
    )
}

export default TambahListUndangan
