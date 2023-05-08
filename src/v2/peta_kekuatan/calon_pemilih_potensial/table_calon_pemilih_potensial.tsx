import { Box, Button, Grid, Group, Modal, ScrollArea, Table, TextInput } from "@mantine/core";
import myData from "../calon_pemilih_potensial/data_dummy_cpt.json";
import { AiFillPlusCircle, AiOutlineSearch } from "react-icons/ai";
import TambahCPTV2 from "./tambah_calon_pemilih_potensial";
import COLOR from "../../../../fun/WARNA";
import { useDisclosure } from "@mantine/hooks";
import EditCPTV2 from "./edit_calon_pemilih_potensial";

export const TableCPTV2 = () => {
    const tbHead = (
        <tr>
            <th>No</th>
            <th>Nama Kabupaten</th>
            <th>Nama Kecamatan</th>
            <th>Nama Desa</th>
            <th>Nama Anggota</th>
            <th>Alamat</th>
            <th>Jenis Kelamin</th>
            <th>Email</th>
            <th>No HP</th>
            <th>Medsos</th>
            <th><Group position="center">Aksi</Group></th>
        </tr>
    );

    const rows = myData.map((e, i) => (
        <tr key={i}>
            <td>{i + 1}</td>
            <td>{e.kabupaten}</td>
            <td>{e.kecamatan}</td>
            <td>{e.desa}</td>
            <td>{e.nama}</td>
            <td>{e.alamat}</td>
            <td>{e.jenis_kelamin}</td>
            <td>{e.email}</td>
            <td>{e.tlp}</td>
            <td>{e.medsos}</td>
            <td>
                <Group position="center">
                    <Button
                        variant={"outline"}
                        color={"green"}
                        radius={50}
                        w={100}
                        onClick={() => {
                            open();
                        }}
                    >
                        Edit
                    </Button>
                    <Button variant={"outline"} color={"red"} radius={50} w={100}>
                        Hapus
                    </Button>
                </Group>
            </td>
        </tr>
    ));

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            {/* Edit Modal */}
            <Modal
                opened={opened}
                onClose={close}
                size="100%"
                // fullScreen
                overlayProps={{
                    // color: theme.colorScheme === 'light' ? theme.colors.dark[9] : theme.colors.dark[2],
                    opacity: 0.1,
                }}
            >
                <EditCPTV2 thisClosed={close} />
            </Modal>
            <Box pt={20}>
                <ScrollArea>
                    <Table withBorder horizontalSpacing={"lg"}>
                        <thead>{tbHead}</thead>
                        <tbody>{rows}</tbody>
                    </Table>
                </ScrollArea>
            </Box>
        </>
    );
};
