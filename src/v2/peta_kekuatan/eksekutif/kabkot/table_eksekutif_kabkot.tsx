import { Box, Button, Group, Modal, ScrollArea, Table } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
// const data_dummy = require("../data_dummy_pk")
import myData from "../../data_dummy_pk.json";
import { EditEksekutifKabkotV2 } from "./edit_eksekutif_kabkot";

export const TableEksekutifKabKotV2 = () => {
  const [opened, {open, close}] = useDisclosure(false)

  const tbHead = (
    <tr>
      <th>No</th>
      <th>Nama</th>
      <th>NIK</th>
      <th>Provinsi</th>
      <th>Kabupaten/Kota</th>
      <th>Jabatan Eksekutif</th>
      <th>Periode</th>
      <th>Alamat Tinggal/Domisili</th>
      <th>Alamat Kantor</th>
      <th>Email</th>
      <th>Media Social</th>
      <th><Group position="center">Aksi</Group></th>
    </tr>
  );

  const rows = myData.map((e, i) => (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>{e.Nama}</td>
      <td>{e.NIK}</td>
      <td>{e.Provinsi}</td>
      <td>{e.Kabkot}</td>
      <td>{e.Jabatan_eksekutif}</td>
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
    <Modal
    opened={opened}
    onClose={close}
    >
      <EditEksekutifKabkotV2 thisClosed={close}/>
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
