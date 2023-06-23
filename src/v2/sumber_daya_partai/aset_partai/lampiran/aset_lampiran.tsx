import {
  ActionIcon,
  Alert,
  Box,
  Button,
  Center,
  Divider,
  FileButton,
  FileInput,
  Flex,
  Grid,
  Group,
  Modal,
  Paper,
  ScrollArea,
  Table,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import COLOR from "../../../../../fun/WARNA";
import { buttonSimpan } from "@/v2/component/button-toast";
import { BsUpload } from "react-icons/bs";
import { useState } from "react";
import { useForm } from "@mantine/form";
import toast from "react-simple-toasts";
import { ModelAsetPartai } from "@/model/interface_aset_partai";
import {
  AiFillDelete,
  AiFillPlusCircle,
  AiOutlineFileSearch,
} from "react-icons/ai";
import {
  useDisclosure,
  useForceUpdate,
  useShallowEffect,
} from "@mantine/hooks";
import { useAtom } from "jotai";
import {
  _loadLampiranPartai_ById,
  _getAll_LampiranPartai_ById,
} from "@/load_data/sumber_daya_partai/aset_partai/load_lampiran_aset";
import { TambahLampiranV2 } from "./tambah_lampiran";
import { MdDelete } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { api } from "@/lib/api-backend";
import { FiAlertCircle } from "react-icons/fi";
import { _postLogUser } from "@/load_data/log_user/post_log_user";

export const AsetLampiranV2 = ({ dataAset }: { dataAset: any }) => {
  const [opened, setOpen] = useDisclosure(false);
  const [dataLampiran, setDataLampiran] = useAtom(_getAll_LampiranPartai_ById);

  useShallowEffect(() => {
    _loadLampiranPartai_ById(dataAset.id, setDataLampiran);
  }, []);

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
      {/* <td>{dataAset.name}</td> */}
      <td>{e.name}</td>
      <td>{e.deskripsi}</td>
      <td>
        {
          <Group position="center">
            <Button
              compact
              radius={50}
              component="a"
              target="_blank"
              href={api.apiLampiranGetFile + `?id=${e.id}`}
              leftIcon={<AiOutlineFileSearch />}
            >
              Buka File
            </Button>
          </Group>
        }
      </td>
      <td>
        <Group position="center">
          <DeleteLampiran dataVal={e} />
        </Group>
      </td>
    </tr>
  ));

  return (
    <>
      {/* {JSON.stringify(dataAset.id)} */}
      <Modal opened={opened} onClose={setOpen.close} centered size={"md"}>
        <TambahLampiranV2
          dataAset={dataAset}
          closeModalTambah={setOpen.close}
        />
      </Modal>
      <Paper bg={COLOR.abuabu} p={10}>
        <Grid>
          <Grid.Col span={8}>
            <Text size={20} fw={"bold"}>
              Data Lampiran Aset Partai
            </Text>
          </Grid.Col>
        </Grid>
      </Paper>
      <Box>
        <Grid>
          <Grid.Col span={8} pt={20}>
            <Button
              color="orange.9"
              leftIcon={<AiFillPlusCircle size={20} />}
              radius={"xl"}
              m={5}
              bg={COLOR.orange}
              onClick={() => {
                setOpen.open();
              }}
            >
              Tambah
            </Button>
          </Grid.Col>

          <Grid.Col>
            <ScrollArea>
              <Table horizontalSpacing={"md"} highlightOnHover withBorder>
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

function DeleteLampiran({ dataVal }: { dataVal: any }) {
  const [opened, setOpen] = useDisclosure(false);
  const [dataLampiran, setDataLampiran] = useAtom(_getAll_LampiranPartai_ById);
  const forceUpdate = useForceUpdate();

  const hapusData = async (id: string) => {
    await fetch(api.apiLampiranHapus + `?id=${id}`).then(async (res) => {
      if (res.status === 200) {
        toast("Hapus Data");
        setOpen.close();
        _loadLampiranPartai_ById(dataVal.asetPartaiId, setDataLampiran);
        _postLogUser(
          localStorage.getItem("user_id"),
          "HAPUS",
          "User menghapus data lampiran aset"
        );
      }
    });
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={setOpen.close}
        centered
        size={"xs"}
        withCloseButton={false}
      >
        {/* <pre>
        {JSON.stringify(dataVal, null,2)}
        </pre> */}
        <Alert
          icon={<FiAlertCircle size="1rem" />}
          title={`Hapus Data ${dataVal.name} ?`}
          color="orange"
        >
          <Flex gap={"lg"}>
            <Button
              onClick={() => setOpen.close()}
              radius={"xl"}
              w={100}
              color="green"
              bg={COLOR.hijautua}
            >
              Batal
            </Button>
            <Button
              onClick={() => {
                // onDelete(dataVal.id);
                hapusData(dataVal.id);
              }}
              radius={"xl"}
              w={100}
              color="red"
              bg={COLOR.merah}
            >
              Hapus
            </Button>
          </Flex>
        </Alert>
      </Modal>
      <ActionIcon color="red" onClick={setOpen.open}>
        <RiDeleteBin5Line />
      </ActionIcon>
    </>
  );
}
