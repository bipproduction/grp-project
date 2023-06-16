import { _loadKategoriPemilihPotensial } from "@/load_data/load_kategori_pemilih_potensial";
import { _loadListNoTps } from "@/load_data/load_list_no_tps";
import { _loadListPekerjaan } from "@/load_data/load_list_pekerjaan";
import { _loadDesa } from "@/load_data/wilayah/load_desa";
import { _loadKabkot } from "@/load_data/wilayah/load_kabkot";
import { _loadKecamatan } from "@/load_data/wilayah/load_kecamatan";
import { _loadProvinsi } from "@/load_data/wilayah/load_provinsi";
import { sKategoriPemilihPotensial } from "@/s_state/s_kategori_pemilih_potensial";
import { sListNoTPS } from "@/s_state/s_list_no_tps";
import { sListPekerjaan } from "@/s_state/s_list_pekerjaan";
import { sDesa } from "@/s_state/wilayah/s_desa";
import { sKabkot } from "@/s_state/wilayah/s_kabkot";
import { sKecamatan } from "@/s_state/wilayah/s_kecamatan";
import { sProvinsi } from "@/s_state/wilayah/s_provinsi";
import { buttonSimpan } from "@/v2/component/button-toast";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Group,
  NumberInput,
  Paper,
  Select,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useShallowEffect } from "@mantine/hooks";
import _, { includes, isEmpty } from "lodash";
import { useState } from "react";
import COLOR from "../../../../fun/WARNA";
import { useAtom } from "jotai";
import {
  _dataPageCalonPemilihPotensial,
  _dataTotalPageCalonPemilihPotensial,
  _desa_CalonPP,
  _kabkot_CalonPP,
  _kecamatan_CalonPP,
  _listData_CalonPemilihPotensial,
  _loadDataCalonPemilihPotensial_BySearch,
  _provinsi_CalonPP,
  _selectDesa_CalonPP,
  _selectKabkot_CalonPP,
  _selectKecamatan_CalonPP,
  _selectProvinsi_CalonPP,
} from "@/load_data/peta_kekuatan/load_calon_pemilih_potensial";
import {
  _loadSelectDesa,
  _loadSelectKabkot,
  _loadSelectKecamatan,
  _loadSelectProvinsi,
} from "@/load_data/wilayah/load_selected_wilayah";
import moment from "moment";
import { sJenisKelamin } from "@/s_state/s_jenis_kelamin";
import { _loadJenisKelamin } from "@/load_data/load_jenis_kelamin";
import { sAgama } from "@/s_state/sumber_daya_partai/s_agama";
import { _loadAgama } from "@/load_data/load_agama";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { _postLogUser } from "@/load_data/log_user/post_log_user";

