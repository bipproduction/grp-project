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
  Stack,
  Table,
  Text,
  TextInput,
  Title,
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
import { atom, useAtom } from "jotai";
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
import { _editDataStruktur } from "./table_struktur_partai";
import dataTable from "../data_table.json";
import { ModelSumberDayaPartai } from "../../../model/interface_sumber_daya_partai";
import { atomWithStorage } from "jotai/utils";

const _listData = atom<ModelSumberDayaPartai | null>(null);
const EditStrukturPartaiV2 = ({ thisClosed }: { thisClosed: any }) => {
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

  const [targetStruktur, setTargetStruktur] = useAtom(_editDataStruktur);
  const [listData, setListData] = useAtom(_listData);

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
    _loadSelectProvinsi(
      setIsProvinsi,
      setIsKabupaten,
      setIsKecamatan,
      setIsDesa,
      setSelectProvince,
      setSelectKabupaten,
      setSelectKecamatan,
      setSelectDesa
    );
    _loadJenisKelamin();
    // setTargetStruktur(dataTable)
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

  // function update(){
  //   const body: ModelEditSDP = {
  //     id: targetStruktur?.id as any,
  //     alamatKantor: targetStruktur?.User.DataDiri.alamat as any,

  //   }
  // }

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

  const thisEdit = async () => {
    console.log(targetStruktur);
    // const body = targetStruktur;
    // await fetch("/api/sumber-daya-partai/sumber-daya-partai-update", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(body),
    // });
  };

  if (!targetStruktur) {
    return <></>;
  }

  return (
    <>
      {/* {JSON.stringify(targetStruktur)} */}

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
                  // onEdit();
                  thisEdit();
                }}
              >
                Simpan
              </Button>
            </Box>
            {}
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
                {/* <Stack p={"xs"}>
                  {_.keys(_.omit(targetStruktur, ["id"])).map((v, i) => (
                    <Box key={i}>
                      <TextInput
                        onChange={(val) => {
                          targetStruktur[v] = val.target.value;
                          setTargetStruktur({ ...targetStruktur });
                        }}
                        value={targetStruktur[v]}
                        label={_.upperCase(v)}
                      />
                    </Box>
                  ))}
                </Stack>
                <Box
                  sx={{
                    overflow: "scroll",
                  }}
                >
                  <Table>
                    <thead>
                      <tr>
                        {_.keys(targetStruktur).map((v, i) => (
                          <th key={i}>
                            <Title order={5}>{_.upperCase(v)}</Title>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {_.values(targetStruktur).map((v, i) => (
                          <td key={i}>{v}</td>
                        ))}
                      </tr>
                    </tbody>
                  </Table>
                </Box> */}

                <Box>
                  <Flex direction={"column"}>
                    <Box>
                      <TextInput
                        placeholder="NIK"
                        label="NIK"
                        value={targetStruktur.User.DataDiri.nik}
                        onChange={(val) => {
                          const data = _.clone(targetStruktur);
                          data.User.DataDiri.nik = val.target.value;
                          setListData(data);
                        }}
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
                      <Select
                        label="Pilih Provinsi"
                        searchable
                        value={
                          selectProvince.name
                            ? selectProvince.name
                            : targetStruktur.User.DataDiri.MasterProvince.name
                        }
                        placeholder={
                          selectProvince.name
                            ? selectProvince.name
                            : targetStruktur.User.DataDiri.MasterProvince.name
                        }
                        data={isProvinsi.map((e) => ({
                          value: e.id,
                          label: e.name,
                        }))}
                        onChange={(val: any) => {
                          const data = _.clone(targetStruktur);
                          data.User.DataDiri.MasterProvince = val;
                          setListData(data);
                          setSelectProvince(
                            isProvinsi.find((e) => e.id == val)
                          );
                          _loadSelectKabkot(
                            val,
                            setIsKabupaten,
                            setSelectKabupaten
                          );
                        }}
                      />

                      <Select
                        label="Pilih Kabupaten / Kota"
                        searchable
                        value={
                          selectKabupaten.name
                            ? selectKabupaten.name
                            : targetStruktur.User.DataDiri.MasterKabKot.name
                        }
                        placeholder={
                          selectKabupaten.name
                            ? selectKabupaten.name
                            : targetStruktur.User.DataDiri.MasterKabKot.name
                        }
                        data={
                          _.isEmpty(isKabupaten)
                            ? []
                            : isKabupaten.map((e) => ({
                                value: e.id,
                                label: e.name,
                              }))
                        }
                        onChange={(val: any) => {
                          const data = _.clone(targetStruktur);
                          data.User.DataDiri.MasterKabKot = val;
                          setListData(data);
                          setSelectKabupaten(
                            isKabupaten.find((e) => e.id == val)
                          );
                          _loadSelectKecamatan(
                            val,
                            setIsKecamatan,
                            setSelectKecamatan
                          );
                        }}
                      />

                      <Select
                        label="Pilih Kecamatan"
                        searchable
                        value={selectKecamatan.name}
                        placeholder={
                          selectKecamatan.name
                            ? selectKecamatan.name
                            : targetStruktur.User.DataDiri.MasterKecamatan.name
                        }
                        data={
                          _.isEmpty(isKecamatan)
                            ? []
                            : isKecamatan.map((e) => ({
                                value: e.id,
                                label: e.name,
                              }))
                        }
                        onChange={(val: any) => {
                          const data = _.clone(targetStruktur);
                          data.User.DataDiri.MasterKecamatan.name = val;
                          setListData(data);
                          setSelectKecamatan(
                            isKecamatan.find((e) => e.id == val)
                          );
                          _loadSelectDesa(val, setIsDesa, setSelectDesa);
                          // console.log(val)
                        }}
                      />

                      <Select
                        label="Plih Desa"
                        searchable
                        value={
                          selectDesa.name
                            ? selectDesa.name
                            : targetStruktur.User.DataDiri.MasterDesa.name
                        }
                        placeholder={
                          selectDesa.name
                            ? selectDesa.name
                            : targetStruktur.User.DataDiri.MasterDesa.name
                        }
                        data={
                          _.isEmpty(isDesa)
                            ? []
                            : isDesa.map((e) => ({
                                value: e.id,
                                label: e.name,
                              }))
                        }
                        onChange={(val: any) => {
                          const data = _.clone(targetStruktur);
                          data.User.DataDiri.MasterDesa.name = val;
                          setListData(data);
                          setSelectDesa(isDesa.find((e) => e.id == val));
                        }}
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
                    {/* <Select
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
                    /> */}

                    <Select
                      label="Pilih Tingkat Pengurus"
                      placeholder={targetStruktur.MasterTingkatPengurus.name}
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
