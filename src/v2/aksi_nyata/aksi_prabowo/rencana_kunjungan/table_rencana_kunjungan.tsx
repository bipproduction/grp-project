import { Box, Button, Group, Modal, ScrollArea, Table } from "@mantine/core";
import myData from "../../data_dummy_an.json";
import { useDisclosure } from "@mantine/hooks";
import EditRencanaKunjunganPrabowoV2 from "./edit_rencana_kunjungan";

export const TableRencanaKunjunganPrabowoV2 = () => {
  const tbHead = (
    <tr>
      <th>No</th>
      <th>Rencana Agenda</th>
      <th>Status Kunjungan</th>
      <th>Tanggal Kunjungan</th>
      <th>Potret Lokasi</th>
      <th><Group position="center">Aksi</Group></th>
    </tr>
  );

  const rows = myData.map((e, i) => (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>{e.judul}</td>
      <td>{e.status}</td>
      <td>{e.tanggal}</td>
      <td>{e.img}</td>
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
        <EditRencanaKunjunganPrabowoV2 thisClosed={close} />
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
