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
import { useState } from "react";
// const data_dummy = require("../data_dummy_pk")
import myData from "../../data_dummy_pk.json";
import { EditEksekutifProvinsiV2 } from "./edit_eksekutif_provinsi";
import { ModelEksekutif } from "@/model/model_peta_kekuatan";
import { api } from "@/lib/api-backend";
import toast from "react-simple-toasts";
import {
  _dataEksekutifProvinsi,
  _dataPageEksekutifProvinsi,
  _dataSearchEksekutifProvinsi,
  _dataTotalPageEksekutifProvinsi,
  _loadDataEksekutif,
} from "@/load_data/peta_kekuatan/load_eksekutif";
import { useAtom } from "jotai";
import { ButtonDeleteEksekutif } from "../hapus_eksekutif";
import _ from "lodash";
import { AiOutlineMenu } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";

export const TableEksekutifProvinsiV2 = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [listData, setListData] = useState<ModelEksekutif[]>([]);
  const [dataId, setDataId] = useState<string>("");
  const [listDataNew, setListDataNew] = useAtom(_dataEksekutifProvinsi);
  const [inputSearch, setInputSearch] = useAtom(_dataSearchEksekutifProvinsi);
  const [inputPage, setInputPage] = useAtom(_dataPageEksekutifProvinsi);
  const [totalPage, setTotalPage] = useAtom(_dataTotalPageEksekutifProvinsi);
  let noAwal = (_.toNumber(inputPage) - 1) * 10 + 1;

  const loadData = () => {
    fetch(api.apiEksekutifGetAll + `?tingkat=2`)
      .then((v) => v.json())
      .then((v) => {
        setListData(v);
      });
  };

  // const onDelete = (id: string) => {
  //   fetch(api.apiEksekutifHapus + `?id=${id}`)
  //     .then(async (res) => {
  //       if (res.status === 200) {
  //         toast("Success");
  //         _loadDataEksekutif(2, "", setListDataNew);
  //       }
  //     });
  // }

  useShallowEffect(() => {
    loadData();
    setInputPage("1");
    _loadDataEksekutif(2, inputSearch, setListDataNew, "1", setTotalPage);
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
      <th>Provinsi</th>
      <th>Jabatan Eksekutif</th>
      <th>Periode</th>
      <th>Alamat Tinggal/Domisili</th>
      <th>Alamat Kantor</th>
      <th>Email</th>
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
          <ButtonDeleteEksekutif
            setId={e.id}
            setTingkat="2"
            setNama={e.User.DataDiri.name}
          />
        </Flex>
      </td>
      <td>{e.User.DataDiri.name}</td>
      <td>{e.User.DataDiri.nik}</td>
      <td>{e.MasterProvince?.name}</td>
      <td>{e.MasterJabatanEksekutifProvinsi?.name}</td>
      <td>{e.periode}</td>
      <td>{e.User.DataDiri.alamat}</td>
      <td>{e.alamatKantor}</td>
      <td>{e.User.email}</td>
      {/* <td>{e.Media_social}</td> */}
    </tr>
  ));

  return (
    <>
      <Modal opened={opened} onClose={close} centered size={"lg"}>
        <EditEksekutifProvinsiV2 thisClosed={close} data={dataId} />
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
              _loadDataEksekutif(
                2,
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
