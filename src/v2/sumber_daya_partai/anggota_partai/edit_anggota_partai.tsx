import { buttonReset, buttonSimpan } from "@/v2/component/button-toast";
import {
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Mark,
  NumberInput,
  Paper,
  Select,
  SimpleGrid,
  Text,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import toast from "react-simple-toasts";
import COLOR from "../../../../fun/WARNA";

const EditAnggotaPartaiV2 = ({ thisClosed }: any) => {
  const [statusKeanggotaan, setStatusKeanggotaan] = useState<any | []>([
    "Struktur Partai",
  ]);

  useShallowEffect(() => {
    loadStatusKenaggotaan();
  }, []);

  async function loadStatusKenaggotaan() {
    const res = await fetch(
      "/api/get/sumber-daya-partai/api-get-status-keanggotaan"
    )
      .then((res) => res.json())
      .then((val) =>
        setStatusKeanggotaan(Object.values(val).map((e: any) => e.name))
      );
  }

  return (
    <>
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Edit Data Anggota Partai
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>
        <Box>
          {/* {JSON.stringify(statusKeanggotaan)} */}
          <Flex gap="md" pt={20}>
            <Box w={100}>
              <Button
                fullWidth
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
            </Box>
            <Box w={100}>
              <Button
                fullWidth
                color="orange.9"
                bg={COLOR.orange}
                radius={"xl"}
                onClick={() => {
                  buttonReset()
                }}
              >
                Reset
              </Button>
            </Box>
          </Flex>
        </Box>

        <Box pt={20}>
          <SimpleGrid cols={2}>
            <Box>
              <Paper bg={COLOR.abuabu} p={20}>
                <Flex direction={"column"}>
                  <Text fz={20} fw={"bold"}>
                    Form Data Diri
                  </Text>
                  <Text fz={10}>
                    <Text span c={"red"}>
                      **
                    </Text>{" "}
                    Wajib diisi
                  </Text>
                </Flex>
                <Box>
                  <Flex direction={"column"}>
                    <TextInput placeholder="NIK" label="**" />
                    <TextInput placeholder="Nama" label="**" />
                    <TextInput placeholder="Email" label="**" />
                    <TextInput placeholder="Tempat Lahir" label="**" />
                    <DateInput placeholder="Tanggal Lahir" label="**" />
                    <Select
                      data={[
                        { value: "laki", label: "Laki-Laki" },
                        { value: "perempuan", label: "Perempuan" },
                      ]}
                      placeholder="Jenis Kelamin"
                      label="**"
                    />
                    <NumberInput placeholder="Nomor Telepon" label="**" />

                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="Instargram"
                      label="**"
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="Facebook"
                      label="**"
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="TikTok"
                      label="**"
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="Twitter"
                      label="**"
                    />
                    <Select
                      data={[
                        { value: "islam", label: "Islam" },
                        { value: "Protestan", label: "Protestan" },
                        { value: "Katolik", label: "Katolik" },
                        { value: "Hindu", label: "Hindu" },
                        { value: "Buddha", label: "Buddha" },
                        { value: "Khonghucu", label: "Khonghucu" },
                      ]}
                      radius={"md"}
                      mt={10}
                      placeholder="Agama"
                      label="**"
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="Pekerjaan"
                      label="**"
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="Alamat"
                      label="**"
                    />
                    <Select
                      data={[
                        { value: "Bali", label: "Bali" },
                        { value: "Jawa timur", label: "Jawa Timur" },
                      ]}
                      radius={"md"}
                      mt={10}
                      placeholder="Provinsi"
                      label="**"
                    />
                    <Select
                      data={[
                        { value: "Banyuwangi", label: "Banyuwangi" },
                        { value: "Malang", label: "Malang" },
                      ]}
                      radius={"md"}
                      mt={10}
                      placeholder="Kabupaten / Kota"
                      label="**"
                    />
                    <Select
                      data={[
                        { value: "Geteng", label: "Genteng" },
                        { value: "Glenmore", label: "Glenmore" },
                      ]}
                      radius={"md"}
                      mt={10}
                      placeholder="Kecamatan"
                      label="**"
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="Desa / Cabang"
                      label="**"
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="RT - __, RW - __"
                      label="**"
                    />
                  </Flex>
                </Box>
              </Paper>
            </Box>
            <Box>
              <Paper bg={COLOR.abuabu} p={20}>
                <Flex direction={"column"}>
                  <Text fz={20} fw={"bold"}>
                    Status ke Anggotaan
                  </Text>
                  <Text fz={10}>
                    <Text span c={"red"}>
                      **
                    </Text>{" "}
                    Wajib diisi
                  </Text>
                </Flex>
                <Box>
                  <Flex direction={"column"}>
                    <Select
                      label="**"
                      placeholder="Pilih Status Keanggotaan"
                      nothingFound="No options"
                      data={statusKeanggotaan}
                    />
                  </Flex>
                </Box>
              </Paper>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default EditAnggotaPartaiV2;
