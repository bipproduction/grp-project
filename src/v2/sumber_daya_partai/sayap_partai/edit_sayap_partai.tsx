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
import { _loadStatusKeanggotaan } from "@/load_data/sumber_daya_partai/load_status_keanggotaan";
import { _loadAgama } from "@/load_data/load_agama";
import { _loadListPekerjaan } from "@/load_data/load_list_pekerjaan";
import { _loadProvinsi } from "@/load_data/wilayah/load_provinsi";
import { sAgama } from "@/s_state/sumber_daya_partai/s_agama";
import { sListPekerjaan } from "@/s_state/s_list_pekerjaan";
import { sProvinsi } from "@/s_state/wilayah/s_provinsi";
import { _loadKabkot } from "@/load_data/wilayah/load_kabkot";
import { sKabkot } from "@/s_state/wilayah/s_kabkot";
import { _loadKecamatan } from "@/load_data/wilayah/load_kecamatan";
import { sKecamatan } from "@/s_state/wilayah/s_kecamatan";
import { _loadDesa } from "@/load_data/wilayah/load_desa";
import { sDesa } from "@/s_state/wilayah/s_desa";
import { sStatusKeanggotaan } from "@/s_state/sumber_daya_partai/s_status_keanggotaan";

const EditSayapPartaiV2 = ({ thisClosed }: any) => {
  const [statusKeanggotaan, setStatusKeanggotaan] = useState<any | []>([]);
  const [tingkatPengurus, setTingkatPengurus] = useState<any | []>([]);
  const [namaSayap, setNamaSayap] = useState<any | []>([]);

  useShallowEffect(() => {
    _loadStatusKeanggotaan()
    _loadStatusKeanggotaan();
    _loadAgama();
    _loadListPekerjaan();
    _loadProvinsi();
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
        nik: "",
        nama: "",
        email: "",
        tempatLahir: "",
        tanggalLahir: "",
        jenisKelamin: "",
        phoneNumber: "",
        instagram: "",
        facebook: "",
        tiktok: "",
        twitter: "",
        agama: "",
        pekerjaan: "",
        alamat: "",
        provinsi: "",
        kabkot: "",
        kecamatan: "",
        desa: "",
        rtrw: "",
        statusKeanggotaan: "",
        sayap: "",
        tingkatPengurus: "",
        jabatan: "",
      },
      validate: {
        email: (value: string) =>
          /^\S+@\S+$/.test(value) ? null : "Invalid email",
      },
    },
  });

  const onEdit = () => {
    console.log(formEditSayapPartai.values.data);
    if (Object.values(formEditSayapPartai.values.data).includes("")) {
      return toast("Lengkapi Data Diri");
    }

    if (
      formEditSayapPartai.values.validate.email(
        formEditSayapPartai.values.data.email
      ) != null
    ) {
      return toast("Invalid email");
    }

    //disini pengaplikasian api

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
            {/* <Box w={100}>
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
            </Box> */}
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
                    <NumberInput
                      placeholder="NIK"
                      label="NIK"
                      {...formEditSayapPartai.getInputProps("data.nik")}
                      withAsterisk
                    />
                    <TextInput
                      placeholder="Nama"
                      label="Nama"
                      {...formEditSayapPartai.getInputProps("data.nama")}
                      withAsterisk
                    />
                    <TextInput
                      placeholder="Email"
                      label="Email"
                      {...formEditSayapPartai.getInputProps("data.email")}
                      withAsterisk
                    />
                    <TextInput
                      placeholder="Tempat Lahir"
                      label="Tempat Lahir"
                      {...formEditSayapPartai.getInputProps("data.tempatLahir")}
                      withAsterisk
                    />
                    <DateInput
                      placeholder="Tanggal Lahir"
                      label="Tanggal Lahir"
                      {...formEditSayapPartai.getInputProps(
                        "data.tanggalLahir"
                      )}
                      withAsterisk
                    />
                    <Select
                      data={[
                        { value: "Laki-Laki", label: "Laki-Laki" },
                        { value: "Perempuan", label: "Perempuan" },
                      ]}
                      placeholder="Jenis Kelamin"
                      label="Jenis Kelamin"
                      {...formEditSayapPartai.getInputProps(
                        "data.jenisKelamin"
                      )}
                      withAsterisk
                    />
                    <NumberInput
                      placeholder="Nomor Telepon"
                      label="Nomor Telepon"
                      {...formEditSayapPartai.getInputProps("data.phoneNumber")}
                      withAsterisk
                    />
                    <TextInput
                      placeholder="Instagram"
                      label="Instagram"
                      {...formEditSayapPartai.getInputProps("data.instagram")}
                      withAsterisk
                    />
                    <TextInput
                      placeholder="Facebook"
                      label="Facebook"
                      {...formEditSayapPartai.getInputProps("data.facebook")}
                      withAsterisk
                    />
                    <TextInput
                      placeholder="TikTok"
                      label="TikTok"
                      {...formEditSayapPartai.getInputProps("data.tiktok")}
                      withAsterisk
                    />
                    <TextInput
                      placeholder="Twitter"
                      label="Twitter"
                      {...formEditSayapPartai.getInputProps("data.twitter")}
                      withAsterisk
                    />
                    <Select
                      data={sAgama.value.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))}
                      placeholder="Agama"
                      label="Pilih Agama"
                      {...formEditSayapPartai.getInputProps("data.agama")}
                      withAsterisk
                    />
                    <Select
                      data={sListPekerjaan.value.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))}
                      placeholder="Pekerjaan"
                      label="Pilih Pekerjaan"
                      {...formEditSayapPartai.getInputProps("data.pekerjaan")}
                      withAsterisk
                    />
                    <TextInput
                      placeholder="Alamat"
                      label="Alamat"
                      {...formEditSayapPartai.getInputProps("data.alamat")}
                      withAsterisk
                    />
                    <Select
                      data={sProvinsi.value.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))}
                      placeholder="Pilih Provinsi"
                      label="Pilih Provinsi"
                      onChange={(val: any) => {
                        _loadKabkot(val);
                        formEditSayapPartai.values.data.provinsi = val!;
                      }}
                      // {...formEditSayapPartai.getInputProps("data.provinsi")}
                      withAsterisk
                      searchable
                      clearable
                    />
                    <Select
                      data={sKabkot.value.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))}
                      placeholder="Pilih Kabupaten / Kota"
                      label="Pilih Kabupaten / Kota"
                      onChange={(val: any) => {
                        _loadKecamatan(val);
                        formEditSayapPartai.values.data.kabkot = val!;
                      }}
                      // {...formEditSayapPartai.getInputProps("data.kabkot")}
                      withAsterisk
                      searchable
                      clearable
                    />
                    <Select
                      data={sKecamatan.value.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))}
                      placeholder="Pilih Kecamatan"
                      label="Pilih Kecamatan"
                      onChange={(val: any) => {
                        _loadDesa(val);
                        formEditSayapPartai.values.data.kecamatan = val!;
                      }}
                      withAsterisk
                      searchable
                      clearable
                    />
                    <Select
                      data={sDesa.value.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))}
                      placeholder="Pilih Desa"
                      label="Pilih Desa"
                      onChange={(val: any) => {
                        formEditSayapPartai.values.data.desa = val!;
                      }}
                      withAsterisk
                      searchable
                      clearable
                      // {...formEditSayapPartai.getInputProps("data.desa")}
                    />
                    <TextInput
                      placeholder="RT - __, RW - __"
                      label="RT / RW"
                      {...formEditSayapPartai.getInputProps("data.rtrw")}
                      withAsterisk
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
                      label="Pilih Status Keanggotaan"
                      placeholder="Pilih Status Keanggotaan"
                      nothingFound="No options"
                      data={sStatusKeanggotaan.value.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))}
                      onChange={(val : any) => {
                        formEditSayapPartai.values.data.statusKeanggotaan = val;

                      }}
                      
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
                      {...formEditSayapPartai.getInputProps(
                        "data.tingkatPengurus"
                      )}
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
