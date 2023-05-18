import { buttonSimpan } from "@/v2/component/button-toast";
import {
  Box,
  Button,
  Flex,
  Grid,
  Group,
  NumberInput,
  Paper,
  Select,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import toast from "react-simple-toasts";
import COLOR from "../../../../fun/WARNA";

const TambahAsetPartaiV2 = ({ thisClosed }: any) => {
  const [ket, setKet] = useState<any | []>([]);

  useShallowEffect(() => {
    loadKategori();
  }, []);

  async function loadKategori() {
    const res = await fetch("/api/get/sumber-daya-partai/api-get-kategori-aset")
      .then((res) => res.json())
      .then((val) => setKet(Object.values(val).map((e: any) => e.name)));
  }

  const formDataAset = useForm({
    initialValues: {
      data: {
        namaAset: "",
        nomorSeri: "",
        pengguna: "",
        penanggungJawab: "",
        harga: "",
        tanggalPembelian: "",
        lokasiPembelian: "",
        garansi: "",
        statusAset: "",
        keteranagnAset: "",
        kategoriAset: "",
        deskripsiAset: "",
      },
    },
  });

  const onEdit = () => {
    console.log(formDataAset.values.data);
    if(Object.values(formDataAset.values.data).includes("")){
      return toast("Lengkapi Data Diri")
    }
    buttonSimpan();
    thisClosed();
  };

  return (
    <>
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Tambah Aset Partai
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>
        <Box pt={20}>
          <Box>
            <Flex direction={"column"}>
              <Text fz={10}>
                <Text span c={"red"}>
                  **
                </Text>{" "}
                Wajib diisi
              </Text>
            </Flex>
          </Box>
          <SimpleGrid cols={2}>
            <Box>
              <Flex direction={"column"}>
                <TextInput
                  placeholder="Nama Aset"
                  label="Nama Aset"
                  withAsterisk
                  {...formDataAset.getInputProps(`data.namaAset`)}
                />
                <TextInput
                  placeholder="Nomor Serial"
                  label="Nomor Serial"
                  withAsterisk
                  {...formDataAset.getInputProps(`data.nomorSeri`)}
                />
                <TextInput
                  placeholder="Pengguna"
                  label="Pengguna"
                  withAsterisk
                  {...formDataAset.getInputProps(`data.pengguna`)}
                />
                <TextInput
                  placeholder="Penangung Jawab"
                  label="Penangung Jawab"
                  withAsterisk
                  {...formDataAset.getInputProps(`data.penanggungJawab`)}
                />
                <NumberInput
                  placeholder="Harga"
                  label="Harga"
                  withAsterisk
                  {...formDataAset.getInputProps(`data.harga`)}
                />
                <DateInput
                  placeholder="Tanggal Pembelian"
                  label="Tanggal Pembelian"
                  withAsterisk
                  {...formDataAset.getInputProps(`data.tanggalPembelian`)}
                />
                <TextInput
                  placeholder="Lokasi Pembelian"
                  label="Lokasi Pembelian"
                  withAsterisk
                  {...formDataAset.getInputProps(`data.lokasiPembelian`)}
                />
                <TextInput
                  placeholder="Garansi"
                  label="Garansi"
                  withAsterisk
                  {...formDataAset.getInputProps(`data.garansi`)}
                />

                <Group position="left" pt={20}>
                  <Button
                    w={100}
                    color="orange.9"
                    bg={COLOR.orange}
                    radius={"xl"}
                    onClick={onEdit}
                  >
                    Simpan
                  </Button>
                </Group>
              </Flex>
            </Box>
            <Box>
              <Flex direction={"column"}>
                <Select
                  data={["Bergerak", "Tidak Bergerak"]}
                  placeholder={"Status Aset"}
                  label={"Status Aset"}
                  withAsterisk
                  {...formDataAset.getInputProps(`data.statusAset`)}
                />
                <Textarea
                  placeholder="Bergerak, contoh: dengan kondisi ban belakang kurang angin, dll"
                  label="Keterangan Status"
                  pt={25}
                  autosize
                  minRows={2}
                  maxRows={4}
                  withAsterisk
                  {...formDataAset.getInputProps(`data.keteranagnAset`)}
                />

                <Select
                  data={ket}
                  placeholder={"Kategori Aset"}
                  label={"Kategori Aset"}
                  withAsterisk
                  {...formDataAset.getInputProps(`data.kategoriAset`)}
                />
                <Textarea
                  placeholder="contoh: barang berwarna merah, memiliki ban serep 2, dll"
                  label="Deskripsi Aset"
                  autosize
                  minRows={2}
                  maxRows={4}
                  withAsterisk
                  {...formDataAset.getInputProps(`data.deskripsiAset`)}
                />
              </Flex>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default TambahAsetPartaiV2;
