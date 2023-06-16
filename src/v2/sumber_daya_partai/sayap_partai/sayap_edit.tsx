import {
  _dataPageSDP_Sayap,
  _dataSayapTable_ByStatusSearch,
  _dataTotalPageSDP_Sayap,
  _editLoadSayap_ByStatusSeacrh,
  _loadDataSDP_ByStatus_BySeach,
  _loadEditSumberDayaPartai_ById,
  _searchDataSumberDayaPartai,
} from "@/load_data/sumber_daya_partai/load_sumber_daya_partai";
import {
  _new_loadTingkatPengurus,
  _new_loadTingkatPengurus_Sayap,
  _selectTingkatPengurus_Sayap,
  _tingkatPengurus_Sayap,
} from "@/load_data/sumber_daya_partai/load_tingkat_pengurus";
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
import { useShallowEffect } from "@mantine/hooks";
import { useAtom } from "jotai";
import COLOR from "../../../../fun/WARNA";
import {
  _list_SayapPartai,
  _loadNama_SayapPartai,
  _select_SayapPartaii,
} from "@/load_data/sumber_daya_partai/sayap_partai/load_sayap_partai";
import _ from "lodash";
import { useState } from "react";
import { ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";
import { api } from "@/lib/api-backend";
import {
  _dPimpinanPusat_Sayap,
  _new_loadJabatanDewanPimpinanDaerah,
  _new_loadJabatanDewanPimpinanPusat,
  _selectDPimpinanPusat_Sayap,
} from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { _dPimpinanDaerah_Sayap } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { _selectDPimpinanDaerah_Sayap } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { _new_loadJabatanDewanPimpinanCabang } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { _dPimpinanCabang_Sayap } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { _selectDPimpinanCabang_Sayap } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { _new_loadJabatanPimpinanAnakCabang } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { _pAnakCabang_Sayap } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { _selectPAnakCabang_Sayap } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { buttonSimpan } from "@/v2/component/button-toast";
import { _postLogUser } from "@/load_data/log_user/post_log_user";

export const SayapEditV2 = ({
  thisClosed,
  setId,
}: {
  setId: any;
  thisClosed: any;
}) => {
  const [dataTable, setDataTable] = useAtom(_dataSayapTable_ByStatusSearch);
  const [search, setSearch] = useState("");
  const [changeData, setChangeData] = useState<ModelSumberDayaPartai | null>(
    null
  );
  const [targetEdit, setTargetEdit] = useAtom(_editLoadSayap_ByStatusSeacrh);
  const [tingkatPengurus, setTingkatPengurus] = useAtom(_tingkatPengurus_Sayap);
  const [selectTingkatPengurus, setSelectTingkatPengurus] = useAtom(
    _selectTingkatPengurus_Sayap
  );
  const [sayapPartai, setSayapPartai] = useAtom(_list_SayapPartai);
  const [selectSayapPartai, setSelectSayapPartai] =
    useAtom(_select_SayapPartaii);
  const [listJabatan_DPimpinanPusat, setListJabatan_DPimpinanPusat] = useAtom(
    _dPimpinanPusat_Sayap
  );
  const [select_DPimpinanPusat, setSelect_DPimpinanPusat] = useAtom(
    _selectDPimpinanPusat_Sayap
  );
  const [listJabatan_DPimpinanDaerah, setListJabatan_DPimpinanDaerah] = useAtom(
    _dPimpinanDaerah_Sayap
  );
  const [select_DPimpinanDaerah, setSelect_DPimpinanDaerah] = useAtom(
    _selectDPimpinanDaerah_Sayap
  );
  const [listJabatan_DPimpinanCabang, setListJabatan_DPimpinanCabang] = useAtom(
    _dPimpinanCabang_Sayap
  );
  const [select_DPimpinanCabang, setSelect_DPimpinanCabang] = useAtom(
    _selectDPimpinanCabang_Sayap
  );
  const [listJabatan_PAnakCabang, setListJabatan_PAnakCabang] =
    useAtom(_pAnakCabang_Sayap);
  const [select_PAnakCabang, setSelect_PAnakCabang] = useAtom(
    _selectPAnakCabang_Sayap
  );
  const [inputSearch, setInputSearch] = useAtom(_searchDataSumberDayaPartai);
  const [inputPage, setInputPage] = useAtom(_dataPageSDP_Sayap);
  const [totalPage, setTotalPage] = useAtom(_dataTotalPageSDP_Sayap);

  useShallowEffect(() => {
    _loadEditSumberDayaPartai_ById(setId, setTargetEdit);
    _new_loadTingkatPengurus_Sayap(
      setTingkatPengurus,
      setSelectTingkatPengurus
    );
    _loadNama_SayapPartai(setSayapPartai, setSelectSayapPartai);
    _new_loadJabatanDewanPimpinanPusat(
      setListJabatan_DPimpinanPusat,
      setSelect_DPimpinanPusat
    );
    _new_loadJabatanDewanPimpinanDaerah(
      setListJabatan_DPimpinanDaerah,
      setSelect_DPimpinanDaerah
    );
    _new_loadJabatanDewanPimpinanCabang(
      setListJabatan_DPimpinanCabang,
      setSelect_DPimpinanCabang
    );
    _new_loadJabatanPimpinanAnakCabang(
      setListJabatan_PAnakCabang,
      setSelect_PAnakCabang
    );
  }, []);

  const onEdit = () => {
    buttonSimpan();
    thisClosed();
    const body = {
      id: targetEdit?.id,
      userId: targetEdit?.User.id!,
      masterStatusKeanggotaanId: 2,
      // masterTingkatPengurusId: targetEdit?.MasterTingkatPengurus.id!,
      masterTingkatSayapId: targetEdit?.MasterTingkatSayap.id,
      // masterJabatanId: targetEdit?.MasterJabatan!,
      // masterJabatanDewanPembinaId: targetEdit?.MasterJabatanDewanPembina?.id!,
      masterJabatanDewanPimpinanPusatId:
        targetEdit?.MasterJabatanDewanPimpinanPusat?.id,
      masterJabatanDewanPimpinanDaerahId:
        targetEdit?.MasterJabatanDewanPimpinanDaerah?.id,
      masterJabatanDewanPimpinanCabangId:
        targetEdit?.MasterJabatanDewanPimpinanCabang?.id,
      masterJabatanPimpinanAnakCabangId:
        targetEdit?.MasterJabatanPimpinanAnakCabang?.id!,
      // masterJabatanPimpinanRantingId:
      //   targetEdit?.MasterJabatanPimpinanRanting?.id!,
      // masterJabatanPerwakilanPartaiDiLuarNegeriId:
      //   targetEdit?.MasterJabatanPerwakilanPartaiDiLuarNegeri?.id!,
      masterSayapPartaiId: targetEdit?.MasterSayapPartai?.id!,
      // masterKaderPartaiId: targetEdit?.MasterKaderPartai?.id!,
      // masterProvinceId: targetEdit?.MasterProvince?.id!,
      // masterKabKotId: targetEdit?.MasterKabKot?.id!,
      // masterKecamatanId: targetEdit?.MasterKecamatan?.id!,
      // masterDesaId: targetEdit?.MasterDesa?.id!,
      // masterNegaraId: targetEdit?.MasterNegara?.id!,
      // alamatKantor: targetEdit?.alamatKantor!,
      // waAdmin: targetEdit?.waAdmin!,
    };
    // console.log(body)

    fetch(api.apiSumberDayaPartaiUpdate, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())

      .then(async (val) =>
        _loadDataSDP_ByStatus_BySeach(
          2,
          inputSearch,
          setDataTable,
          inputPage,
          setTotalPage
        )
      );
    _postLogUser(
      localStorage.getItem("user_id"),
      "UBAH",
      "User mengubah data sayap partai"
    );
  };

  if (!targetEdit)
    return (
      <>
        <Loader />
      </>
    );

  return (
    <>
      {/* {JSON.stringify(listJabatan_PAnakCabang, null, "\t")} */}
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
            label="Nama "
            disabled
            value={targetEdit.User.DataDiri.name}
          />
          <Select
            label="Tingkat Pengurus"
            disabled
            maxDropdownHeight={150}
            value={targetEdit.MasterTingkatSayap.name}
            placeholder={targetEdit.MasterTingkatSayap.name}
            data={tingkatPengurus.map((e) => ({
              value: e.id,
              label: e.name,
            }))}
          />
          <Select
            maxDropdownHeight={150}
            label="Nama Sayap Partai"
            value={selectSayapPartai.name}
            placeholder={
              selectSayapPartai?.name
                ? selectSayapPartai.name
                : targetEdit.MasterSayapPartai?.name
            }
            data={sayapPartai.map((e) => ({
              value: e.id,
              label: e.name,
            }))}
            onChange={(val) => {
              // console.log(val)
              setSelectSayapPartai(sayapPartai.find((e) => e.id == val));
              const data: any = _.clone(targetEdit);
              data.MasterSayapPartai.id = val;
              setChangeData(data);
            }}
          />
          {(() => {
            let dataTarget = targetEdit;

            if (dataTarget.MasterTingkatSayap.id == 1) {
              return (
                <>
                  <Select
                    maxDropdownHeight={150}
                    label="Jabatan Dewan Pimpinan Pusat"
                    value={select_DPimpinanPusat.name}
                    placeholder={
                      select_DPimpinanPusat.name
                        ? select_DPimpinanPusat.name
                        : dataTarget.MasterJabatanDewanPimpinanPusat?.name
                    }
                    data={listJabatan_DPimpinanPusat.map((e) => ({
                      value: e.id,
                      label: e.name,
                    }))}
                    onChange={(val) => {
                      setSelect_DPimpinanPusat(
                        listJabatan_DPimpinanPusat.find((e) => e.id == val)
                      );
                      const data1: any = _.clone(dataTarget);
                      data1.MasterJabatanDewanPimpinanPusat.id = val;
                      setChangeData(dataTarget);
                    }}
                  />
                </>
              );
            } else {
              if (dataTarget.MasterTingkatSayap.id == 2) {
                return (
                  <>
                    <Select
                      label="Jabatan Dewan Pimpinan Daerah"
                      maxDropdownHeight={150}
                      value={select_DPimpinanDaerah.name}
                      placeholder={
                        select_DPimpinanDaerah.name
                          ? select_DPimpinanDaerah.name
                          : dataTarget.MasterJabatanDewanPimpinanDaerah?.name
                      }
                      data={listJabatan_DPimpinanDaerah.map((e) => ({
                        value: e.id,
                        label: e.name,
                      }))}
                      onChange={(val) => {
                        setSelect_DPimpinanDaerah(
                          listJabatan_DPimpinanDaerah.find((e) => e.id == val)
                        );
                        const data2: any = _.clone(dataTarget);
                        data2.MasterJabatanDewanPimpinanDaerah.id = val;
                        setChangeData(dataTarget);
                      }}
                    />
                  </>
                );
              } else {
                if (dataTarget.MasterTingkatSayap.id == 3) {
                  return (
                    <>
                      <Select
                        label="Jabatan Dewan Pimpinan Cabang"
                        maxDropdownHeight={150}
                        value={select_DPimpinanCabang.name}
                        placeholder={
                          select_DPimpinanCabang.name
                            ? select_DPimpinanCabang.name
                            : dataTarget.MasterJabatanDewanPimpinanCabang?.name
                        }
                        data={listJabatan_DPimpinanCabang.map((e) => ({
                          value: e.id,
                          label: e.name,
                        }))}
                        onChange={(val) => {
                          setSelect_DPimpinanCabang(
                            listJabatan_DPimpinanCabang.find((e) => e.id == val)
                          );
                          const data3: any = _.clone(dataTarget);
                          data3.MasterJabatanDewanPimpinanCabang.id = val;
                          setChangeData(dataTarget);
                        }}
                      />
                    </>
                  );
                } else {
                  if (dataTarget.MasterTingkatSayap.id == 4) {
                    return (
                      <>
                        <Select
                          label="Jabatan Pimpinan Anak Cabang"
                          maxDropdownHeight={150}
                          value={select_PAnakCabang.name}
                          placeholder={
                            select_PAnakCabang.name
                              ? select_PAnakCabang.name
                              : dataTarget.MasterJabatanPimpinanAnakCabang.name
                          }
                          data={listJabatan_PAnakCabang.map((e) => ({
                            value: e.id,
                            label: e.name,
                          }))}
                          onChange={(val) => {
                            setSelect_PAnakCabang(
                              listJabatan_PAnakCabang.find((e) => e.id == val)
                            );
                            const data4: any = _.clone(dataTarget);
                            data4.MasterJabatanPimpinanAnakCabang.id = val;
                            setChangeData(dataTarget);
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
          })()}
        </Box>
      </Box>
    </>
  );
};
