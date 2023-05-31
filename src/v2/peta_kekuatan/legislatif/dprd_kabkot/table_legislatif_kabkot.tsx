import { Box, Button, Group, Modal, ScrollArea, Table } from "@mantine/core";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
// const data_dummy = require("../data_dummy_pk")
import myData from "../data_legis_dummy.json";
import { EditLegislatifDprdKabkotV2 } from "./edit_legislatif_dprd_kabkot";
import { useState } from "react";
import { ModelLegislatif } from "@/model/model_peta_kekuatan";
import { api } from "@/lib/api-backend";
import toast from "react-simple-toasts";
import { useAtom } from "jotai";
import { _dataLegislatifKabKot, _dataSearchLegislatifKabKot, _loadDataLegislatif } from "@/load_data/peta_kekuatan/load_legislatif";
import { ButtonDeleteLegislatif } from "../hapus_legislatif";

export const TableLegislatifKabKotV2 = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [listData, setListData] = useState<ModelLegislatif[]>([]);
  const [listDataNew, setListDataNew] = useAtom(_dataLegislatifKabKot);
  const [dataId, setDataId] = useState<string>("");
  const [inputSearch, setInputSearch] = useAtom(_dataSearchLegislatifKabKot);

  // const loadData = () => {
  //   fetch(api.apiLegislatifGetAll + `?tingkat=3`)
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
  //         _loadDataLegislatif(3, "", setListDataNew);
  //       }
  //     });
  // }

  useShallowEffect(() => {
    //loadData();
    _loadDataLegislatif(3, inputSearch, setListDataNew);
  }, [])

  const tbHead = (
    <tr>
      <th>No</th>
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
      <th>
        <Group position="center">Aksi</Group>
      </th>
    </tr>
  );

  const rows = listDataNew.map((e, i) => (
    <tr key={i}>
      <td>{i + 1}</td>
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
      <td>
        <Group position="center">
          <Button
            variant={"outline"}
            color={"green"}
            radius={50}
            w={100}
            onClick={() => {
              open();
              setDataId(e.id);
            }}
          >
            Edit
          </Button>
          <ButtonDeleteLegislatif setId={e.id} setTingkat="3" setNama={e.User.DataDiri.name} />
          {/* <Button variant={"outline"} color={"red"} radius={50} w={100} onClick={() => { onDelete(e.id) }}>
            Hapus
          </Button> */}
        </Group>
      </td>
    </tr>
  ));

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
      >
        <EditLegislatifDprdKabkotV2
          thisClosed={close}
          data={dataId}
        />
      </Modal>
      <Box pt={20}>
        <ScrollArea>
          <Table withBorder horizontalSpacing={"lg"}>
            <thead>{tbHead}</thead>
            <tbody>{rows}</tbody>
          </Table>
        </ScrollArea>
      </Box>
    </>
  );
};
