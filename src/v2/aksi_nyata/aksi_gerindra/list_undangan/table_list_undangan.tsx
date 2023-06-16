import {
  ActionIcon,
  Box,
  Button,
  Center,
  Flex,
  Group,
  Modal,
  Pagination,
  ScrollArea,
  Table,
} from "@mantine/core";
import myData from "../../data_dummy_an.json";
import EditListUndanganGerindraV2 from "./edit_list_undangan";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import { ModelListUndanganGerindra } from "@/model/model_aksi_nyata";
import { api } from "@/lib/api-backend";
import toast from "react-simple-toasts";
import { useAtom } from "jotai";
import {
  _dataListUndanganGerindra,
  _dataPageListUndanganGerindra,
  _dataSearchListUndanganGerindra,
  _dataTotalPageListUndanganGerindra,
  _loadDataListUndanganGerindra,
} from "@/load_data/aksi_nyata/load_gerindra";
import { ButtonDeleteAksiGerindra } from "../hapus_aksi_gerindra";
import _ from "lodash";
import { AiOutlineMenu } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { ButtonDeleteAksiPrabowo } from "../../aksi_prabowo/hapus_aksi_prabowo";
const moment = require("moment");

export const TableListUndanganGerindraV2 = () => {
  const [listUndanganGerindra, setListUndanganGerindra] = useState<
    ModelListUndanganGerindra[]
  >([]);
  const [dataId, setDataId] = useState<string>("");
  const [listDataNew, setListDataNew] = useAtom(_dataListUndanganGerindra);
  const [inputSearch, setInputSearch] = useAtom(
    _dataSearchListUndanganGerindra
  );
  const [inputPage, setInputPage] = useAtom(_dataPageListUndanganGerindra);
  const [totalPage, setTotalPage] = useAtom(_dataTotalPageListUndanganGerindra);
  let noAwal = (_.toNumber(inputPage) - 1) * 10 + 1;

  // const loadListUndanganGerindra = () => {
  //     fetch(api.apiListUndanganGerindraGetAll)
  //         .then((v) => v.json())
  //         .then((v) => {
  //             setListUndanganGerindra(v);
  //         });
  // };

  useShallowEffect(() => {
    //loadListUndanganGerindra();
    setInputPage("1");
    _loadDataListUndanganGerindra(
      inputSearch,
      setListDataNew,
      "1",
      setTotalPage
    );
  }, []);

  // const onDelete = (id: string) => {
  //     fetch(api.apiListundanganGerindraHapus + `?id=${id}`)
  //         .then(async (res) => {
  //             if (res.status === 200) {
  //                 toast("Success");
  //                 _loadDataListUndanganGerindra("", setListDataNew);
  //             }
  //         });
  // }

  const tbHead = (
    <tr>
      <th>No</th>
      <th>
        <Center>
          <AiOutlineMenu />
        </Center>
      </th>
      <th>Rencana Agenda</th>
      <th>Tanggal Kunjungan</th>
      <th>List Undangan</th>
    </tr>
  );

  // const rows = listDataNew.map((e, i) => (
  //     <tr key={i}>
  //         <td>{i + 1}</td>
  //         <td>{e.RencanaKunjunganGerindra.judul}</td>
  //         <td>{moment(e.RencanaKunjunganGerindra.tanggal).format("DD MMM YYYY")}</td>
  //         <td>{e.nama}</td>
  //         <td>
  //             <Group position="center">
  //                 <Button
  //                     variant={"outline"}
  //                     color={"green"}
  //                     radius={50}
  //                     w={100}
  //                     onClick={() => {
  //                         open();
  //                         setDataId(e.id);
  //                     }}
  //                 >
  //                     Edit
  //                 </Button>
  //                 <Button variant={"outline"} color={"red"} radius={50} w={100} onClick={() => { onDelete(e.id) }}>
  //                     Hapus
  //                 </Button>
  //             </Group>
  //         </td>
  //     </tr>
  // ));

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      {/* Edit Modal */}
      <Modal
        opened={opened}
        onClose={close}
        size={"xl"}
        // fullScreen
        overlayProps={{
          // color: theme.colorScheme === 'light' ? theme.colors.dark[9] : theme.colors.dark[2],
          opacity: 0.1,
        }}
        centered
      >
        <EditListUndanganGerindraV2 thisClosed={close} data={dataId} />
      </Modal>

      <Box pt={20}>
        <ScrollArea>
          <Table withBorder horizontalSpacing={"lg"}>
            <thead>{tbHead}</thead>
            <tbody>
              {listDataNew &&
                listDataNew.map((e, i) => (
                  <tr key={i}>
                    <td>{noAwal++}</td>
                    <td>
                      <Flex
                        direction={{ base: "column", sm: "row" }}
                        justify={"center"}
                      >
                        <ActionIcon
                          color={"green"}
                          onClick={() => {
                            open();
                            setDataId(e.id);
                          }}
                        >
                          <CiEdit />
                        </ActionIcon>
                        <ButtonDeleteAksiGerindra
                          setId={e.id}
                          setKategori="2"
                          setNama={e.nama}
                        />
                      </Flex>
                    </td>
                    <td>{e.judul}</td>
                    <td>{moment(e.tanggal).format("DD MMM YYYY")}</td>
                    <td>{e.nama}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <Group position="right" py={10}>
            <Pagination
              total={Number(totalPage)}
              color={"orange"}
              my={10}
              value={Number(inputPage)}
              onChange={(val: any) => {
                setInputPage(val);
                _loadDataListUndanganGerindra(
                  inputSearch,
                  setListDataNew,
                  val,
                  setTotalPage
                );
              }}
            />
          </Group>
        </ScrollArea>
      </Box>
    </>
  );
};
