import { _loadKategoriPemilihPotensial } from "@/load_data/load_kategori_pemilih_potensial";
import { _loadListNoTps } from "@/load_data/load_list_no_tps";
import {
  _listData_Pekerjaan,
  _loadListPekerjaan,
  _new_loadPekerjaan,
  _select_Pekerjaan,
} from "@/load_data/load_list_pekerjaan";
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
  Input,
  Loader,
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
import COLOR from "../../../../fun/WARNA";
import { useState } from "react";
import { ModelCalonPemilihPotensial } from "@/model/interface_calon_pemilih_potensial";
import { api } from "@/lib/api-backend";
import { useAtom, useSetAtom } from "jotai";
import {
  _desa_CalonPP,
  _kabkot_CalonPP,
  _kecamatan_CalonPP,
  _listData_CalonPemilihPotensial,
  _listKategori_CalonPP,
  _listNoTps_CPP,
  _loadDataCalonPemilihPotensial_BySearch,
  _loadList_KategoriCalonPP,
  _loadList_NoTPS,
  _provinsi_CalonPP,
  _searchData_CalonPemilihPotensial,
  _selectDesa_CalonPP,
  _selectKabkot_CalonPP,
  _selectKategori_CalonPP,
  _selectKecamatan_CalonPP,
  _selectNoTps_CPP,
  _selectProvinsi_CalonPP,
} from "@/load_data/peta_kekuatan/load_calon_pemilih_potensial";
import _ from "lodash";
import {
  _loadSelectDesa,
  _loadSelectKabkot,
  _loadSelectKecamatan,
  _loadSelectProvinsi,
} from "@/load_data/wilayah/load_selected_wilayah";
import {
  _list_Agama,
  _new_LoadAgama,
  _select_Agama,
} from "@/load_data/load_agama";
import moment from "moment";
import { _new_loadJenisKelamin } from "@/load_data/load_jenis_kelamin";
import { _sJenisKelamin } from "@/s_state/s_jenis_kelamin";
import { _selectJenisKelamin } from "@/s_state/s_jenis_kelamin";
import toast from "react-simple-toasts";

