import {
  _dataSeach,
  _dataTable_ByStatusSearch,
  _loadData_ByStatus_BySeach,
  _new_loadData_ByStatusSeacrh,
  _new_loadEditByModel,
} from "@/load_data/sumber_daya_partai/load_edit_sumber_daya_partai";
import {
  Box,
  Button,
  Center,
  Group,
  Modal,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { useAtom } from "jotai";
import _ from "lodash";
import { StrukturEditV2 } from "./stuktur_edit";
import { ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";

export const TableStrukturV2 = () => {
  const [opened, setOpen] = useDisclosure(false);
  const [targetStruktur, setTargetStruktur] = useAtom(_new_loadEditByModel);
  const [search, setSearch] = useAtom(_dataSeach);
  const [dataTable, setDataTable] = useAtom(_dataTable_ByStatusSearch);

  useShallowEffect(() => {
    _loadData_ByStatus_BySeach(1, search, setDataTable);
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
      <td><DataJabatan setTingkat={e}/></td>
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
          <Button variant={"outline"} color={"red"} radius={50} w={100}>
            Hapus
          </Button>
        </Group>
      </td>
    </tr>
  ));

  function onSearch(text: string) {
    let data = _.clone(
      dataTable.filter((e) => e.User.DataDiri.name).includes(text as any)
    );
    setSearch(data);
  }

  return (
    <>
      <pre>{/* {JSON.stringify(dataTable, null, 2)} */}</pre>
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
      <Box sx={{overflow: "scroll"}}>
        {/* {search} */}
        <TextInput
          py={20}
          placeholder="Cari nama"
          onChange={(val) => {
            onSearch(val.target.value);
          }}
        />
        <Table withBorder>
          <thead>{thHead}</thead>
          <tbody>{tbBody}</tbody>
        </Table>
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
                      return <>Salah</>;
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
