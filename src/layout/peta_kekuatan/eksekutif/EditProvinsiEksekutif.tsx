import { ActionIcon, Box, Button, Group, Input, Menu, Paper, Select, SimpleGrid, Text, TextInput } from '@mantine/core'
import React from 'react'
import { AiFillBackward } from 'react-icons/ai'
import { BsArrowLeftCircle } from "react-icons/bs";
import COLOR from '../../../../fun/WARNA';

const EditProvinsiEksekutif = () => {
    return (
        <>
            <Box p={30}>

                <Paper p={2} pt={14} pb={14} sx={{
                    borderRadius: 10,
                    background: COLOR.abuabu
                }}>
                    <Text ml={10}>Data Eksekutif Provinsi</Text>
                </Paper>
                <Box pt={20} pb={10}>
                    <Group>
                        <ActionIcon>
                            <BsArrowLeftCircle color={COLOR.orange} size="2.125rem" />
                        </ActionIcon>
                        <Box w={150}>
                            <Button color='orange.9' fullWidth radius={"xl"} m={5} bg={COLOR.orange}>Simpan</Button>
                        </Box>
                    </Group>
                </Box>
                <Box
                    sx={{
                        backgroundColor: COLOR.abuabu,
                        borderRadius: 10,
                        padding: 30
                    }} pb={40}
                >
                    <Box pt={5}>
                        <SimpleGrid
                            mt={20}
                            cols={2}
                            breakpoints={[
                                { maxWidth: 980, cols: 2, spacing: 'xl' },
                                { maxWidth: 755, cols: 1, spacing: 'xl' },
                            ]}
                        >
                            <Box>
                                <Select data={[
                                    { value: 'Bali', label: 'Bali' },
                                    { value: 'Jawa timur', label: 'Jawa Timur' },
                                ]} radius={"md"} mt={10} placeholder="Provinsi" label="**" />
                                <Select data={[
                                    { value: 'Gubernur', label: 'Gubernur' },
                                    { value: 'Wakil Gubernur', label: 'Wakil Gubernur' },
                                ]} radius={"md"} mt={10} placeholder="Jabatan" label="**" />
                                <TextInput radius={"md"} mt={10} placeholder="Periode" label="**" />
                                <TextInput radius={"md"} mt={10} placeholder="Nama" label="**" />
                                <TextInput radius={"md"} mt={10} placeholder="Alamat Tinggal / Domisili" label="**" />
                                <TextInput radius={"md"} mt={10} placeholder="Alamat Kantor" label="**" />
                            </Box>
                            <Box>
                                <TextInput radius={"md"} mt={10} placeholder="Phone Number" label="**" />
                                <TextInput radius={"md"} mt={10} placeholder="Email" label="**" />
                                <TextInput radius={"md"} mt={10} placeholder="Add Media Social" label="**" />
                                <Select data={[
                                    { value: 'Kader', label: 'Kader' },
                                    { value: 'Non Kader', label: 'Non Kader' },
                                ]} radius={"md"} mt={10} placeholder="Status" label="**" />
                                <TextInput radius={"md"} mt={10} placeholder="Partai Pengusung" label="**" />
                            </Box>
                        </SimpleGrid>

                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default EditProvinsiEksekutif