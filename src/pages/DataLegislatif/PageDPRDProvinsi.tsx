import { ActionIcon, Box, Button, Group, Input, Menu, Paper, Select, SimpleGrid, Text, TextInput } from '@mantine/core'
import React from 'react'
import COLOR from '../../../fun/WARNA'
import { AiFillBackward } from 'react-icons/ai'
import { BsArrowLeftCircle } from "react-icons/bs";
import { DateInput } from '@mantine/dates';

const PageDPRDProvinsi = () => {
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
                                <Input pt={10} radius={'md'} component='button'>DPRD Provinsi</Input>
                            </Menu.Target>

                            <Menu.Dropdown>
                                <Box >
                                    <Button color='orange.9' component='a' href='../../../DataLegislatif/PageDPR' fullWidth m={5} bg={COLOR.orange}>DPR RI</Button>
                                </Box>
                                <Box >
                                    <Button color='orange.9' component='a' href='../../../DataLegislatif/PageDPRDProvinsi' fullWidth m={5} bg={COLOR.orange}>DPRD Provinsi</Button>
                                </Box>
                                <Box >
                                    <Button color='orange.9' component='a' href='../../../DataLegislatif/PageDPRDKab' fullWidth m={5} bg={COLOR.orange}>DPRD Kabupaten / Kota</Button>
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
                                <TextInput radius={"md"} mt={10} placeholder="NIK" label="**" />
                                <TextInput radius={"md"} mt={10} placeholder="Nama" label="**" />
                                <Select data={[
                                    { value: '1', label: '1' },
                                    { value: '2', label: '2' },
                                    { value: '3', label: '3' },
                                    { value: '4', label: '4' },
                                ]} radius={"md"} mt={10} placeholder="Nomor Urut 1 - 11" label="**" />
                                <Select data={[
                                    { value: 'Bali', label: 'Bali' },
                                    { value: 'Jawa timur', label: 'Jawa Timur' },
                                ]} radius={"md"} mt={10} placeholder="Provinsi" label="**" />
                                <TextInput radius={"md"} placeholder="Dapil" label="**" />
                                <TextInput radius={"md"} mt={10} placeholder="Cakupan Wilayah" label="**" />
                                <TextInput radius={"md"} mt={10} placeholder="Komisi  / AKD" label="**" />
                                <TextInput radius={"md"} mt={10} placeholder="Tempat Lahir" label="**" />
                            </Box>
                            <Box>
                                <DateInput radius={"md"} mt={10} placeholder="Tanggal Lahir" label="**" />
                                <Select radius={"md"} data={[
                                    { value: 'laki', label: 'Laki-Laki' },
                                    { value: 'perempuan', label: 'Perempuan' },
                                ]} mt={10} placeholder="Jenis Kelamin" label="**" />
                                <TextInput radius={"md"} mt={10} placeholder="Nomor Handphone" label="**" />
                                <TextInput radius={"md"} mt={10} placeholder="Alamat" label="**" />
                                <TextInput radius={"md"} mt={10} placeholder="Email" label="**" />
                                <TextInput radius={"md"} placeholder="Periode" label="**" />
                                <TextInput radius={"md"} mt={10} placeholder="Jabatan" label="**" />
                                <TextInput radius={"md"} mt={10} placeholder="Add Media Social" label="**" />
                            </Box>
                        </SimpleGrid>

                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default PageDPRDProvinsi