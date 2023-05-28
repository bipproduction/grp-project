import { Box, Button, Group, Modal, ScrollArea, Table } from "@mantine/core";
import myData from "../../data_dummy_an.json";
import EditListUndanganGerindraV2 from "./edit_list_undangan";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import { ModelListUndanganGerindra } from "@/model/model_aksi_nyata";
import { api } from "@/lib/api-backend";
import toast from "react-simple-toasts";
const moment = require('moment')

export const TableListUndanganGerindraV2 = () => {
    const [listUndanganGerindra, setListUndanganGerindra] = useState<ModelListUndanganGerindra[]>([]);
    const [dataId, setDataId] = useState<string>("");

    const loadListUndanganGerindra = () => {
        fetch(api.apiListUndanganGerindraGetAll)
            .then((v) => v.json())
            .then((v) => {
                setListUndanganGerindra(v);
            });
    };

    useShallowEffect(() => {
        loadListUndanganGerindra();
    }, []);

    const onDelete = (id: string) => {
        fetch(api.apiListundanganGerindraHapus + `?id=${id}`)
            .then(async (res) => {
                if (res.status === 200) {
                    toast("Success");
                }
            });
    }

    const tbHead = (
        <tr>
            <th>No</th>
            <th>Rencana Agenda</th>
            <th>Tanggal Kunjungan</th>
            <th>List Undangan</th>
            <th><Group position="center">Aksi</Group></th>
        </tr>
    );

    const rows = listUndanganGerindra.map((e, i) => (
        <tr key={i}>
            <td>{i + 1}</td>
            <td>{e.RencanaKunjunganGerindra.judul}</td>
            <td>{moment(e.RencanaKunjunganGerindra.tanggal).format("DD MMM YYYY")}</td>
            <td>{e.nama}</td>
            <td>
                <Group position="center">
                    <Button
                        variant={"outline"}
                        color={"green"}
                        radius={50}
                        w={100}
                        onClick={() => {
                            open();
                            setDataId(e.id);
                        }}
                    >
                        Edit
                    </Button>
                    <Button variant={"outline"} color={"red"} radius={50} w={100} onClick={() => { onDelete(e.id) }}>
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
                <EditListUndanganGerindraV2 thisClosed={close} data={dataId} />
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
