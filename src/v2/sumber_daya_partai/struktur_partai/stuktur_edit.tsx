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
  _listChangeData,
  _loadDataStruktur_ByIdStatus,
  _loadEditStuktur_ById,
  _new_loadEditByModel,
  _new_loadEditByModel2,
} from "@/load_data/sumber_daya_partai/load_edit_sumber_daya_partai";
import {
  _editTingkatPengurus,
  _new_loadTingkatPengurus,
  _selectTingkatPengurus,
  _tingkatPengurus,
} from "@/load_data/sumber_daya_partai/load_tingkat_pengurus";
import _ from "lodash";
import { ModelTingkatPengurus } from "@/model/interface_tingkat_pengurus";
import { useState } from "react";
import {
  _dewanPembina,
  _dewanPimpinanDaerah,
  _dewanPimpinanPusat,
  _new_loadJabatanDewanPembina,
  _new_loadJabatanDewanPimpinanDaerah,
  _new_loadJabatanDewanPimpinanPusat,
  _selectDewanPembina,
  _selectDewanPimpinanDaerah,
  _selectDewanPimpinanPusat,
} from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { api } from "@/lib/api-backend";

export const StrukturEditV2 = ({ thisClosed }: { thisClosed: any }) => {
  const [dataStuktur, setDataStruktur] = useAtom(_dataStruktur);
  const [targetStruktur, setTargetStruktur] = useAtom(_new_loadEditByModel);
  const [targetEdit, setTargetEdit] = useAtom(_new_loadEditByModel2);
  const [tingkatPengurus, setTingkatPengurus] = useAtom(_tingkatPengurus);
  const [selectTingkatPengurus, setSelectTingkatPengurus] = useAtom(
    _selectTingkatPengurus
  );
  const [changeData, setChangeData] = useAtom(_listChangeData);
  const [ubahTingkat, setUbahTingkat] = useState<any>("");
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

  useShallowEffect(() => {
    _loadEditStuktur_ById(targetStruktur, setTargetEdit);
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
  }, []);

  const onEdit = () => {
    thisClosed()
    const body : ModelTingkatPengurus= {
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
      masterJabatanDewanPimpinanCabangId: targetEdit?.MasterJabatanDewanPimpinanCabang?.id!,
      masterJabatanPimpinanAnakCabangId: targetEdit?.MasterJabatanPimpinanAnakCabang?.id!,
      masterJabatanPimpinanRantingId: targetEdit?.MasterJabatanPimpinanRanting?.id!,
      masterJabatanPerwakilanPartaiDiLuarNegeriId: targetEdit?.MasterJabatanPerwakilanPartaiDiLuarNegeri?.id!,
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
      .then((val) => (_loadDataStruktur_ByIdStatus(1, setDataStruktur)));
      
  };

  if (!targetEdit)
    return (
      <>
        <Loader />
      </>
    );

  return (
    <>
      {/* {JSON.stringify(targetEdit, null, "\t")} */}
      {/* {JSON.stringify(targetEdit.User.id)} */}
      {/* {JSON.stringify(listJabatan_DPimpinanDaerah, null, "\t")} */}
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
          {/* <TextInput
            label="Name"
            value={targetEdit.User.DataDiri.name}
            onChange={(val) => {
              const data = _.clone(targetEdit);
              data.User.DataDiri.name = val.target.value;
              setChangeData(data);
            }}
          /> */}
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
                }
              }
            }
            return <></>;
          })()}

          {/* {(() => {
            let dataTarget = targetEdit;

            if (dataTarget.MasterTingkatPengurus.name == "Dewan Pembina") {
              return (
                <>
                  <Select
                    maxDropdownHeight={150}
                    // disabled
                    label="Tingkat Pengurus"
                    value={
                      selectTingkatPengurus?.name
                        ? selectTingkatPengurus.name
                        : targetEdit.MasterTingkatPengurus.name
                    }
                    placeholder={
                      selectTingkatPengurus?.name
                        ? selectTingkatPengurus?.name
                        : targetEdit.MasterTingkatPengurus.name
                    }
                    data={tingkatPengurus.map((e) => ({
                      value: e.name,
                      label: e.name,
                    }))}
                    onChange={(val) => {
                      val;
                      const data: any = _.clone(targetEdit);
                      data.MasterTingkatPengurus.name = val;
                      setChangeData(data);
                      setSelectTingkatPengurus(
                        tingkatPengurus.find((e) => e.name == val)
                      );
                    }}
                  />
                </>
              );
            } else {
              if (
                dataTarget.MasterTingkatPengurus.name == "Dewan Pimpinan Pusat"
              ) {
                return (
                  <>
                    <Select
                      maxDropdownHeight={150}
                      // disabled
                      label="Tingkat Pengurus"
                      value={
                        selectTingkatPengurus?.name
                          ? selectTingkatPengurus.name
                          : targetEdit.MasterTingkatPengurus.name
                      }
                      placeholder={
                        selectTingkatPengurus?.name
                          ? selectTingkatPengurus?.name
                          : targetEdit.MasterTingkatPengurus.name
                      }
                      data={tingkatPengurus.map((e) => ({
                        value: e.name,
                        label: e.name,
                      }))}
                      onChange={(val) => {
                        val;
                        const data: any = _.clone(targetEdit);
                        data.MasterTingkatPengurus.name = val;
                        setChangeData(data);
                        setSelectTingkatPengurus(
                          tingkatPengurus.find((e) => e.name == val)
                        );
                      }}
                    />
                  </>
                );
              } else {
                if (
                  dataTarget.MasterTingkatPengurus.name ==
                  "Dewan Pimpinan Daerah"
                ) {
                  return (
                    <>
                      <Select
                        maxDropdownHeight={150}
                        // disabled
                        label="Tingkat Pengurus"
                        value={
                          selectTingkatPengurus?.name
                            ? selectTingkatPengurus.name
                            : targetEdit.MasterTingkatPengurus.name
                        }
                        placeholder={
                          selectTingkatPengurus?.name
                            ? selectTingkatPengurus?.name
                            : targetEdit.MasterTingkatPengurus.name
                        }
                        data={tingkatPengurus.map((e) => ({
                          value: e.name,
                          label: e.name,
                        }))}
                        onChange={(val) => {
                          val;
                          const data: any = _.clone(targetEdit);
                          data.MasterTingkatPengurus.name = val;
                          setChangeData(data);
                          setSelectTingkatPengurus(
                            tingkatPengurus.find((e) => e.name == val)
                          );
                        }}
                      />
                    </>
                  );
                } else {
                  if (
                    dataTarget.MasterTingkatPengurus.name ==
                    "Dewan Pimpinan Cabang"
                  ) {
                    return (
                      <>
                        <Select
                          maxDropdownHeight={150}
                          // disabled
                          label="Tingkat Pengurus"
                          value={
                            selectTingkatPengurus?.name
                              ? selectTingkatPengurus.name
                              : targetEdit.MasterTingkatPengurus.name
                          }
                          placeholder={
                            selectTingkatPengurus?.name
                              ? selectTingkatPengurus?.name
                              : targetEdit.MasterTingkatPengurus.name
                          }
                          data={tingkatPengurus.map((e) => ({
                            value: e.name,
                            label: e.name,
                          }))}
                          onChange={(val) => {
                            val;
                            const data: any = _.clone(targetEdit);
                            data.MasterTingkatPengurus.name = val;
                            setChangeData(data);
                            setSelectTingkatPengurus(
                              tingkatPengurus.find((e) => e.name == val)
                            );
                          }}
                        />
                      </>
                    );
                  } else {
                    if (
                      dataTarget.MasterTingkatPengurus.name ==
                      "Pimpinan Anak Cabang"
                    ) {
                      return (
                        <>
                          <Select
                            maxDropdownHeight={150}
                            // disabled
                            label="Tingkat Pengurus"
                            value={
                              selectTingkatPengurus?.name
                                ? selectTingkatPengurus.name
                                : targetEdit.MasterTingkatPengurus.name
                            }
                            placeholder={
                              selectTingkatPengurus?.name
                                ? selectTingkatPengurus?.name
                                : targetEdit.MasterTingkatPengurus.name
                            }
                            data={tingkatPengurus.map((e) => ({
                              value: e.name,
                              label: e.name,
                            }))}
                            onChange={(val) => {
                              val;
                              const data: any = _.clone(targetEdit);
                              data.MasterTingkatPengurus.name = val;
                              setChangeData(data);
                              setSelectTingkatPengurus(
                                tingkatPengurus.find((e) => e.name == val)
                              );
                            }}
                          />
                        </>
                      );
                    } else {
                      if (
                        dataTarget.MasterTingkatPengurus.name ==
                        "Pimpinan Ranting"
                      ) {
                        return (
                          <>
                            <Select
                              maxDropdownHeight={150}
                              // disabled
                              label="Tingkat Pengurus"
                              value={
                                selectTingkatPengurus?.name
                                  ? selectTingkatPengurus.name
                                  : targetEdit.MasterTingkatPengurus.name
                              }
                              placeholder={
                                selectTingkatPengurus?.name
                                  ? selectTingkatPengurus?.name
                                  : targetEdit.MasterTingkatPengurus.name
                              }
                              data={tingkatPengurus.map((e) => ({
                                value: e.name,
                                label: e.name,
                              }))}
                              onChange={(val) => {
                                val;
                                const data: any = _.clone(targetEdit);
                                data.MasterTingkatPengurus.name = val;
                                setChangeData(data);
                                setSelectTingkatPengurus(
                                  tingkatPengurus.find((e) => e.name == val)
                                );
                              }}
                            />
                          </>
                        );
                      } else {
                        if (
                          dataTarget.MasterTingkatPengurus.name ==
                          "Perwakilan Partai di Luar Negeri"
                        ) {
                          return (
                            <>
                              <Select
                                maxDropdownHeight={150}
                                // disabled
                                label="Tingkat Pengurus"
                                value={
                                  selectTingkatPengurus?.name
                                    ? selectTingkatPengurus.name
                                    : targetEdit.MasterTingkatPengurus.name
                                }
                                placeholder={
                                  selectTingkatPengurus?.name
                                    ? selectTingkatPengurus?.name
                                    : targetEdit.MasterTingkatPengurus.name
                                }
                                data={tingkatPengurus.map((e) => ({
                                  value: e.name,
                                  label: e.name,
                                }))}
                                onChange={(val) => {
                                  val;
                                  const data: any = _.clone(targetEdit);
                                  data.MasterTingkatPengurus.name = val;
                                  setChangeData(data);
                                  setSelectTingkatPengurus(
                                    tingkatPengurus.find((e) => e.name == val)
                                  );
                                }}
                              />
                            </>
                          );
                        } else {
                          return <>salah</>;
                        }
                      }
                    }
                  }
                }
              }
            }
          })()} */}

          {/* <Select
            height={100}
            //   maxDropdownHeight={500}
            label="Tingkat Pengurus"
            value={
              selectTingkatPengurus?.name
                ? selectTingkatPengurus.name
                : targetEdit.MasterTingkatPengurus.name
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
            onChange={(val) => {
              console.log(val);
              const data: any = _.clone(targetEdit);
              data.MasterTingkatPengurus = val;
              setChangeData(data);
              setUbahTingkat(val);
              if (val === "Dewan Pembina" || 1) {
                setUbahTingkat(
                  <Select
                    label="Dewan Pembina"
                    data={dataDPembina.map((e) => ({
                      value: e.id,
                      label: e.name,
                    }))}
                    onChange={(val) => console.log(val)}
                  />
                );
              } else {
                if (val === "Dewan Pimpinan Pusat" || 2) {
                  setUbahTingkat(<Text>Dewan Pimpinan Pusat</Text>);
                  <Text>Ini Dewan Pembina</Text>;
                } else {
                }
              }
            }}
          />
          {ubahTingkat && <Box>{ubahTingkat}</Box>} */}
        </Box>
      </Box>
    </>
  );
};