const EditCPTV2 = ({ thisClosed, idVal }: { thisClosed: any; idVal: any }) => {
  const [dataEdit, setDataEdit] = useState<ModelCalonPemilihPotensial | null>(
    null
  );
  const [kategoriCPP, setKategoriCPP] = useAtom(_listKategori_CalonPP);
  const [selectKategoriCPP, setSelectKategoriCPP] = useAtom(
    _selectKategori_CalonPP
  );
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
  const [noTPS, setNoTPS] = useAtom(_listNoTps_CPP);
  const [selectNoTPS, setSelectNoTps] = useAtom(_selectNoTps_CPP);
  const [dataAgama, setAgama] = useAtom(_list_Agama);
  const [selectAgama, setSelectAgama] = useAtom(_select_Agama);
  const [dataPekerjaan, setPekerjaan] = useAtom(_listData_Pekerjaan);
  const [selectPekerjaan, setSelectPekerjaan] = useAtom(_select_Pekerjaan);
  const [jenisKelamin, setJenisKelamin] = useAtom(_sJenisKelamin);
  const [selectJenisKelamin, setSelectJenisKelamin] =
    useAtom(_selectJenisKelamin);
  const [inputSearch, setInputSearch] = useAtom(
    _searchData_CalonPemilihPotensial
  );
  const [listDataCPP, setListDataCPP] = useAtom(
    _listData_CalonPemilihPotensial
  );

  useShallowEffect(() => {
    getOne_ListDataCPP_ById(idVal);
    _loadList_KategoriCalonPP(setKategoriCPP, setSelectKategoriCPP);
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
    _loadList_NoTPS(setNoTPS, setSelectNoTps);
    _new_LoadAgama(setAgama, setSelectAgama);
    _new_loadPekerjaan(setPekerjaan, setSelectPekerjaan);
    _new_loadJenisKelamin(setJenisKelamin, setSelectJenisKelamin);
  }, []);

  const getOne_ListDataCPP_ById = async (id: string) => {
    await fetch(api.apiCPTGetOne + `?id=${id}`)
      .then((res) => res.json())
      .then((val) => setDataEdit(val));
  };

  const onEdit = () => {
    const body = {
      id: dataEdit?.id,
      masterCalonPemilihPotensialId: dataEdit?.MasterCalonPemilihPotensial.id,
      masterAgamaId: dataEdit?.MasterAgama.id,
      masterPekerjaanId: dataEdit?.MasterPekerjaan.id,
      masterProvinceId: dataEdit?.MasterProvince.id,
      masterKabKotId: dataEdit?.MasterKabKot.id,
      masterKecamatanId: dataEdit?.MasterKecamatan.id,
      masterDesaId: dataEdit?.MasterDesa.id,
      masterNomorUrutTPSId: dataEdit?.MasterNomorUrutTPS.id,
      masterJenisKelaminId: dataEdit?.MasterJenisKelamin.id,
      nik: dataEdit?.nik,
      nama: dataEdit?.nama,
      email: dataEdit?.email,
      tanggalLahir: dataEdit?.tanggalLahir,
      phoneNumber: dataEdit?.phoneNumber,
      alamat: dataEdit?.alamat,
      statusSosial: dataEdit?.statusSosial,
      pendidikan: dataEdit?.pendidikan,
    };
    if (Object.values(body).includes("")) {
      return toast("Lengkapi Data");
    }
    if ((dataEdit?.nik.length as any) < 16) {
      return toast("NIK Kurang Dari 16 Digit");
    } else {
      if ((dataEdit?.nik.length as any) > 16) {
        return toast("NIK Lebih Dari 16 Digit");
      }
    }

    fetch(api.apiCPTUpdate, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(async (res) => {
      if (res.status === 201) {
        thisClosed();
        _loadDataCalonPemilihPotensial_BySearch(inputSearch, setListDataCPP);
        return buttonSimpan();
      } else {
        return toast("Gagal Update");
      }
    });
  };

  if (!dataEdit)
    return (
      <>
        <Loader />
      </>
    );

  return (
    <>
      {/* {JSON.stringify(dataEdit.tanggalLahir)} */}
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Edit Data Calon Pemilih Potensial
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>
        <Box pt={20}>
          <Box>
            <Flex direction={"column"}>
              <Text fz={10}>
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
                data={
                  _.isEmpty(kategoriCPP)
                    ? []
                    : kategoriCPP.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))
                }
                onChange={(val) => {
                  setSelectKategoriCPP(kategoriCPP.find((e) => e.id == val));
                  const data: any = _.clone(dataEdit);
                  data.MasterCalonPemilihPotensial.id = val;
                  setDataEdit(data);
                  // console.log(data.MasterCalonPemilihPotensial.id);
                }}
                placeholder={dataEdit?.MasterCalonPemilihPotensial.name}
                label="Pilih Kategori Calon Pemilik Potensial"
                withAsterisk
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
                placeholder="NIK"
                label="NIK"
                withAsterisk
                value={dataEdit?.nik}
                onChange={(val) => {
                  const data: any = _.clone(dataEdit);
                  data.nik = val.currentTarget.value;
                  setDataEdit(data);
                }}
              />
              <TextInput
                placeholder="Nama"
                label="Nama"
                withAsterisk
                value={dataEdit.nama}
                onChange={(val) => {
                  const data = _.clone(dataEdit);
                  data.nama = val.currentTarget.value;
                  setDataEdit(data);
                }}
              />
              <TextInput
                placeholder="Email"
                label="Email"
                withAsterisk
                value={dataEdit.email}
                onChange={(val) => {
                  const data = _.clone(dataEdit);
                  data.email = val.currentTarget.value;
                  setDataEdit(data);
                }}
              />

              <Box>
                <Select
                  label="Pilih Provinsi"
                  searchable
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
                    const data: any = _.clone(dataEdit);
                    data.MasterProvince.id = val;
                    setDataEdit(data);
                    _loadSelectKabkot(
                      val as any,
                      setIsKabupaten,
                      setSelectKabupaten
                    );
                  }}
                  value={
                    selectProvinsi.name
                      ? selectProvinsi.name
                      : dataEdit?.MasterProvince.name
                  }
                  placeholder={
                    selectProvinsi.name
                      ? selectProvinsi.name
                      : dataEdit?.MasterProvince.name
                  }
                />
                <Select
                  label="Pilih Kabupaten / Kota"
                  withAsterisk
                  searchable
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
                    const data: any = _.clone(dataEdit);
                    data.MasterKabKot.id = val;
                    setDataEdit(data);
                    _loadSelectKecamatan(
                      val as any,
                      setIsKecamatan,
                      setSelectKecamatan
                    );
                  }}
                  value={
                    selectKabkot.name
                      ? selectKabkot.name
                      : dataEdit?.MasterKabKot.name
                  }
                  placeholder={
                    selectKabkot.name
                      ? selectKabkot.name
                      : dataEdit?.MasterKabKot.name
                  }
                />
                {/* {JSON.stringify(typeof dataKabkot)} */}
                <Select
                  label="Pilih Kecamatan"
                  searchable
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
                    const data: any = _.clone(dataEdit);
                    data.MasterKecamatan.id = val;
                    setDataEdit(data);
                    _loadSelectDesa(val as any, setIsDesa, setSelectDesa);
                  }}
                  value={
                    selectKecamatan.name
                      ? selectKecamatan.name
                      : dataEdit?.MasterKecamatan.name
                  }
                  placeholder={
                    selectKecamatan.name
                      ? selectKecamatan.name
                      : dataEdit?.MasterKecamatan.name
                  }
                />
                <Select
                  label="Pilih Desa"
                  withAsterisk
                  searchable
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
                    const data: any = _.clone(dataEdit);
                    data.MasterDesa.id = val;
                    setDataEdit(data);
                  }}
                  value={
                    selectDesa.name
                      ? selectDesa.name
                      : dataEdit?.MasterDesa.name
                  }
                  placeholder={
                    selectDesa.name
                      ? selectDesa.name
                      : dataEdit?.MasterDesa.name
                  }
                />
              </Box>

              <Select
                data={
                  _.isEmpty(noTPS)
                    ? []
                    : noTPS.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))
                }
                onChange={(val) => {
                  setSelectNoTps(noTPS.find((e) => e.id == val));
                  const data = _.clone(dataEdit);
                  dataEdit.MasterNomorUrutTPS.id = val as any;
                  setDataEdit(data);
                }}
                // value={
                //   selectNoTPS.name
                //     ? selectNoTPS.name
                //     : dataEdit.MasterNomorUrutTPS.name
                // }
                placeholder={
                  selectNoTPS.name
                    ? selectNoTPS.name
                    : dataEdit.MasterNomorUrutTPS.name
                }
                label="TPS 01 -50"
                withAsterisk
                searchable
                nothingFound="Tidak Ditemukan"
              />
            </Box>

            {/* Form bagian kanan */}
            <Box>
              <Select
                label="Agama"
                data={
                  _.isEmpty(dataAgama)
                    ? []
                    : dataAgama.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))
                }
                onChange={(val) => {
                  setSelectAgama(dataAgama.find((e) => e.id == val));
                  const data = _.clone(dataEdit);
                  data.MasterAgama.id = val as any;
                  setDataEdit(data);
                }}
                value={
                  selectAgama.name
                    ? selectAgama.name
                    : dataEdit.MasterAgama.name
                }
                placeholder={
                  selectAgama.name
                    ? selectAgama.name
                    : dataEdit.MasterAgama.name
                }
              />
              <DateInput
                label="Tanggal Lahir"
                withAsterisk
                placeholder={moment(dataEdit.tanggalLahir).format("YYYY-MM-DD")}
                onChange={(val) => {
                  const data = _.clone(dataEdit);
                  data.tanggalLahir = moment(val).format("YYYY-MM-DD")
                  setDataEdit(data);
                }}
              />
              <TextInput
                type="number"
                placeholder="Nomor Handphone"
                label="Nomor Handphone"
                withAsterisk
                value={dataEdit.phoneNumber}
                onChange={(val) => {
                  setDataEdit({
                    ...dataEdit,
                    phoneNumber: val.target.value,
                  });
                }}
              />

              <Select
                label="Pekerjaan"
                nothingFound="Tidak Ditemukan"
                searchable
                withAsterisk
                data={
                  _.isEmpty(dataPekerjaan)
                    ? []
                    : dataPekerjaan.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))
                }
                onChange={(val) => {
                  setSelectPekerjaan(dataPekerjaan.find((e) => e.id == val));
                  const data = _.clone(dataEdit);
                  data.MasterPekerjaan.id = val as any;
                  setDataEdit(data);
                }}
                value={
                  selectPekerjaan.name
                    ? selectPekerjaan.name
                    : dataEdit.MasterPekerjaan.name
                }
                placeholder={
                  selectPekerjaan.name
                    ? selectPekerjaan.name
                    : dataEdit.MasterPekerjaan.name
                }
              />

              <Select
                label="Jenis Kelamin"
                withAsterisk
                data={
                  _.isEmpty(jenisKelamin)
                    ? []
                    : jenisKelamin.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))
                }
                onChange={(val) => {
                  setSelectJenisKelamin(jenisKelamin.find((e) => e.id == val));
                  const data = _.clone(dataEdit);
                  data.MasterJenisKelamin.id = val as any;
                  setDataEdit(data);
                }}
                value={
                  selectJenisKelamin.name
                    ? selectJenisKelamin.name
                    : dataEdit.MasterJenisKelamin.name
                }
                placeholder={
                  selectJenisKelamin.name
                    ? selectJenisKelamin.name
                    : dataEdit.MasterJenisKelamin.name
                }
              />
              <TextInput
                placeholder="Alamat"
                label="Alamat"
                withAsterisk
                value={dataEdit.alamat}
                onChange={(val) => {
                  setDataEdit({
                    ...dataEdit,
                    alamat: val.target.value,
                  });
                }}
              />
              <Select
                label="Pendidikan"
                placeholder="Pendidikan terakhir"
                data={["SD", "SMP", "SMA / SMK", "Perguruan Tinggi"]}
                value={dataEdit.pendidikan}
                onChange={(val) => {
                  setDataEdit({
                    ...dataEdit,
                    pendidikan: val as any,
                  });
                }}
              />
              <Select
                label="Status Sosial"
                placeholder="Pilih Status Sosial"
                value={dataEdit.statusSosial}
                data={["Menengah Kebawah", "Menengah Keatas", "Berkecukupan"]}
                onChange={(val) => {
                  setDataEdit({
                    ...dataEdit,
                    statusSosial: val as any,
                  });
                }}
              />
              {/* <TextInput placeholder="Facebook" label="Facebook" />
              <TextInput placeholder="Instargram" label="Instargram" />
              <TextInput placeholder="TikTok" label="TikTok" />
              <TextInput placeholder="Twitter" label="Twitter" /> */}
              <Center>
                <Box mt={40}>
                  <Button
                    w={100}
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
              </Center>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default EditCPTV2;
