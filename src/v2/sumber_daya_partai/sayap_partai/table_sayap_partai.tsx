import WarpPage from "@/v2/component/my-wrap";
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Flex,
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
  AiOutlineMenu,
  AiOutlineSave,
  AiOutlineSearch,
  AiOutlineUpload,
} from "react-icons/ai";
import { CiEdit, CiFilter } from "react-icons/ci";
import COLOR from "../../../../fun/WARNA";
import dataTable from "../data_table.json";
import EditSayapPartaiV2 from "./edit_sayap_partai";
import { useAtom } from "jotai";
import {
  _dataSayapTable_ByStatusSearch,
  _dataStrukturTable_ByStatusSearch,
  _loadDataSDP_ByStatus_BySeach,
  _editLoadStruktur_ByStatusSeacrh,
  _searchDataSumberDayaPartai,
  _dataPageSDP_Sayap,
  _dataTotalPageSDP_Sayap,
} from "@/load_data/sumber_daya_partai/load_sumber_daya_partai";
import { SayapEditV2 } from "./sayap_edit";
import { ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";
import { api } from "@/lib/api-backend";
import { ButtonDeleteData } from "@/v2/component/button_delete_sumber_daya_partai";
import _ from "lodash";

const TableSayapPartaiV2 = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [activePage, setActivePage] = useState();
  const [dataTable, setDataTable] = useAtom(_dataSayapTable_ByStatusSearch);
  const [search, setSearch] = useState("");
  const [valueId, setValueId] = useState("");
  const [inputSearch, setInputSearch] = useAtom(_searchDataSumberDayaPartai);
  const [inputPage, setInputPage] = useAtom(_dataPageSDP_Sayap);
  const [totalPage, setTotalPage] = useAtom(_dataTotalPageSDP_Sayap);
  let noAwal = (_.toNumber(inputPage) - 1) * 10 + 1;

  useShallowEffect(() => {
    onSearch("");
  }, []);
  const onSearch = async (search: string) => {
    await _loadDataSDP_ByStatus_BySeach(
      2,
      search,
      setDataTable,
      "1",
      setTotalPage
    );
    setInputPage("1");
    setInputSearch(search);
  };

  const tbHead = (
    <tr>
      <th>
        No
      </th>
      <th>
        <Center>
          <AiOutlineMenu />
        </Center>
      </th>

      <th>Nama</th>
      <th>NIK</th>
      <th>Nama Sayap</th>
      <th>Tingkat Pengurus</th>
      <th>Jabatan</th>
    </tr>
  );

  const rows = dataTable.map((e, i) => (
    <tr key={e.id}>
      <td>
        {noAwal++}
      </td>
      <td>
        <Flex direction={{ base: "column", sm: "row" }} justify={"center"}>
          <ActionIcon
            color="green"
            onClick={() => {
              setValueId(e.id);
              open();
            }}
          >
            <CiEdit />
          </ActionIcon>
          <ButtonDeleteData
            setId={e}
            search={search}
            setDataTable={setDataTable}
            setTingkat="sayap partai"
          />
        </Flex>
      </td>
      <td>{e.User.DataDiri.name}</td>
      <td>{e.User.DataDiri.nik}</td>
      <td>{e.MasterSayapPartai?.name}</td>
      <td>{e.MasterTingkatSayap?.name}</td>
      <td>
        <JabatanSayapPartai setJabtan={e} />
      </td>
    </tr>
  ));

  return (
    <>
      {/* <pre>
        {JSON.stringify(dataTable.map((e) => e, " apa"),null,2)}
      </pre> */}
      <Modal
        opened={opened}
        onClose={close}
        size="lg"
        centered
        // fullScreen
        overlayProps={{
          // color: theme.colorScheme === 'light' ? theme.colors.dark[9] : theme.colors.dark[2],
          opacity: 0.1,
        }}
      >
        {/* <EditSayapPartaiV2 thisClosed={close} /> */}
        <SayapEditV2 thisClosed={close} setId={valueId} />
      </Modal>
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Data Sayap Partai
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
                _loadDataSDP_ByStatus_BySeach(
                  2,
                  inputSearch,
                  setDataTable,
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

function JabatanSayapPartai({
  setJabtan,
}: {
  setJabtan: ModelSumberDayaPartai;
}) {
  return (
    <>
      {/* {JSON.stringify(setJabtan.MasterTingkatPengurus.id)} */}
      {(() => {
        if (setJabtan.MasterTingkatSayap?.id == 1) {
          return <>{setJabtan.MasterJabatanDewanPimpinanPusat?.name}</>;
        } else {
          if (setJabtan.MasterTingkatSayap?.id == 2) {
            return <>{setJabtan.MasterJabatanDewanPimpinanDaerah?.name}</>;
          } else {
            if (setJabtan.MasterTingkatSayap?.id == 3) {
              return <>{setJabtan.MasterJabatanDewanPimpinanCabang?.name}</>;
            } else {
              if (setJabtan.MasterTingkatSayap?.id == 4) {
                return <>{setJabtan.MasterJabatanPimpinanAnakCabang.name}</>;
              } else {
                return (
                  <>
                    <Text>undefined</Text>
                  </>
                );
              }
            }
          }
        }
      })()}
    </>
  );
}

export default TableSayapPartaiV2;
