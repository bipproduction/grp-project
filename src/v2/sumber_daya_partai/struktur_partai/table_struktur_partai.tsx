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
import {
  MasterTingkatPengurus,
  ModelSumberDayaPartai,
} from "../../../model/interface_sumber_daya_partai";
import { api } from "@/lib/api-backend";
import { EditStrukturV2 } from "./edit_struktur";
import { StrukturEditV2 } from "./stuktur_edit";
import {
  _dataStruktur,
  _loadDataStruktur_ByIdStatus,
  _loadDataSDP_ByStatus_BySeach,
  _editLoadStruktur_ByStatusSeacrh,
  _dataPageSDP_Strukturr,
  _dataTotalPageSDP_Strukturr,
  // _new_loadEditByModel,
} from "@/load_data/sumber_daya_partai/load_sumber_daya_partai";

export const _editDataStruktur = atomWithStorage<ModelSumberDayaPartai | null>(
  "_list_database_struktur",
  null
);

//buat interface

const TableStruktutPartaiV2 = () => {
  // const [open, setOpen] = useAtom(_val_muncul);
  const [opened, setOpen] = useDisclosure(false);
  const [activePage, setActivePage] = useState();
  // const [targetStruktur, setTargetStruktur] = useAtom(_new_loadEditByModel);
  const [dataStuktur, setDataStruktur] = useAtom(_dataStruktur);
  const [search, setSearch] = useState('')
  const [dataTable, setDataTable] = useAtom(_editLoadStruktur_ByStatusSeacrh)
  const [inputPage, setInputPage] = useAtom(_dataPageSDP_Strukturr)
  const [totalPage, setTotalPage] = useAtom(_dataTotalPageSDP_Strukturr)

  useShallowEffect(() => {
    _loadDataStruktur_ByIdStatus(1, setDataStruktur)
    _loadDataSDP_ByStatus_BySeach(1, setSearch, setDataTable, "1", setTotalPage)
    setInputPage("1")
  }, []);

  const tbHead = (
    <tr>
      <th>No</th>
      <th>Nama</th>
      <th>NIK</th>
      <th>Tingkat Pengurus</th>
      <th>Jabatan</th>
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
                <td>
                  {<DataJabatan setTingkat={e} />}
                </td>
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
                        // setTargetStruktur(e.id as any);
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
        centered
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
        <StrukturEditV2 thisClosed={setOpen.close} />
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

function DataJabatan({setTingkat}:{setTingkat: ModelSumberDayaPartai}) {
  return (
    <>
    {/* {JSON.stringify(setTingkat.MasterTingkatPengurus.id)} */}
      {(() => {
        let data = setTingkat.MasterTingkatPengurus?.id
        if (data == 1) {
          return (
            <><Text>{setTingkat.MasterJabatanDewanPembina?.name}</Text></>
          )
        } else {
          if (data == 2) {
            return (
              <><Text>{setTingkat.MasterJabatanDewanPimpinanPusat?.name}</Text></>
            )
          } else {
            if (data == 3) {
              return (
                <><Text>{setTingkat.MasterJabatanDewanPimpinanDaerah?.name}</Text></>
              )
            } else {
              if (data == 4) {
                return (
                  <><Text>{setTingkat.MasterJabatanDewanPimpinanCabang?.name}</Text></>
                )
              } else {
                if (data == 5) {
                  return (
                    <><Text>{setTingkat.MasterJabatanPimpinanAnakCabang.name}</Text></>
                  )
                } else {
                  if (data == 6) {
                    return (
                      <><Text>{setTingkat.MasterJabatanPimpinanRanting.name}</Text></>
                    )
                  } else {
                    if (data == 7) {
                      return (
                        <><Text>{setTingkat.MasterJabatanPerwakilanPartaiDiLuarNegeri.name}</Text></>
                      )
                    } else {
                      return <>Salah</>
                    }
                  }
                }
              }
            }
          }
        }
      })()}
    </>
  );
}

export default TableStruktutPartaiV2;
