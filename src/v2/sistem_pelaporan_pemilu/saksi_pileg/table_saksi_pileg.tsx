import { Box, Button, Grid, Group, Modal, ScrollArea, Table, TextInput } from "@mantine/core";
import myData from "../data_dummy_saksi.json";

export const TableSaksiPilegV2 = () => {
    const tbHead = (
        <tr>
            <th>No</th>
            <th>Nama Provinsi</th>
            <th>Nama Kabupaten</th>
            <th>Nama Kecamatan</th>
            <th>Nama Desa</th>
            <th>No TPS</th>
            <th>Nama</th>
            <th>Jenis Kelamin</th>
            <th>Email</th>
            <th>No HP</th>
            <th><Group position="center">Keterangan</Group></th>
        </tr>
    );

    const rows = myData.map((e, i) => (
        <tr key={i}>
            <td>{i + 1}</td>
            <td>{e.nama_provinsi}</td>
            <td>{e.nama_kabupaten}</td>
            <td>{e.nama_kecamatan}</td>
            <td>{e.nama_desa}</td>
            <td>{e.no_tps}</td>
            <td>{e.nama}</td>
            <td>{e.jenis_kelamin}</td>
            <td>{e.email}</td>
            <td>{e.tlp}</td>
            <td>{e.keterangan}</td>
        </tr>
    ));


    return (
        <>
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
