import { ActionIcon, Box, Button, Grid, Group, Modal, Pagination, Table, TextInput } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React, { useState } from 'react'
import { AiOutlineDelete, AiOutlineEdit, AiOutlineSearch } from 'react-icons/ai'
import COLOR from '../../../../fun/WARNA'
import TambahRencanaKunjungan from './TambahRencanaKunjungan'

const elements = [
    {
        rencanaAgenda: "Kunjungan Seminar",
        TglKun: "12-05-2023",
        StatusKun: "Pending",
        Potret: "Dalam Rangka Memperingati Hari Pahlawan",

    },
    {
        rencanaAgenda: "Kunjungan Bakti Sosial",
        TglKun: "10-05-2023",
        StatusKun: "Berhasil",
        Potret: "Dalam Rangka Memperingati Hari Pahlawan",

    },
    {
        rencanaAgenda: "Kunjungan Bakti Sosial",
        TglKun: "19-05-2023",
        StatusKun: "Berhasil",
        Potret: "Dalam Rangka Memperingati Hari Pahlawan",

    },
    {
        rencanaAgenda: "Kunjungan Seminar",
        TglKun: "12-05-2023",
        StatusKun: "Batal",
        Potret: "Dalam Rangka Memperingati Hari Pahlawan",

    },
    {
        rencanaAgenda: "Kunjungan Bakti Sosial",
        TglKun: "10-05-2023",
        StatusKun: "Berhasil",
        Potret: "Dalam Rangka Memperingati Hari Pahlawan",
    },
    {
        rencanaAgenda: "Kunjungan Bakti Sosial",
        TglKun: "19-05-2023",
        StatusKun: "Berhasil",
        Potret: "Dalam Rangka Memperingati Hari Pahlawan",
    },

];


const RencanaKunjungan = () => {
    const [opened, { open, close }] = useDisclosure(false)

    const [activePage, setActivePage] = useState(1)

    const rows = elements.map((element) => (
        <tr key={element.rencanaAgenda}>
            <td>{element.rencanaAgenda}</td>
            <td>
                <Box w={150}>
                <Button fullWidth radius={'xl'} color='orange.9'>{element.StatusKun}</Button>
                </Box>

            </td>
            <td>{element.TglKun}</td>
            <td>{element.Potret}</td>
            <td>
                <Group>
                    <Modal
                    opened={opened}
                    onClose={close}
                    fullScreen
                    >
                        <TambahRencanaKunjungan/>
                    </Modal>
                    <ActionIcon color="orange.9" size="xl" onClick={open}>
                        <AiOutlineEdit size={20} />
                    </ActionIcon>
                    <ActionIcon color="orange.9" size="xl">
                        <AiOutlineDelete size={20} />
                    </ActionIcon>
                </Group>
            </td>
        </tr>
    ));
    return (
        <>
            <Box>
                <Grid>
                    <Grid.Col md={4} lg={4}>
                        <TextInput mt={5} icon={<AiOutlineSearch size={20} />} placeholder='Search' radius={"md"} />
                    </Grid.Col>
                    <Grid.Col md={8} lg={8}>
                        <Group position='right'>
                            <Modal
                                opened={opened}
                                onClose={close}
                                fullScreen
                            >
                                <TambahRencanaKunjungan />
                            </Modal>
                            <Box w={150}>
                                <Button color='orange.9' fullWidth radius={"xl"} onClick={open} m={5} bg={COLOR.orange}>Tambah</Button>
                            </Box>
                        </Group>
                    </Grid.Col>
                </Grid>
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
                                <th>Rencana Agenda</th>
                                <th>Status Kunjungan</th>
                                <th>Tanggal kunjungan</th>
                                <th>Potret Lokasi</th>
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
            </Box>
        </>
    )
}

export default RencanaKunjungan