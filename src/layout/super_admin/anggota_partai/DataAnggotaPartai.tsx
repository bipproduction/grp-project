import React, { useState } from 'react'
import { ActionIcon, Box, Button, Flex, Grid, Group, Modal, Pagination, Paper, Table, Text, TextInput } from "@mantine/core"
import COLOR from "../../../../fun/WARNA"
import { warna } from '@/styles/warna'
import { AiFillFilter, AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineDelete, AiOutlineDownload, AiOutlineEdit, AiOutlineSave, AiOutlineSearch, AiOutlineUpload } from 'react-icons/ai'
import { useDisclosure } from '@mantine/hooks'
import AnggotaPartaiTab from './AnggotaPartaiTab'

const elements = [
    {
        namaPro: "Jawa Timur",
        namaKab: "Banyuwangi",
        namaKac: "Glenmore",
        namaDesa: "Tulungrejo",
        namaAng: "Ibrahim",
        alamat: "jl.gunung anthena 1",
        jenisKelamin: "Laki Laki",
        email: "user@gmail",
        phoneNumber: 1298289110,
        medsos: "@user12",
    },
    {
        namaPro: "Jawa Timur",
        namaKab: "Banyuwangi",
        namaKac: "Glenmore",
        namaDesa: "Tulungrejo",
        namaAng: "Ibrahim",
        alamat: "jl.gunung anthena 1",
        jenisKelamin: "Laki Laki",
        email: "user@gmail",
        phoneNumber: 1298289110,
        medsos: "@user12",
    },
    {
        namaPro: "Jawa Timur",
        namaKab: "Banyuwangi",
        namaKac: "Glenmore",
        namaDesa: "Tulungrejo",
        namaAng: "Ibrahim",
        alamat: "jl.gunung anthena 1",
        jenisKelamin: "Laki Laki",
        email: "user@gmail",
        phoneNumber: 1298289110,
        medsos: "@user12",
    },
    {
        namaPro: "Jawa Timur",
        namaKab: "Banyuwangi",
        namaKac: "Glenmore",
        namaDesa: "Tulungrejo",
        namaAng: "Ibrahim",
        alamat: "jl.gunung anthena 1",
        jenisKelamin: "Laki Laki",
        email: "user@gmail",
        phoneNumber: 1298289110,
        medsos: "@user12",
    },
    {
        namaPro: "Jawa Timur",
        namaKab: "Banyuwangi",
        namaKac: "Glenmore",
        namaDesa: "Tulungrejo",
        namaAng: "Ibrahim",
        alamat: "jl.gunung anthena 1",
        jenisKelamin: "Laki Laki",
        email: "user@gmail",
        phoneNumber: 1298289110,
        medsos: "@user12",
    },
]

const DataAnggotaPartai = () => {
    const [opened, { open, close }] = useDisclosure(false)

    const [activePage, setActivePage] = useState(1)

    const rows = elements.map((element) => (
        <tr key={element.namaPro}>
            <td>{element.namaPro}</td>
            <td>{element.namaKab}</td>
            <td>{element.namaKac}</td>
            <td>{element.namaDesa}</td>
            <td>{element.namaAng}</td>
            <td>{element.alamat}</td>
            <td>{element.jenisKelamin}</td>
            <td>{element.email}</td>
            <td>{element.phoneNumber}</td>
            <td>{element.medsos}</td>
            <td>
                <Group>
                    <Modal
                    opened={opened}
                    onClose={close}
                    fullScreen
                    >
                        <AnggotaPartaiTab/>
                    </Modal>
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
                        <Text mt={10} ml={10}> Sumber Daya Partai - Data Anggota Partai</Text>
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
                                <th>Nama Provinsi</th>
                                <th>Nama Kabupaten</th>
                                <th>Nama Kecamatan</th>
                                <th>Nama Desa</th>
                                <th>Nama Anggota</th>
                                <th>Alamat</th>
                                <th>Jenis Kelamin</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Medsos</th>
                                <th>Aksi</th>
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

export default DataAnggotaPartai
