import { ActionIcon, Box, Button, Grid, Group, Modal, Pagination, Table, TextInput } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React, { useState } from 'react'
import { AiOutlineDelete, AiOutlineEdit, AiOutlineSearch } from 'react-icons/ai'
import COLOR from '../../../../fun/WARNA'
import TambahListKunjungan from './TambahListUndangan'
import TambahListUndangan from './TambahListUndangan'

const elements = [
    {
        rencanaAgenda: "Kunjungan Seminar",
        TglKun: "12-05-2023",
        listUndangan: "Bakti Sosial",

    },
    {
        rencanaAgenda: "Kunjungan Bakti Seminar",
        TglKun: "10-05-2023",
        listUndangan: "Seminar",

    },
    {
        rencanaAgenda: "Kunjungan ke Masjid",
        TglKun: "19-05-2023",
        listUndangan: "MAsjid Al Ikhsan",

    },
    {
        rencanaAgenda: "Kunjungan Seminar",
        TglKun: "01-05-2023",
        listUndangan: "Bakti Sosial",

    },
    {
        rencanaAgenda: "Kunjungan Bakti Seminar",
        TglKun: "20-05-2023",
        listUndangan: "Seminar",

    },
    {
        rencanaAgenda: "Kunjungan ke Masjid",
        TglKun: "19-05-2023",
        listUndangan: "MAsjid Al Ikhsan",

    },

];

const ListUndangan = () => {
    const [opened, { open, close }] = useDisclosure(false)


    const [activePage, setActivePage] = useState(1)

    const rows = elements.map((element) => (
        <tr key={element.rencanaAgenda}>
            <td>{element.rencanaAgenda}</td>
            <td>{element.TglKun}</td>
            <td>{element.listUndangan}</td>
            <td>
                <Group>
                    <Modal
                    opened={opened}
                    onClose={close}
                    fullScreen
                    >
                        <TambahListUndangan/>
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
                                <TambahListUndangan/>
                            </Modal>
                            <Box w={150}>
                                <Button color='orange.9' fullWidth radius={"xl"} onClick={open} m={5} bg={COLOR.orange}>Tambah</Button>
                            </Box>
                        </Group>
                    </Grid.Col>
                </Grid>
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
                                <th>Tanggal kunjungan</th>
                                <th>List Undangan</th>
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

export default ListUndangan