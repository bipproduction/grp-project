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
import { useForm } from "@mantine/form";

const EditStrukturPartaiV2 = ({ thisClosed }: any) => {
  const [statusKeanggotaan, setStatusKeanggotaan] = useState<any | []>([]);
  const [tingkatPengurus, setTingkatPengurus] = useState<any | []>([]);

  useShallowEffect(() => {
    loadStatusKenaggotaan();
    loadTingkatPengurus();
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

  async function loadTingkatPengurus() {
    const res = await fetch(
      "/api/get/sumber-daya-partai/api-get-tingkat-pengurus"
    )
      .then((res) => res.json())
      .then((val) =>
        setTingkatPengurus(Object.values(val).map((e: any) => e.name))
      );
  }

  const formEditStrukturPartai = useForm({
    initialValues: {
      data: {
        nik: '',
        nama: '',
        email: '',
        tempatLahir: '',
        tanggalLahir: '',
        jenisKelamin: '',
        phoneNumber: '',
        instagram: '',
        facebook: '',
        tiktok: '',
        twitter: '',
        agama: '',
        pekerjaan: '',
        alamat: '',
        provinsi: '',
        kabkot: '',
        kecamatan: '',
        desa: '',
        rtrw: '',
        statusKeanggotaan: '',
        tingkatPengurus: '',
        jabatan: '',
      },
      validate: {
        email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      },
    },
  });

  const onEdit = () => {
    console.log(formEditStrukturPartai.values.data)
    if (Object.values(formEditStrukturPartai.values.data).includes("")) {
      return toast("Lengkapi Data diri");
    }

    if (formEditStrukturPartai.values.validate.email(formEditStrukturPartai.values.data.email) != null) {
      return toast("Invalid email");
    }

    //disini pengaplikasian api

    buttonSimpan();
    thisClosed();

  }

  return (
    <>
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Edit Data Struktur Partai
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
                onClick={thisClosed}
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
                    <NumberInput placeholder="NIK" label="**" {...formEditStrukturPartai.getInputProps("data.nik")} />
                    <TextInput placeholder="Nama" label="**" {...formEditStrukturPartai.getInputProps("data.nama")} />
                    <TextInput placeholder="Email" label="**" {...formEditStrukturPartai.getInputProps("data.email")} />
                    <TextInput placeholder="Tempat Lahir" label="**" {...formEditStrukturPartai.getInputProps("data.tempatLahir")} />
                    <DateInput placeholder="Tanggal Lahir" label="**" {...formEditStrukturPartai.getInputProps("data.tanggalLahir")} />
                    <Select
                      data={[
                        { value: "laki", label: "Laki-Laki" },
                        { value: "perempuan", label: "Perempuan" },
                      ]}
                      placeholder="Jenis Kelamin"
                      label="**"
                      {...formEditStrukturPartai.getInputProps("data.jenisKelamin")}
                    />
                    <NumberInput placeholder="Nomor Telepon" label="**" {...formEditStrukturPartai.getInputProps("data.phoneNumber")} />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="Instagram"
                      label="**"
                      {...formEditStrukturPartai.getInputProps("data.instagram")}
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="Facebook"
                      label="**"
                      {...formEditStrukturPartai.getInputProps("data.facebook")}
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="TikTok"
                      label="**"
                      {...formEditStrukturPartai.getInputProps("data.tiktok")}
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="Twitter"
                      label="**"
                      {...formEditStrukturPartai.getInputProps("data.twitter")}
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
                      {...formEditStrukturPartai.getInputProps("data.agama")}
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="Pekerjaan"
                      label="**"
                      {...formEditStrukturPartai.getInputProps("data.pekerjaan")}
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="Alamat"
                      label="**"
                      {...formEditStrukturPartai.getInputProps("data.alamat")}
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
                      {...formEditStrukturPartai.getInputProps("data.provinsi")}
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
                      {...formEditStrukturPartai.getInputProps("data.kabkot")}
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
                      {...formEditStrukturPartai.getInputProps("data.kecamatan")}
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="Desa / Cabang"
                      label="**"
                      {...formEditStrukturPartai.getInputProps("data.desa")}
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="RT - __, RW - __"
                      label="**"
                      {...formEditStrukturPartai.getInputProps("data.rtrw")}
                    />
                  </Flex>
                </Box>
              </Paper>
            </Box>
            <Box>
              <Paper bg={COLOR.abuabu} p={20}>
                <Flex direction={"column"}>
                  <Text fz={20} fw={"bold"}>
                    Status Keanggotaan
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
                      {...formEditStrukturPartai.getInputProps("data.statusKeanggotaan")}
                    />

                    <Select
                      label="**"
                      placeholder="Pilih Tingkat Pengurus"
                      nothingFound="No options"
                      data={tingkatPengurus}
                      {...formEditStrukturPartai.getInputProps("data.tingkatPengurus")}
                    />

                    <Select
                      label="**"
                      placeholder="Pilih Jabatan"
                      nothingFound="No options"
                      data={[
                        { value: "Ketua", label: "Ketua" },
                        { value: "Wakil Ketua", label: "Wakil Ketua" },
                      ]}
                      {...formEditStrukturPartai.getInputProps("data.jabatan")}
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

export default EditStrukturPartaiV2;
