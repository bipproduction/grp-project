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
import { useAtom } from "jotai";
import { _desa, _kabupaten, _kecamatan, _provinsi, _selected_Desa, _selected_Kabkot, _selected_Kecamatan, _selected_Provinisi } from "@/s_state/wilayah/select_wilayah";
import { _loadStatusKeanggotaan } from "@/load_data/sumber_daya_partai/load_status_keanggotaan";
import { _loadTingkatPengurus } from "@/load_data/sumber_daya_partai/load_tingkat_pengurus";
import { _loadJabatanDewanPembina, _loadJabatanDewanPimpinanCabang, _loadJabatanDewanPimpinanDaerah, _loadJabatanDewanPimpinanPusat, _loadJabatanPimpinanAnakCabang, _loadJabatanPimpinanRanting, _loadJabtanPerwakilanLuarNegeri } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { _loadAgama } from "@/load_data/load_agama";
import { _loadListPekerjaan } from "@/load_data/load_list_pekerjaan";
import { _loadSelectDesa, _loadSelectKabkot, _loadSelectKecamatan, _loadSelectProvinsi } from "@/load_data/wilayah/load_selected_wilayah";
import { sStatusKeanggotaan } from "@/s_state/sumber_daya_partai/s_status_keanggotaan";
import { sAgama } from "@/s_state/sumber_daya_partai/s_agama";
import { sListPekerjaan } from "@/s_state/s_list_pekerjaan";
import _ from "lodash";
import { sJenisKelamin } from "@/s_state/s_jenis_kelamin";
import { _loadJenisKelamin } from "@/load_data/load_jenis_kelamin";

