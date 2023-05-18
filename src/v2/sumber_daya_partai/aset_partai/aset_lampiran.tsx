import { Box, Button, Center, Group, ScrollArea, Table } from "@mantine/core";

const dataLampiran = [
  {
    id: 1,
    namaLam: "STNK",
    des: "Milik kantor pusat",
    foto: "Cooming soon",
  },
];

export const AsetLampiranV2 = () => {
  const tbHead = (
    <tr>
      <th>No</th>
      <th>Nama Lampiran</th>
      <th>Deskripsi</th>
      <th>Foto Lampiran</th>
      <th>
        <Group position="center">Aksi</Group>
      </th>
    </tr>
  );

  const rows = dataLampiran.map((e, i) => (
    <tr key={e.id}>
      <td>{i + 1}</td>
      <td>{e.namaLam}</td>
      <td>{e.des}</td>
      <td>{e.foto}</td>
      <td>
        <Group position="center">
          <Button
            variant={"outline"}
            color={"green"}
            radius={50}
            w={100}
            compact
          >
            Edit
          </Button>
          <Button variant={"outline"} color={"red"} radius={50} w={100} compact>
            Hapus
          </Button>
        </Group>
      </td>
    </tr>
  ));
  return (
    <>
      <Box>
        <ScrollArea>
          <Table horizontalSpacing={"lg"} highlightOnHover withBorder>
            <thead>{tbHead}</thead>
            <tbody>{rows}</tbody>
          </Table>
        </ScrollArea>
      </Box>
    </>
  );
};
