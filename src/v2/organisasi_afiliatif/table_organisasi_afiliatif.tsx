import { Box, Button, Grid, Group, Modal, ScrollArea, Table, TextInput } from "@mantine/core";
import myData from "./data_dummy_oa.json";
import { useDisclosure } from "@mantine/hooks";
import EditOrganisasiAfiliatifV2 from "./edit_organisasi_afiliatif";

export const TableOrganisasiAfiliatifV2 = () => {
    const tbHead = (
        <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Nama Organisasi</th>
            <th>NIK</th>
            <th>Tempat Lahir</th>
            <th>Tanggal Lahir</th>
            <th>Email</th>
            <th>No HP</th>
            <th>Medsos</th>
            <th><Group position="center">Aksi</Group></th>
        </tr>
    );

    const rows = myData.map((e, i) => (
        <tr key={i}>
            <td>{i + 1}</td>
            <td>{e.nama}</td>
            <td>{e.nama_organisasi}</td>
            <td>{e.nik}</td>
            <td>{e.tempat_lahir}</td>
            <td>{e.tgl_lahir}</td>
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
                <EditOrganisasiAfiliatifV2 thisClosed={close} />
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
