import { ActionIcon, Box, Button, Group, Input, Menu, Paper, Select, SimpleGrid, Text, TextInput } from '@mantine/core'
import React from 'react'
import COLOR from '../../../fun/WARNA'
import { AiFillBackward } from 'react-icons/ai'
import { BsArrowLeftCircle } from "react-icons/bs";

const ModalKabupaten = () => {
    return (
        <>
            <Box p={30}>

                <Paper p={2} pt={14} pb={14} sx={{
                    borderRadius: 10,
                    background: COLOR.abuabu
                }}>
                    <Text ml={10}> Tambah Peta Kekuatan</Text>
                </Paper>
                <Box pt={20} pb={10}>
                    <Group>
                        <ActionIcon component='a' href='../../../dashboard'>
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
                        <Menu position="bottom-start" offset={3} width={300}>
                            <Menu.Target>
                                <Input pt={10} radius={'md'} component='button'>Kabupaten / Kota</Input>
                            </Menu.Target>

                            <Menu.Dropdown>
                                <Box >
                                    <Button color='orange.9' component='a' href='../../../DataEksekutif/ModalNasional' fullWidth m={5} bg={COLOR.orange}>Nasional</Button>
                                </Box>
                                <Box >
                                    <Button color='orange.9' component='a' href='../../../DataEksekutif/ModalProvinsi' fullWidth m={5} bg={COLOR.orange}>Provinsi</Button>
                                </Box>
                                <Box >
                                    <Button color='orange.9' component='a' href='../../../DataEksekutif/ModalKabupaten' fullWidth m={5} bg={COLOR.orange}>Kabupaten / Kota</Button>
                                </Box>

                            </Menu.Dropdown>
                        </Menu>
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
                                    { value: 'Bupati', label: 'Bupati' },
                                    { value: 'Walikota', label: 'Walikota' },
                                ]} radius={"md"} mt={10} placeholder="Provinsi" label="**" />
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
                            </Box>
                            <Box>
                                <TextInput radius={"md"} mt={10} placeholder="Alamat Kantor" label="**" />
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

export default ModalKabupaten