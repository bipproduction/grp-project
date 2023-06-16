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
import EditRencanaKunjunganGerindraV2 from "./edit_rencana_kunjungan";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import { api } from "@/lib/api-backend";
import moment from "moment";
import toast from "react-simple-toasts";
import { useAtom } from "jotai";
import {
  _dataPageRencanaKunjunganGerindra,
  _dataRencanaKunjunganGerindra,
  _dataSearchRencanaKunjunganGerindra,
  _dataTotalPageRencanaKunjunganGerindra,
  _loadDataRencanaKunjunganGerindra,
} from "@/load_data/aksi_nyata/load_gerindra";
import { ButtonDeleteAksiGerindra } from "../hapus_aksi_gerindra";
import _ from "lodash";
import { AiOutlineMenu } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { ButtonDeleteAksiPrabowo } from "../../aksi_prabowo/hapus_aksi_prabowo";

export const TableRencanaKunjunganGerindraV2 = () => {
  const [listData, setListData] = useState<any[]>([]);
  const [dataId, setDataId] = useState<string>("");
  const [listDataNew, setListDataNew] = useAtom(_dataRencanaKunjunganGerindra);
  const [inputSearch, setInputSearch] = useAtom(
    _dataSearchRencanaKunjunganGerindra
  );
  const [inputPage, setInputPage] = useAtom(_dataPageRencanaKunjunganGerindra);
  const [totalPage, setTotalPage] = useAtom(
    _dataTotalPageRencanaKunjunganGerindra
  );
  let noAwal = (_.toNumber(inputPage) - 1) * 10 + 1;

  // const loadData = () => {
  //   fetch(api.apiRencanaKunjunganGerindraGetAll)
  //     .then((v) => v.json())
  //     .then((v) => {
  //       setListData(v);
  //     });
  // }

  // const onDelete = (id: string) => {
  //   fetch(api.apiRencanaKunjunganGerindraHapus + `?id=${id}`)
  //     .then(async (res) => {
  //       if (res.status === 200) {
  //         toast("Success");
  //         _loadDataRencanaKunjunganGerindra("", setListDataNew);
  //       }
  //     });
  // }

  useShallowEffect(() => {
    // loadData();
    setInputPage("1");
    _loadDataRencanaKunjunganGerindra(
      inputSearch,
      setListDataNew,
      "1",
      setTotalPage
    );
  }, []);

  const tbHead = (
    <tr>
      <th>No</th>
      <th>
        <Center>
          <AiOutlineMenu />
        </Center>
      </th>
      <th>Rencana Agenda</th>
      <th>Status Kunjungan</th>
      <th>Tanggal Kunjungan</th>
      <th>Potret Lokasi</th>
    </tr>
  );

  const rows = listDataNew.map((e, i) => (
    <tr key={i}>
      <td>{noAwal++}</td>
      <td>
        <Flex direction={{ base: "column", sm: "row" }} justify={"center"}>
          <ActionIcon
            color={"green"}
            onClick={() => {
              setDataId(e.id);
              open();
            }}
          >
            <CiEdit />
          </ActionIcon>
          <ButtonDeleteAksiGerindra
            setId={e.id}
            setKategori="1"
            setNama={e.judul}
          />
        </Flex>
      </td>
      <td>{e.judul}</td>
      <td>{e.MasterStatusAksiNyata.name}</td>
      <td>{moment(e.tanggal).format("DD MMM YYYY")}</td>
      <td>{e.img}</td>
    </tr>
  ));

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
        <EditRencanaKunjunganGerindraV2 thisClosed={close} data={dataId} />
      </Modal>

      <Box pt={20}>
        <ScrollArea>
          <Table withBorder horizontalSpacing={"lg"}>
            <thead>{tbHead}</thead>
            <tbody>{rows}</tbody>
          </Table>
          <Group position="right" py={10}>
            <Pagination
              total={Number(totalPage)}
              color={"orange"}
              my={10}
              value={Number(inputPage)}
              onChange={(val: any) => {
                setInputPage(val);
                _loadDataRencanaKunjunganGerindra(
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
