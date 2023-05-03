import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Group,
  Image,
  ScrollArea,
  Select,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React from "react";
import COLOR from "../../../fun/WARNA";
import { DateInput } from "@mantine/dates";
import { Form, isNotEmpty, useForm } from "@mantine/form";

const FormDataDiriUser = () => {
  const formDataDiri = useForm({
    initialValues: {
        nik: "",
        name: "",
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
        kabupaten: "",
        kecamatan: "",
        desa: "",
        rtrw: "",
      },
      validate: {
        nik: isNotEmpty('Tidak Boleh Kosong'),
        name: isNotEmpty('Tidak Boleh Kosong'),
        email: isNotEmpty('Tidak Boleh Kosong'),
        tempatLahir: isNotEmpty('Tidak Boleh Kosong'),
        tanggalLahir: isNotEmpty('Tidak Boleh Kosong'),
        jenisKelamin: isNotEmpty('Tidak Boleh Kosong'),
        phoneNumber: isNotEmpty('Tidak Boleh Kosong'),
        instagram: isNotEmpty('Tidak Boleh Kosong'),
        facebook: isNotEmpty('Tidak Boleh Kosong'),
        tiktok: isNotEmpty('Tidak Boleh Kosong'),
        twitter: isNotEmpty('Tidak Boleh Kosong'),
        agama: isNotEmpty('Tidak Boleh Kosong'),
        pekerjaan: isNotEmpty('Tidak Boleh Kosong'),
        alamat: isNotEmpty('Tidak Boleh Kosong'),
        provinsi: isNotEmpty('Tidak Boleh Kosong'),
        kabupaten: isNotEmpty('Tidak Boleh Kosong'),
        kecamatan: isNotEmpty('Tidak Boleh Kosong'),
        desa: isNotEmpty('Tidak Boleh Kosong'),
        rtrw:isNotEmpty('Tidak Boleh Kosong'),
      }
  });
  return (
    <>
      <BackgroundImage src="../../BG.png" h={"100vh"}>
        <Box>
          <Stack>
            <Box>
              <SimpleGrid
                cols={4}
                breakpoints={[
                  { maxWidth: 980, cols: 2, spacing: "xl" },
                  { maxWidth: 755, cols: 1, spacing: "xl" },
                ]}
              >
                <Box>
                  <Box
                    p={50}
                    sx={{
                      backgroundColor: COLOR.abuabu,
                    }}
                  >
                    <Box>
                      <Text fw={700} fz={30}>
                        Form Data Diri
                      </Text>
                      <Text mb={20}>* Wajib diisi</Text>
                      <ScrollArea h={571} scrollbarSize={0}>
                        <Box component="form" maw={400} mx="auto" onSubmit={formDataDiri.onSubmit(() => {})}>
                        <Stack>
                          <TextInput
                            placeholder="NIK"
                            withAsterisk
                            mt={10}
                            label="NIK"
                            radius={"md"}
                            {...formDataDiri.getInputProps('nik')}
                          />
                          <TextInput
                            placeholder="Nama"
                            withAsterisk
                            label="Nama"
                            radius={"md"}
                            {...formDataDiri.getInputProps('name')}
                          />
                          <TextInput
                            placeholder="Email"
                            withAsterisk
                            label="Email"
                            radius={"md"}
                            {...formDataDiri.getInputProps('email')}
                          />
                          <TextInput
                            placeholder="Tempat Lahir"
                            withAsterisk
                            label="Tempat Lahir"
                            radius={"md"}
                            {...formDataDiri.getInputProps('tempatLahir')}
                          />
                          <DateInput
                            placeholder="Tanggal Lahir"
                            withAsterisk
                            label="Tanggal Lahir"
                            radius={"md"}
                            {...formDataDiri.getInputProps('tanggalLahir')}
                          />
                          <Select
                            placeholder="Jenis Kelamin"
                            label="Jenis Kelamin"
                            radius={"md"}
                            data={[
                              { value: "laki", label: "Laki-Laki" },
                              { value: "perempuan", label: "Perempuan" },
                            ]}
                            {...formDataDiri.getInputProps('jenisKelamin')}
                          />
                          <TextInput
                            placeholder="Nomor Handphone"
                            withAsterisk
                            label="Nomor Handphone"
                            radius={"md"}
                            {...formDataDiri.getInputProps('phoneNumber')}
                          />
                          <TextInput
                            placeholder="Instagram"
                            withAsterisk
                            label="Instagram"
                            radius={"md"}
                            {...formDataDiri.getInputProps('instagram')}
                          />
                          <TextInput
                            placeholder="Facebook"
                            withAsterisk
                            label="Facebook"
                            radius={"md"}
                            {...formDataDiri.getInputProps('facebook')}
                          />
                          <TextInput
                            placeholder="Tiktok"
                            withAsterisk
                            label="Tiktok"
                            radius={"md"}
                            {...formDataDiri.getInputProps('tiktok')}
                          />
                          <TextInput
                            placeholder="Twitter"
                            withAsterisk
                            label="Twitter"
                            radius={"md"}
                            {...formDataDiri.getInputProps('twitter')}
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
                            placeholder="Agama"
                            label="Agama"
                            withAsterisk
                            {...formDataDiri.getInputProps('agama')}
                          />
                          <TextInput
                            placeholder="Pekerjaan"
                            withAsterisk
                            label="Pekerjaan"
                            radius={"md"}
                            {...formDataDiri.getInputProps('pekerjaan')}
                          />
                          <TextInput
                            placeholder="Alamat"
                            withAsterisk
                            label="Alamat"
                            radius={"md"}
                            {...formDataDiri.getInputProps('alamat')}
                          />
                          <Select
                            data={[{ value: "Bali", label: "Bali" }]}
                            radius={"md"}
                            placeholder="Provinsi"
                            label="Provinsi"
                            withAsterisk
                            {...formDataDiri.getInputProps('provinsi')}
                          />
                          <Select
                            data={[{ value: "Denpasar", label: "Denpasar" }]}
                            radius={"md"}
                            placeholder="Kabupaten / Kota"
                            label="Kabupaten / Kota"
                            withAsterisk
                            {...formDataDiri.getInputProps('kabupaten')}
                          />
                          <Select
                            data={[
                              {
                                value: "Denpasar barat",
                                label: "Denpasar Barat",
                              },
                            ]}
                            radius={"md"}
                            placeholder="Kecamatan"
                            label="Kecamatan"
                            withAsterisk
                            {...formDataDiri.getInputProps('kecamatan')}
                          />
                          <TextInput
                            placeholder="Desa"
                            withAsterisk
                            label="Desa"
                            radius={"md"}
                            {...formDataDiri.getInputProps('desa')}
                          />
                          <TextInput
                            placeholder="RT/RW"
                            withAsterisk
                            label="RT/RW"
                            radius={"md"}
                            {...formDataDiri.getInputProps('email')}
                          />
                          <Center pt={20}>
                            <Box w={150}>
                              <Button
                                fullWidth
                                radius={"xl"}
                                bg={COLOR.merah}
                                color="orange.9"
                                type="submit"
                              >
                                Simpan
                              </Button>
                            </Box>
                          </Center>
                        </Stack>
                        </Box>
                      </ScrollArea>
                    </Box>
                  </Box>
                </Box>
                <Box>
                </Box>
                <Box>
                  <Container pt={300}>
                  <Image right={40} width={300} src="../.././logo.png" alt="image data diri" />
                  </Container>
                </Box>
                <Box>

                </Box>
              </SimpleGrid>
            </Box>
          </Stack>
        </Box>
      </BackgroundImage>
    </>
  );
};

export default FormDataDiriUser;