const TambahCPTV2 = ({ thisClosed }: any) => {
  const [kerja, setKerja] = useState<any[]>([]);
  const [dataKirim, setDataKirim] = useState({
    nama: "",
    nik: "",
    email: "",
    alamat: "",
    tanggalLahir: "",
    phoneNumber: new Number(),
    statusSosial: "",
    pendidikan: "",
    masterCalonPemilihPotensialId: new Number(),
    masterProvinceId: new Number(),
    masterKabKotId: new Number(),
    masterKecamatanId: new Number(),
    masterDesaId: new Number(),
    masterNomorUrutTPSId: new Number(),
    masterAgamaId: new Number(),
    masterJenisKelaminId: new Number(),
    masterPekerjaanId: new Number(),
  });
  const [dataProvinsi, setIsProvinsi] = useAtom(_provinsi_CalonPP);
  const [selectProvinsi, setSelectProvince] = useAtom(_selectProvinsi_CalonPP);
  const [dataKabkot, setIsKabupaten] = useAtom(_kabkot_CalonPP);
  const [selectKabkot, setSelectKabupaten] = useAtom(_selectKabkot_CalonPP);
  const [dataKecamatan, setIsKecamatan] = useAtom(_kecamatan_CalonPP);
  const [selectKecamatan, setSelectKecamatan] = useAtom(
    _selectKecamatan_CalonPP
  );
  const [dataDesa, setIsDesa] = useAtom(_desa_CalonPP);
  const [selectDesa, setSelectDesa] = useAtom(_selectDesa_CalonPP);
  const [search, setSearch] = useState("");
  const [listDataCPP, setListDataCPP] = useAtom(
    _listData_CalonPemilihPotensial
  );
  const [inputPage, setInputPage] = useAtom(_dataPageCalonPemilihPotensial);
  const [totalPage, setTotalPage] = useAtom(
    _dataTotalPageCalonPemilihPotensial
  );

  useShallowEffect(() => {
    _loadKategoriPemilihPotensial();
    _loadProvinsi();
    _loadListNoTps();
    _loadListPekerjaan();
    _loadSelectProvinsi(
      setIsProvinsi,
      setSelectProvince,
      setIsKabupaten,
      setSelectKabupaten,
      setIsKecamatan,
      setSelectKecamatan,
      setIsDesa,
      setSelectDesa
    );
    _loadJenisKelamin();
    _loadAgama();
  }, []);

  const onNik = () => {
    const maxNIK = 16;
    if (maxNIK <= 16) {
      return "Data Kurang";
    }
  };

  const onCreate = () => {
    // console.log(dataKirim);
    if (Object.values(dataKirim).includes("")) {
      return toast("Lengkapi Data");
    }
    if (dataKirim.nik.length < 16) {
      return toast("NIK Kurang Dari 16 Digit");
    } else {
      if (dataKirim.nik.length > 16) {
        return toast("NIK Lebih Dari 16 Digit");
      }
    }
    // console.log(dataKirim)
    fetch(api.apiCPTPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataKirim),
    }).then(async (res) => {
      if (res.status == 201) {
        thisClosed();
        _loadDataCalonPemilihPotensial_BySearch(search, setListDataCPP, inputPage, setTotalPage);
        _postLogUser(localStorage.getItem("user_id"), "TAMBAH", "User menambah data calon pemilih potensial");
        return toast("Data Tersimpan");
      } else {
        return toast("Data Tidak Tersimpan");
      }
    });
  };

  return (
    <>
      {/* {JSON.stringify(dataProvinsi)} */}
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Tambah Calon Pemilih Potensial
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>
        <Box pt={20}>
          <Box>
            <Flex direction={"column"}>
              <Text fz={10} pl={10}>
                <Text span c={"red"}>
                  **
                </Text>{" "}
                Wajib diisi
              </Text>
            </Flex>
          </Box>
          <SimpleGrid
            mt={20}
            cols={2}
            breakpoints={[
              { maxWidth: 980, cols: 2, spacing: "xl" },
              { maxWidth: 755, cols: 1, spacing: "xl" },
            ]}
          >
            <Box>
              <Select
                data={sKategoriPemilihPotensial.value.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))}
                placeholder="Pilih Kategori Calon Pemilik Potensial"
                label="Pilih Kategori Calon Pemilik Potensial"
                withAsterisk
                onChange={(val: any) =>
                  setDataKirim({
                    ...dataKirim,
                    masterCalonPemilihPotensialId: val,
                  })
                }
              />
              <Box sx={{ fontSize: 10 }} pl={10}>
                <Text>
                  A1 : Pemilih Pasti / Fanatik (Kader, Anggota, Simpatik)
                </Text>
                <Text>
                  A2 : Pemilih Potensial (Keluarga, Saudara, Tetangga)
                </Text>
                <Text>A3 : Pemilih Pragmatis (Karena uang, Koalisi, Dst)</Text>
              </Box>

              <TextInput
                type="number"
                placeholder="NIK"
                label="NIK"
                withAsterisk
                onChange={(val) => {
                  setDataKirim({
                    ...dataKirim,
                    nik: val.target.value,
                  });
                }}
              />

              <TextInput
                placeholder="Nama"
                label="Nama"
                withAsterisk
                onChange={(val) => {
                  setDataKirim({
                    ...dataKirim,
                    nama: val.target.value,
                  });
                }}
              />
              <TextInput
                type="email"
                placeholder="Email"
                label="Email"
                withAsterisk
                onChange={(val) => {
                  setDataKirim({
                    ...dataKirim,
                    email: val.target.value,
                  });
                }}
              />

              <Select
                label="Pilih Provinsi"
                searchable
                clearable
                withAsterisk
                data={
                  _.isEmpty(dataProvinsi)
                    ? []
                    : dataProvinsi.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))
                }
                onChange={(val) => {
                  setSelectProvince(dataProvinsi.find((e) => e.id == val));
                  setDataKirim({
                    ...dataKirim,
                    masterProvinceId: val as any,
                  });
                  _loadSelectKabkot(
                    val as any,
                    setIsKabupaten,
                    setSelectKabupaten
                  );
                }}
                value={selectProvinsi.name}
                placeholder={
                  selectProvinsi.name ? selectProvinsi.name : "Pilih Provinsi"
                }
              />
              <Select
                label="Pilih Kabupaten / Kota"
                withAsterisk
                searchable
                clearable
                data={
                  _.isEmpty(dataKabkot)
                    ? []
                    : dataKabkot.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))
                }
                onChange={(val) => {
                  setSelectKabupaten(dataKabkot.find((e) => e.id === val));
                  setDataKirim({
                    ...dataKirim,
                    masterKabKotId: val as any,
                  });
                  _loadSelectKecamatan(
                    val as any,
                    setIsKecamatan,
                    setSelectKecamatan
                  );
                }}
                value={
                  selectKabkot.name
                    ? selectKabkot.name
                    : "Pilih Kabupaten / Kota"
                }
                placeholder={
                  selectKabkot.name
                    ? selectKabkot.name
                    : "Pilih Kabupaten / Kota"
                }
              />
              {/* {JSON.stringify(typeof dataKabkot)} */}
              <Select
                label="Pilih Kecamatan"
                searchable
                clearable
                withAsterisk
                data={
                  _.isEmpty(dataKecamatan)
                    ? []
                    : dataKecamatan.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))
                }
                onChange={(val) => {
                  setSelectKecamatan(dataKecamatan.find((e) => e.id == val));
                  setDataKirim({
                    ...dataKirim,
                    masterKecamatanId: val as any,
                  });
                  _loadSelectDesa(val as any, setIsDesa, setSelectDesa);
                }}
                value={
                  selectKecamatan.name
                    ? selectKecamatan.name
                    : "Pilih Kecamatan"
                }
                placeholder={
                  selectKecamatan.name
                    ? selectKecamatan.name
                    : "Pilih Kecamatan"
                }
              />

              <Select
                label="Pilih Desa"
                withAsterisk
                searchable
                clearable
                data={
                  _.isEmpty(dataDesa)
                    ? []
                    : dataDesa.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))
                }
                onChange={(val) => {
                  setSelectDesa(dataDesa.find((e) => e.id == val));
                  setDataKirim({
                    ...dataKirim,
                    masterDesaId: val as any,
                  });
                }}
                value={selectDesa.name ? selectDesa.name : "Pilih Desa"}
                placeholder={selectDesa.name ? selectDesa.name : "Pilih Desa"}
              />
              <Select
                data={sListNoTPS.value.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))}
                placeholder="NO TPS"
                label="TPS 01 -50"
                withAsterisk
                searchable
                clearable
                nothingFound="Tidak Ditemukan"
                onChange={(val) => {
                  setDataKirim({
                    ...dataKirim,
                    masterNomorUrutTPSId: val as any,
                  });
                }}
              />
            </Box>

            {/* Form di kanan */}
            <Box>
              <Select
                label="Agama"
                placeholder="Pilih Agama"
                withAsterisk
                data={sAgama.value.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))}
                onChange={(val) => {
                  setDataKirim({
                    ...dataKirim,
                    masterAgamaId: val as any,
                  });
                }}
              />
              <DateInput
                placeholder="Tanggal Lahir"
                label="Tanggal Lahir"
                withAsterisk
                onChange={(val) => {
                  setDataKirim({
                    ...dataKirim,
                    tanggalLahir: moment(val).format("YYYY-MM-DD"),
                  });
                }}
              />
              <TextInput
                type="number"
                placeholder="Nomor Handphone"
                label="Nomor Handphone"
                withAsterisk
                onChange={(val: any) => {
                  setDataKirim({
                    ...dataKirim,
                    phoneNumber: val.target.value,
                  });
                }}
              />
              <Select
                data={sListPekerjaan.value.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))}
                onChange={(val) => {
                  setDataKirim({
                    ...dataKirim,
                    masterPekerjaanId: val as any,
                  });
                }}
                placeholder="Pekerjaan"
                label="Pekerjaan"
                clearable
                nothingFound="Tidak Ditemukan"
                searchable
                withAsterisk
              />

              <Select
                data={sJenisKelamin.value.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))}
                onChange={(val) => {
                  setDataKirim({
                    ...dataKirim,
                    masterJenisKelaminId: val as any,
                  });
                }}
                placeholder="Jenis Kelamin"
                label="Jenis Kelamin"
                withAsterisk
              />
              <TextInput
                placeholder="Alamat"
                label="Alamat"
                withAsterisk
                onChange={(val) => {
                  setDataKirim({
                    ...dataKirim,
                    alamat: val.target.value,
                  });
                }}
              />
              <Select
                label="Pendidikan"
                placeholder="Pendidikan terakhir"
                data={["SD", "SMP", "SMA / SMK", "Perguruan Tinggi"]}
                onChange={(val) => {
                  setDataKirim({
                    ...dataKirim,
                    pendidikan: val as any,
                  });
                }}
              />
              <Select
                label="Status Sosial"
                placeholder="Pilih Status Sosial"
                data={["Menengah Kebawah", "Menengah Keatas", "Berkecukupan"]}
                onChange={(val) => {
                  setDataKirim({
                    ...dataKirim,
                    statusSosial: val as any,
                  });
                }}
              />
              {/* <TextInput
                  placeholder="Facebook"
                  label="Facebook"
                  onChange={(val) => {}}
                />
                <TextInput placeholder="Instargram" label="Instargram" />
                <TextInput placeholder="TikTok" label="TikTok" />
                <TextInput placeholder="Twitter" label="Twitter" /> */}
              <Center>
                <Box mt={50}>
                  <Button
                    w={100}
                    color="orange.9"
                    bg={COLOR.orange}
                    radius={"xl"}
                    onClick={() => {
                      // buttonSimpan();
                      onCreate();
                    }}
                  >
                    Simpan
                  </Button>
                </Box>
              </Center>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default TambahCPTV2;
