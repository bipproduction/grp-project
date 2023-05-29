import { _loadKategoriPemilihPotensial } from "@/load_data/load_kategori_pemilih_potensial";
import { _loadListNoTps } from "@/load_data/load_list_no_tps";
import { _loadListPekerjaan } from "@/load_data/load_list_pekerjaan";
import { _loadDesa } from "@/load_data/wilayah/load_desa";
import { _loadKabkot } from "@/load_data/wilayah/load_kabkot";
import { _loadKecamatan } from "@/load_data/wilayah/load_kecamatan";
import { _loadProvinsi } from "@/load_data/wilayah/load_provinsi";
import { sKategoriPemilihPotensial } from "@/s_state/s_kategori_pemilih_potensial";
import { sListNoTPS } from "@/s_state/s_list_no_tps";
import { sListPekerjaan } from "@/s_state/s_list_pekerjaan";
import { sDesa } from "@/s_state/wilayah/s_desa";
import { sKabkot } from "@/s_state/wilayah/s_kabkot";
import { sKecamatan } from "@/s_state/wilayah/s_kecamatan";
import { sProvinsi } from "@/s_state/wilayah/s_provinsi";
import { buttonSimpan } from "@/v2/component/button-toast";
import {
  Box,
  Button,
  Center,
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
import COLOR from "../../../../fun/WARNA";

const EditCPTV2 = ({ thisClosed }: any) => {
  useShallowEffect(() => {
    _loadKategoriPemilihPotensial();
    _loadProvinsi();
    _loadListNoTps();
    _loadListPekerjaan();
  }, []);
  return (
    <>
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Edit Data Calon Pemilih Potensial
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
          <SimpleGrid
            mt={20}
            cols={2}
            breakpoints={[
              { maxWidth: 980, cols: 2, spacing: "xl" },
              { maxWidth: 755, cols: 1, spacing: "xl" },
            ]}
          >
            <Box
              sx={{
                backgroundColor: COLOR.abuabu,
                borderRadius: 10,
                padding: 30,
              }}
              pb={40}
            >
              <Box>
                <Select
                  data={sKategoriPemilihPotensial.value.map((e) => ({
                    value: e.id,
                    label: e.name,
                  }))}
                  radius={"md"}
                  mt={10}
                  placeholder="Pilih Kategori Calon Pemilik Potensial"
                  label="Pilih Kategori Calon Pemilik Potensial"
                  withAsterisk
                />
                <Box sx={{ fontSize: 10 }} pl={10}>
                  <Text>
                    A1 : Pemilih Pasti / Fanatik (Kader, Anggota, Simpatik)
                  </Text>
                  <Text>
                    A2 : Pemilih Potensial (Keluarga, Saudara, Tetangga)
                  </Text>
                  <Text>
                    A3 : Pemilih Pragmatis (Karena uang, Koalisi, Dst)
                  </Text>
                </Box>
                <Select
                  data={sProvinsi.value.map((e) => ({
                    value: e.id,
                    label: e.name,
                    
                  }))}
                  onChange={_loadKabkot}
                  radius={"md"}
                  mt={10}
                  placeholder="Pilih Provinsi"
                  label="Pilih Provinsi"
                  searchable
                  clearable
                  withAsterisk
                />
                <Select
                  data={sKabkot.value.map((e) => ({
                    value: e.id,
                    label: e.name,
                  }))}
                  onChange={_loadKecamatan}
                  radius={"md"}
                  mt={10}
                  placeholder="Pilih Kabupaten / Kota"
                  label="Pilih Kabupaten / Kota"
                  withAsterisk
                  searchable
                  clearable
                />
                <Select
                  data={sKecamatan.value.map((e) => ({
                    value: e.id,
                    label: e.name,
                  }))}
                  onChange={_loadDesa}
                  radius={"md"}
                  mt={10}
                  placeholder="Pilih Kecamatan"
                  label="Pilih Kecamatan"
                  withAsterisk
                  searchable
                  clearable
                />
                <Select
                  data={sDesa.value.map((e) => ({
                    value: e.id,
                    label: e.name,
                  }))}
                  radius={"md"}
                  mt={10}
                  placeholder="Pilih Desa"
                  label="Pilih Desa"
                  withAsterisk
                  searchable
                  clearable
                />
                <Select
                  data={sListNoTPS.value.map((e) => ({
                    value: e.id,
                    label: e.name,
                  }))}
                  radius={"md"}
                  mt={10}
                  placeholder="NO TPS"
                  label="TPS 01 -50"
                  withAsterisk
                  searchable
                  clearable
                  nothingFound="Tidak Ditemukan"
                />
                <TextInput
                  radius={"md"}
                  mt={10}
                  placeholder="NIK"
                  label="NIK"
                  withAsterisk
                />

                <TextInput
                  radius={"md"}
                  mt={10}
                  placeholder="Nama"
                  label="Nama"
                  withAsterisk
                />
                <TextInput
                  radius={"md"}
                  mt={10}
                  placeholder="Email"
                  label="Email"
                  withAsterisk
                />
                <Select
                  data={sListPekerjaan.value.map((e) => ({
                    value: e.id,
                    label: e.name,
                  }))}
                  radius={"md"}
                  mt={10}
                  placeholder="Pekerjaan"
                  label="Pekerjaan"
                  clearable
                  nothingFound="Tidak Ditemukan"
                  searchable
                  withAsterisk
                />
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: COLOR.abuabu,
                borderRadius: 10,
                padding: 30,
              }}
              pb={40}
            >
              <Box>
                <DateInput
                  radius={"md"}
                  mt={10}
                  placeholder="Tanggal Lahir"
                  label="Tanggal Lahir"
                  withAsterisk
                />
                <Select
                  radius={"md"}
                  data={[
                    { value: "laki", label: "Laki-Laki" },
                    { value: "perempuan", label: "Perempuan" },
                  ]}
                  mt={10}
                  placeholder="Jenis Kelamin"
                  label="Jenis Kelamin"
                  withAsterisk
                />
                <TextInput
                  radius={"md"}
                  mt={10}
                  placeholder="Alamat"
                  label="Alamat"
                  withAsterisk
                />
                <TextInput
                  radius={"md"}
                  mt={10}
                  placeholder="Nomor Handphone"
                  label="Nomor Handphone"
                  withAsterisk
                />
                <TextInput
                  radius={"md"}
                  mt={10}
                  placeholder="Facebook"
                  label="Facebook"
                />
                <TextInput
                  radius={"md"}
                  mt={10}
                  placeholder="Instargram"
                  label="Instargram"
                />
                <TextInput
                  radius={"md"}
                  mt={10}
                  placeholder="TikTok"
                  label="TikTok"
                />
                <TextInput
                  radius={"md"}
                  mt={10}
                  placeholder="Twitter"
                  label="Twitter"
                />
                <Center>
                  <Box mt={20}>
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
                  </Box>
                </Center>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default EditCPTV2;
