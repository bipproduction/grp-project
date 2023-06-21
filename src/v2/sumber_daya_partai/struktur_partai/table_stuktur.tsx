import {
  _dataSeach,
  _dataStrukturTable_ByStatusSearch,
  _loadDataSDP_ByStatus_BySeach,
  _editLoadStruktur_ByStatusSeacrh,
  _new_loadEditByModel,
  _searchDataSumberDayaPartai,
  _dataPageSDP_Strukturr,
  _dataTotalPageSDP_Strukturr,
} from "@/load_data/sumber_daya_partai/load_sumber_daya_partai";
import {
  ActionIcon,
  Alert,
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
  Space,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import {
  useDebouncedState,
  useDisclosure,
  useShallowEffect,
} from "@mantine/hooks";
import { useAtom } from "jotai";
import _ from "lodash";
import { StrukturEditV2 } from "./stuktur_edit";
import { ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import COLOR from "../../../../fun/WARNA";
import { api } from "@/lib/api-backend";
import { useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import toast from "react-simple-toasts";
import { ButtonDeleteData } from "@/v2/component/button_delete_sumber_daya_partai";
import { CiEdit } from "react-icons/ci";
import { EditStrukturV2 } from "./edit_struktur";

export const TableStrukturV2 = () => {
  const [opened, setOpen] = useDisclosure(false);
  const [targetStruktur, setTargetStruktur] = useAtom(_new_loadEditByModel);
  const [dataTable, setDataTable] = useAtom(_dataStrukturTable_ByStatusSearch);
  const [search, setSearch] = useState("");
  const [inputSearch, setInputSearch] = useAtom(_searchDataSumberDayaPartai);
  const [inputPage, setInputPage] = useAtom(_dataPageSDP_Strukturr);
  const [totalPage, setTotalPage] = useAtom(_dataTotalPageSDP_Strukturr);
  let noAwal = (_.toNumber(inputPage) - 1) * 10 + 1;

  useShallowEffect(() => {
    onSearch(search);
  }, []);

  function onSearch(text: string) {
    _loadDataSDP_ByStatus_BySeach(1, text, setDataTable, "1", setTotalPage);
    setInputSearch(text);
    setInputPage("1");
  }

  const thHead = (
    <tr>
      <th>No</th>
      <th>
        <Center>
          <AiOutlineMenu />
        </Center>
      </th>
      <th>Nama</th>
      <th>NIK</th>
      <th>Tingkat Pengurus</th>
      <th>Jabatan</th>
    </tr>
  );

  const tbBody = dataTable.map((e, i) => (
    <tr key={i}>
      <td>{noAwal++}</td>
      <td>
        <Center>
          <Flex direction={{ base: "column", sm: "row" }} justify={"center"}>
            <ActionIcon
              color={"green"}
              onClick={() => {
                setOpen.open();
                setTargetStruktur(e.id as any);
                // console.log(e.id)
              }}
            >
              <CiEdit />
            </ActionIcon>
            <ButtonDeleteData
              setId={e}
              search={search}
              setDataTable={setDataTable}
              setTingkat="struktur partai"
            />
          </Flex>
        </Center>
      </td>
      <td>{e.User.DataDiri.name}</td>
      <td>{e.User.DataDiri.nik}</td>
      <td>{e.MasterTingkatPengurus.name}</td>
      <td>
        <DataJabatan setTingkat={e} />
      </td>
    </tr>
  ));

  return (
    <>
      {/* <pre>{JSON.stringify(dataTable.map((e) => e.MasterStatusKeanggotaan.id), null, 2)}</pre> */}
      {/* {JSON.stringify(inputPage)} */}
      <Modal
        centered
        opened={opened}
        onClose={setOpen.close}
        size="lg"
        overlayProps={{
          opacity: 0.1,
        }}
      >
        <EditStrukturV2 thisClosed={setOpen.close} />
        {/* <StrukturEditV2 thisClosed={setOpen.close} /> */}
      </Modal>

      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Data Struktur Partai
              </Text>
            </Grid.Col>
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
          </Grid>
        </Box>
        <Box py={20}>
          <ScrollArea>
            <Table withBorder highlightOnHover horizontalSpacing={"lg"}>
              <thead>{thHead}</thead>
              <tbody>{tbBody}</tbody>
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
                  1,
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

function DataJabatan({ setTingkat }: { setTingkat: ModelSumberDayaPartai }) {
  return (
    <>
      {/* {JSON.stringify(setTingkat.MasterTingkatPengurus.id)} */}
      {(() => {
        let data = setTingkat.MasterTingkatPengurus?.id;
        if (data == 1) {
          return (
            <>
              <Text>{setTingkat.MasterJabatanDewanPembina?.name}</Text>
            </>
          );
        } else {
          if (data == 2) {
            return (
              <>
                <Text>{setTingkat.MasterJabatanDewanPimpinanPusat?.name}</Text>
              </>
            );
          } else {
            if (data == 3) {
              return (
                <>
                  <Text>
                    {setTingkat.MasterJabatanDewanPimpinanDaerah?.name}
                  </Text>
                </>
              );
            } else {
              if (data == 4) {
                return (
                  <>
                    <Text>
                      {setTingkat.MasterJabatanDewanPimpinanCabang?.name}
                    </Text>
                  </>
                );
              } else {
                if (data == 5) {
                  return (
                    <>
                      <Text>
                        {setTingkat.MasterJabatanPimpinanAnakCabang.name}
                      </Text>
                    </>
                  );
                } else {
                  if (data == 6) {
                    return (
                      <>
                        <Text>
                          {setTingkat.MasterJabatanPimpinanRanting.name}
                        </Text>
                      </>
                    );
                  } else {
                    if (data == 7) {
                      return (
                        <>
                          <Text>
                            {
                              setTingkat
                                .MasterJabatanPerwakilanPartaiDiLuarNegeri.name
                            }
                          </Text>
                        </>
                      );
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
            }
          }
        }
      })()}
    </>
  );
}
