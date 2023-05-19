import { buttonSimpan } from "@/v2/component/button-toast";
import {
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Image,
  NumberInput,
  Paper,
  Select,
  SimpleGrid,
  Tabs,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { AiOutlineUpload } from "react-icons/ai";
import COLOR from "../../../../fun/WARNA";
import { AsetLampiranV2 } from "./aset_lampiran";
import { AsetPembelianV2 } from "./aset_pembelian";
import { AsetUmumV2 } from "./aset_umum";
import { useForm } from "@mantine/form";
import {
  sStatusAset,
  sKategoriAset,
} from "@/s_state/sumber_daya_partai/s_aset";
import { DateInput } from "@mantine/dates";
import toast from "react-simple-toasts";

const EditAsetPartaiV2 = ({ thisClosed }: any) => {
  const formEditAset = useForm({
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

  const onEditLampiran = () => {
    console.log(formEditAset.values.data);
    // buttonSimpan();
    if (Object.values(formEditAset.values.data).includes("")) {
      return toast("Lengkapi Semua Data");
    } else {
      toast("Data Berhasil Di Edit");
      thisClosed();
    }
  };

  return (
    <>
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Edit Aset Partai
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>
        <Group position="left" pt={20}>
          <Button
            w={100}
            color="orange.9"
            bg={COLOR.orange}
            radius={"xl"}
            onClick={() => {
              onEditLampiran();
            }}
          >
            Simpan
          </Button>
        </Group>
        <Box>
          <Grid>
            <Grid.Col span={"auto"}>
              <Box pt={20}>
                <Paper bg={"gray.4"} p={20}>
                  <Image
                    maw={300}
                    mx="auto"
                    radius="md"
                    src="/v2/image/mobil.jpg"
                    alt="Random image"
                  />
                  <Group position="center" pt={20}>
                    <Button
                      w={150}
                      color="orange.9"
                      bg={COLOR.orange}
                      radius={"xl"}
                      leftIcon={<AiOutlineUpload />}
                      onClick={() => {}}
                    >
                      Unggah Foto
                    </Button>
                  </Group>
                </Paper>
              </Box>
            </Grid.Col>
            <Grid.Col span={8}>
              <Box pt={20}>
                {/* <Paper bg={COLOR.abuabu}> */}
                <Tabs defaultValue={"1"} variant={"outline"}>
                  <Tabs.List>
                    <Tabs.Tab value="1">Umum</Tabs.Tab>
                    {/* <Tabs.Tab value="2">Pembelian</Tabs.Tab> */}
                    <Tabs.Tab value="3">Lampiran</Tabs.Tab>
                  </Tabs.List>
                  <Tabs.Panel value="1">
                    <Box>
                      <Box>
                        <Flex direction={"column"}>
                          <TextInput
                            placeholder="Nama Aset"
                            label="Nama Aset"
                            withAsterisk
                            {...formEditAset.getInputProps(`data.namaAset`)}
                          />
                          <TextInput
                            placeholder="Nomor Serial"
                            label="Nomor Serial"
                            withAsterisk
                            {...formEditAset.getInputProps(`data.nomorSeri`)}
                          />
                          <TextInput
                            placeholder="Pengguna"
                            label="Pengguna"
                            withAsterisk
                            {...formEditAset.getInputProps(`data.pengguna`)}
                          />
                          <TextInput
                            placeholder="Penangung Jawab"
                            label="Penangung Jawab"
                            withAsterisk
                            {...formEditAset.getInputProps(
                              `data.penanggungJawab`
                            )}
                          />
                          <NumberInput
                            placeholder="Harga"
                            label="Harga"
                            withAsterisk
                            {...formEditAset.getInputProps(`data.harga`)}
                          />
                          <DateInput
                            placeholder="Tanggal Pembelian"
                            label="Tanggal Pembelian"
                            withAsterisk
                            {...formEditAset.getInputProps(
                              `data.tanggalPembelian`
                            )}
                          />
                          <TextInput
                            placeholder="Lokasi Pembelian"
                            label="Lokasi Pembelian"
                            withAsterisk
                            {...formEditAset.getInputProps(
                              `data.lokasiPembelian`
                            )}
                          />
                          <TextInput
                            placeholder="Garansi"
                            label="Garansi"
                            withAsterisk
                            {...formEditAset.getInputProps(`data.garansi`)}
                          />
                        </Flex>
                      </Box>
                      <Box>
                        <Flex direction={"column"}>
                          <Select
                            data={sStatusAset.value.map((e) => ({
                              label: e.name,
                              value: e.id,
                            }))}
                            placeholder={"Status Aset"}
                            label={"Status Aset"}
                            withAsterisk
                            {...formEditAset.getInputProps(`data.statusAset`)}
                          />
                          <Textarea
                            placeholder="Bergerak, contoh: dengan kondisi ban belakang kurang angin, dll"
                            label="Keterangan Status"
                            autosize
                            minRows={2}
                            maxRows={4}
                            withAsterisk
                            {...formEditAset.getInputProps(
                              `data.keteranagnAset`
                            )}
                          />

                          <Select
                            data={sKategoriAset.value.map((e) => ({
                              label: e.name,
                              value: e.id,
                            }))}
                            placeholder={"Kategori Aset"}
                            label={"Kategori Aset"}
                            withAsterisk
                            {...formEditAset.getInputProps(`data.kategoriAset`)}
                          />
                          <Textarea
                            placeholder="contoh: barang berwarna merah, memiliki ban serep 2, dll"
                            label="Deskripsi Aset"
                            autosize
                            minRows={2}
                            maxRows={4}
                            withAsterisk
                            {...formEditAset.getInputProps(
                              `data.deskripsiAset`
                            )}
                          />
                        </Flex>
                      </Box>
                    </Box>
                  </Tabs.Panel>
                  {/* <Tabs.Panel value="2">
                    <AsetPembelianV2 />
                  </Tabs.Panel> */}
                  <Tabs.Panel value="3">
                    <AsetLampiranV2 />
                  </Tabs.Panel>
                </Tabs>
                {/* </Paper> */}
              </Box>
            </Grid.Col>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default EditAsetPartaiV2;
