import React, { useState } from 'react'
import { ActionIcon, Box, Button, Flex, Grid, Group, Pagination, Paper, Table, Text, TextInput } from "@mantine/core"
import { warna } from '@/styles/warna'
import { AiFillFilter, AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineDownload, AiOutlineSave, AiOutlineSearch, AiOutlineUpload } from 'react-icons/ai'
import COLOR from '../../../fun/WARNA'

const elements = [
    {
        nama: "Ali",
        namaOrga: "Gerindra",
        nik: "35101080211",
        tempatLahir: "Padang Sambian Klod",
        tgl: "12-06-2000",
        email: "user@gmail",
        phoneNumber: 1298289110,
        medsos: "user12",
    },
    {
        nama: "Ali",
        namaOrga: "Gerindra",
        nik: "35101080211",
        tempatLahir: "Padang Sambian Klod",
        tgl: "12-06-2000",
        email: "user@gmail",
        phoneNumber: 1298289110,
        medsos: "user12",
    },
    {
        nama: "Ali",
        namaOrga: "Gerindra",
        nik: "35101080211",
        tempatLahir: "Padang Sambian Klod",
        tgl: "12-06-2000",
        email: "user@gmail",
        phoneNumber: 1298289110,
        medsos: "user12",
    },
    {
        nama: "Ali",
        namaOrga: "Gerindra",
        nik: "35101080211",
        tempatLahir: "Padang Sambian Klod",
        tgl: "12-06-2000",
        email: "user@gmail",
        phoneNumber: 1298289110,
        medsos: "user12",
    },
    {
        nama: "Ali",
        namaOrga: "Gerindra",
        nik: "35101080211",
        tempatLahir: "Padang Sambian Klod",
        tgl: "12-06-2000",
        email: "user@gmail",
        phoneNumber: 1298289110,
        medsos: "user12",
    },

];


const DataOrganisasiAfiliatif = () => {

    const [activePage, setActivePage] = useState(1)

    const rows = elements.map((element) => (
        <tr key={element.nama}>
            <td>{element.nama}</td>
            <td>{element.namaOrga}</td>
            <td>{element.nik}</td>
            <td>{element.tempatLahir}</td>
            <td>{element.tgl}</td>
            <td>{element.email}</td>
            <td>{element.phoneNumber}</td>
            <td>{element.medsos}</td>
            <td>
                <Group>
                    {/* <Modal
                    opened={opened}
                    onClose={close}
                    fullScreen
                    >
                        <TambahDataCalonPotensial/>
                    </Modal> */}
                    <ActionIcon color="green" size="xl">
                        <AiOutlineCheckCircle size={20} />
                    </ActionIcon>
                    <ActionIcon color="orange.9" size="xl">
                        <AiOutlineCloseCircle size={20} />
                    </ActionIcon>
                </Group>
            </td>
        </tr>
    ));
  return (
    <>
    <Paper p={2} pt={3.5} pb={3.5} sx={{
                borderRadius: 10,
                background: COLOR.abuabu
            }}>
                    <Grid>
                        <Grid.Col span={8}>
                        <Text mt={10} ml={10}> Database Partai - Data Penggurus</Text>
                        </Grid.Col>
                        <Grid.Col span={4}>
                        <Group position="right">
                        <Button leftIcon={<AiOutlineSave size={20} />} color='orange.9' radius={"xl"} bg={COLOR.coklat}>Save Filter</Button>
                        <Button leftIcon={<AiFillFilter size={20} />} color='orange.9' radius={"xl"} m={5} bg={COLOR.coklat}>Save Filter</Button>
                        </Group>
                        </Grid.Col>
                    </Grid>
            </Paper>
            <Box pt={15}>
                <Grid>
                    <Grid.Col md={4} lg={4}>
                        <TextInput mt={5} icon={<AiOutlineSearch size={20} />} placeholder='Search' radius={"md"} />
                    </Grid.Col>
                    <Grid.Col md={8} lg={8}>
                        <Group position='right'>
                        <Button color='orange.9' leftIcon={<AiOutlineDownload size={20} />} radius={"xl"} bg={COLOR.orange} >Download Tamplate</Button>
                        <Button color='orange.9' leftIcon={<AiOutlineUpload size={20} />} radius={"xl"} m={5} bg={COLOR.orange}>Export / Import File</Button>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Box>
            <Box pt={20}>
                <Box
                    sx={{
                        // backgroundColor: COLOR.abuabu,
                        borderRadius: 10,
                        padding: 10
                    }} pb={20}
                >
                    <Table  striped highlightOnHover withBorder>
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Nama Organisasi</th>
                                <th>NIK</th>
                                <th>Tempat Lahir</th>
                                <th>Tanggal Lahir</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Medsos</th>
                                <th>Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </Table>
                    <Group position='right' pt={20} pb={20}>
                    <Pagination value={activePage} onChange={setActivePage} color='orange.9' total={10} size="lg" radius="md"/>
                    </Group>
                </Box>
                </Box>
    </>
  )
}

export default DataOrganisasiAfiliatif
