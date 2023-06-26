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
import {
  randomId,
  useDisclosure,
  useForceUpdate,
  useShallowEffect,
} from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  AiOutlineDownload,
  AiOutlineSave,
  AiOutlineSearch,
  AiOutlineUpload,
} from "react-icons/ai";
import { CiEdit, CiFilter } from "react-icons/ci";
import COLOR from "../../../../fun/WARNA";
import dataTable from "../data_table.json";
import EditKaderPartaiV2 from "./edit_kader_partai";
import { useAmp } from "next/amp";
import { useAtom } from "jotai";
import {
  _dataKaderTable_ByStatusSearch,
  _dataPageSDP_Kader,
  _dataTotalPageSDP_Kader,
  _loadDataSDP_ByStatus_BySeach,
  _searchDataSumberDayaPartai,
} from "@/load_data/sumber_daya_partai/load_sumber_daya_partai";
import { KaderEditv2 } from "./kader_edit";
import { api } from "@/lib/api-backend";
import { ButtonDeleteData } from "@/v2/component/button_delete_sumber_daya_partai";
import _ from "lodash";
import { AiOutlineMenu } from "react-icons/ai";
import EditSumberDayaPartaiV2 from "../edit_sumber_daya_partai";
import { ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";
import { refresh_page } from "../../force_refresh";
import { new_state_refresh } from "../../force_refresh";

const TableKaderPartaiV2 = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [activePage, setActivePage] = useState();
  const [dataTable, setDataTable] = useAtom(_dataKaderTable_ByStatusSearch);
  const [valueId, setValueId] = useState<ModelSumberDayaPartai>();
  const [search, setSearch] = useState("");
  const [inputSearch, setInputSearch] = useAtom(_searchDataSumberDayaPartai);
  const [inputPage, setInputPage] = useAtom(_dataPageSDP_Kader);
  const [totalPage, setTotalPage] = useAtom(_dataTotalPageSDP_Kader);
  let noAwal = (_.toNumber(inputPage) - 1) * 10 + 1;

  const [stateBaru, setStateBaru] = useAtom(new_state_refresh);
  const [refresh, setRefresh] = useAtom(refresh_page);

  useShallowEffect(() => {
    if (refresh) {
      setStateBaru(Math.random().toString());
      _loadDataSDP_ByStatus_BySeach(3, search, setDataTable, "1", setTotalPage);
    }
  }, [refresh]);

  useShallowEffect(() => {
    onSearch("");
  }, []);

  const onSearch = (search: string) => {
    _loadDataSDP_ByStatus_BySeach(3, search, setDataTable, "1", setTotalPage);
    setInputPage("1");
    setInputSearch(search);
  };

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
      <th>Tingkat Kader</th>
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
            setTingkat="kader partai"
          />
        </Flex>
      </td>
      <td>{e.User.DataDiri.name}</td>
      <td>{e.User.DataDiri.nik}</td>
      <td>{e.MasterKaderPartai.name}</td>
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
        {/* <EditKaderPartaiV2 thisClosed={close} valueId={valueId} /> */}
        {/* <KaderEditv2 thisClosed={close} valueId={valueId} /> */}
        <EditSumberDayaPartaiV2 valId={valueId} closeModal={close} />
      </Modal>
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Data Kader Partai
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
        <Box key={Math.random()} py={20}>
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
                  3,
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

export default TableKaderPartaiV2;
