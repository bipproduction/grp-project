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
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
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
                <TextInput placeholder="Nama Aset" label="**" />
                <TextInput placeholder="Nomor Serial" label="**" />
                <TextInput placeholder="Pengguna" label="**" />
                <TextInput placeholder="Penangung Jawab" label="**" />
                <NumberInput placeholder="Harga" label="**" />
                <DateInput placeholder="Tanggal Pembelian" label="**" />
                <TextInput placeholder="Lokasi Pembelian" label="**" />
                <TextInput placeholder="Garansi" label="**" />

                <Group position="left"  pt={20}>
                  <Button
                    w={100}
                    color="orange.9"
                    bg={COLOR.orange}
                    radius={"xl"}
                    onClick={() => {
                      buttonSimpan();
                      thisClosed();
                    }}
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
                  label={"**"}
                />
                <Textarea
                  placeholder="Keterangan Status"
                  pt={25}
                  autosize
                  minRows={2}
                  maxRows={4}
                />

                <Select
                  data={ket}
                  placeholder={"Kategori Aset"}
                  label={"**"}
                  
                />
                <Textarea
                  placeholder="Deskripsi Aset"
                  label="**"
                  autosize
                  minRows={2}
                  maxRows={4}
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
