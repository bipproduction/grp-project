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
  Title,
  useMantineTheme,
} from "@mantine/core";
import {
  useDisclosure,
  useForceUpdate,
  useShallowEffect,
} from "@mantine/hooks";
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
import EditAnggotaPartaiV2 from "./edit_anggota_partai";
import {
  _dataAnggotaTable_ByStatusSearch,
  _dataPageSDP_Anggota,
  _dataTotalPageSDP_Anggota,
  _loadDataSDP_ByStatus_BySeach,
} from "@/load_data/sumber_daya_partai/load_sumber_daya_partai";
import { useAtom } from "jotai";
import { ButtonDeleteData } from "@/v2/component/button_delete_sumber_daya_partai";
import _ from "lodash";
import { ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";
import EditSumberDayaPartaiV2 from "../edit_sumber_daya_partai";
import { refresh_page } from "../force_refresh";
import { new_state_refresh } from "../force_refresh"; 

const TableAnggotaPartaiV2 = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [activePage, setActivePage] = useState();
  const [dataTable, setDataTable] = useAtom(_dataAnggotaTable_ByStatusSearch);
  const [search, setSearch] = useState("");
  const [inputPage, setInputPage] = useAtom(_dataPageSDP_Anggota);
  const [totalPage, setTotalPage] = useAtom(_dataTotalPageSDP_Anggota);
  const [valueId, setValueId] = useState<ModelSumberDayaPartai>();
  let noAwal = (_.toNumber(inputPage) - 1) * 10 + 1;
  const [stateBaru, setStateBaru] = useAtom(new_state_refresh);
  const [refresh, setRefresh] = useAtom(refresh_page);

  useShallowEffect(() => {
    if (refresh) {
      setStateBaru(Math.random().toString());
      _loadDataSDP_ByStatus_BySeach(4, search, setDataTable, "1", setTotalPage);
    }
  }, [refresh]);

  useShallowEffect(() => {
    onSearch("");
  }, []);

  function onSearch(search: string) {
    _loadDataSDP_ByStatus_BySeach(4, search, setDataTable, "1", setTotalPage);
    setInputPage("1");
  }

  const tbHead = (
    <tr>
      <th>No</th>
      <th>
        <Center>
          <AiOutlineMenu />
        </Center>
      </th>
      <th>Nama</th>
      <th>NIK</th>
      <th>Email</th>
      <th>Jenis Kelamin</th>
      <th>Provinsi</th>
      <th>Kabupaten</th>
      <th>Kecamatan</th>
      <th>Desa / Cabang</th>
      <th>RT/RW</th>
    </tr>
  );

  const rows = dataTable.map((e, i) => (
    <tr key={e.id}>
      <td>{noAwal++}</td>
      <td>
        <Flex direction={{ base: "column", sm: "row" }} justify={"center"}>
          <ActionIcon
            color="green"
            onClick={() => {
              setValueId(e);
              open();
            }}
          >
            <CiEdit />
          </ActionIcon>
          <ButtonDeleteData
            setId={e}
            search={search}
            setDataTable={setDataTable}
            setTingkat="anggota partai"
          />
        </Flex>
      </td>
      <td>{e.User.DataDiri.name}</td>
      <td>{e.User.DataDiri.nik}</td>
      <td>{e.User.email}</td>
      <td>{e.User.DataDiri.MasterJenisKelamin.name}</td>
      <td>{e.User.DataDiri.MasterProvince.name}</td>
      <td>{e.User.DataDiri.MasterKabKot.name}</td>
      <td>{e.User.DataDiri.MasterKecamatan.name}</td>
      <td>{e.User.DataDiri.MasterDesa.name}</td>
      <td>{e.User.DataDiri.rtRw}</td>
    </tr>
  ));

  return (
    <>
      {/* {JSON.stringify(dataTable)} */}
      <Modal
        opened={opened}
        onClose={close}
        size="lg"
        centered
        overlayProps={{
          opacity: 0.1,
        }}
      >
        {/* <EditAnggotaPartaiV2 thisClosed={close} /> */}
        <EditSumberDayaPartaiV2 valId={valueId} closeModal={close} />
      </Modal>
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Data Anggota Partai
              </Text>
            </Grid.Col>
            {/* <Title>{stateBaru}</Title> */}
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

              {/* <Button
                onClick={() => {
                  setRefresh(Math.random().toString());
                  _loadDataSDP_ByStatus_BySeach(
                    4,
                    search,
                    setDataTable,
                    "1",
                    setTotalPage
                  );
                }}
              >
                refres
              </Button> */}
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
                  4,
                  search,
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

export default TableAnggotaPartaiV2;
