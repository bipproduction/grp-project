import {
  Box,
  Button,
  Center,
  Divider,
  FileButton,
  FileInput,
  Grid,
  Group,
  ScrollArea,
  Table,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import COLOR from "../../../../fun/WARNA";
import { buttonSimpan } from "@/v2/component/button-toast";
import { BsUpload } from "react-icons/bs";
import { useState } from "react";
import { useForm } from "@mantine/form";
import toast from "react-simple-toasts";

const dataLampiran = [
  {
    id: 1,
    namaLam: "STNK",
    des: "Milik kantor pusat",
    foto: "Cooming soon",
  },
];

export const AsetLampiranV2 = () => {
  const [file, setFile] = useState<File | null>(null);
  const [lampiran, setLampiran] = useState('');

  const formLampiranAset = useForm({
    initialValues: {
      data: {
        namaLampiran: "",
        deskripsi: "",
        fotoLampiran: "",
      },
    },
  });

  // const isiTable = lampiran.map((e, i) => (
  //   <tr key={i}>
  //     <td>{e.namaLampiran}</td>
  //     <td>{e.deskripsi}</td>
  //     <td>{e.fotoLampiran}</td>
  //   </tr>
  // ));

  const tbHead = (
    <tr>
      <th>No</th>
      <th>Nama Lampiran</th>
      <th>Deskripsi</th>
      <th>Foto Lampiran</th>
      <th>
        <Group position="center">Aksi</Group>
      </th>
    </tr>
  );

  const rows = dataLampiran.map((e, i) => (
    <tr key={e.id}>
      <td>{i + 1}</td>
      <td>{e.namaLam}</td>
      <td>{e.des}</td>
      <td>{e.foto}</td>
      <td>
        <Group position="center">
          {/* <Button
            variant={"outline"}
            color={"green"}
            radius={50}
            w={100}
            compact
          >
            Edit
          </Button> */}
          <Button variant={"outline"} color={"red"} radius={50} w={100} compact>
            Hapus
          </Button>
        </Group>
      </td>
    </tr>
  ));
  return (
    <>
      {/* {JSON.stringify(formLampiranAset.values.data)} */}
      <Box>
        <Grid>
          <Grid.Col pt={20} span={6}>
            <TextInput
              label="Nama Lampiran"
              placeholder="Nama Lampiran"
              {...formLampiranAset.getInputProps("data.namaLampiran")}
            />
            <Textarea
              label="Deskripsi"
              placeholder="Deskripsi"
              {...formLampiranAset.getInputProps("data.deskripsi")}
            />
            <FileInput
              placeholder="Pick file"
              label="Your resume"
              withAsterisk
              
            />

            <Button
              my={10}
              bg={COLOR.ungu}
              compact
              radius={"lg"}
              onClick={() => {
                // buttonSimpan();
               console.log(formLampiranAset.values.data);
              }}
            >
              Tambah
            </Button>
            <Divider />
          </Grid.Col>
          <Grid.Col>
            <ScrollArea>
              <Table horizontalSpacing={"lg"} highlightOnHover withBorder>
                <thead>{tbHead}</thead>
                {/* <tbody>{isiTable}</tbody> */}
                <tbody>{rows}</tbody>
              </Table>
            </ScrollArea>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
};
