import {
  _listChangeData,
  _loadEditStuktur_ById,
  _new_loadEditByModel,
} from "@/load_data/sumber_daya_partai/load_edit_sumber_daya_partai";
import { useShallowEffect } from "@mantine/hooks";
import { useAtom } from "jotai";
import { _editDataStruktur } from "./table_struktur_partai";
import {
  Box,
  Button,
  Grid,
  Loader,
  Paper,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import _ from "lodash";
import COLOR from "../../../../fun/WARNA";
import { _sJenisKelamin, _selectJenisKelamin } from "@/s_state/s_jenis_kelamin";
import {
  _provinsi,
  _selected_Provinisi,
  _kabupaten,
  _selected_Kabkot,
  _kecamatan,
  _selected_Kecamatan,
  _desa,
  _selected_Desa,
} from "@/s_state/wilayah/select_wilayah";
import { _loadAgama } from "@/load_data/load_agama";
import { _new_loadJenisKelamin } from "@/load_data/load_jenis_kelamin";
import { _loadListPekerjaan } from "@/load_data/load_list_pekerjaan";
import {
  _loadJabatanDewanPembina,
  _loadJabatanDewanPimpinanPusat,
  _loadJabatanDewanPimpinanDaerah,
  _loadJabatanDewanPimpinanCabang,
  _loadJabatanPimpinanAnakCabang,
  _loadJabatanPimpinanRanting,
  _loadJabtanPerwakilanLuarNegeri,
} from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { _loadStatusKeanggotaan } from "@/load_data/sumber_daya_partai/load_status_keanggotaan";
import {
    _editTingkatPengurus,
  _loadTingkatPengurus,
  _new_loadTingkatPengurus,
  _selectTingkatPengurus,
  _tingkatPengurus,
} from "@/load_data/sumber_daya_partai/load_tingkat_pengurus";
import {
  _loadSelectDesa,
  _loadSelectKabkot,
  _loadSelectKecamatan,
  _loadSelectProvinsi,
} from "@/load_data/wilayah/load_selected_wilayah";
import { sTingkatPengurus } from "@/s_state/sumber_daya_partai/s_tingkat_pengurus";
import { useState } from "react";
import {
  sJabatanDewanPembina,
  sJabatanDewanPimpinanCabang,
  sJabatanDewanPimpinanDaerah,
  sJabatanDewanPimpinanPusat,
  sJabatanPerwakilanLuarNegeri,
  sJabatanPimpinanAnakCabang,
  sJabatanPimpinanRanting,
} from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";

export const EditStrukturV2 = (thisClosed: any) => {
  const [targetStruktur, setTargetStruktur] = useAtom(_editDataStruktur);
  const [targetEdit, setTargetEdit] = useAtom(_editTingkatPengurus);
  const [changeData, setChangeData] = useAtom(_listChangeData);
  const [isProvinsi, setIsProvinsi] = useAtom(_provinsi);
  const [selectProvince, setSelectProvince] = useAtom(_selected_Provinisi);
  const [isKabupaten, setIsKabupaten] = useAtom(_kabupaten);
  const [selectKabupaten, setSelectKabupaten] = useAtom(_selected_Kabkot);
  const [isKecamatan, setIsKecamatan] = useAtom(_kecamatan);
  const [selectKecamatan, setSelectKecamatan] = useAtom(_selected_Kecamatan);
  const [isDesa, setIsDesa] = useAtom(_desa);
  const [selectDesa, setSelectDesa] = useAtom(_selected_Desa);
  const [isJenisKelamin, setIsJenisKelamin] = useAtom(_sJenisKelamin);
  const [selectJenisKelamin, setSelectJenisKelamin] =
    useAtom(_selectJenisKelamin);
  const [isJabatan, setJabatan] = useState<any>();
  const [tingkatPengurus, setTingkatPengurus] = useAtom(_tingkatPengurus);
  const [selectTingkatPengurus, setSelectTingkatPengurus] = useAtom(
    _selectTingkatPengurus
  );

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
    _new_loadJenisKelamin(setIsJenisKelamin, setSelectJenisKelamin);
    _loadEditStuktur_ById(targetStruktur, setTargetEdit);
    _new_loadTingkatPengurus(setTingkatPengurus, setSelectTingkatPengurus);
  }, []);

  const onEdit = async () => {
    console.log(targetEdit);
    const body = {
      userId: targetEdit?.userId,
      masterStatusKeanggotaanId: null,
      masterTingkatPengurusId: targetEdit?.masterTingkatPengurusId,
      masterJabatanId: targetEdit?.masterJabatanId,
      masterJabatanDewanPembinaId: targetEdit?.masterJabatanDewanPembinaId,
      masterJabatanDewanPimpinanPusatId:
        targetEdit?.masterJabatanDewanPimpinanPusatId,
      masterJabatanDewanPimpinanDaerahId:
        targetEdit?.masterJabatanDewanPimpinanDaerahId,
      masterJabatanDewanPimpinanCabangId:
        targetEdit?.masterJabatanDewanPimpinanCabangId,
      masterJabatanPimpinanAnakCabangId:
        targetEdit?.masterJabatanPimpinanAnakCabangId,
      masterJabatanPimpinanRantingId: targetEdit?.masterJabatanPimpinanRantingId,
      masterJabatanPerwakilanPartaiDiLuarNegeriId:
        targetEdit?.masterJabatanPerwakilanPartaiDiLuarNegeriId,
      masterSayapPartaiId: targetEdit?.masterSayapPartaiId,
      masterKaderPartaiId: targetEdit?.masterKaderPartaiId,
      masterProvinceId: targetEdit?.masterProvinceId,
      masterKabKotId: targetEdit?.masterKabKotId,
      masterKecamatanId: targetEdit?.masterKecamatanId,
      masterDesaId: targetEdit?.masterDesaId,
      masterNegaraId: targetEdit?.masterNegaraId,
      alamatKantor: targetEdit?.alamatKantor,
      waAdmin: targetEdit?.waAdmin,
    };
    await fetch("/api/sumber-daya-partai/sumber-daya-partai-update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  if (!targetEdit)
    return (
      <>
        <Loader />
      </>
    );

  return (
    <>
      {/* {JSON.stringify(targetStruktur, null, "\t")} */}
      {/* {JSON.stringify(changeData)} */}

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
        <Box pt={30}>
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
        </Box>
        {/* DATA DIRI */}
        {/* <Box pt={10}>
          <TextInput
            label="Nama"
            placeholder={targetEdit?.User.DataDiri.name}
            onChange={(val) => {
              const data = _.clone(targetEdit);
              data.User.DataDiri.name = val.target.value;
              setChangeData(data);
            }}
          />
          <Select
            label="Jenis Kelamin"
            searchable
            value={
              selectJenisKelamin.name
                ? selectJenisKelamin.name
                : targetEdit?.User.DataDiri.MasterJenisKelamin.name
            }
            placeholder={
              selectJenisKelamin.name
                ? selectJenisKelamin.name
                : targetEdit?.User.DataDiri.MasterJenisKelamin.name
            }
            data={isJenisKelamin.map((e) => ({
              value: e.id,
              label: e.name,
            }))}
            onChange={(val) => {
              const data: any = _.clone(targetEdit);
              data.User.DataDiri.MasterJenisKelamin = val;
              setChangeData(data);
              setSelectJenisKelamin(isJenisKelamin.find((e) => e.id == val));
            }}
          />
        </Box> */}
        {/* DATA WILAYAH */}
        {/* <Box>
          <Select
            label="Pilih Provinsi"
            searchable
            value={
              selectProvince.name
                ? selectProvince.name
                : targetEdit.User.DataDiri.MasterProvince.name
            }
            placeholder={
              selectProvince.name
                ? selectProvince.name
                : targetEdit.User.DataDiri.MasterProvince.name
            }
            data={isProvinsi.map((e) => ({
              value: e.id,
              label: e.name,
            }))}
            onChange={(val: any) => {
              const data = _.clone(targetEdit);
              data.User.DataDiri.MasterProvince = val;
              setChangeData(data);
              setSelectProvince(isProvinsi.find((e) => e.id == val));
              _loadSelectKabkot(val, setIsKabupaten, setSelectKabupaten);
            }}
          />

          <Select
            label="Pilih Kabupaten / Kota"
            searchable
            value={
              selectKabupaten.name
                ? selectKabupaten.name
                : targetEdit.User.DataDiri.MasterKabKot.name
            }
            placeholder={
              selectKabupaten.name
                ? selectKabupaten.name
                : targetEdit.User.DataDiri.MasterKabKot.name
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
              const data = _.clone(targetEdit);
              data.User.DataDiri.MasterKabKot = val;
              setChangeData(data);
              setSelectKabupaten(isKabupaten.find((e) => e.id == val));
              _loadSelectKecamatan(val, setIsKecamatan, setSelectKecamatan);
            }}
          />

          <Select
            label="Pilih Kecamatan"
            searchable
            value={
              selectKecamatan.name
                ? selectKecamatan.name
                : targetEdit.User.DataDiri.MasterKecamatan.name
            }
            placeholder={
              selectKecamatan.name
                ? selectKecamatan.name
                : targetEdit.User.DataDiri.MasterKecamatan.name
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
              const data = _.clone(targetEdit);
              data.User.DataDiri.MasterKecamatan = val;
              setChangeData(data);
              setSelectKecamatan(isKecamatan.find((e) => e.id == val));
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
                : targetEdit.User.DataDiri.MasterDesa.name
            }
            placeholder={
              selectDesa.name
                ? selectDesa.name
                : targetEdit.User.DataDiri.MasterDesa.name
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
              const data = _.clone(targetEdit);
              data.User.DataDiri.MasterDesa = val;
              setChangeData(data);
              setSelectDesa(isDesa.find((e) => e.id == val));
            }}
          />
          <TextInput placeholder="RT - __, RW - __" label="RT / RW" />
        </Box> */}
        {/* STATUS KENAGGOATAAN */}
        <Box pt={50}>
            
          {/* <Select
            label="Ex T.Pengurus"
            value={
              selectTingkatPengurus?.name
                ? selectTingkatPengurus?.name
                : targetEdit.masterTingkatPengurusId
            }
            placeholder={
              selectTingkatPengurus?.name
                ? selectTingkatPengurus?.name
                : targetEdit.MasterTingkatPengurus.name
            }
            data={tingkatPengurus.map((e) => ({
              value: e.id,
              label: e.name,
            }))}
            onChange={(val: any) => {
              const data = _.clone(targetEdit);
              data.MasterTingkatPengurus.name = val;
              setChangeData(data);
              setSelectTingkatPengurus(
                tingkatPengurus.find((e) => e.id == val)
              );

          
            }}
          /> */}

          {/* <Select
            value={targetEdit.MasterTingkatPengurus.name}
            label="Pilih Tingkat Pengurus"
            // placeholder={targetStruktur.MasterTingkatPengurus.name}
            nothingFound="No options"
            withAsterisk
            data={sTingkatPengurus.value.map((e) => ({
              value: e.id,
              label: e.name,
            }))}
            onChange={(val) => {
              // console.log(sTingkatPengurus.value)
              if (val == "1") {
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
                    onChange={(val) => {}}
                  />
                );
              } else {
                if (val == "2") {
                  setJabatan(
                    <Select
                      label="Pilih Jabatan D. Pimpinan Pusat"
                      placeholder="Pilih Jabatan"
                      nothingFound="No options"
                      withAsterisk
                      data={sJabatanDewanPimpinanPusat.value.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))}
                      onChange={(val) => {}}
                    />
                  );
                } else {
                  if (val == "3") {
                    //   formEditStrukturPartai.values.data.tingkatPengurus =
                    //     val!;
                    setJabatan(
                      <Select
                        label="Pilih Jabatan D. Pimpinan Daerah"
                        placeholder="Pilih Jabatan"
                        nothingFound="No options"
                        withAsterisk
                        data={sJabatanDewanPimpinanDaerah.value.map((e) => ({
                          value: e.id,
                          label: e.name,
                        }))}
                        onChange={(val) => {}}
                      />
                    );
                  } else {
                    if (val == "4") {
                      setJabatan(
                        <Select
                          label="Pilih Jabatan D. Pimpinan Cabang"
                          placeholder="Pilih Jabatan"
                          nothingFound="No options"
                          withAsterisk
                          data={sJabatanDewanPimpinanCabang.value.map((e) => ({
                            value: e.id,
                            label: e.name,
                          }))}
                          onChange={(val) => {}}
                        />
                      );
                    } else {
                      if (val == "5") {
                        setJabatan(
                          <Select
                            label="Pilih Jabatan P. Anak Cabang"
                            placeholder="Pilih Jabatan"
                            nothingFound="No options"
                            withAsterisk
                            data={sJabatanPimpinanAnakCabang.value.map((e) => ({
                              value: e.id,
                              label: e.name,
                            }))}
                            onChange={(val) => {}}
                          />
                        );
                      } else {
                        if (val == "6") {
                          setJabatan(
                            <Select
                              label="Pilih Jabatan P. Ranting"
                              placeholder="Pilih Jabatan"
                              nothingFound="No options"
                              withAsterisk
                              data={sJabatanPimpinanRanting.value.map((e) => ({
                                value: e.id,
                                label: e.name,
                              }))}
                              onChange={(val) => {}}
                            />
                          );
                        } else {
                          if (val == "7") {
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
                                onChange={(val) => {}}
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
          /> */}
          {isJabatan && isJabatan}
        </Box>
      </Box>
    </>
  );
};
