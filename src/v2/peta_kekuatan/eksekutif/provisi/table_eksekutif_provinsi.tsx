import { Box, Button, Group, ScrollArea, Table } from "@mantine/core";
// const data_dummy = require("../data_dummy_pk")
import myData from "../../data_dummy_pk.json";

export const TableEksekutifProvinsiV2 = () => {
  const tbHead = (
    <tr>
      <th>No</th>
      <th>Nama</th>
      <th>NIK</th>
      <th>Provinsi</th>
      <th>Jabatan Eksekutif</th>
      <th>Periode</th>
      <th>Alamat Tinggal/Domisili</th>
      <th>Alamat Kantor</th>
      <th>Email</th>
      <th>Media Social</th>
      <th>
        <Group position="center">Aksi</Group>
      </th>
    </tr>
  );

  const rows = myData.map((e, i) => (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>{e.Nama}</td>
      <td>{e.NIK}</td>
      <td>{e.Provinsi}</td>
      <td>{e.Jab_prov}</td>
      <td>{e.Periode}</td>
      <td>{e.Alamat_tinggal}</td>
      <td>{e.Alamat_kantor}</td>
      <td>{e.Email}</td>
      <td>{e.Media_social}</td>
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