const EditAnggotaPartaiV2 = ({ thisClosed }: any) => {
  const [statusKeanggotaan, setStatusKeanggotaan] = useState<any | []>([
    "Struktur Partai",
  ]);
  const [isProvinsi, setIsProvinsi] = useAtom(_provinsi);
  const [selectProvince, setSelectProvince] = useAtom(_selected_Provinisi);
  const [isKabupaten, setIsKabupaten] = useAtom(_kabupaten);
  const [selectKabupaten, setSelectKabupaten] = useAtom(_selected_Kabkot);
  const [isKecamatan, setIsKecamatan] = useAtom(_kecamatan);
  const [selectKecamatan, setSelectKecamatan] = useAtom(_selected_Kecamatan);
  const [isDesa, setIsDesa] = useAtom(_desa);
  const [selectDesa, setSelectDesa] = useAtom(_selected_Desa);


  useShallowEffect(() => {
    
    _loadStatusKeanggotaan();
    _loadTingkatPengurus();
    _loadJabatanDewanPembina();
    _loadJabatanDewanPimpinanPusat();
    _loadJabatanDewanPimpinanDaerah();
    _loadJabatanDewanPimpinanCabang();
    _loadJabatanPimpinanAnakCabang();
    _loadJabatanPimpinanRanting();
    _loadJabtanPerwakilanLuarNegeri();
    _loadAgama();
    _loadListPekerjaan();
    _loadSelectProvinsi({ setIsProvinsi });
    _loadJenisKelamin()
  }, []);


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
            {/* <Box w={100}>
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
                    <Box>
                      <NumberInput
                        placeholder="NIK"
                        label="NIK"
                        {...formEditAnggotaPartai.getInputProps("data.nik")}
                        withAsterisk
                      />
                      <TextInput
                        placeholder="Nama"
                        label="Nama"
                        {...formEditAnggotaPartai.getInputProps("data.nama")}
                        withAsterisk
                      />
                      <TextInput
                        placeholder="Email"
                        label="Email"
                        {...formEditAnggotaPartai.getInputProps("data.email")}
                        withAsterisk
                      />
                      <TextInput
                        placeholder="Tempat Lahir"
                        label="Tempat Lahir"
                        {...formEditAnggotaPartai.getInputProps(
                          "data.tempatLahir"
                        )}
                        withAsterisk
                      />
                      <DateInput
                        placeholder="Tanggal Lahir"
                        label="Tanggal Lahir"
                        {...formEditAnggotaPartai.getInputProps(
                          "data.tanggalLahir"
                        )}
                        withAsterisk
                      />
                      <Select
                        data={sJenisKelamin.value.map((e) => ({
                          label: e.label,
                          value: e.value,
                        }))}
                        placeholder="Jenis Kelamin"
                        label="Jenis Kelamin"
                        {...formEditAnggotaPartai.getInputProps(
                          "data.jenisKelamin"
                        )}
                        withAsterisk
                      />
                      <NumberInput
                        placeholder="Nomor Telepon"
                        label="Nomor Telepon"
                        {...formEditAnggotaPartai.getInputProps(
                          "data.phoneNumber"
                        )}
                        withAsterisk
                      />
                      <TextInput
                        placeholder="Instagram"
                        label="Instagram"
                        {...formEditAnggotaPartai.getInputProps("data.instagram")}
                        withAsterisk
                      />
                      <TextInput
                        placeholder="Facebook"
                        label="Facebook"
                        {...formEditAnggotaPartai.getInputProps("data.facebook")}
                        withAsterisk
                      />
                      <TextInput
                        placeholder="TikTok"
                        label="TikTok"
                        {...formEditAnggotaPartai.getInputProps("data.tiktok")}
                        withAsterisk
                      />
                      <TextInput
                        placeholder="Twitter"
                        label="Twitter"
                        {...formEditAnggotaPartai.getInputProps("data.twitter")}
                        withAsterisk
                      />
                      <Select
                        data={sAgama.value.map((e) => ({
                          value: e.id,
                          label: e.name,
                        }))}
                        placeholder="Agama"
                        label="Pilih Agama"
                        {...formEditAnggotaPartai.getInputProps("data.agama")}
                        withAsterisk
                      />
                      <Select
                        data={sListPekerjaan.value.map((e) => ({
                          value: e.id,
                          label: e.name,
                        }))}
                        placeholder="Pekerjaan"
                        label="Pilih Pekerjaan"
                        {...formEditAnggotaPartai.getInputProps("data.pekerjaan")}
                        withAsterisk
                      />
                      <TextInput
                        placeholder="Alamat"
                        label="Alamat"
                        {...formEditAnggotaPartai.getInputProps("data.alamat")}
                        withAsterisk
                      />
                    </Box>
                    <Box>
                      {/* WILAYAH */}
                      <Select
                        label="Provinsi"
                        data={isProvinsi.map((e) => ({
                          value: e.id,
                          label: e.name,
                        }))}
                        onChange={(val: any) => {
                          setSelectProvince(
                            isProvinsi.find((e) => e.id == val)
                          );
                          _loadSelectKabkot(
                            val,
                            setIsKabupaten,
                            setSelectKabupaten
                          );
                          formEditAnggotaPartai.values.data.provinsi = val;
                        }}
                        placeholder={
                          selectProvince.name
                            ? selectProvince.name
                            : "Pilih Provinsi"
                        }
                        value={
                          selectProvince.name
                          ? selectProvince.name
                          : "Pilih Provinsi"
                        }
                        searchable
                        withAsterisk
                      />

                      <Select
                        label="Kabupaten / Kota"
                        data={
                          _.isEmpty(isKabupaten)
                            ? []
                            : isKabupaten.map((e) => ({
                                value: e.id,
                                label: e.name,
                              }))
                        }
                        onChange={(val) => {
                          // setSelectKabupaten(sKabkot.value.find((e) => e.id == val));
                          setSelectKabupaten(
                            isKabupaten.find((e) => e.id == val)
                          );
                          _loadSelectKecamatan(
                            val!,
                            setIsKecamatan,
                            setSelectKecamatan
                          );
                          formEditAnggotaPartai.values.data.kabkot = val!;
                        }}
                        placeholder={
                          selectKabupaten.name
                            ? selectKabupaten.name
                            : "Pilih Kabupaten"
                        }
                        value={
                          selectKabupaten.name
                            ? selectKabupaten.name
                            : "Pilih Kabupaten"
                        }
                        searchable
                        withAsterisk
                      />

                      <Select
                        label="Kecamatan"
                        data={
                          _.isEmpty(isKecamatan)
                            ? []
                            : isKecamatan.map((e) => ({
                                value: e.id,
                                label: e.name,
                              }))
                        }
                        onChange={(val) => {
                          setSelectKecamatan(
                            isKecamatan.find((e) => e.id == val)
                          );
                          _loadSelectDesa(val!, setIsDesa, setSelectDesa);
                          formEditAnggotaPartai.values.data.kecamatan = val!;
                        }}
                        placeholder={
                          selectKecamatan.name
                            ? selectKecamatan.name
                            : "Pilih Kecamatan"
                        }
                        value={
                          selectKecamatan.name
                            ? selectKecamatan.name
                            : "Pilih Kecamatan"
                        }
                        searchable
                        withAsterisk
                      />

                      <Select
                        label="Desa"
                        data={
                          _.isEmpty(isDesa)
                            ? []
                            : isDesa.map((e) => ({
                                value: e.id,
                                label: e.name,
                              }))
                        }
                        onChange={(val) => {
                          setSelectDesa(isDesa.find((e) => e.id == val));
                          formEditAnggotaPartai.values.data.desa = val!;
                        }}
                        placeholder={
                          selectDesa.name ? selectDesa.name : "Pilih Desa"
                        }
                        value={selectDesa.name ? selectDesa.name : "Pilih Desa"}
                        searchable
                        withAsterisk
                      />
                      <TextInput
                        placeholder="RT - __, RW - __"
                        label="RT / RW"
                        {...formEditAnggotaPartai.getInputProps("data.rtrw")}
                        withAsterisk
                      />
                    </Box>
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
                      onChange={(val: any) => {
                        formEditAnggotaPartai.values.data.statusKeanggotaan = val;
                      }}
                      withAsterisk
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
