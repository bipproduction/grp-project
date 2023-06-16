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
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
// const data_dummy = require("../data_dummy_pk")
import myData from "../data_legis_dummy.json";
import { EditLegislatifDprRiV2 } from "./edit_legislatif_dpr_ri";
import { useState } from "react";
import { ModelLegislatif } from "@/model/model_peta_kekuatan";
import { api } from "@/lib/api-backend";
import toast from "react-simple-toasts";
import { useAtom } from "jotai";
import {
  _dataLegislatifNasional,
  _dataPageLegislatifNasional,
  _dataSearchLegislatifNasional,
  _dataTotalPageLegislatifNasional,
  _loadDataLegislatif,
} from "@/load_data/peta_kekuatan/load_legislatif";
import { ButtonDeleteLegislatif } from "../hapus_legislatif";
import _ from "lodash";
import { CiEdit } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";

export const TableLegislatifRIV2 = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [listData, setListData] = useState<ModelLegislatif[]>([]);
  const [listDataNew, setListDataNew] = useAtom(_dataLegislatifNasional);
  const [dataId, setDataId] = useState<string>("");
  const [inputSearch, setInputSearch] = useAtom(_dataSearchLegislatifNasional);
  const [inputPage, setInputPage] = useAtom(_dataPageLegislatifNasional);
  const [totalPage, setTotalPage] = useAtom(_dataTotalPageLegislatifNasional);
  let noAwal = (_.toNumber(inputPage) - 1) * 10 + 1;

  // const loadData = () => {
  //   fetch(api.apiLegislatifGetAll + `?tingkat=1`)
  //     .then((v) => v.json())
  //     .then((v) => {
  //       setListData(v);
  //     });
  // }

  // const onDelete = (id: string) => {
  //   fetch(api.apiLegislatifHapus + `?id=${id}`)
  //     .then(async (res) => {
  //       if (res.status === 200) {
  //         toast("Success");
  //         _loadDataLegislatif(1,"",setListDataNew);
  //       }
  //     });
  // }

  useShallowEffect(() => {
    //loadData();
    setInputPage("1");
    _loadDataLegislatif(1, inputSearch, setListDataNew, "1", setTotalPage);
  }, []);

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
      <th>No Urut</th>
      <th>Dapil</th>
      <th>Cakupan Wilayah</th>
      <th>Komisi / AKD</th>
      <th>Alamat</th>
      <th>Email</th>
      <th>Periode</th>
      <th>Jabatan</th>
      {/* <th>Media Social</th> */}
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
              open();
              setDataId(e.id);
            }}
          >
            <CiEdit />
          </ActionIcon>
          <ButtonDeleteLegislatif
            setId={e.id}
            setTingkat="1"
            setNama={e.User.DataDiri.name}
          />
        </Flex>
      </td>
      <td>{e.User.DataDiri.name}</td>
      <td>{e.User.DataDiri.nik}</td>
      <td>{e.noUrut}</td>
      <td>{e.dapil}</td>
      <td>{e.cakupanWilayah}</td>
      <td>{e.akd}</td>
      <td>{e.User.DataDiri.alamat}</td>
      <td>{e.User.email}</td>
      <td>{e.periode}</td>
      <td>{e.jabatan}</td>
      {/* <td>{e.Media_Social}</td> */}
    </tr>
  ));

  return (
    <>
      <Modal opened={opened} onClose={close} centered size={"lg"}>
        <EditLegislatifDprRiV2 thisClosed={close} data={dataId} />
      </Modal>
      <Box pt={20}>
        <ScrollArea>
          <Table withBorder horizontalSpacing={"lg"}>
            <thead>{tbHead}</thead>
            <tbody>{rows}</tbody>
          </Table>
        </ScrollArea>
        <Group position="right" py={10}>
          <Pagination
            total={Number(totalPage)}
            color={"orange"}
            my={10}
            value={Number(inputPage)}
            onChange={(val: any) => {
              setInputPage(val);
              _loadDataLegislatif(
                1,
                inputSearch,
                setListDataNew,
                val,
                setTotalPage
              );
            }}
          />
        </Group>
      </Box>
    </>
  );
};
