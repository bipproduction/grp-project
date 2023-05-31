import {
  Box,
  Button,
  Center,
  Grid,
  Group,
  Modal,
  ScrollArea,
  Table,
  TextInput,
} from "@mantine/core";
import myData from "./data_dummy_oa.json";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import EditOrganisasiAfiliatifV2 from "./edit_organisasi_afiliatif";
import {
  _dataAfiliatif,
  _loadDataAfiliatif_ById_Search,
  _loadGetAfiliatif,
} from "@/load_data/organisasi_afiliatif/load_organisasi_afiliatif";
import { atomWithStorage } from "jotai/utils";
import { DataDiri } from "@/model/interface_sumber_daya_partai";
import { useAtom } from "jotai";
import { _datapartai_form } from "@/pages/v2/contoh/table-edit";
import { _EditDataDiri } from "@/load_data/data_diri_partai/load_edit_data_partai";
import { _dataStruktur } from "@/load_data/sumber_daya_partai/load_edit_sumber_daya_partai";
import moment from "moment";
import { AfiliatifEditV2 } from "./afiliatif_edit";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { api } from "@/lib/api-backend";
import toast from "react-simple-toasts";

export const TableOrganisasiAfiliatifV2 = () => {
  // const [editAfiliatif, setEditAfiliatif] = useAtom(_dataAfiliatif);
  const [listDataAfiliatif, setListDataAfiliatif] = useAtom(_dataAfiliatif);
  const [opened, { open, close }] = useDisclosure(false);
  const [idValue, setIdValue] = useState("");
  const [search, setSearch] = useState("");
  useShallowEffect(() => {
    // _loadGetAfiliatif(setEditAfiliatif);
    onSearch("");
  }, []);

  const onSearch = (search: string) => {
    _loadDataAfiliatif_ById_Search(search, setListDataAfiliatif);
  };

  const onDelete = async (id: string) => {
    await fetch(api.apiAnggotaAfiliatifHapus + `?id=${id}`)
      .then((res) => res.json())
      .then((val) =>
        _loadDataAfiliatif_ById_Search(search, setListDataAfiliatif)
      );
  };

  const tbHead = (
    <tr>
      <th>No</th>
      <th>Nama</th>
      <th>Organisasi Afiliatif</th>
      <th>Tempat Lahir</th>
      <th>Tanggal Lahir</th>
      <th>Nomor Handphone</th>
      <th>Provinsi</th>
      <th>Kabupaten / Kota</th>
      <th>Kecamatan</th>
      <th>Desa</th>
      <th>
        <Center>Aksi</Center>
      </th>
    </tr>
  );

  const tbBody = listDataAfiliatif.map((e, i) => (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>{e.User.DataDiri.name}</td>
      <td>{e.MasterOrganisasiAfiliatif?.name}</td>
      <td>{e.User.DataDiri.tempatLahir}</td>
      <td>{moment(e.User.DataDiri.tanggalLahir).format("YYYY-MM-DD")}</td>
      <td>{e.User.DataDiri.phoneNumber}</td>
      <td>{e.User.DataDiri.MasterProvince.name}</td>
      <td>{e.User.DataDiri.MasterKabKot.name}</td>
      <td>{e.User.DataDiri.MasterKecamatan.name}</td>
      <td>{e.User.DataDiri.MasterDesa.name}</td>
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
          <Button
            variant={"outline"}
            color={"red"}
            radius={50}
            w={100}
            onClick={() => {
              onDelete(e.id);
              toast("Hapus Data")
            }}
          >
            Hapus
          </Button>
        </Group>
      </td>
    </tr>
  ));

  return (
    <>
      {/* <pre>{JSON.stringify(listDataAfiliatif, null, 2)}</pre> */}

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
        {/* <EditOrganisasiAfiliatifV2 valueId thisClosed={close} /> */}
        <AfiliatifEditV2 setId={idValue} thisClosed={close} />
      </Modal>
      <Box pt={20}>
        <Box>
          <Grid>
            <Grid.Col md={4} lg={4}>
              <TextInput
                mt={5}
                icon={<AiOutlineSearch size={20} />}
                placeholder="Search"
                radius={"md"}
                onChange={(val) => {
                  onSearch(val.currentTarget.value);
                }}
              />
            </Grid.Col>
          </Grid>
        </Box>
        <Box pt={20} sx={{ overflow: "scroll" }}>
          <Table withBorder horizontalSpacing={"xl"} verticalSpacing={"sm"}>
            <thead>{tbHead}</thead>
            <tbody>{tbBody}</tbody>
          </Table>
        </Box>
      </Box>
    </>
  );
};
