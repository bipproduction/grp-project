import {
  ActionIcon,
  Alert,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Group,
  HoverCard,
  Menu,
  Modal,
  Pagination,
  Popover,
  ScrollArea,
  Table,
  Text,
} from "@mantine/core";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import data_aset from "./data_aset.json";
import { useState } from "react";
import { api } from "@/lib/api-backend";
import { ModelAsetPartai } from "@/model/interface_aset_partai";
import {
  _dataPageAsetPartai,
  _dataTotalPageAsetPartai,
  _listDataAset_BySearch,
  _listData_AsetPartai,
  _loadDataAset_BySearch,
  _loadListDataAset,
} from "@/load_data/sumber_daya_partai/aset_partai/load_aset_partai";
import { atom, useAtom } from "jotai";
import moment from "moment";
import toast from "react-simple-toasts";
import { FiAlertCircle } from "react-icons/fi";
import COLOR from "../../../../fun/WARNA";
import { _postLogUser } from "@/load_data/log_user/post_log_user";
import { AiFillDelete, AiFillEdit, AiOutlineMenu } from "react-icons/ai";
import { GrAttachment } from "react-icons/gr";
import {
  RiDeleteBin5Line,
  RiDeleteBin6Fill,
  RiMenuUnfoldLine,
} from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { _val_reload_gambar } from "./image-upload-aset";
import EditAsetPartaiV2 from "./edit_aset_partai";
import { CiEdit } from "react-icons/ci";
import { ViewLampiranAsetV2 } from "./lampiran/view_lampiran";
import _ from "lodash";

const TableViewAsetV2 = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [dataAset, setDataAset] = useAtom(_listData_AsetPartai);
  const [idValue, setIdValue] = useState("");
  const [search, setSearch] = useState("");
  const [dataAset_Search, setDataAset_Search] = useAtom(_listDataAset_BySearch);
  const [reloadGambar, setReloadGambar] = useAtom(_val_reload_gambar);
  const [inputPage, setInputPage] = useAtom(_dataPageAsetPartai);
  const [totalPage, setTotalPage] = useAtom(_dataTotalPageAsetPartai);
  let noUrut = (_.toNumber(inputPage) - 1) * 10 + 1;

  useShallowEffect(() => {
    _loadListDataAset(setDataAset);
    _loadDataAset_BySearch(search, setDataAset_Search, "1", setTotalPage);
    setInputPage("1");
  }, []);

  const tbHead = (
    <tr>
      <th>No</th>
      <th>
        <Center>
          <AiOutlineMenu />
        </Center>
      </th>
      {/* <th>Aset ID , delete soon</th> */}
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
    </tr>
  );

  const rows = dataAset_Search.map((e, i) => (
    <tr key={e.id}>
      <td>{noUrut++}</td>
      <td>
        <Grid grow>
          <Grid.Col span={"auto"}>
            <ActionIcon
              color="green"
              onClick={() => {
                open();
                setIdValue(e.id);
              }}
            >
              <CiEdit />
            </ActionIcon>
            <ViewLampiranAsetV2 dataAset={e} />
            <DeleteDataAset
              setId={e}
              search={search}
              setDataAset_Search={setDataAset_Search}
            />
          </Grid.Col>
          {/* <Grid.Col>
            </Grid.Col>
            <Grid.Col>
            </Grid.Col> */}
        </Grid>
      </td>
      {/* <td>{e.id}</td> */}
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
    </tr>
  ));
  return (
    <>
      {/* <pre>{JSON.stringify(dataAset_Search, null, 2)}</pre> */}
      <Modal
        key={reloadGambar.toString()}
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
        <Box py={20}>
          <ScrollArea>
            <Table withBorder highlightOnHover horizontalSpacing={"lg"}>
              <thead>{tbHead}</thead>
              <tbody>{rows}</tbody>
            </Table>
          </ScrollArea>
          <Group position="right" pt={10}>
            <Pagination
              total={Number(totalPage)}
              value={Number(inputPage)}
              color={"orange"}
              onChange={(val: any) => {
                setInputPage(val);
                _loadDataAset_BySearch(
                  search,
                  setDataAset_Search,
                  val,
                  setTotalPage
                );
              }}
            />
          </Group>
        </Box>
      </Box>
    </>
  );
};
export const _ModalDeleteAset = atom(false);
function DeleteDataAset({
  setId,
  search,
  setDataAset_Search,
}: {
  setId: any;
  search: any;
  setDataAset_Search: any;
}) {
  const [opened, setOpen] = useDisclosure(false);
  const [popOpen, popSetOpen] = useDisclosure(false);
  const [inputPage, setInputPage] = useAtom(_dataPageAsetPartai);
  const [totalPage, setTotalPage] = useAtom(_dataTotalPageAsetPartai);

  const onDelete = async (id: any) => {
    await fetch(api.apiAsetPartaiHapus + `?id=${id}`).then(async (res) => {
      if (res.status === 200) {
        toast("Hapus Data");
        _loadDataAset_BySearch(
          search,
          setDataAset_Search,
          inputPage,
          setTotalPage
        );
        _postLogUser(
          localStorage.getItem("user_id"),
          "HAPUS",
          "User menghapus data aset partai"
        );
      }
    });
  };
  return (
    <>
      <ActionIcon
        color="red"
        onClick={() => {
          setOpen.open();
        }}
      >
        <RiDeleteBin5Line />
      </ActionIcon>
      {/* <Button
        variant={"outline"}
        color={"red"}
        radius={50}
        w={100}
        onClick={() => {
          setOpen.open();
        }}
      >
        Hapus
      </Button> */}

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
                onDelete(setId.id);
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
