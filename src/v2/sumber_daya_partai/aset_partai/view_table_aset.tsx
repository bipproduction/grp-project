import { Box, Button, Group, Modal, Pagination, ScrollArea, Table } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import data_aset from "./data_aset.json";
import EditAsetPartaiV2 from "./edit_aset_partai";

const TableViewAsetV2 = () => {
  const [opened, { open, close }] = useDisclosure(false);


    const tbHead = (
        <tr>
          <th>No</th>
          <th>Nama Aset</th>
          <th>Serial Number</th>
          <th>Status Aset</th>
          <th>Keterangan Aset</th>
          <th>Kategori</th>
          <th>Deskripsi Barang</th>
          <th>Penguna</th>
          <th>Penanggung Jawab</th>
          <th>Harga</th>
          <th>Tanggal Pembelian</th>
          <th>Lokasi Pembelian</th>
          <th>Garansi</th>
          <th>Aksi</th>
        </tr>
      );
    
      const rows = data_aset.map((e, i) => (
        <tr key={e.id}>
          <td>{i + 1}</td>
          <td>{e.nama_aset}</td>
          <td>{e.Serial_number}</td>
          <td>{e.Status_aset}</td>
          <td>{e.Keterangan_Aset}</td>
          <td>{e.Kategori}</td>
          <td>{e.Deskripsi_Barang}</td>
          <td>{e.Penguna}</td>
          <td>{e.Penanggung_Jawab}</td>
          <td>{e.Harga}</td>
          <td>{e.Tanggal_Pembelian}</td>
          <td>{e.Lokasi_Pembelian}</td>
          <td>{e.Garansi}</td>
          <td>
            <Group position="right">
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
        size="100%"
        // fullScreen
        overlayProps={{
          // color: theme.colorScheme === 'light' ? theme.colors.dark[9] : theme.colors.dark[2],
          opacity: 0.1,
        }}
      >
        <EditAsetPartaiV2 thisClosed={close} />
      </Modal>
      <Box>
        <ScrollArea py={20}>
          <Table withBorder highlightOnHover horizontalSpacing={"lg"}>
            <thead>{tbHead}</thead>
            <tbody>{rows}</tbody>
          </Table>
          <Group position="right" pt={10}>
            <Pagination total={10} color={"orange"} />
          </Group>
        </ScrollArea>
      </Box>
    </>
  );
};



export default TableViewAsetV2