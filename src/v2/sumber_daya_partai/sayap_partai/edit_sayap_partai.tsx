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
import { useAtom } from "jotai";
import {
  _desa,
  _kabupaten,
  _kecamatan,
  _provinsi,
  _selected_Desa,
  _selected_Kabkot,
  _selected_Kecamatan,
  _selected_Provinisi,
} from "@/s_state/wilayah/select_wilayah";
import {
  _loadSelectDesa,
  _loadSelectKabkot,
  _loadSelectKecamatan,
  _loadSelectProvinsi,
} from "@/load_data/wilayah/load_selected_wilayah";
import _ from "lodash";
import { _loadSayapPartai } from "../../../load_data/sayap_partai/load_sayap_partai";
import { sSayapPartai } from "../../../s_state/sayap_partai/s_sayap_partai";
import { sTingkatPengurus } from "@/s_state/sumber_daya_partai/s_tingkat_pengurus";
import {
  sJabatanDewanPembina,
  sJabatanDewanPimpinanCabang,
  sJabatanDewanPimpinanDaerah,
  sJabatanDewanPimpinanPusat,
  sJabatanPerwakilanLuarNegeri,
  sJabatanPimpinanAnakCabang,
  sJabatanPimpinanRanting,
} from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { _loadTingkatPengurus } from "@/load_data/sumber_daya_partai/load_tingkat_pengurus";
import {
  _loadJabatanDewanPembina,
  _loadJabatanDewanPimpinanCabang,
  _loadJabatanDewanPimpinanDaerah,
  _loadJabatanDewanPimpinanPusat,
} from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { sJenisKelamin } from "@/s_state/s_jenis_kelamin";
import { _loadJenisKelamin } from "@/load_data/load_jenis_kelamin";

const EditSayapPartaiV2 = ({ thisClosed }: any) => {
  const [isJabatan, setJabatan] = useState<any>();

  // const [valeditor, setValEditor] = useAtom(_val_edit_struktur);
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
    _loadAgama();
    _loadListPekerjaan();
    _loadSelectProvinsi( setIsProvinsi, setIsKabupaten, setIsKecamatan, setIsDesa, setSelectProvince, setSelectKabupaten, setSelectKecamatan, setSelectDesa );
    _loadSayapPartai();
    _loadJenisKelamin()

  }, []);

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
                    <Box>
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
                        {...formEditSayapPartai.getInputProps(
                          "data.tempatLahir"
                        )}
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
                        data={sJenisKelamin.value.map((e) => ({
                          label: e.label,
                          value: e.value,
                        }))}
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
                        {...formEditSayapPartai.getInputProps(
                          "data.phoneNumber"
                        )}
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
                          formEditSayapPartai.values.data.provinsi = val;
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
                          formEditSayapPartai.values.data.kabkot = val!;
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
                          formEditSayapPartai.values.data.kecamatan = val!;
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
                          formEditSayapPartai.values.data.desa = val!;
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
                        {...formEditSayapPartai.getInputProps("data.rtrw")}
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
                        formEditSayapPartai.values.data.statusKeanggotaan = val;
                      }}
                      withAsterisk
                    />

                    <Select
                      label="Pilih Nama Sayap"
                      placeholder="Pilih Nama Sayap"
                      nothingFound="No options"
                      data={sSayapPartai.value.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))}
                      {...formEditSayapPartai.getInputProps("data.sayap")}
                      withAsterisk
                    />

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
                        // if (val == "1") {
                        //   formEditSayapPartai.values.data.tingkatPengurus =
                        //     val!;
                        //   setJabatan(
                        //     <Select
                        //       label="Pilih Jabatan D. Pembina"
                        //       placeholder="Pilih Jabatan"
                        //       nothingFound="No options"
                        //       withAsterisk
                        //       data={sJabatanDewanPembina.value.map((e) => ({
                        //         value: e.id,
                        //         label: e.name,
                        //       }))}
                        //       onChange={(val) => {
                        //         formEditSayapPartai.values.data.jabatan = val!;
                        //       }}
                        //     />
                        //   );
                        // } else {
                          if (val == "2") {
                            formEditSayapPartai.values.data.tingkatPengurus =
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
                                  formEditSayapPartai.values.data.jabatan =
                                    val!;
                                }}
                              />
                            );
                          } else {
                            if (val == "3") {
                              formEditSayapPartai.values.data.tingkatPengurus =
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
                                    formEditSayapPartai.values.data.jabatan =
                                      val!;
                                  }}
                                />
                              );
                            } else {
                              if (val == "4") {
                                formEditSayapPartai.values.data.tingkatPengurus =
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
                                      formEditSayapPartai.values.data.jabatan =
                                        val!;
                                    }}
                                  />
                                );
                              } else {
                                setJabatan(
                                  "Pilihan Tingkat Pengurus Tidak Tersedia Untuk Sayap Partai !"
                                );

                                // if (val == "5") {
                                //   formEditSayapPartai.values.data.tingkatPengurus =
                                //     val!;
                                //   setJabatan(
                                //     <Select
                                //       label="Pilih Jabatan P. Anak Cabang"
                                //       placeholder="Pilih Jabatan"
                                //       nothingFound="No options"
                                //       withAsterisk
                                //       data={sJabatanPimpinanAnakCabang.value.map(
                                //         (e) => ({
                                //           value: e.id,
                                //           label: e.name,
                                //         })
                                //       )}
                                //       onChange={(val) => {
                                //         formEditSayapPartai.values.data.jabatan =
                                //           val!;
                                //       }}
                                //     />
                                //   );
                                // } else {
                                //   if (val == "6") {
                                //     formEditSayapPartai.values.data.tingkatPengurus =
                                //       val!;
                                //     setJabatan(
                                //       <Select
                                //         label="Pilih Jabatan P. Ranting"
                                //         placeholder="Pilih Jabatan"
                                //         nothingFound="No options"
                                //         withAsterisk
                                //         data={sJabatanPimpinanRanting.value.map(
                                //           (e) => ({
                                //             value: e.id,
                                //             label: e.name,
                                //           })
                                //         )}
                                //         onChange={(val) => {
                                //           formEditSayapPartai.values.data.jabatan =
                                //             val!;
                                //         }}
                                //       />
                                //     );
                                //   } else {
                                //     if (val == "7") {
                                //       formEditSayapPartai.values.data.tingkatPengurus =
                                //         val!;
                                //       setJabatan(
                                //         <Select
                                //           label="Pilih Jabatan P. Luar Negeri"
                                //           placeholder="Pilih Jabatan"
                                //           nothingFound="No options"
                                //           withAsterisk
                                //           data={sJabatanPerwakilanLuarNegeri.value.map(
                                //             (e) => ({
                                //               value: e.id,
                                //               label: e.name,
                                //             })
                                //           )}
                                //           onChange={(val) => {
                                //             formEditSayapPartai.values.data.jabatan =
                                //               val!;
                                //           }}
                                //         />
                                //       );
                                //     } else {
                                //       setJabatan("Data Tidak Ada !");
                                //     }
                                //   }
                                // }
                              }
                            }
                          }
                        }
                        // console.log(
                        //   formEditSayapPartai.values.data.tingkatPengurus = val
                        // )
                      }
                    // }
                    />
                    {isJabatan && <Text color={"red"}>{isJabatan}</Text>}
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
