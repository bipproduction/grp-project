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

  const formEditAnggotaPartai = useForm({
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
      },
      validate: {
        email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      },
    },
  });

  const onEdit = () => {
    console.log(formEditAnggotaPartai.values.data)
    if (Object.values(formEditAnggotaPartai.values.data).includes("")) {
      return toast("Lengkapi Data diri");
    }

    if (formEditAnggotaPartai.values.validate.email(formEditAnggotaPartai.values.data.email) != null) {
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
                  formEditAnggotaPartai.reset();
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
                    <NumberInput placeholder="NIK" label="**" {...formEditAnggotaPartai.getInputProps("data.nik")}/>
                    <TextInput placeholder="Nama" label="**" {...formEditAnggotaPartai.getInputProps("data.nama")}/>
                    <TextInput placeholder="Email" label="**" {...formEditAnggotaPartai.getInputProps("data.email")}/>
                    <TextInput placeholder="Tempat Lahir" label="**" {...formEditAnggotaPartai.getInputProps("data.tempatLahir")}/>
                    <DateInput placeholder="Tanggal Lahir" label="**" {...formEditAnggotaPartai.getInputProps("data.tanggalLahir")}/>
                    <Select
                      data={[
                        { value: "laki", label: "Laki-Laki" },
                        { value: "perempuan", label: "Perempuan" },
                      ]}
                      placeholder="Jenis Kelamin"
                      label="**"
                      {...formEditAnggotaPartai.getInputProps("data.jenisKelamin")}
                    />
                    <NumberInput placeholder="Nomor Telepon" label="**" {...formEditAnggotaPartai.getInputProps("data.phoneNumber")}/>
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="Instargram"
                      label="**"
                      {...formEditAnggotaPartai.getInputProps("data.instagram")}
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="Facebook"
                      label="**"
                      {...formEditAnggotaPartai.getInputProps("data.facebook")}
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="TikTok"
                      label="**"
                      {...formEditAnggotaPartai.getInputProps("data.tiktok")}
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="Twitter"
                      label="**"
                      {...formEditAnggotaPartai.getInputProps("data.twitter")}
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
                      {...formEditAnggotaPartai.getInputProps("data.agama")}
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="Pekerjaan"
                      label="**"
                      {...formEditAnggotaPartai.getInputProps("data.pekerjaan")}
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="Alamat"
                      label="**"
                      {...formEditAnggotaPartai.getInputProps("data.alamat")}
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
                      {...formEditAnggotaPartai.getInputProps("data.provinsi")}
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
                      {...formEditAnggotaPartai.getInputProps("data.kabkot")}
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
                      {...formEditAnggotaPartai.getInputProps("data.kecamatan")}
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="Desa / Cabang"
                      label="**"
                      {...formEditAnggotaPartai.getInputProps("data.desa")}
                    />
                    <TextInput
                      radius={"md"}
                      mt={10}
                      placeholder="RT - __, RW - __"
                      label="**"
                      {...formEditAnggotaPartai.getInputProps("data.rtrw")}
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
                      {...formEditAnggotaPartai.getInputProps("data.statusKeanggotaan")}
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
