import {
  ActionIcon,
  Box,
  Button,
  Center,
  Group,
  Modal,
  Pagination,
  Table,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import COLOR from "../../../../fun/WARNA";
const elements = [
  {
    namaLam: "Mobil",
    Deskripsi: "Mobil roda 4",
    foto: "Mobi.jpg",
  },
  {
    namaLam: "Mobil",
    Deskripsi: "Mobil roda 4",
    foto: "Mobi.jpg",
  },
  {
    namaLam: "Mobil",
    Deskripsi: "Mobil roda 4",
    foto: "Mobi.jpg",
  },
  {
    namaLam: "Mobil",
    Deskripsi: "Mobil roda 4",
    foto: "Mobi.jpg",
  },
  {
    namaLam: "Mobil",
    Deskripsi: "Mobil roda 4",
    foto: "Mobi.jpg",
  },
];

const EditLampiran = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const [activePage, setActivePage] = useState(1);

  const rows = elements.map((element) => (
    <tr key={element.namaLam}>
      <td>{element.namaLam}</td>
      <td>{element.Deskripsi}</td>
      <td>{element.foto}</td>
      <td>
        <Group>
          {/* <Modal
                    opened={opened}
                    onClose={close}
                    fullScreen
                    >
                        
                    </Modal> */}
          <ActionIcon color="orange.9" size="xl" onClick={open}>
            <AiOutlineEdit size={20} />
          </ActionIcon>
          <ActionIcon color="orange.9" size="xl">
            <AiOutlineDelete size={20} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));
  return (
    <>
      <Box w={150}>
        <Button radius={"xl"} color="orange.9" bg={COLOR.orange}>
          Tambah Lampiran
        </Button>
      </Box>
      <Box pt={20}>
        <Box
          sx={{
            // backgroundColor: COLOR.abuabu,
            borderRadius: 10,
            padding: 10,
          }}
          pb={20}
        >
          <Table striped highlightOnHover withBorder>
            <thead>
              <tr>
                <th>Nama Lampiran</th>
                <th>Deskripsi</th>
                <th>Foto Lampiran</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
          <Center>
            <Box w={150}>
              <Button
                fullWidth
                radius="xl"
                mt={20}
                bg={COLOR.orange}
                color="orange.9"
              >
                Simpan
              </Button>
            </Box>
          </Center>
        </Box>
      </Box>
    </>
  );
};

export default EditLampiran;
