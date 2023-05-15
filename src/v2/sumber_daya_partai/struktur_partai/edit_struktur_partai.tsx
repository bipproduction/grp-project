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
import { sStatusKeanggotaan } from "@/s_state/sumber_daya_partai/s_status_keanggotaan";
import { _loadTingkatPengurus } from "@/load_data/sumber_daya_partai/load_tingkat_pengurus";
import { sTingkatPengurus } from "@/s_state/sumber_daya_partai/s_tingkat_pengurus";
import {
  _loadJabatanDewanPembina,
  _loadJabatanDewanPimpinanCabang,
  _loadJabatanDewanPimpinanDaerah,
  _loadJabatanDewanPimpinanPusat,
  _loadJabatanPimpinanAnakCabang,
  _loadJabatanPimpinanRanting,
  _loadJabtanPerwakilanLuarNegeri,
} from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import {
  sJabatanDewanPembina,
  sJabatanDewanPimpinanCabang,
  sJabatanDewanPimpinanDaerah,
  sJabatanDewanPimpinanPusat,
  sJabatanPerwakilanLuarNegeri,
  sJabatanPimpinanAnakCabang,
  sJabatanPimpinanRanting,
} from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { _loadAgama } from "@/load_data/load_agama";
import { sAgama } from "@/s_state/sumber_daya_partai/s_agama";
import { _loadListPekerjaan } from "@/load_data/load_list_pekerjaan";
import { sListPekerjaan } from "@/s_state/s_list_pekerjaan";
import { _loadProvinsi } from "@/load_data/wilayah/load_provinsi";
import { sProvinsi } from "@/s_state/wilayah/s_provinsi";
import { _loadKabkot } from "@/load_data/wilayah/load_kabkot";
import { sKabkot } from "@/s_state/wilayah/s_kabkot";
import { _loadKecamatan } from "@/load_data/wilayah/load_kecamatan";
import { sKecamatan } from "@/s_state/wilayah/s_kecamatan";
import { sDesa } from "@/s_state/wilayah/s_desa";
import { _loadDesa } from "@/load_data/wilayah/load_desa";

