import { buttonReset, buttonSimpan } from "@/v2/component/button-toast";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Group,
  Mark,
  NumberInput,
  Paper,
  Select,
  SimpleGrid,
  Space,
  Text,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useSetState, useShallowEffect } from "@mantine/hooks";
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
import { _loadKecamatan } from "@/load_data/wilayah/load_kecamatan";
import { sKecamatan } from "@/s_state/wilayah/s_kecamatan";
import { sDesa } from "@/s_state/wilayah/s_desa";
import { _loadDesa } from "@/load_data/wilayah/load_desa";
import { api } from "@/lib/api-backend";
import _ from "lodash";
import { useAtom } from "jotai";
import { _val_edit_struktur } from "./_val_edit_struktur";
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
import { sJenisKelamin } from "@/s_state/s_jenis_kelamin";
import { _loadJenisKelamin } from "@/load_data/load_jenis_kelamin";
import { _listDataStruktur } from "./table_struktur_partai";
import dataTable from "../data_table.json"
const EditStrukturPartaiV2 = ({
  thisClosed,
  
}: {
  thisClosed: any;
  
}) => {
  // const [valeditor, setValEditor] = useAtom(_val_edit_struktur);
  const [isJabatan, setJabatan] = useState<any>();
  const [isProvinsi, setIsProvinsi] = useAtom(_provinsi);
  const [selectProvince, setSelectProvince] = useAtom(_selected_Provinisi);
  const [isKabupaten, setIsKabupaten] = useAtom(_kabupaten);
  const [selectKabupaten, setSelectKabupaten] = useAtom(_selected_Kabkot);
  const [isKecamatan, setIsKecamatan] = useAtom(_kecamatan);
  const [selectKecamatan, setSelectKecamatan] = useAtom(_selected_Kecamatan);
  const [isDesa, setIsDesa] = useAtom(_desa);
  const [selectDesa, setSelectDesa] = useAtom(_selected_Desa);

  const [targetStruktur, setTargetStruktur] = useAtom(_listDataStruktur)

  // const [selectedProvince, setSelectedProvince] = useState<any>({
  //   id: "",
  //   name: "",
  // });

  // const [kabupaten, setKabupaten] = useState<any[]>([]);
  // const [selectedKabupaten, setSelectedKabupaten] = useState<any>({
  //   id: "",
  //   name: "",
  // });

  // // const [kecamatan, setKecamatan] = useSetState<any[]>([]);
  // const [kec, setKec] = useState<any[]>([]);
  // const [selectedKecamatan, setSelectedKecamatan] = useState<any>({
  //   id: "",
  //   name: "",
  // });

  // const [desa, setDesa] = useState<any[]>([]);
  // const [selectedDesa, setSelectedDesa] = useState<any>({
  //   id: "",
  //   name: "",
  // });

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
    _loadSelectProvinsi( setIsProvinsi, setIsKabupaten, setIsKecamatan, setIsDesa, setSelectProvince, setSelectKabupaten, setSelectKecamatan, setSelectDesa );
    _loadJenisKelamin()
    setTargetStruktur(dataTable)

  }, []);

  // const loadKabupaten = async (idProvinsi: string) => {
  //   const res = await fetch(
  //     api.apiMasterKabkotByProvinsi + `?idProvinsi=${idProvinsi}`
  //   )
  //     .then((res) => res.json())
  //     .then(async (val) => {
  //       if (!_.isEmpty(val)) {
  //         setKabupaten(val);
  //         setSelectedKabupaten({});
  //       } else {
  //         setKabupaten([]);
  //       }
  //     });
  // };

  // const loadKecamatan = async (idKabkot: string) => {
  //   const res = await fetch(
  //     api.apiMasterKecamatanByKabkot + `?idKabkot=${idKabkot}`
  //   )
  //     .then((res) => res.json())
  //     // .then(console.log)
  //     .then(async (val) => {
  //       if (!_.isEmpty(val)) {
  //         // setKecamatan(val);
  //         setSelectedKecamatan({});
  //         setKec(val);
  //       } else {
  //         setKec([]);
  //       }
  //     });
  // };

  // const loadDesa = async (idKecamatan: string) => {
  //   const res = await fetch(
  //     api.apiMasterDesaByKecamatan + `?idKecamatan=${idKecamatan}`
  //   )
  //     .then((res) => res.json())
  //     .then(async (val) => {
  //       if (!_.isEmpty(val)) {
  //         setDesa(val);
  //         setSelectedDesa({});
  //       } else {
  //         setDesa([]);
  //       }
  //     });
  // };

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

  if(!targetStruktur){
    return <></>;
  }

  return (
    <>
    
    {JSON.stringify(targetStruktur)}
      {/* <Button
        onClick={() => {
          setValEditor(["apa kabar"]);
        }}
      >
        Tekan
      </Button>
      {JSON.stringify(valeditor)} */}
      {/* <Percobaan /> */}
      {/* <Select
        style={{}}
        data={sProvinsi.value.map((e) => ({
          value: e.id,
          label: e.name,
        }))}
        value={selectedProvince.name}
        placeholder={
          selectedProvince.name ? selectedProvince.name : "Pilih Provinsi"
        }
        label="Pilih Provinsi"
        onChange={(val: any) => {
          setSelectedProvince(sProvinsi.value.find((v) => v.id == val));
          loadKabupaten(val);

          formEditStrukturPartai.values.data.provinsi = val!;
        }}
        // {...formEditStrukturPartai.getInputProps("data.provinsi")}
        withAsterisk
        searchable
        clearable
      />
      <Select
        // data={sKabkot.value.map((e) => ({
        //   value: e.id,
        //   label: e.name,
        // }))}
        key={Math.random()}
        data={
          _.isEmpty(kabupaten)
            ? []
            : kabupaten.map((e) => ({
                value: e.id,
                label: e.name,
              }))
        }
        label="Pilih Kabupaten / Kota"
        onChange={(val) => {
          setSelectedKabupaten(kabupaten.find((v) => v.id == val));
          loadKecamatan(val!);
          formEditStrukturPartai.values.data.kabkot = val!;
        }}
        // {...formEditStrukturPartai.getInputProps("data.kabkot")}
        placeholder={
          selectedKabupaten.name ? selectedKabupaten.name : "Pilih Kabupaten"
        }
        value={
          selectedKabupaten.name ? selectedKabupaten.name : "Pilih Kabupaten"
        }
        withAsterisk
        searchable
        clearable
      />
      <Select
        // data={sKecamatan.value.map((e) => ({
        //   value: e.id,
        //   label: e.name,
        // }))}
        key={Math.random()}
        data={
          _.isEmpty(kec)
            ? []
            : kec.map((v) => ({
                value: v.id,
                label: v.name,
              }))
        }
        onChange={(val: any) => {
          setSelectedKecamatan(kec.find((e) => e.id == val));
          loadDesa(val);
          formEditStrukturPartai.values.data.kecamatan = val!;
        }}
        placeholder={
          selectedKecamatan.name ? selectedKecamatan.name : "Pilih Kecamatan"
        }
        label={
          selectedKecamatan.name ? selectedKecamatan.name : "Pilih Kecamatan"
        }
        withAsterisk
        searchable
        clearable
      />
      <Select
        key={Math.random()}
        // data={sDesa.value.map((e) => ({
        //   value: e.id,
        //   label: e.name,
        // }))}
        data={
          _.isEmpty(desa)
            ? []
            : desa.map((e) => ({
                value: e.id,
                label: e.name,
              }))
        }
        placeholder={selectedDesa.name ? selectedDesa.name : "Pilih Desa"}
        value={selectedDesa.name ? selectedDesa.name : "Pilih Desa"}
        label="Pilih Desa"
        onChange={(val: any) => {
          setSelectedDesa(desa.find((e) => e.id == val));
          formEditStrukturPartai.values.data.desa = val!;
        }}
        withAsterisk
        searchable
        clearable
        // {...formEditStrukturPartai.getInputProps("data.desa")}
      /> */}



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
                onClick={() => {
                  onEdit();
                }}
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
          {/* {isID} */}

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
                        onChange={(val) => {
                          const res = [...targetStruktur]
                          

                        }}
                        // {...formEditStrukturPartai.getInputProps("data.nik")}
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
                        data={sJenisKelamin.value.map((e) => ({
                          label: e.label,
                          value: e.value,
                        }))}
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
                        {...formEditStrukturPartai.getInputProps(
                          "data.facebook"
                        )}
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
                        {...formEditStrukturPartai.getInputProps(
                          "data.twitter"
                        )}
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
                    </Box>
                    <Box>
                      {/* WILAYAH */}
                      <Select
                        label="Provinsi"
                        data={isProvinsi.map((e) => ({
                          value: e.id,
                          label: e.name,
                        }))}
                        onChange={(val) => {
                          formEditStrukturPartai.values.data.provinsi = val!;
                          setSelectProvince(
                            isProvinsi.find((e) => e.id == val)
                          );
                          _loadSelectKabkot(
                            val!,
                            setIsKabupaten,
                            setSelectKabupaten
                          );
                          // _loadSelectKecamatan(
                          //   val!,
                          //   setIsKecamatan,
                          //   setSelectKecamatan
                          // );
                          // _loadSelectDesa(val!, setIsDesa, setSelectDesa);
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
                          formEditStrukturPartai.values.data.kabkot = val!;
                          setSelectKabupaten(
                            isKabupaten.find((e) => e.id == val)
                          );
                          _loadSelectKecamatan(
                            val!,
                            setIsKecamatan,
                            setSelectKecamatan
                          );
                          // _loadSelectDesa(val!, setIsDesa, setSelectDesa);
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
                          formEditStrukturPartai.values.data.kecamatan = val!;
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
                          formEditStrukturPartai.values.data.desa = val!;
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
                        {...formEditStrukturPartai.getInputProps("data.rtrw")}
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

// function Percobaan() {
//   const [valEditor, setValEditor] = useAtom(_val_edit_struktur);
//   return (
//     <>
//       <Button
//         onClick={() => {
//           setValEditor(["ini dari bawah"]);
//         }}
//       >
//         Tekan lagi
//       </Button>
//       {JSON.stringify(valEditor)}
//     </>
//   );
// }

export default EditStrukturPartaiV2;
