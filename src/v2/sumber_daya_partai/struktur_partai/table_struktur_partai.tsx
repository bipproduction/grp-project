import WarpPage from "@/v2/component/my-wrap";
import {
  Box,
  Button,
  Center,
  Divider,
  Grid,
  Group,
  Modal,
  Pagination,
  Paper,
  ScrollArea,
  Stack,
  Table,
  Text,
  TextInput,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  AiOutlineDownload,
  AiOutlineSave,
  AiOutlineSearch,
  AiOutlineUpload,
} from "react-icons/ai";
import { CiFilter } from "react-icons/ci";
import COLOR from "../../../../fun/WARNA";
import EditStrukturPartaiV2 from "./edit_struktur_partai";
import dataTable from "../data_table.json";
import { atom, useAtom } from "jotai";
import { _val_muncul } from "./_val_edit_struktur";
import { atomWithStorage } from "jotai/utils";
import _ from "lodash";
import { ModelSumberDayaPartai } from "../../../model/interface_sumber_daya_partai";
import { api } from "@/lib/api-backend";
import { EditStrukturV2 } from "./edit_struktur";
import { StrukturEditV2 } from "./stuktur_edit";
import { _dataStruktur, _loadDataStruktur_ByIdStatus, _new_loadEditByModel } from "@/load_data/sumber_daya_partai/load_edit_sumber_daya_partai";

export const _editDataStruktur = atomWithStorage<ModelSumberDayaPartai | null>(
  "_list_database_struktur",
  null
);


//buat interface

const TableStruktutPartaiV2 = () => {
  // const [open, setOpen] = useAtom(_val_muncul);
  const [opened, setOpen] = useDisclosure(false);
  const [activePage, setActivePage] = useState();
  const [targetStruktur, setTargetStruktur] = useAtom(_new_loadEditByModel);
  const [dataStuktur, setDataStruktur] = useAtom(_dataStruktur);

  useShallowEffect(() => {
    _loadDataStruktur_ByIdStatus(1, setDataStruktur)
  }, []);

  

  const tbHead = (
    <tr>
      <th>No</th>
      <th>Nama</th>
      <th>NIK</th>
      <th>Tingkat Pengurus</th>
      {/* <th>Jabatan</th>
      <th>Email</th>
      <th>Tempat Lahir</th>
      <th>Tanggal Lahir</th>
      <th>Jenis Kelamin</th>
      <th>Nomor Tlpn</th>
      <th>Agama</th>
      <th>Pekerjaan</th>
      <th>Alamat</th> */}
      <th>Provinsi</th>
      <th>Kabupaten</th>
      <th>Kecamatan</th>
      <th>Desa / Cabang</th>
      {/* <th>RT/RW</th> */}
      <th>Media Social</th>
      {/* <th>Facebook</th>
      <th>TikTok</th>
      <th>Twitter</th> */}
      <th>
        <Center>Aksi</Center>
      </th>
    </tr>
  );

  return (
    <>
      {/* {JSON.stringify(dataStuktur, null, "\t")} */}
      <Box sx={{ overflow: "scroll" }}>
        <Table withBorder>
          <thead>{tbHead}</thead>
          <tbody>
            {dataStuktur.map((e, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.User.DataDiri.name}</td>
                <td>{e.User.DataDiri.nik}</td>
                <td>{e.MasterTingkatPengurus.name}</td>
                {/* <td>
                  {e.MasterJabatanDewanPimpinanCabang?.name}
                </td>
                <td>{e.User.email}</td>
                <td>{e.User.DataDiri.tempatLahir}</td>
                <td>{e.User.DataDiri.tanggalLahir}</td>
                <td>{e.User.DataDiri.MasterJenisKelamin.name}</td>
                <td>{e.User.DataDiri.phoneNumber}</td>
                <td>{e.User.DataDiri.MasterAgama.name}</td>
                <td>{e.User.DataDiri.MasterPekerjaan.name}</td>
                <td>{e.User.DataDiri.alamat}</td> */}
                <td>{e.User.DataDiri.MasterProvince.name}</td>
                <td>{e.User.DataDiri.MasterKabKot.name}</td>
                <td>{e.User.DataDiri.MasterKecamatan.name}</td>
                <td>{e.User.DataDiri.MasterDesa.name}</td>
                {/* <td>{e.User.DataDiri.rtRw}</td> */}
                <td>
                  {e.User.UserMediaSocial.map((v, i) => (
                    <Box key={i}>
                      {v.MasterMediaSocial.name} : {v.name},
                    </Box>
                  ))}
                </td>
                <td>
                  <Group position="center">
                    <Button
                      variant={"outline"}
                      color={"green"}
                      radius={50}
                      w={100}
                      onClick={(val) => {
                        setOpen.open();
                        setTargetStruktur(e.id as any);
                        // console.log(e.id)
                      }}
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

      <Modal
        opened={opened}
        onClose={setOpen.close}
        size="lg"
        // fullScreen
        overlayProps={{
          // color: theme.colorScheme === 'light' ? theme.colors.dark[9] : theme.colors.dark[2],
          opacity: 0.1,
        }}
      >
        {/* <EditStrukturPartaiV2 thisClosed={setOpen.close} /> */}
        {/* <EditStrukturV2 thisClosed={setOpen.close}/> */}
        <StrukturEditV2 thisClosed={setOpen.close}/>
      </Modal>
      {/* <Table sx={{overflow: "scroll"}}>
        <thead>
          <tr>
           {dataStuktur.map((e, i) => e.User).map((v) => v.DataDiri).map((e) => _.keys(e).map((e, i) => 
           <th key={i}>
            <Text>{_.upperCase(e)}</Text>
           </th>
           ))}
          </tr>
        </thead>
      </Table> */}

      {/* <Box>
        <ScrollArea py={20}>
          <Table withBorder highlightOnHover>
            <thead>{tbHead}</thead>
            <tbody>{rows}</tbody>
          </Table>
          <Group position="right" pt={10}>
            <Pagination total={10} color={"orange"} />
          </Group>
        </ScrollArea>
      </Box> */}
    </>
  );
};

export default TableStruktutPartaiV2;