const EditStrukturPartaiV2 = ({ thisClosed }: any) => {
  const [isJabatan, setJabatan] = useState<any>();

  useShallowEffect(() => {
    _loadStatusKeanggotaan();
    _loadTingkatPengurus();
    _loadJabatanDewanPembina();
    _loadJabatanDewanPimpinanPusat();
    _loadJabatanDewanPimpinanDaerah();
    _loadJabatanDewanPimpinanCabang();
    _loadJabatanPimpinanAnakCabang();
    _loadJabatanPimpinanRanting()
    _loadJabtanPerwakilanLuarNegeri();
    _loadAgama();
    _loadListPekerjaan();
    _loadProvinsi();
  }, []);

  const formEditStrukturPartai = useForm({
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
    console.log(formEditStrukturPartai.values.data);
    if (Object.values(formEditStrukturPartai.values.data).includes("")) {
      return toast("Lengkapi Data diri");
    }

    if (
      formEditStrukturPartai.values.validate.email(
        formEditStrukturPartai.values.data.email
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
                      {...formEditStrukturPartai.getInputProps("data.nik")}
                      withAsterisk
                    />
                    <TextInput
                      placeholder="Nama"
                      label="Nama"
                      {...formEditStrukturPartai.getInputProps("data.nama")}
                      withAsterisk
                    />
                    <TextInput
                      placeholder="Email"
                      label="Email"
                      {...formEditStrukturPartai.getInputProps("data.email")}
                      withAsterisk
                    />
                    <TextInput
                      placeholder="Tempat Lahir"
                      label="Tempat Lahir"
                      {...formEditStrukturPartai.getInputProps(
                        "data.tempatLahir"
                      )}
                      withAsterisk
                    />
                    <DateInput
                      placeholder="Tanggal Lahir"
                      label="Tanggal Lahir"
                      {...formEditStrukturPartai.getInputProps(
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
                      {...formEditStrukturPartai.getInputProps(
                        "data.jenisKelamin"
                      )}
                      withAsterisk
                    />
                    <NumberInput
                      placeholder="Nomor Telepon"
                      label="Nomor Telepon"
                      {...formEditStrukturPartai.getInputProps(
                        "data.phoneNumber"
                      )}
                      withAsterisk
                    />
                    <TextInput
                      placeholder="Instagram"
                      label="Instagram"
                      {...formEditStrukturPartai.getInputProps(
                        "data.instagram"
                      )}
                      withAsterisk
                    />
                    <TextInput
                      placeholder="Facebook"
                      label="Facebook"
                      {...formEditStrukturPartai.getInputProps("data.facebook")}
                      withAsterisk
                    />
                    <TextInput
                      placeholder="TikTok"
                      label="TikTok"
                      {...formEditStrukturPartai.getInputProps("data.tiktok")}
                      withAsterisk
                    />
                    <TextInput
                      placeholder="Twitter"
                      label="Twitter"
                      {...formEditStrukturPartai.getInputProps("data.twitter")}
                      withAsterisk
                    />
                    <Select
                      data={sAgama.value.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))}
                      placeholder="Agama"
                      label="Pilih Agama"
                      {...formEditStrukturPartai.getInputProps("data.agama")}
                      withAsterisk
                    />
                    <Select
                      data={sListPekerjaan.value.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))}
                      placeholder="Pekerjaan"
                      label="Pilih Pekerjaan"
                      {...formEditStrukturPartai.getInputProps(
                        "data.pekerjaan"
                      )}
                      withAsterisk
                    />
                    <TextInput
                      placeholder="Alamat"
                      label="Alamat"
                      {...formEditStrukturPartai.getInputProps("data.alamat")}
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
                        formEditStrukturPartai.values.data.provinsi = val!;
                      }}
                      // {...formEditStrukturPartai.getInputProps("data.provinsi")}
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
                        formEditStrukturPartai.values.data.kabkot = val!;
                      }}
                      // {...formEditStrukturPartai.getInputProps("data.kabkot")}
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
                        formEditStrukturPartai.values.data.kecamatan = val!;
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
                        formEditStrukturPartai.values.data.desa = val!;
                      }}
                      withAsterisk
                      searchable
                      clearable
                      // {...formEditStrukturPartai.getInputProps("data.desa")}
                    />
                    <TextInput
                      placeholder="RT - __, RW - __"
                      label="RT / RW"
                      {...formEditStrukturPartai.getInputProps("data.rtrw")}
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
                      withAsterisk
                      data={sStatusKeanggotaan.value.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))}
                      {...formEditStrukturPartai.getInputProps(
                        "data.statusKeanggotaan"
                      )}
                    />
                    {/* <Text>
                      {formEditStrukturPartai.values.data.tingkatPengurus}
                    </Text> */}
                    <Select
                      label="Pilih Tingkat Pengurus"
                      placeholder="Pilih Tingkat Pengurus"
                      nothingFound="No options"
                      withAsterisk
                      data={sTingkatPengurus.value.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))}
                      onChange={(val) => {
                        // console.log(sTingkatPengurus.value)
                        if (val == "1") {
                          formEditStrukturPartai.values.data.tingkatPengurus =
                            val!;
                          setJabatan(
                            <Select
                              label="Pilih Jabatan D. Pembina"
                              placeholder="Pilih Jabatan"
                              nothingFound="No options"
                              withAsterisk
                              data={sJabatanDewanPembina.value.map((e) => ({
                                value: e.id,
                                label: e.name,
                              }))}
                              onChange={(val) => {
                                formEditStrukturPartai.values.data.jabatan =
                                  val!;
                              }}
                            />
                          );
                        } else {
                          if (val == "2") {
                            formEditStrukturPartai.values.data.tingkatPengurus =
                              val!;
                            setJabatan(
                              <Select
                                label="Pilih Jabatan D. Pimpinan Pusat"
                                placeholder="Pilih Jabatan"
                                nothingFound="No options"
                                withAsterisk
                                data={sJabatanDewanPimpinanPusat.value.map(
                                  (e) => ({
                                    value: e.id,
                                    label: e.name,
                                  })
                                )}
                                onChange={(val) => {
                                  formEditStrukturPartai.values.data.jabatan =
                                    val!;
                                }}
                              />
                            );
                          } else {
                            if (val == "3") {
                              formEditStrukturPartai.values.data.tingkatPengurus =
                                val!;
                              setJabatan(
                                <Select
                                  label="Pilih Jabatan D. Pimpinan Daerah"
                                  placeholder="Pilih Jabatan"
                                  nothingFound="No options"
                                  withAsterisk
                                  data={sJabatanDewanPimpinanDaerah.value.map(
                                    (e) => ({
                                      value: e.id,
                                      label: e.name,
                                    })
                                  )}
                                  onChange={(val) => {
                                    formEditStrukturPartai.values.data.jabatan =
                                      val!;
                                  }}
                                />
                              );
                            } else {
                              if (val == "4") {
                                formEditStrukturPartai.values.data.tingkatPengurus =
                                  val!;
                                setJabatan(
                                  <Select
                                    label="Pilih Jabatan D. Pimpinan Cabang"
                                    placeholder="Pilih Jabatan"
                                    nothingFound="No options"
                                    withAsterisk
                                    data={sJabatanDewanPimpinanCabang.value.map(
                                      (e) => ({
                                        value: e.id,
                                        label: e.name,
                                      })
                                    )}
                                    onChange={(val) => {
                                      formEditStrukturPartai.values.data.jabatan =
                                        val!;
                                    }}
                                  />
                                );
                              } else {
                                if (val == "5") {
                                  formEditStrukturPartai.values.data.tingkatPengurus =
                                    val!;
                                  setJabatan(
                                    <Select
                                      label="Pilih Jabatan P. Anak Cabang"
                                      placeholder="Pilih Jabatan"
                                      nothingFound="No options"
                                      withAsterisk
                                      data={sJabatanPimpinanAnakCabang.value.map(
                                        (e) => ({
                                          value: e.id,
                                          label: e.name,
                                        })
                                      )}
                                      onChange={(val) => {
                                        formEditStrukturPartai.values.data.jabatan =
                                          val!;
                                      }}
                                    />
                                  );
                                } else {
                                  if (val == "6") {
                                    formEditStrukturPartai.values.data.tingkatPengurus =
                                      val!;
                                    setJabatan(
                                      <Select
                                        label="Pilih Jabatan P. Ranting"
                                        placeholder="Pilih Jabatan"
                                        nothingFound="No options"
                                        withAsterisk
                                        data={sJabatanPimpinanRanting.value.map(
                                          (e) => ({
                                            value: e.id,
                                            label: e.name,
                                          })
                                        )}
                                        onChange={(val) => {
                                          formEditStrukturPartai.values.data.jabatan =
                                            val!;
                                        }}
                                      />
                                    );
                                  } else {
                                    if (val == "7") {
                                      formEditStrukturPartai.values.data.tingkatPengurus =
                                        val!;
                                      setJabatan(
                                        <Select
                                          label="Pilih Jabatan P. Luar Negeri"
                                          placeholder="Pilih Jabatan"
                                          nothingFound="No options"
                                          withAsterisk
                                          data={sJabatanPerwakilanLuarNegeri.value.map(
                                            (e) => ({
                                              value: e.id,
                                              label: e.name,
                                            })
                                          )}
                                          onChange={(val) => {
                                            formEditStrukturPartai.values.data.jabatan =
                                              val!;
                                          }}
                                        />
                                      );
                                    } else {
                                      setJabatan("Data Tidak Ada !");
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        // console.log(
                        //   formEditStrukturPartai.values.data.tingkatPengurus = val
                        // )
                      }}
                      // {...formEditStrukturPartai.getInputProps(
                      //   "data.tingkatPengurus"
                      // )}
                    />
                    {isJabatan && isJabatan}

                    {/* <Select
                      label="**"
                      placeholder="Pilih Jabatan"
                      nothingFound="No options"
                      data={[
                        { value: "Ketua", label: "Ketua" },
                        { value: "Wakil Ketua", label: "Wakil Ketua" },
                      ]}
                      {...formEditStrukturPartai.getInputProps("data.jabatan")}
                    /> */}
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
