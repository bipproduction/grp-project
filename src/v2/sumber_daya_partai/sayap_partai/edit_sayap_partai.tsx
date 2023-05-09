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

const EditSayapPartaiV2 = ({ thisClosed }: any) => {
  const [statusKeanggotaan, setStatusKeanggotaan] = useState<any | []>([]);
  const [tingkatPengurus, setTingkatPengurus] = useState<any | []>([]);
  const [namaSayap, setNamaSayap] = useState<any | []>([]);

  useShallowEffect(() => {
    loadStatusKenaggotaan();
    loadTingkatPengurus();
    loadNamaSayap();
  }, []);

  async function loadNamaSayap() {
    const res = await fetch("/api/get/sumber-daya-partai/api-get-sayap-partai")
      .then((res) => res.json())
      .then((val) => setNamaSayap(Object.values(val).map((e: any) => e.name)));
  }

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

  const formEditSayapPartai = useForm({
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
        sayap: '',
        tingkatPengurus: '',
        jabatan: '',
      },
      validate: {
        email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      },
    },
  });

  const onEdit = () => {
    console.log(formEditSayapPartai.values.data)
    if (Object.values(formEditSayapPartai.values.data).includes("")) {
      return toast("Lengkapi Data Diri");
    }

    if (formEditSayapPartai.values.validate.email(formEditSayapPartai.values.data.email) != null) {
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
                Edit Data Sayap Partai
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>
        <Box>
          {/* {JSON.stringify(namaSayap)} */}
          <Flex gap="md" pt={20}>
            <Box w={100}>
              <Button
                fullWidth
                color="orange.9"
                bg={COLOR.orange}
                radius={"xl"}
                onClick={onEdit}
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
                  formEditSayapPartai.reset();
                  buttonReset();
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
                    <NumberInput placeholder="NIK" label="**" {...formEditSayapPartai.getInputProps("data.nik")} />
                    <TextInput placeholder="Nama" label="**" {...formEditSayapPartai.getInputProps("data.nama")} />
                    <TextInput placeholder="Email" label="**" {...formEditSayapPartai.getInputProps("data.email")} />
                    <TextInput placeholder="Tempat Lahir" label="**" {...formEditSayapPartai.getInputProps("data.tempatLahir")} />
                    <DateInput placeholder="Tanggal Lahir" label="**" {...formEditSayapPartai.getInputProps("data.tanggalLahir")} />
                    <Select
                      data={[
                        { value: "laki", label: "Laki-Laki" },
                        { value: "perempuan", label: "Perempuan" },
                      ]}
                      placeholder="Jenis Kelamin"
                      label="**"
                      {...formEditSayapPartai.getInputProps("data.jenisKelamin")}
                    />
                    <NumberInput placeholder="Nomor Telepon" label="**" {...formEditSayapPartai.getInputProps("data.phoneNumber")} />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="Instagram"
                      label="**"
                      {...formEditSayapPartai.getInputProps("data.instagram")}
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="Facebook"
                      label="**"
                      {...formEditSayapPartai.getInputProps("data.facebook")}
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="TikTok"
                      label="**"
                      {...formEditSayapPartai.getInputProps("data.tiktok")}
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="Twitter"
                      label="**"
                      {...formEditSayapPartai.getInputProps("data.twitter")}
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
                      {...formEditSayapPartai.getInputProps("data.agama")}
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="Pekerjaan"
                      label="**"
                      {...formEditSayapPartai.getInputProps("data.pekerjaan")}
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="Alamat"
                      label="**"
                      {...formEditSayapPartai.getInputProps("data.alamat")}
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
                      {...formEditSayapPartai.getInputProps("data.provinsi")}
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
                      {...formEditSayapPartai.getInputProps("data.kabkot")}
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
                      {...formEditSayapPartai.getInputProps("data.kecamatan")}
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="Desa / Cabang"
                      label="**"
                      {...formEditSayapPartai.getInputProps("data.desa")}
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="RT - __, RW - __"
                      label="**"
                      {...formEditSayapPartai.getInputProps("data.rtrw")}
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
                      {...formEditSayapPartai.getInputProps("data.statusKeanggotaan")}
                    />

                    <Select
                      label="**"
                      placeholder="Pilih Nama Sayap"
                      nothingFound="No options"
                      data={namaSayap}
                      {...formEditSayapPartai.getInputProps("data.sayap")}
                    />

                    <Select
                      label="**"
                      placeholder="Pilih Tingkat Pengurus"
                      nothingFound="No options"
                      data={tingkatPengurus}
                      {...formEditSayapPartai.getInputProps("data.tingkatPengurus")}
                    />

                    <Select
                      label="**"
                      placeholder="Pilih Jabatan"
                      nothingFound="No options"
                      data={[
                        { value: "Ketua", label: "Ketua" },
                        { value: "Wakil Ketua", label: "Wakil Ketua" },
                      ]}
                      {...formEditSayapPartai.getInputProps("data.jabatan")}
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

export default EditSayapPartaiV2;
