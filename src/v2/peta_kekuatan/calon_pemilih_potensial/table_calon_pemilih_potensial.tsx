import {
  Alert,
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Modal,
  ScrollArea,
  Table,
  TextInput,
} from "@mantine/core";
import myData from "../calon_pemilih_potensial/data_dummy_cpt.json";
import { AiFillPlusCircle, AiOutlineSearch } from "react-icons/ai";
import TambahCPTV2 from "./tambah_calon_pemilih_potensial";
import COLOR from "../../../../fun/WARNA";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import EditCPTV2 from "./edit_calon_pemilih_potensial";
import { useState } from "react";
import {
  _listData_CalonPemilihPotensial,
  _loadDataCalonPemilihPotensial_BySearch,
  _searchData_CalonPemilihPotensial,
} from "@/load_data/peta_kekuatan/load_calon_pemilih_potensial";
import { useAtom } from "jotai";
import moment from "moment";
import { ModelCalonPemilihPotensial } from "@/model/interface_calon_pemilih_potensial";
import { FiAlertCircle } from "react-icons/fi";
import { api } from "@/lib/api-backend";
import toast from "react-simple-toasts";

export const TableCPTV2 = () => {
  const [listDataCPP, setListDataCPP] = useAtom(
    _listData_CalonPemilihPotensial
  );
  const [inputSearch, setInputSearch] = useAtom(
    _searchData_CalonPemilihPotensial
  );
  const [idVal, setIdVal] = useState("");

  useShallowEffect(() => {
    _loadDataCalonPemilihPotensial_BySearch(inputSearch, setListDataCPP);
  }, []);

  const tbHead = (
    <tr>
      <th>No</th>
      <th>Nama</th>
      <th>NIK</th>
      <th>Email</th>
      <th>Kategori</th>
      <th>Nomor TPS</th>
      {/* <th>Tanggal</th> */}
      <th>
        <Group position="center">Aksi</Group>
      </th>
    </tr>
  );

  const rows = listDataCPP.map((e, i) => (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>{e.nama}</td>
      <td>{e.email}</td>
      <td>{e.nik}</td>
      <td>{e.MasterCalonPemilihPotensial.name}</td>
      <td>{e.MasterNomorUrutTPS.name}</td>
      {/* <td>{moment(e.tanggalLahir).format("YYYY-MM-DD")}</td> */}

      <td>
        <Group position="center">
          <Button
            variant={"outline"}
            color={"green"}
            radius={50}
            w={100}
            onClick={() => {
              open();
              setIdVal(e.id);
            }}
          >
            Edit
          </Button>
          <DeleteButton setId={e} search={inputSearch} setListDataCPP={setListDataCPP} />
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
        size="lg"
        centered
        overlayProps={{
          opacity: 0.1,
        }}
      >
        <EditCPTV2 thisClosed={close} idVal={idVal} />
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

function DeleteButton({ setId, search, setListDataCPP }: { setId: ModelCalonPemilihPotensial, search: any, setListDataCPP: any }) {
  const [opened, setOpen] = useDisclosure(false);

  const onDelete = async (id: any) => {
    // console.log(setId)
    await fetch(api.apiCPTHapus +`?id=${id}`)
    .then(async (res) => {
      if (res.status === 200) {
        toast("Hapus Data")
        _loadDataCalonPemilihPotensial_BySearch(search, setListDataCPP)
      } else {
        toast("Gagal Hapus")
      }
    })

  }

  return (
    <>
      <Modal opened={opened} onClose={setOpen.close} centered withCloseButton={false} size={"xs"} >
      <Alert
          icon={<FiAlertCircle size="1rem" />}
          title={`Hapus Data ${setId.nama} ?`}
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
      <Button
        variant={"outline"}
        color={"red"}
        radius={50}
        w={100}
        onClick={setOpen.open}
      >
        Hapus
      </Button>
    </>
  );
}
