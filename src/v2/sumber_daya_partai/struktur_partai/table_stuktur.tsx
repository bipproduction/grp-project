import {
  _dataSeach,
  _dataStrukturTable_ByStatusSearch,
  _loadData_ByStatus_BySeach,
  _editLoadStruktur_ByStatusSeacrh,
  _new_loadEditByModel,
} from "@/load_data/sumber_daya_partai/load_edit_sumber_daya_partai";
import {
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
import { AiOutlineSearch } from "react-icons/ai";
import COLOR from "../../../../fun/WARNA";
import { api } from "@/lib/api-backend";
import { useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import toast from "react-simple-toasts";
import { ButtonDeleteData } from "@/v2/component/button_delete_sumber_daya_partai";

export const TableStrukturV2 = () => {
  const [opened, setOpen] = useDisclosure(false);
  const [targetStruktur, setTargetStruktur] = useAtom(_new_loadEditByModel);
  const [dataTable, setDataTable] = useAtom(_dataStrukturTable_ByStatusSearch);
  const [search, setSearch] = useState("");
  useShallowEffect(() => {
    onSearch("");
  }, []);

  const thHead = (
    <tr>
      <th>No</th>
      <th>Nama</th>
      <th>NIK</th>
      <th>Tingkat Pengurus</th>
      <th>Jabatan</th>
      <th>
        <Center>Aksi</Center>
      </th>
    </tr>
  );

  const tbBody = dataTable.map((e, i) => (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>{e.User.DataDiri.name}</td>
      <td>{e.User.DataDiri.nik}</td>
      <td>{e.MasterTingkatPengurus.name}</td>
      <td>
        <DataJabatan setTingkat={e} />
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
          <ButtonDeleteData
            setId={e}
            search={search}
            setDataTable={setDataTable}
          />
        </Group>
      </td>
    </tr>
  ));

  function onSearch(text: string) {
    _loadData_ByStatus_BySeach(1, text, setDataTable);
  }

  return (
    <>
      {/* <pre>{JSON.stringify(dataTable.map((e) => e.MasterStatusKeanggotaan.id), null, 2)}</pre> */}
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
        <StrukturEditV2 thisClosed={setOpen.close} />
      </Modal>

      <Box sx={{ overflow: "scroll" }}>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Data Struktur Partai
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
        <ScrollArea py={20}>
          <Table withBorder>
            <thead>{thHead}</thead>
            <tbody>{tbBody}</tbody>
          </Table>
          {/* <Group position="right" pt={10}>
            <Pagination total={10} color={"orange"} />
          </Group> */}
        </ScrollArea>
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


