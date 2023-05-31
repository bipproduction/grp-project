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
import { _loadGetAfiliatif } from "@/load_data/organisasi_afiliatif/load_organisasi_afiliatif";
import { atomWithStorage } from "jotai/utils";
import { DataDiri } from "@/model/interface_sumber_daya_partai";
import { useAtom } from "jotai";
import { _datapartai_form } from "@/pages/v2/contoh/table-edit";
import { _EditDataDiri } from "@/load_data/data_diri_partai/load_edit_data_partai";
import { _dataStruktur } from "@/load_data/sumber_daya_partai/load_edit_sumber_daya_partai";
import moment from "moment";

export const TableOrganisasiAfiliatifV2 = () => {
  const [editAfiliatif, setEditAfiliatif] = useAtom(_dataStruktur);
  const [opened, { open, close }] = useDisclosure(false);
  useShallowEffect(() => {
    _loadGetAfiliatif(setEditAfiliatif);
  }, []);

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

  return (
    <>
      {/* <pre>{JSON.stringify(editAfiliatif, null, 2)}</pre> */}
    <Box pt={30}>
      <Table withBorder horizontalSpacing={"xl"} verticalSpacing={"sm"}>
        <thead>{tbHead}</thead>
        <tbody >
          {editAfiliatif.map((e, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{e.User.DataDiri.name}</td>
              <td>{e.MasterOrganisasiAfiliatif?.name}</td>
              <td>{e.User.DataDiri.tempatLahir}</td>
              <td>{moment(e.User.DataDiri.tanggalLahir).format("LL")}</td>
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
                      onClick={open}
                    >
                      Edit
                    </Button>
                    <Button
                      variant={"outline"}
                      color={"red"}
                      radius={50}
                      w={100}
                    >
                      Hapus
                    </Button>
                  </Group>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>

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
                <EditOrganisasiAfiliatifV2 valueId thisClosed={close} />
            </Modal>
      {/* <Box pt={20}>
                <ScrollArea>
                    <Table withBorder horizontalSpacing={"lg"}>
                        <thead>{tbHead}</thead>
                        <tbody>{rows}</tbody>
                    </Table>
                </ScrollArea>
            </Box> */}
    </>
  );
};
