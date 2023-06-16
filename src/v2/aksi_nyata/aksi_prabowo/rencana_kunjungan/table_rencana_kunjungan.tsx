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
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import EditRencanaKunjunganPrabowoV2 from "./edit_rencana_kunjungan";
import { useState } from "react";
import { api } from "@/lib/api-backend";
import toast from "react-simple-toasts";
import { useAtom } from "jotai";
import {
  _dataPageRencanaKunjunganPrabowo,
  _dataRencanaKunjunganPrabowo,
  _dataSearchRencanaKunjunganPrabowo,
  _dataTotalPageRencanaKunjunganPrabowo,
  _loadDataRencanaKunjunganPrabowo,
} from "@/load_data/aksi_nyata/load_prabowo";
import { ButtonDeleteAksiPrabowo } from "../hapus_aksi_prabowo";
import moment from "moment";
import "moment/locale/id";
import _ from "lodash";
import { AiOutlineMenu } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
moment.locale("id");

export const TableRencanaKunjunganPrabowoV2 = () => {
  const [listDataRencanaKunjunganPrabowo, setDataRencanaKunjunganPrabowo] =
    useState<any[]>([]);
  const [listDataNew, setListDataNew] = useAtom(_dataRencanaKunjunganPrabowo);
  const [dataId, setDataId] = useState<string>("");
  const [inputSearch, setInputSearch] = useAtom(
    _dataSearchRencanaKunjunganPrabowo
  );
  const [inputPage, setInputPage] = useAtom(_dataPageRencanaKunjunganPrabowo);
  const [totalPage, setTotalPage] = useAtom(
    _dataTotalPageRencanaKunjunganPrabowo
  );
  let noAwal = (_.toNumber(inputPage) - 1) * 10 + 1;

  // const loadRencanaKunjunganPrabowo = () => {
  //   fetch(api.apiRencanaKunjunganPrabowoGetAll)
  //     .then((v) => v.json())
  //     .then((v) => {
  //       setDataRencanaKunjunganPrabowo(v);
  //     });
  // };

  useShallowEffect(() => {
    //loadRencanaKunjunganPrabowo();
    setInputPage("1");
    _loadDataRencanaKunjunganPrabowo(
      inputSearch,
      setListDataNew,
      "1",
      setTotalPage
    );
  }, []);

  // const onDelete = (id: string) => {
  //   fetch(api.apiRencanaKunjunganPrabowoHapus + `?id=${id}`)
  //     .then(async (res) => {
  //       if (res.status === 200) {
  //         toast("Success");
  //         _loadDataRencanaKunjunganPrabowo("", setListDataNew);
  //       }
  //     });
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
          <ButtonDeleteAksiPrabowo
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
        <EditRencanaKunjunganPrabowoV2 thisClosed={close} data={dataId} />
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
                _loadDataRencanaKunjunganPrabowo(
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
