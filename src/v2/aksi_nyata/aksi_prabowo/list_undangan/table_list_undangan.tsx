import { Box, Button, Group, Modal, ScrollArea, Table } from "@mantine/core";
import myData from "../../data_dummy_an.json";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import EditListUndanganPrabowoV2 from "./edit_list_undangan";
import { useState } from "react";
import { api } from "@/lib/api-backend";
import { ModelListUndanganPrabowo } from "@/model/model_aksi_nyata";
import toast from "react-simple-toasts";
import { useAtom } from "jotai";
import { _dataListUndanganPrabowo, _loadDataListUndanganPrabowo } from "@/load_data/aksi_nyata/load_prabowo";
import _ from "lodash";
const moment = require('moment')

export const TableListUndanganPrabowoV2 = () => {
  const [listUndanganPrabowo, setListUndanganPrabowo] = useState<ModelListUndanganPrabowo[]>([]);
  const [dataId, setDataId] = useState<string>("");
  const [listDataNew, setListDataNew] = useAtom(_dataListUndanganPrabowo);

  const loadListUndanganPrabowo = () => {
    fetch(api.apiListUndanganPrabowoGetAll)
      .then((v) => v.json())
      .then((v) => {
        setListUndanganPrabowo(v);
        //console.log(v)
      });
  };

  useShallowEffect(() => {
    loadListUndanganPrabowo();
    _loadDataListUndanganPrabowo("", setListDataNew);
  }, []);

  const onDelete = (id: string) => {
    fetch(api.apiListUndanganPrabowoHapus + `?id=${id}`)
      .then(async (res) => {
        if (res.status === 200) {
          toast("Success");
          _loadDataListUndanganPrabowo("", setListDataNew);
        }
      });
  }

  const tbHead = (
    <tr>
      <th>No</th>
      <th>Rencana Agenda</th>
      <th>Tanggal Kunjungan</th>
      <th>List Undangan</th>
      <th><Group position="center">Aksi</Group></th>
    </tr>
  );

  // const rows = listDataNew.map((e, i) => (
  //   <tr key={i}>
  //     <td>{i + 1}</td>
  //     {/* <td>{e.RencanaKunjunganPrabowo.judul}</td> */}
  //     {/* <td>{moment(e.RencanaKunjunganPrabowo.tanggal).format("DD MMM YYYY")}</td> */}
  //     <td>{e.RencanaKunjunganPrabowo.judul}</td>
  //     <td>{moment(e.RencanaKunjunganPrabowo.tanggal).format("DD MMM YYYY")}</td>
  //     <td>{e.nama}</td>
  //     {/* <td>{e.id}</td> */}
  //     <td>
  //       <Group position="center">
  //         <Button
  //           variant={"outline"}
  //           color={"green"}
  //           radius={50}
  //           w={100}
  //           onClick={() => {
  //             open();
  //             setDataId(e.id);
  //           }}
  //         >
  //           Edit
  //         </Button>
  //         <Button variant={"outline"} color={"red"} radius={50} w={100} onClick={() => { onDelete(e.id) }}>
  //           Hapus
  //         </Button>
  //       </Group>
  //     </td>
  //   </tr>
  // ));

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      {/* Edit Modal */}
      <Modal
        opened={opened}
        onClose={close}
        size="100%"
        // fullScreen
        overlayProps={{
          // color: theme.colorScheme === 'light' ? theme.colors.dark[9] : theme.colors.dark[2],
          opacity: 0.1,
        }}
      >
        <EditListUndanganPrabowoV2 thisClosed={close} data={dataId} />
      </Modal>


      <Box pt={20}>
        {/* {JSON.stringify(listDataNew)} */}
        <ScrollArea>
          <Table withBorder horizontalSpacing={"lg"}>
            <thead>{tbHead}</thead>
            {/* {JSON.stringify(listDataNew)} */}
            {/* <tbody>
              {listDataNew && listDataNew.map((v) => ({
                ..._.omit(v, ['id'])
              })).map((v, i) => <tr key={i}>
                <td>{i + 1}</td>
                {_.values(v).map((v2, i2) => <td key={i2}>
                  {v2 as any}
                </td>)}
              </tr>)}
            </tbody> */}
            <tbody>{listDataNew && listDataNew.map((v, i)=>(
              <tr key={i}>
              <td>{i + 1}</td>
              <td>{v.judul}</td>
              <td>{moment(v.tanggal).format("DD MMM YYYY")}</td>
              <td>{v.nama}</td>
              <td>
                <Group position="center">
                  <Button
                    variant={"outline"}
                    color={"green"}
                    radius={50}
                    w={100}
                    onClick={() => {
                      open();
                      setDataId(v.id);
                    }}
                  >
                    Edit
                  </Button>
                  <Button variant={"outline"} color={"red"} radius={50} w={100} onClick={() => { onDelete(v.id) }}>
                    Hapus
                  </Button>
                </Group>
              </td>
            </tr>
            ))}</tbody>
          </Table>
        </ScrollArea>
      </Box>
    </>
  );
};
