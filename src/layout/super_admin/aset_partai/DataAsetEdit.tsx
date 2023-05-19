import {
  ActionIcon,
  Box,
  Group,
  Modal,
  Pagination,
  Table,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";
import EditDataAset from "./EditDataAset";
const elements = [
  {
    NoAset: "8201",
    id: "1",
    namaAset: "Glenmore",
    status: "Tulungrejo",
    pengguna: "Ibrahim",
  },
  {
    NoAset: "7201",
    id: "1",
    namaAset: "Glenmore",
    status: "Tulungrejo",
    pengguna: "Ibrahim",
  },
  {
    NoAset: "2201",
    id: "1",
    namaAset: "Glenmore",
    status: "Tulungrejo",
    pengguna: "Ibrahim",
  },
  {
    NoAset: "9201",
    id: "1",
    namaAset: "Glenmore",
    status: "Tulungrejo",
    pengguna: "Ibrahim",
  },
  {
    NoAset: "1201",
    id: "1",
    namaAset: "Glenmore",
    status: "Tulungrejo",
    pengguna: "Ibrahim",
  },
  {
    NoAset: "6201",
    id: "1",
    namaAset: "Glenmore",
    status: "Tulungrejo",
    pengguna: "Ibrahim",
  },
];

const DataAsetEdit = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const [activePage, setActivePage] = useState(1);

  const rows = elements.map((element) => (
    <tr key={element.id}>
      <td>{element.NoAset}</td>
      <td>{element.id}</td>
      <td>{element.namaAset}</td>
      <td>{element.status}</td>
      <td>{element.pengguna}</td>
      <td>
        <Group>
          <Modal opened={opened} onClose={close} fullScreen>
            <EditDataAset />
          </Modal>
          <ActionIcon color="green" size="xl">
            <AiOutlineCheckCircle size={20} />
          </ActionIcon>
          <ActionIcon color="orange.9" size="xl">
            <AiOutlineCloseCircle size={20} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));
  return (
    <>
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
                <th>No Aset</th>
                <th>Id</th>
                <th>Nama Aset</th>
                <th>Status</th>
                <th>Pengguna</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
          <Group position="right" pt={20} pb={20}>
            <Pagination
              value={activePage}
              onChange={setActivePage}
              color="orange.9"
              total={10}
              size="lg"
              radius="md"
            />
          </Group>
        </Box>
      </Box>
    </>
  );
};

export default DataAsetEdit;
