import { Box, Button, Group, ScrollArea, Table } from "@mantine/core";
// const data_dummy = require("../data_dummy_pk")
import myData from "../data_legis_dummy.json";

export const TableLegislatifKabKotV2 = () => {
  const tbHead = (
    <tr>
      <th>No</th>
      <th>Nama</th>
      <th>NIK</th>
      <th>No Urut</th>
      <th>Dapil</th>
      <th>Cakupan Wilayah</th>
      <th>Komisi / AKD</th>
      <th>Tempat Lahir</th>
      <th>Tgl Lahir</th>
      <th>Jenis Kelamin</th>
      <th>No Handphone</th>
      <th>Alamat</th>
      <th>Email</th>
      <th>Periode</th>
      <th>Jabatan</th>
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
      <td>{e.No_Urut}</td>
      <td>{e.Dapil}</td>
      <td>{e.Cakupan_Wilayah}</td>
      <td>{e.Komisi_AKD}</td>
      <td>{e.Tempat_Lahir}</td>
      <td>{e.Tgl_Lahir}</td>
      <td>{e.Jenis_Kelamin}</td>
      <td>{e.No_handphone}</td>
      <td>{e.Alamat}</td>
      <td>{e.Email}</td>
      <td>{e.Periode}</td>
      <td>{e.Jabatan}</td>
      <td>{e.Media_Social}</td>
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
