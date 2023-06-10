import {
  Alert,
  Box,
  Button,
  Center,
  Flex,
  Group,
  Modal,
  Pagination,
  ScrollArea,
  Table,
} from "@mantine/core";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import data_aset from "./data_aset.json";
import EditAsetPartaiV2 from "./edit_aset_partai";
import { useState } from "react";
import { api } from "@/lib/api-backend";
import { ModelAsetPartai } from "@/model/interface_aset_partai";
import {
  _listDataAset_BySearch,
  _listData_AsetPartai,
  _loadDataAset_BySearch,
  _loadListDataAset,
} from "@/load_data/sumber_daya_partai/load_aset_partai";
import { useAtom } from "jotai";
import moment from "moment";
import toast from "react-simple-toasts";
import { FiAlertCircle } from "react-icons/fi";
import COLOR from "../../../../fun/WARNA";
import { _postLogUser } from "@/load_data/log_user/post_log_user";

const TableViewAsetV2 = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [dataAset, setDataAset] = useAtom(_listData_AsetPartai);
  const [idValue, setIdValue] = useState("");
  const [search, setSearch] = useState("");
  const [dataAset_Search, setDataAset_Search] = useAtom(_listDataAset_BySearch);

  useShallowEffect(() => {
    _loadListDataAset(setDataAset);
    _loadDataAset_BySearch(search, setDataAset_Search);
  }, []);

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
      <th><Center>Aksi</Center></th>
    </tr>
  );

  const rows = dataAset_Search.map((e, i) => (
    <tr key={e.id}>
      <td>{i + 1}</td>
      <td>{e.name}</td>
      <td>{e.serialNumber}</td>
      <td>{e.MasterStatusAset?.name}</td>
      <td>{e.keterangan}</td>
      <td>{e.MasterKategoriAset?.name}</td>
      <td>{e.deskripsi}</td>
      <td>{e.pengguna}</td>
      <td>{e.penanggungJawab}</td>
      <td>{e.harga}</td>
      <td>{moment(e.tglPembelian).format("YYYY-MM-DD")}</td>
      <td>{e.lokasiPembelian}</td>
      <td>{e.garansi}</td>

      <td>
        <Group position="center">
          <Button
            variant={"outline"}
            color={"green"}
            radius={50}
            w={100}
            onClick={() => {
              open();
              setIdValue(e.id);
            }}
          >
            Edit
          </Button>
          <DeleteDataAset
            setId={e}
            search={search}
            setDataAset_Search={setDataAset_Search}
          />
        </Group>
      </td>
    </tr>
  ));
  return (
    <>
      {/* <pre>{JSON.stringify(dataAset_Search, null, 2)}</pre> */}
      <Modal
        opened={opened}
        onClose={close}
        size="lg"
        centered
        // fullScreen
        overlayProps={{
          opacity: 0.1,
        }}
      >
        <EditAsetPartaiV2 thisClosed={close} idValue={idValue} />
      </Modal>
      <Box>
        <ScrollArea py={20}>
          <Table withBorder highlightOnHover horizontalSpacing={"md"} >
            <thead>{tbHead}</thead>
            <tbody>{rows}</tbody>
          </Table>
          {/* <Group position="right" pt={10}>
            <Pagination total={10} color={"orange"} />
          </Group> */}
        </ScrollArea>
      </Box>
    </>
  );
};

function DeleteDataAset({
  setId,
  search,
  setDataAset_Search,
}: {
  setId: any;
  search: any;
  setDataAset_Search: any;
}) {
  const [opened, setOpen] = useDisclosure(false)


  const onDelete = async (id: any) => {
    await fetch(api.apiAsetPartaiHapus + `?id=${id}`).then(async (res) => {
      if (res.status === 200) {
        toast("Hapus Data");
        _loadDataAset_BySearch(search, setDataAset_Search);
        _postLogUser(localStorage.getItem("user_id"), "HAPUS", "User menghapus data aset partai")
      }
    });
  };
  return (
    <>
      <Button
        variant={"outline"}
        color={"red"}
        radius={50}
        w={100}
        onClick={() => {
          setOpen.open()
        }}
      >
        Hapus
      </Button>

      <Modal
      opened={opened}
      onClose={setOpen.close}
      centered
      withCloseButton={false}
      size={"xs"}
      >
        <Alert
          icon={<FiAlertCircle size="1rem" />}
          title={`Hapus Data ${setId.name} ?`}
          color="orange"
        >
          <Flex gap={"lg"}>
            <Button
              onClick={() => setOpen.close()}
              radius={"xl"}
              w={100}
              color="green"
              bg={COLOR.hijautua}
            >
              Batal
            </Button>
            <Button
              onClick={() => {
                setOpen.close();
                onDelete(setId.id)
              }}
              radius={"xl"}
              w={100}
              color="red"
              bg={COLOR.merah}
            >
              Hapus
            </Button>
          </Flex>
        </Alert>
      </Modal>
    </>
  );
}

export default TableViewAsetV2;
