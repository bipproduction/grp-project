import {
  ActionIcon,
  Box,
  Button,
  Grid,
  Group,
  Pagination,
  Paper,
  Table,
  Text,
} from "@mantine/core";
import {
  AiFillFilter,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineSave,
} from "react-icons/ai";
import COLOR from "../../../../fun/WARNA";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

const elements = [
  {
    namaPro: "Jawa Timur",
    namaKab: "Banyuwangi",
    namaKac: "Glenmore",
    namaDesa: "Tulungrejo",
    noTPS: "12",
    nama: "Ibrahim",
    jenisKelamin: "Laki Laki",
    email: "user@gmail",
    phoneNumber: 1298289110,
  },
  {
    namaPro: "Jawa Timur",
    namaKab: "Banyuwangi",
    namaKac: "Glenmore",
    namaDesa: "Tulungrejo",
    noTPS: "12",
    nama: "Gufron",
    jenisKelamin: "Laki Laki",
    email: "user@gmail",
    phoneNumber: 1298289110,
  },
  {
    namaPro: "Jawa Timur",
    namaKab: "Banyuwangi",
    namaKac: "Glenmore",
    namaDesa: "Tulungrejo",
    noTPS: "12",
    nama: "Ali",
    jenisKelamin: "Laki Laki",
    email: "user@gmail",
    phoneNumber: 1298289110,
  },
  {
    namaPro: "Jawa Timur",
    namaKab: "Banyuwangi",
    namaKac: "Glenmore",
    namaDesa: "Tulungrejo",
    noTPS: "12",
    nama: "Gilang",
    jenisKelamin: "Laki Laki",
    email: "user@gmail",
    phoneNumber: 1298289110,
  },
  {
    namaPro: "Jawa Timur",
    namaKab: "Banyuwangi",
    namaKac: "Glenmore",
    namaDesa: "Tulungrejo",
    noTPS: "12",
    nama: "Dona",
    jenisKelamin: "Perempuan",
    email: "user@gmail",
    phoneNumber: 1298289110,
  },
];

const SaksiPileg = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const [activePage, setActivePage] = useState(1);

  const rows = elements.map((element) => (
    <tr key={element.namaPro}>
      <td>{element.namaPro}</td>
      <td>{element.namaKab}</td>
      <td>{element.namaKac}</td>
      <td>{element.namaDesa}</td>
      <td>{element.noTPS}</td>
      <td>{element.nama}</td>
      <td>{element.jenisKelamin}</td>
      <td>{element.email}</td>
      <td>{element.phoneNumber}</td>
      <td>
        <Group>
          {/* <Modal
                    opened={opened}
                    onClose={close}
                    fullScreen
                    >
                        <TambahDataCalonPotensial/>
                    </Modal> */}
          <ActionIcon color="green" size="xl" onClick={open}>
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
      <Paper
        p={2}
        pt={3.5}
        pb={3.5}
        sx={{
          borderRadius: 10,
          background: COLOR.abuabu,
        }}
      >
        <Grid>
          <Grid.Col span={8}>
            <Text mt={10} ml={10}>
              Sistem Pelaporan Pemilu - Data Saksi Pileg
            </Text>
          </Grid.Col>
          <Grid.Col span={4}>
            <Group position="right">
              <Button
                leftIcon={<AiOutlineSave size={20} />}
                color="orange.9"
                radius={"xl"}
                bg={COLOR.coklat}
              >
                Save Filter
              </Button>
              <Button
                leftIcon={<AiFillFilter size={20} />}
                color="orange.9"
                radius={"xl"}
                m={5}
                bg={COLOR.coklat}
              >
                Save Filter
              </Button>
            </Group>
          </Grid.Col>
        </Grid>
      </Paper>
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
                <th>Nama Provinsi</th>
                <th>Nama Kabupaten</th>
                <th>Nama Kecamatan</th>
                <th>Nama Desa</th>
                <th>No TPS</th>
                <th>Namaa</th>
                <th>Jenis Kelamin</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Keterangan</th>
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

export default SaksiPileg;
