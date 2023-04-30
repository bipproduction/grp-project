import {
  ActionIcon,
  Box,
  Button,
  Grid,
  Group,
  Modal,
  Pagination,
  Table,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineSearch,
} from "react-icons/ai";
import COLOR from "../../../../fun/WARNA";
import TambahPetaLegislatif from "./TambahPetaLegislatif";

const elements = [
  {
    jabatan: "DPRD Provinsi",
    nik: "35102791901",
    nama: "Ibrahim",
    phoneNumber: 1298289110,
    dapil: 1298289110,
    komisi: 10,
    email: "user@gmail.com",
    medsos: "@user12",
  },
  {
    jabatan: "DPRD Provinsi",
    nik: "35102791901",
    nama: "Ibrahim",
    phoneNumber: 1298289110,
    dapil: 1298289110,
    komisi: 10,
    email: "user@gmail.com",
    medsos: "@user12",
  },
  {
    jabatan: "DPRD Provinsi",
    nik: "35102791901",
    nama: "Ibrahim",
    phoneNumber: 1298289110,
    dapil: 1298289110,
    komisi: 10,
    email: "user@gmail.com",
    medsos: "@user12",
  },
  {
    jabatan: "DPRD Provinsi",
    nik: "35102791901",
    nama: "Ibrahim",
    phoneNumber: 1298289110,
    dapil: 1298289110,
    komisi: 10,
    email: "user@gmail.com",
    medsos: "@user12",
  },
];

const DPRDProvinsiLegislatif = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const [activePage, setActivePage] = useState(1);

  const rows = elements.map((element) => (
    <tr key={element.jabatan}>
      <td>{element.jabatan}</td>
      <td>{element.nik}</td>
      <td>{element.nama}</td>
      <td>{element.phoneNumber}</td>
      <td>{element.dapil}</td>
      <td>{element.komisi}</td>
      <td>{element.email}</td>
      <td>{element.medsos}</td>
      <td>
        <Group>
          <Modal opened={opened} onClose={close} fullScreen>
            <TambahPetaLegislatif />
          </Modal>
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
      <Box>
        <Grid>
          <Grid.Col md={4} lg={4}>
            <TextInput
              mt={5}
              icon={<AiOutlineSearch size={20} />}
              placeholder="Search"
              radius={"md"}
            />
          </Grid.Col>
          <Grid.Col md={8} lg={8}>
            <Group position="right">
              <Modal opened={opened} onClose={close} fullScreen>
                <TambahPetaLegislatif />
              </Modal>
              <Box w={150}>
                <Button
                  color="orange.9"
                  fullWidth
                  radius={"xl"}
                  onClick={open}
                  m={5}
                  bg={COLOR.orange}
                >
                  Tambah
                </Button>
              </Box>
            </Group>
          </Grid.Col>
        </Grid>
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
                  <th>Jabatan Legislatif</th>
                  <th>NIK</th>
                  <th>Nama</th>
                  <th>Phone Number</th>
                  <th>Dapil</th>
                  <th>Komisi</th>
                  <th>Email</th>
                  <th>Medsos</th>
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
      </Box>
    </>
  );
};

export default DPRDProvinsiLegislatif;
