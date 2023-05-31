import WarpPage from "@/v2/component/my-wrap";
import {
  Box,
  Button,
  Center,
  Grid,
  Group,
  Modal,
  Pagination,
  Paper,
  ScrollArea,
  Table,
  Text,
  TextInput,
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
import dataTable from "../data_table.json";
import EditAnggotaPartaiV2 from "./edit_anggota_partai";
import { _dataAnggotaTable_ByStatusSearch, _loadData_ByStatus_BySeach } from "@/load_data/sumber_daya_partai/load_edit_sumber_daya_partai";
import { useAtom } from "jotai";
import { ButtonDeleteData } from "@/v2/component/button_delete_sumber_daya_partai";

const TableAnggotaPartaiV2 = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [activePage, setActivePage] = useState();
  const [dataTable, setDataTable] = useAtom(_dataAnggotaTable_ByStatusSearch)
  const [search, setSearch] = useState("");

  useShallowEffect(() => {
    onSearch("")
  },[])

  function onSearch (search: string){
    _loadData_ByStatus_BySeach(4,search, setDataTable)
  }

  const tbHead = (
    <tr>
      <th>No</th>
      <th>Nama</th>
      <th>NIK</th>   
      <th>Email</th>
      <th>Jenis Kelamin</th>
      {/* <th>Tempat Lahir</th>
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
      <th>RT/RW</th>
      {/* <th>Instagram</th>
      <th>Facebook</th>
      <th>TikTok</th>
      <th>Twitter</th> */}
      <th><Center>Aksi</Center></th>
    </tr>
  );

  const rows = dataTable.map((e, i) => (
    <tr key={e.id}>
      <td>{i + 1}</td>
      <td>{e.User.DataDiri.name}</td>
      <td>{e.User.DataDiri.nik}</td>
      <td>{e.User.email}</td>
      <td>{e.User.DataDiri.MasterJenisKelamin.name}</td>
      {/* <td>{e.nik}</td>
      <td>{e.email}</td>
      <td>{e.tmpt_lahir}</td>
      <td>{e.tgl_lahir}</td>
      <td>{e.j_kelamin}</td>
      <td>{e.nomor_tlpn}</td>
      <td>{e.agama}</td>
      <td>{e.pekerjaan}</td>
      <td>{e.alamat}</td> */}
      <td>{e.User.DataDiri.MasterProvince.name}</td>
      <td>{e.User.DataDiri.MasterKabKot.name}</td>
      <td>{e.User.DataDiri.MasterKecamatan.name}</td>
      <td>{e.User.DataDiri.MasterDesa.name}</td>
      <td>{e.User.DataDiri.rtRw}</td>
      {/* <td>{e.instagram}</td>
      <td>{e.facebook}</td>
      <td>{e.tiktok}</td>
      <td>{e.twitter}</td> */}

      <td>
        <Group position="center">
          {/* <Button
            variant={"outline"}
            color={"green"}
            radius={50}
            w={100}
            onClick={() => {
               
                open()
            }}
          >
            Edit
          </Button> */}
          <ButtonDeleteData 
          setId={e}
          search={search}
          setDataTable={setDataTable}
          />
        </Group>
      </td>
    </tr>
  ));

  return (
    <>
    {/* {JSON.stringify(dataTable)} */}
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
        <EditAnggotaPartaiV2 thisClosed={close} />
      </Modal>
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Data Anggota Partai
              </Text>
            </Grid.Col>
            {/* <Grid.Col span={4}>
              <Group position="right">
                <Button
                  w={100}
                  bg={COLOR.merah}
                  color={"orange"}
                  radius={50}
                  leftIcon={<AiOutlineSave />}
                >
                  Save
                </Button>
                <Button
                  w={100}
                  bg={COLOR.merah}
                  color={"orange"}
                  radius={50}
                  leftIcon={<CiFilter />}
                >
                  Fillter
                </Button>
              </Group>
            </Grid.Col> */}
          </Grid>
        </Paper>
        <Box pt={20}>
          <Grid>
            <Grid.Col md={4} lg={4}>
              <TextInput
                mt={5}
                icon={<AiOutlineSearch size={20} />}
                placeholder="Search"
                radius={"md"}
                onChange={(val) => onSearch(val.currentTarget.value)}
              />
            </Grid.Col>
            {/* <Grid.Col md={8} lg={8}>
              <Group position="right">
                <Button
                  color="orange.9"
                  leftIcon={<AiOutlineDownload size={20} />}
                  radius={"xl"}
                  bg={COLOR.orange}
                >
                  Download Tamplate
                </Button>
                <Button
                  color="orange.9"
                  leftIcon={<AiOutlineUpload size={20} />}
                  radius={"xl"}
                  m={5}
                  bg={COLOR.orange}
                >
                  Import File
                </Button>
              </Group>
            </Grid.Col> */}
          </Grid>
        </Box>
        <Box>
          <ScrollArea py={20} >
            <Table withBorder highlightOnHover horizontalSpacing={"lg"}>
              <thead>{tbHead}</thead>
              <tbody>{rows}</tbody>
            </Table>
            {/* <Group position="right" pt={10}>
              <Pagination total={10} color={"orange"} />
            </Group> */}
          </ScrollArea>
        </Box>
      </Box>
    </>
  );
};

export default TableAnggotaPartaiV2;
