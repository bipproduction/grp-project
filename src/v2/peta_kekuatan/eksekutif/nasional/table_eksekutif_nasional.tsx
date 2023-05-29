import { Box, Button, Group, Modal, ScrollArea, Table } from "@mantine/core";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
// const data_dummy = require("../data_dummy_pk")
import myData from "../../data_dummy_pk.json";
import { EditEksekutifNasionalV2 } from "./edit_eksekutif_nasional";
import { useState } from "react";
import { api } from "@/lib/api-backend";
import toast from "react-simple-toasts";
import { ModelEksekutif } from "@/model/model_peta_kekuatan";

export const TableEksekutifNasionalV2 = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [listData, setListData] = useState<ModelEksekutif[]>([]);
  const [dataId, setDataId] = useState<string>("");

  const loadData = () => {
    fetch(api.apiEksekutifGetAll+`?tingkat=1`)
      .then((v) => v.json())
      .then((v) => {
        setListData(v);
      });
  }

  const onDelete = (id: string) => {
    fetch(api.apiEksekutifHapus + `?id=${id}`)
      .then(async (res) => {
        if (res.status === 200) {
          toast("Success");
        }
      });
  }

  useShallowEffect(() => {
    loadData();
  }, [])

  const tbHead = (
    <tr>
      <th>No</th>
      <th>Nama</th>
      <th>NIK</th>
      <th>Nama Kementrian</th>
      <th>Jabatan Eksekutif</th>
      <th>Periode</th>
      <th>Alamat Tinggal/Domisili</th>
      <th>Alamat Kantor</th>
      <th>Email</th>
      {/* <th>Media Social</th> */}
      <th>
        <Group position="center">Aksi</Group>
      </th>
    </tr>
    
  );

  const rows = listData.map((e, i) => (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>{e.User.DataDiri.name}</td>
      <td>{e.User.DataDiri.nik}</td>
      <td>{e.namaLembaga}</td>
      <td>{e.jabatanNasional}</td>
      <td>{e.periode}</td>
      <td>{e.User.DataDiri.alamat}</td>
      <td>{e.alamatKantor}</td>
      <td>{e.User.email}</td>
      {/* <td>{e.Media_social}</td> */}
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
          <Button variant={"outline"} color={"red"} radius={50} w={100} onClick={()=>{onDelete(e.id)}}>
            Hapus
          </Button>
        </Group>
      </td>
    </tr>
  ));

  return (
    <>
      <Modal opened={opened} onClose={close}>
        <EditEksekutifNasionalV2 thisClosed={close} data={dataId}/>
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
