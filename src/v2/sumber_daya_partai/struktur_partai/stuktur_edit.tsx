import {
  Box,
  Button,
  Grid,
  Loader,
  Paper,
  Select,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import COLOR from "../../../../fun/WARNA";
import { useAtom } from "jotai";
import { _editDataStruktur } from "./table_struktur_partai";
import { useShallowEffect } from "@mantine/hooks";
import {
  _dataStruktur,
  _dataStrukturTable_ByStatusSearch,
  _listChangeData,
  _loadDataStruktur_ByIdStatus,
  _loadData_ByStatus_BySeach,
  _loadEditSumberDayaPartai_ById,
  _editLoadStruktur_ByStatusSeacrh,
  _new_loadEditByModel,
  _searchDataSumberDayaPartai,
} from "@/load_data/sumber_daya_partai/load_edit_sumber_daya_partai";
import {
  _editTingkatPengurus,
  _new_loadTingkatPengurus,
  _selectTingkatPengurus_Struktur,
  _tingkatPengurus_Struktur,
} from "@/load_data/sumber_daya_partai/load_tingkat_pengurus";
import _ from "lodash";
import { ModelTingkatPengurus } from "@/model/interface_tingkat_pengurus";
import { useState } from "react";
import {
  _dewanPembina,
  _pimpinanAnakCabang as _pimpinanAnakCabang,
  _dewanPimpinanCabang,
  _dewanPimpinanDaerah,
  _dewanPimpinanPusat,
  _new_loadJabatanDewanPembina,
  _new_loadJabatanDewanPimpinanCabang,
  _new_loadJabatanDewanPimpinanDaerah,
  _new_loadJabatanDewanPimpinanPusat,
  _new_loadJabatanPimpinanAnakCabang,
  _selectDewabPimpinanCabang,
  _selectDewanPembina,
  _selectDewanPimpinanDaerah,
  _selectDewanPimpinanPusat,
  _selectPimpinanAnakCabang,
  _pimpinanRanting as _pimpinanRanting,
  _selectPimpinanRanting,
  _new_loadJabatanPimpinanRanting,
  _perwakilanLuarNegeri,
  _selectPerwakilanLuarNegeri,
  _new_loadPerwakilanLuarNegeri,
} from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { api } from "@/lib/api-backend";
import { buttonSimpan } from "@/v2/component/button-toast";
import { _postLogUser } from "@/load_data/log_user/post_log_user";

export const StrukturEditV2 = ({ thisClosed }: { thisClosed: any }) => {
  const [dataTable, setDataTable] = useAtom(_dataStrukturTable_ByStatusSearch);
  const [search, setSearch] = useState("");
  const [targetStruktur, setTargetStruktur] = useAtom(_new_loadEditByModel);
  const [targetEdit, setTargetEdit] = useAtom(_editLoadStruktur_ByStatusSeacrh);
  const [tingkatPengurus, setTingkatPengurus] = useAtom(
    _tingkatPengurus_Struktur
  );
  const [selectTingkatPengurus, setSelectTingkatPengurus] = useAtom(
    _selectTingkatPengurus_Struktur
  );
  const [changeData, setChangeData] = useAtom(_listChangeData);
  // List dan Select Jabatan
  const [listJabatan_DPembina, setListJabatan_DPembina] =
    useAtom(_dewanPembina);
  const [selectDPembina, setSelectDPembina] = useAtom(_selectDewanPembina);
  const [listJabatan_DPimpinanPusat, setListJabatan_DPimpinanPusat] =
    useAtom(_dewanPimpinanPusat);
  const [select_DPimpinanPusat, setSelect_DPimpinanPusat] = useAtom(
    _selectDewanPimpinanPusat
  );
  const [listJabatan_DPimpinanDaerah, setListJabatan_DPimpinanDaerah] =
    useAtom(_dewanPimpinanDaerah);
  const [select_DPimpinanDaerah, setSelect_DPimpinanDaerah] = useAtom(
    _selectDewanPimpinanDaerah
  );
  const [listJabatan_DPimpinanCabang, setList_DPimpinanCabang] =
    useAtom(_dewanPimpinanCabang);
  const [select_DPimpinanCabang, setSelect_DPimpinanCabang] = useAtom(
    _selectDewabPimpinanCabang
  );
  const [listJabatan_PAnakCabang, setListJabatan_PAnakCabang] =
    useAtom(_pimpinanAnakCabang);
  const [select_PAnakCabang, setSelect_PAnakCabang] = useAtom(
    _selectPimpinanAnakCabang
  );
  const [listJabatan_PRanting, setListJabatan_PRanting] =
    useAtom(_pimpinanRanting);
  const [select_PRanting, setSelect_PRanting] = useAtom(_selectPimpinanRanting);
  const [
    listJabatan_PerwakilanLuarNegeri,
    setListJabatan_PerwakilanLuarNegeri,
  ] = useAtom(_perwakilanLuarNegeri);
  const [select_PerwakilanLuarNegeri, setSelect_PerwakilanLuarNegeri] = useAtom(
    _selectPerwakilanLuarNegeri
  );
  const [inputSearch, setInputSearch] = useAtom(_searchDataSumberDayaPartai)

  useShallowEffect(() => {
    _loadEditSumberDayaPartai_ById(targetStruktur, setTargetEdit);
    _new_loadTingkatPengurus(setTingkatPengurus, setSelectTingkatPengurus);
    _new_loadJabatanDewanPembina(setListJabatan_DPembina, setSelectDPembina);
    _new_loadJabatanDewanPimpinanPusat(
      setListJabatan_DPimpinanPusat,
      setSelect_DPimpinanPusat
    );
    _new_loadJabatanDewanPimpinanDaerah(
      setListJabatan_DPimpinanDaerah,
      setSelect_DPimpinanDaerah
    );
    _new_loadJabatanDewanPimpinanCabang(
      setList_DPimpinanCabang,
      setSelect_DPimpinanCabang
    );
    _new_loadJabatanPimpinanAnakCabang(
      setListJabatan_PAnakCabang,
      setSelect_PAnakCabang
    );
    _new_loadJabatanPimpinanRanting(
      setListJabatan_PRanting,
      setSelect_PRanting
    );
    _new_loadPerwakilanLuarNegeri(
      setListJabatan_PerwakilanLuarNegeri,
      setSelect_PerwakilanLuarNegeri
    );
  }, []);

  const onEdit = () => {
    thisClosed();
    buttonSimpan();
    const body = {
      id: targetEdit?.id!,
      userId: targetEdit?.User.id!,
      masterStatusKeanggotaanId: 1,
      masterTingkatPengurusId: targetEdit?.MasterTingkatPengurus.id!,
      masterJabatanId: targetEdit?.MasterJabatan!,
      masterJabatanDewanPembinaId: targetEdit?.MasterJabatanDewanPembina?.id!,
      masterJabatanDewanPimpinanPusatId:
        targetEdit?.MasterJabatanDewanPimpinanPusat?.id!,
      masterJabatanDewanPimpinanDaerahId:
        targetEdit?.MasterJabatanDewanPimpinanDaerah?.id!,
      masterJabatanDewanPimpinanCabangId:
        targetEdit?.MasterJabatanDewanPimpinanCabang?.id!,
      masterJabatanPimpinanAnakCabangId:
        targetEdit?.MasterJabatanPimpinanAnakCabang?.id!,
      masterJabatanPimpinanRantingId:
        targetEdit?.MasterJabatanPimpinanRanting?.id!,
      masterJabatanPerwakilanPartaiDiLuarNegeriId:
        targetEdit?.MasterJabatanPerwakilanPartaiDiLuarNegeri?.id!,
      masterSayapPartaiId: targetEdit?.MasterSayapPartai?.id!,
      masterKaderPartaiId: targetEdit?.MasterKaderPartai?.id!,
      masterProvinceId: targetEdit?.MasterProvince?.id!,
      masterKabKotId: targetEdit?.MasterKabKot?.id!,
      masterKecamatanId: targetEdit?.MasterKecamatan?.id!,
      masterDesaId: targetEdit?.MasterDesa?.id!,
      masterNegaraId: targetEdit?.MasterNegara?.id!,
      alamatKantor: targetEdit?.alamatKantor!,
      waAdmin: targetEdit?.waAdmin!,
    };
    // console.log(body);

    fetch(api.apiSumberDayaPartaiUpdate, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())

      .then(async (val) => _loadData_ByStatus_BySeach(1, inputSearch, setDataTable));
      _postLogUser(localStorage.getItem("user_id"), "UBAH", "User mengubah data struktur partai")

  };

  if (!targetEdit)
    return (
      <>
        <Loader />
      </>
    );

  return (
    <>
      {/* <pre>{JSON.stringify(targetEdit, null, "\t")}</pre> */}
      {/* {JSON.stringify(listJabatan_PRanting)} */}
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
        <Box pt={"xl"}>
          <Box w={100}>
            <Button
              sx={{
                position: "relative",
                bottom: 10,
              }}
              fullWidth
              color="orange.9"
              bg={COLOR.orange}
              radius={"xl"}
              onClick={(val) => {
                onEdit();
              }}
            >
              Simpan
            </Button>
          </Box>
        </Box>
        <Box>
          <TextInput
            label="Nama"
            disabled
            value={targetEdit.User.DataDiri.name}
          />
          <Select
            maxDropdownHeight={150}
            disabled
            label="Tingkat Pengurus"
            value={
              selectTingkatPengurus?.id
                ? selectTingkatPengurus?.id
                : targetEdit.MasterTingkatPengurus.name
            }
            placeholder={
              selectTingkatPengurus?.id
                ? selectTingkatPengurus?.id
                : targetEdit.MasterTingkatPengurus.name
            }
            data={tingkatPengurus.map((e) => ({
              value: e.id,
              label: e.name,
            }))}
            onChange={(val) => {
              // console.log(val)
              setSelectTingkatPengurus(
                tingkatPengurus.find((e) => e.id == val)
              );
              const dataT: any = _.clone(targetEdit);
              dataT.MasterTingkatPengurus.id = val;
              setChangeData(targetEdit);
            }}
          />
          {(() => {
            let dataTarget = targetEdit;

            if (dataTarget.MasterTingkatPengurus.id == 1) {
              return (
                <>
                  <Select
                    maxDropdownHeight={200}
                    label="Jabatan Dewan Pembina"
                    value={
                      selectDPembina?.name
                        ? selectDPembina.name
                        : targetEdit.MasterJabatanDewanPembina?.name
                    }
                    placeholder={
                      selectDPembina?.name
                        ? selectDPembina.name
                        : targetEdit.MasterJabatanDewanPembina?.name
                    }
                    data={listJabatan_DPembina.map((e) => ({
                      value: e.id,
                      label: e.name,
                    }))}
                    onChange={(val) => {
                      setSelectDPembina(
                        listJabatan_DPembina.find((e) => e.id == val)
                      );
                      const data1: any = _.clone(targetEdit);
                      data1.MasterJabatanDewanPembina.id = val;
                      setChangeData(targetEdit);
                      // console.log(data1);
                    }}
                  />
                </>
              );
            } else {
              if (dataTarget.MasterTingkatPengurus.id == 2) {
                return (
                  <>
                    <Select
                      maxDropdownHeight={200}
                      label="Jabatan Dewan Pimpinan Pusat"
                      value={
                        select_DPimpinanPusat?.name
                          ? select_DPimpinanPusat.name
                          : targetEdit.MasterJabatanDewanPimpinanPusat?.name
                      }
                      placeholder={
                        select_DPimpinanPusat?.name
                          ? select_DPimpinanPusat.name
                          : targetEdit.MasterJabatanDewanPimpinanPusat?.name
                      }
                      data={listJabatan_DPimpinanPusat.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))}
                      onChange={(val) => {
                        setSelect_DPimpinanPusat(
                          listJabatan_DPimpinanPusat.find((e) => e.id == val)
                        );
                        const data2: any = _.clone(targetEdit);
                        data2.MasterJabatanDewanPimpinanPusat.id = val;
                        setChangeData(targetEdit);
                      }}
                    />
                  </>
                );
              } else {
                if (dataTarget.MasterTingkatPengurus.id == 3) {
                  return (
                    <>
                      <Select
                        label="Jabatan Pimpinan Daerah"
                        maxDropdownHeight={200}
                        value={
                          select_DPimpinanDaerah.name
                            ? select_DPimpinanDaerah.name
                            : targetEdit.MasterJabatanDewanPimpinanDaerah?.name
                        }
                        placeholder={
                          select_DPimpinanDaerah.name
                            ? select_DPimpinanDaerah.name
                            : targetEdit.MasterJabatanDewanPimpinanDaerah?.name
                        }
                        data={listJabatan_DPimpinanDaerah.map((e) => ({
                          value: e.id,
                          label: e.name,
                        }))}
                        onChange={(val) => {
                          setSelect_DPimpinanDaerah(
                            listJabatan_DPimpinanDaerah.find((e) => e.id == val)
                          );
                          //   console.log(val)
                          const data3: any = _.clone(targetEdit);
                          data3.MasterJabatanDewanPimpinanDaerah.id = val;
                          setChangeData(targetEdit);
                        }}
                      />
                    </>
                  );
                } else {
                  if (dataTarget.MasterTingkatPengurus.id == 4) {
                    return (
                      <>
                        <Select
                          label="Jabatan Dewan Pimpinan Cabang"
                          maxDropdownHeight={200}
                          value={
                            select_DPimpinanCabang.name
                              ? select_DPimpinanCabang.name
                              : targetEdit.MasterJabatanDewanPimpinanCabang
                                  ?.name
                          }
                          placeholder={
                            select_DPimpinanCabang.name
                              ? select_DPimpinanCabang.name
                              : targetEdit.MasterJabatanDewanPimpinanCabang
                                  ?.name
                          }
                          data={listJabatan_DPimpinanCabang.map((e) => ({
                            value: e.id,
                            label: e.name,
                          }))}
                          onChange={(val) => {
                            setSelect_DPimpinanCabang(
                              listJabatan_DPimpinanCabang.find(
                                (e) => e.id == val
                              )
                            );
                            //   console.log(val)
                            const data4: any = _.clone(targetEdit);
                            data4.MasterJabatanDewanPimpinanCabang.id = val;
                            setChangeData(targetEdit);
                          }}
                        />
                      </>
                    );
                  } else {
                    if (dataTarget.MasterTingkatPengurus.id == 5) {
                      return (
                        <>
                          <Select
                            label="Jabatan Pimpinan Anak Cabang"
                            maxDropdownHeight={200}
                            value={
                              select_PAnakCabang.name
                                ? select_PAnakCabang.name
                                : targetEdit.MasterJabatanPimpinanAnakCabang
                                    ?.name
                            }
                            placeholder={
                              select_PAnakCabang.name
                                ? select_PAnakCabang.name
                                : targetEdit.MasterJabatanPimpinanAnakCabang
                                    ?.name
                            }
                            data={listJabatan_PAnakCabang.map((e) => ({
                              value: e.id,
                              label: e.name,
                            }))}
                            onChange={(val) => {
                              setSelect_PAnakCabang(
                                listJabatan_PAnakCabang.find((e) => e.id == val)
                              );
                              //   console.log(val)
                              const data5: any = _.clone(targetEdit);
                              data5.MasterJabatanPimpinanAnakCabang.id = val;
                              setChangeData(targetEdit);
                            }}
                          />
                        </>
                      );
                    } else {
                      if (dataTarget.MasterTingkatPengurus.id == 6) {
                        return (
                          <>
                            <Select
                              label="Jabatan Pimpinan Ranting"
                              maxDropdownHeight={200}
                              value={
                                select_PRanting.name
                                  ? select_PRanting.name
                                  : targetEdit.MasterJabatanPimpinanRanting
                                      ?.name
                              }
                              placeholder={
                                select_PRanting.name
                                  ? select_PRanting.name
                                  : targetEdit.MasterJabatanPimpinanRanting
                                      ?.name
                              }
                              data={listJabatan_PRanting.map((e) => ({
                                value: e.id,
                                label: e.name,
                              }))}
                              onChange={(val) => {
                                setSelect_PRanting(
                                  listJabatan_PRanting.find((e) => e.id == val)
                                );
                                //   console.log(val)
                                const data6: any = _.clone(targetEdit);
                                data6.MasterJabatanPimpinanRanting.id = val;
                                setChangeData(targetEdit);
                              }}
                            />
                          </>
                        );
                      } else {
                        if (dataTarget.MasterTingkatPengurus.id == 7) {
                          return (
                            <>
                              <Select
                                label="Jabatan Perwakilan Partai di Luar Negeri"
                                maxDropdownHeight={200}
                                value={
                                  select_PerwakilanLuarNegeri.name
                                    ? select_PerwakilanLuarNegeri.name
                                    : targetEdit
                                        .MasterJabatanPerwakilanPartaiDiLuarNegeri
                                        ?.name
                                }
                                placeholder={
                                  select_PerwakilanLuarNegeri.name
                                    ? select_PerwakilanLuarNegeri.name
                                    : targetEdit
                                        .MasterJabatanPerwakilanPartaiDiLuarNegeri
                                        ?.name
                                }
                                data={listJabatan_PerwakilanLuarNegeri.map(
                                  (e) => ({
                                    value: e.id,
                                    label: e.name,
                                  })
                                )}
                                onChange={(val) => {
                                  setSelect_PerwakilanLuarNegeri(
                                    listJabatan_PerwakilanLuarNegeri.find(
                                      (e) => e.id == val
                                    )
                                  );
                                  //   console.log(val)
                                  const data7: any = _.clone(targetEdit);
                                  data7.MasterJabatanPerwakilanPartaiDiLuarNegeri.id =
                                    val;
                                  setChangeData(targetEdit);
                                }}
                              />
                            </>
                          );
                        } else {
                          return (
                            <>
                              <Text>undefined</Text>
                            </>
                          );
                        }
                      }
                    }
                  }
                }
              }
            }
            return (
              <>
                <Loader />
              </>
            );
          })()}
        </Box>
      </Box>
    </>
  );
};
