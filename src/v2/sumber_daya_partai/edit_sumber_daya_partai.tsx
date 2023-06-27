import {
  _dataAnggotaTable_ByStatusSearch,
  _dataKaderTable_ByStatusSearch,
  _dataPageSDP_Anggota,
  _dataPageSDP_Kader,
  _dataPageSDP_Sayap,
  _dataPageSDP_Strukturr,
  _dataSayapTable_ByStatusSearch,
  _dataTotalPageSDP_Anggota,
  _dataTotalPageSDP_Kader,
  _dataTotalPageSDP_Sayap,
  _dataTotalPageSDP_Strukturr,
  _editLoadStruktur_ByStatusSeacrh,
  _loadDataSDP_ByStatus_BySeach,
  _loadEditSumberDayaPartai_ById,
  _new_loadEditByModel,
} from "@/load_data/sumber_daya_partai/load_sumber_daya_partai";
import { ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";
import {
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Paper,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForceUpdate, useShallowEffect } from "@mantine/hooks";
import { useAtom } from "jotai";
import { useState } from "react";
import COLOR from "../../../fun/WARNA";
import {
  _listData_StatusKeanggotaan,
  _new_loadStatusKeanggotaan,
  _selectData_StatusKeanggotaan,
} from "@/load_data/sumber_daya_partai/load_status_keanggotaan";
import _, { isEmpty, method } from "lodash";
import {
  _tingkatPengurus_Struktur,
  _selectTingkatPengurus_Struktur,
  _new_loadTingkatPengurus,
  _new_loadTingkatPengurus_Sayap,
  _selectTingkatPengurus_Sayap,
  _tingkatPengurus_Sayap,
} from "@/load_data/sumber_daya_partai/load_tingkat_pengurus";
import {
  _dewanPembina,
  _dewanPimpinanCabang,
  _dewanPimpinanDaerah,
  _dewanPimpinanPusat,
  _new_loadJabatanDewanPembina,
  _new_loadJabatanDewanPimpinanCabang,
  _new_loadJabatanDewanPimpinanDaerah,
  _new_loadJabatanDewanPimpinanPusat,
  _new_loadJabatanPimpinanAnakCabang,
  _new_loadJabatanPimpinanRanting,
  _new_loadPerwakilanLuarNegeri,
  _perwakilanLuarNegeri,
  _pimpinanAnakCabang,
  _pimpinanRanting,
  _selectDewabPimpinanCabang,
  _selectDewanPembina,
  _selectDewanPimpinanDaerah,
  _selectDewanPimpinanPusat,
  _selectPerwakilanLuarNegeri,
  _selectPimpinanAnakCabang,
  _selectPimpinanRanting,
} from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import {
  _list_SayapPartai,
  _select_SayapPartaii,
  _loadNama_SayapPartai,
} from "@/load_data/sumber_daya_partai/sayap_partai/load_sayap_partai";
import {
  _list_KaderPartai,
  _select_KaderPartai,
  _loadNama_KaderPartai,
} from "@/load_data/sumber_daya_partai/kader_partai/load_kader_partai";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { _dataStrukturTable_ByStatusSearchSuper } from "@/load_data/super_admin/load_sumber_data_super_admin";
import { refresh_page } from "../force_refresh";
let maxDropDownH = 150;

function EditSumberDayaPartaiV2({
  valId,
  closeModal,
}: {
  valId: any;
  closeModal: any;
}) {
  let dataEdit: ModelSumberDayaPartai = valId;
  const [targetEdit, setTargetEdit] = useAtom(_editLoadStruktur_ByStatusSeacrh);
  const [statusKeanggotaan, setStatusKeangotaan] = useAtom(
    _listData_StatusKeanggotaan
  );
  const [selectStatusKeanggotaan, setSelectStatusKeanggotaan] = useAtom(
    _selectData_StatusKeanggotaan
  );
  //-------- Tingkat Pengurus Struktur Partai --------//
  const [tingkatPengurus, setTingkatPengurus] = useAtom(
    _tingkatPengurus_Struktur
  );
  const [selectTingkatPengurus, setSelectTingkatPengurus] = useAtom(
    _selectTingkatPengurus_Struktur
  );
  //-------- Tingkat Pengurus Sayap Partai --------//
  const [tingkatPengurus_Sayap, setTingkatPengurus_Sayap] = useAtom(
    _tingkatPengurus_Sayap
  );
  const [selectTingkatPengurus_Sayap, setSelectTingkatPengurus_Sayap] = useAtom(
    _selectTingkatPengurus_Sayap
  );
  //```````````Jabatan Tingkat Pengurus````````````//
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
  //-------- Nama Sayap Partai--------//
  const [sayapPartai, setSayapPartai] = useAtom(_list_SayapPartai);
  const [selectSayapPartai, setSelectSayapPartai] =
    useAtom(_select_SayapPartaii);
  //-------- Nama Kader Partai--------//
  const [kaderPartai, setKaderPartai] = useAtom(_list_KaderPartai);
  const [selectKaderPartai, setSelectKaderPartai] =
    useAtom(_select_KaderPartai);

  // Tingkat Pengurus Struktur Partai //
  const [dataTable_Id1, setDataTable_Id1] = useAtom(
    _dataStrukturTable_ByStatusSearchSuper
  );
  const [dataTable_Id2, setDataTable_Id2] = useAtom(
    _dataSayapTable_ByStatusSearch
  );
  const [dataTable_Id3, setDataTable_Id3] = useAtom(
    _dataKaderTable_ByStatusSearch
  );
  const [dataTable_Id4, setDataTable_Id4] = useAtom(
    _dataAnggotaTable_ByStatusSearch
  );

  const [search, setSearch] = useState("");
  const [totalPage_Id1, setTotalPage_Id1] = useAtom(
    _dataTotalPageSDP_Strukturr
  );
  const [totalPage_Id2, setTotalPage_Id2] = useAtom(_dataTotalPageSDP_Sayap);
  const [totalPage_Id3, setTotalPage_Id3] = useAtom(_dataTotalPageSDP_Kader);
  const [totalPage_Id4, setTotalPage_Id4] = useAtom(_dataTotalPageSDP_Anggota);

  const [refresh, setRefresh] = useAtom(refresh_page);

  useShallowEffect(() => {
    _loadEditSumberDayaPartai_ById(dataEdit.id, setTargetEdit);
    _new_loadStatusKeanggotaan(setStatusKeangotaan, setSelectStatusKeanggotaan);
  }, []);

  const onEdit_Struktur = () => {
    const bodyStruktur = {
      id: dataEdit.id,
      userId: dataEdit.User.id,
      masterStatusKeanggotaanId: selectStatusKeanggotaan.id,
      masterTingkatPengurusId: selectTingkatPengurus.id,
      masterJabatanDewanPembinaId:
        (selectTingkatPengurus.id as any) == 1 ? selectDPembina.id : null,
      masterJabatanDewanPimpinanPusatId:
        (selectTingkatPengurus.id as any) == 2
          ? select_DPimpinanPusat.id
          : null,
      masterJabatanDewanPimpinanDaerahId:
        (selectTingkatPengurus.id as any) == 3
          ? select_DPimpinanDaerah.id
          : null,
      masterJabatanDewanPimpinanCabangId:
        (selectTingkatPengurus.id as any) == 4
          ? select_DPimpinanCabang.id
          : null,
      masterJabatanPimpinanAnakCabangId:
        (selectTingkatPengurus.id as any) == 5 ? select_PAnakCabang.id : null,
        masterJabatanPimpinanRantingId:
        (selectTingkatPengurus.id as any) == 6 ? select_PRanting.id : null,
        masterJabatanPerwakilanPartaiDiLuarNegeriId:
        (selectTingkatPengurus.id as any) == 7 ? select_PerwakilanLuarNegeri.id : null,
    };

    if (selectTingkatPengurus.id == undefined) {
      return toast("Lengkapi Data");
    }

    fetch(api.apiSumberDayaPartaiUpdate, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyStruktur),
    }).then(async (res) => {
      if (res.status == 201) {
        _loadDataSDP_ByStatus_BySeach(
          1,
          search,
          setDataTable_Id1,
          "1",
          setTotalPage_Id1
        );
        closeModal();
        setRefresh(Math.random().toString());
      } else {
        return toast("Gagal Update");
      }
    });
  };

  const onEdit_Sayap = async () => {
    const bodySayap = {
      id: dataEdit.id,
      userId: dataEdit.User.id,
      masterStatusKeanggotaanId: 2,
      masterSayapPartaiId: selectSayapPartai.id,
      masterTingkatSayapId: selectTingkatPengurus_Sayap.id,
      masterJabatanDewanPimpinanPusatId:
        (selectTingkatPengurus_Sayap.id as any) == 1
          ? select_DPimpinanPusat.id
          : null,
      masterJabatanDewanPimpinanDaerahId:
        (selectTingkatPengurus_Sayap.id as any) == 2
          ? select_DPimpinanDaerah.id
          : null,
      masterJabatanDewanPimpinanCabangId:
        (selectTingkatPengurus_Sayap.id as any) == 3
          ? select_DPimpinanCabang.id
          : null,
      masterJabatanPimpinanAnakCabangId:
        (selectTingkatPengurus_Sayap.id as any) == 4
          ? select_PAnakCabang.id
          : null,
    };

    if (selectSayapPartai.id == undefined) {
      return toast("Pilih Nama Sayap");
    }
    if (selectTingkatPengurus_Sayap.id == undefined) {
      return toast("Lengkapi Data");
    }
    console.table(bodySayap);
    closeModal();
    setRefresh(Math.random().toString());

    await fetch(api.apiSumberDayaPartaiUpdate, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodySayap),
    }).then(async (res) => {
      if (res.status == 201) {
        _loadDataSDP_ByStatus_BySeach(
          2,
          search,
          setDataTable_Id2,
          "1",
          setTotalPage_Id2
        );
        closeModal();
        setRefresh(Math.random().toString());
      } else {
        return toast("Gagal Update");
      }
    });
  };

  const onEdit_Kader = () => {
    const bodyKader = {
      id: dataEdit.id,
      userId: dataEdit.User.id,
      masterStatusKeanggotaanId: selectStatusKeanggotaan.id,
      masterKaderPartaiId: selectKaderPartai.id,
    };

    if (selectKaderPartai.id == undefined) {
      return toast("Pilih Nama Kader");
    }
    fetch(api.apiSumberDayaPartaiUpdate, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyKader),
    }).then(async (res) => {
      if (res.status == 201) {
        _loadDataSDP_ByStatus_BySeach(
          3,
          search,
          setDataTable_Id3,
          "1",
          setTotalPage_Id3
        );
        closeModal();
        setRefresh(Math.random().toString());
      } else {
        return toast("Gagal Update");
      }
    });
  };

  const onEDit_Anggota = () => {
    const bodyAnggota = {
      id: dataEdit.id,
      userId: dataEdit.User.id,
      masterStatusKeanggotaanId: selectStatusKeanggotaan.id,
    };

    fetch(api.apiSumberDayaPartaiUpdate, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyAnggota),
    }).then(async (res) => {
      if (res.status == 201) {
        _loadDataSDP_ByStatus_BySeach(
          4,
          search,
          setDataTable_Id4,
          "1",
          setTotalPage_Id4
        );
        closeModal();
        setRefresh(Math.random().toString());
      } else {
        return toast("Gagal Update");
      }
    });
  };

  return (
    <>
      <pre>
        {/* {JSON.stringify(totalPage_Id2, null, 2)} */}
        {/* {JSON.stringify(dataTable_Id2, null, 2)} */}
        {}
      </pre>

      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Edit {`${dataEdit.MasterStatusKeanggotaan.name}`}
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>
        <Box pt={"xl"}>
          <Box w={100}>
            {/* <Button
              onClick={() => {
                setRefresh(Math.random().toString());
              }}
            >
              refresh
            </Button> */}
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
                if (selectStatusKeanggotaan.id == 1) {
                  onEdit_Struktur();
                } else {
                  if (selectStatusKeanggotaan.id == 2) {
                    onEdit_Sayap();
                  } else {
                    if (selectStatusKeanggotaan.id == 3) {
                      onEdit_Kader();
                    } else {
                      if (selectStatusKeanggotaan.id == 4) {
                        onEDit_Anggota();
                      } else {
                        return toast("Gagal ");
                      }
                    }
                  }
                }
              }}
            >
              Simpan
            </Button>
          </Box>
        </Box>
        <Box>
          <Flex direction={"row"} gap={"xs"} fz={16}>
            <Text fw={"bolder"}>Nama :{} </Text>
            <Text>{"" + dataEdit.User.DataDiri.name}</Text>
          </Flex>


          {/* <TextInput
            label="Nama"
            disabled
            value={dataEdit.User.DataDiri.name}
          /> */}
          <Select
            maxDropdownHeight={maxDropDownH}
            label="Status Keanggotaan"
            value={selectStatusKeanggotaan.id as any}
            placeholder={dataEdit.MasterStatusKeanggotaan.name}
            data={
              _.isEmpty(statusKeanggotaan)
                ? []
                : statusKeanggotaan.map((e) => ({
                    value: e.id,
                    label: e.name,
                  }))
            }
            onChange={(val) => {
              setSelectStatusKeanggotaan(
                statusKeanggotaan.find((e) => e.id == val)
              );
            }}
          />
        </Box>
        {(() => {
          if (selectStatusKeanggotaan.id === 1) {
            return <EditStrukturPartai valId={valId} />;
          } else {
            if (selectStatusKeanggotaan.id === 2) {
              return <EditSayapPartai />;
            } else {
              if (selectStatusKeanggotaan.id === 3) {
                return <EditKaderpartai />;
              } else {
                if (selectStatusKeanggotaan.id === 4) {
                  return <EditAnggotaPartai />;
                } else {
                  return "";
                }
              }
            }
          }
        })()}
      </Box>
    </>
  );
}

//`````````````````````````EditStrukturPartai`````````````````````````//
/**
 * @returns ID tingkat pengurus struktur partai
 *
 */
function EditStrukturPartai({ valId }: { valId: any }) {
  let dataEdit: ModelSumberDayaPartai = valId;
  const [tingkatPengurus, setTingkatPengurus] = useAtom(
    _tingkatPengurus_Struktur
  );
  const [selectTingkatPengurus, setSelectTingkatPengurus] = useAtom(
    _selectTingkatPengurus_Struktur
  );

  useShallowEffect(() => {
    _new_loadTingkatPengurus(setTingkatPengurus, setSelectTingkatPengurus);
  }, []);

  return (
    <>
      {/* {JSON.stringify(selectTingkatPengurus.id)} */}
      <Box>
        <Select
          maxDropdownHeight={maxDropDownH}
          label={"Tingkat Pengurus"}
          value={selectTingkatPengurus.id}
          placeholder={
            selectTingkatPengurus.name
              ? selectTingkatPengurus.name
              : "Pilih Tingkat Pengurus"
          }
          data={
            _.isEmpty(tingkatPengurus)
              ? []
              : tingkatPengurus.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))
          }
          onChange={(val) => {
            setSelectTingkatPengurus(tingkatPengurus.find((e) => e.id == val));
          }}
        />
        {(() => {
          if ((selectTingkatPengurus.id as any) === 1) {
            return (
              <>
                <SelectDewanPembina />
              </>
            );
          } else {
            if ((selectTingkatPengurus.id as any) === 2) {
              return (
                <>
                  <SelectDewanPimpinanPusat />
                </>
              );
            } else {
              if ((selectTingkatPengurus.id as any) === 3) {
                return (
                  <>
                    <SelectDewanPimpinanDaerah />
                  </>
                );
              } else {
                if ((selectTingkatPengurus.id as any) === 4) {
                  return (
                    <>
                      <SelectDewanPimpinanCabang />
                    </>
                  );
                } else {
                  if ((selectTingkatPengurus.id as any) === 5) {
                    return (
                      <>
                        <SelectPimpinanAnakCabang />
                      </>
                    );
                  } else {
                    if ((selectTingkatPengurus.id as any) === 6) {
                      return (
                        <>
                          <SelectPimpinanRanting />
                        </>
                      );
                    } else {
                      if ((selectTingkatPengurus.id as any) === 7) {
                        return (
                          <>
                            <SelectPerwakilanLuarNegeri />
                          </>
                        );
                      } else {
                        return <></>;
                      }
                    }
                  }
                }
              }
            }
          }
        })()}
      </Box>
    </>
  );
}
//`````````````````````````Edit Struktur Partai`````````````````````````//

//`````````````````````````Edit Sayap Partai`````````````````````````//
/**
 *
 * @returns ID Sayap Partai
 * @returns Nama Sayap Partai
 */
function EditSayapPartai() {
  const [tingkatPengurus, setTingkatPengurus] = useAtom(_tingkatPengurus_Sayap);
  const [selectTingkatPengurus, setSelectTingkatPengurus] = useAtom(
    _selectTingkatPengurus_Sayap
  );
  const [sayapPartai, setSayapPartai] = useAtom(_list_SayapPartai);
  const [selectSayapPartai, setSelectSayapPartai] =
    useAtom(_select_SayapPartaii);
  useShallowEffect(() => {
    _new_loadTingkatPengurus_Sayap(
      setTingkatPengurus,
      setSelectTingkatPengurus
    );
    _loadNama_SayapPartai(setSayapPartai, setSelectSayapPartai);
  }, []);
  return (
    <>
      <Box>
        <Select
          label="Nama Sayap"
          maxDropdownHeight={maxDropDownH}
          value={selectSayapPartai.id as any}
          placeholder={
            selectSayapPartai.name ? selectSayapPartai.name : "Pilih Nama Sayap"
          }
          data={
            _.isEmpty(sayapPartai)
              ? []
              : sayapPartai.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))
          }
          onChange={(val) => {
            setSelectSayapPartai(sayapPartai.find((e) => e.id == val));
          }}
        />

        <Select
          label="Tingkat Pengurus"
          maxDropdownHeight={maxDropDownH}
          value={selectTingkatPengurus.id as any}
          placeholder={
            selectTingkatPengurus.name
              ? selectTingkatPengurus.name
              : placeholderJabatan
          }
          data={
            _.isEmpty(tingkatPengurus)
              ? []
              : tingkatPengurus.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))
          }
          onChange={(val) => {
            setSelectTingkatPengurus(tingkatPengurus.find((e) => e.id == val));
          }}
        />
        {(() => {
          if ((selectTingkatPengurus.id as any) === 1) {
            return (
              <>
                <SelectDewanPimpinanPusat />
              </>
            );
          } else {
            if ((selectTingkatPengurus.id as any) === 2) {
              return (
                <>
                  <SelectDewanPimpinanDaerah />
                </>
              );
            } else {
              if ((selectTingkatPengurus.id as any) === 3) {
                return (
                  <>
                    <SelectDewanPimpinanCabang />
                  </>
                );
              } else {
                if ((selectTingkatPengurus.id as any) === 4) {
                  return (
                    <>
                      <SelectPimpinanAnakCabang />
                    </>
                  );
                } else {
                  return <></>;
                }
              }
            }
          }
        })()}
      </Box>
    </>
  );
}
//`````````````````````````Edit Sayap Partai`````````````````````````//

function EditKaderpartai() {
  const [kaderPartai, setKaderPartai] = useAtom(_list_KaderPartai);
  const [selectKaderPartai, setSelectKaderPartai] =
    useAtom(_select_KaderPartai);

  useShallowEffect(() => {
    _loadNama_KaderPartai(setKaderPartai, setSelectKaderPartai);
  }, []);
  return (
    <>
      <Box>
        <Select
          label="Pilih Kader"
          maxDropdownHeight={maxDropDownH}
          value={selectKaderPartai.id as any}
          placeholder={
            selectKaderPartai.name ? selectKaderPartai.name : placeholderJabatan
          }
          data={
            _.isEmpty(kaderPartai)
              ? []
              : kaderPartai.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))
          }
          onChange={(val) => {
            setSelectKaderPartai(kaderPartai.find((e) => e.id == val));
          }}
        />
      </Box>
    </>
  );
}
function EditAnggotaPartai() {
  return (
    <>
      {/* <Box>
        <Select
          label="Nama Sayap"
          maxDropdownHeight={maxDropDownH}
          value={""}
          placeholder={""}
          data={[]}
          onChange={(val) => {}}
        />
      </Box> */}
    </>
  );
}

//------------------------Select Jabatan----------------------//
let placeholderJabatan = "Pilih Jabatan";
/**
 *
 * @returns  ID Dewan Pembina
 */
function SelectDewanPembina() {
  const [listJabatan_DPembina, setListJabatan_DPembina] =
    useAtom(_dewanPembina);
  const [selectDPembina, setSelectDPembina] = useAtom(_selectDewanPembina);

  useShallowEffect(() => {
    _new_loadJabatanDewanPembina(setListJabatan_DPembina, setSelectDPembina);
  }, []);
  return (
    <>
      {/* {JSON.stringify(listJabatan_DPembina)} */}
      <Box>
        <Select
          label="Dewan Pembina"
          maxDropdownHeight={maxDropDownH}
          value={selectDPembina.id as any}
          placeholder={
            selectDPembina.name ? selectDPembina.name : placeholderJabatan
          }
          data={
            _.isEmpty(listJabatan_DPembina)
              ? []
              : listJabatan_DPembina.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))
          }
          onChange={(val) => {
            setSelectDPembina(listJabatan_DPembina.find((e) => e.id == val));
          }}
        />
      </Box>
    </>
  );
}

function SelectDewanPimpinanPusat() {
  const [listJabatan_DPimpinanPusat, setListJabatan_DPimpinanPusat] =
    useAtom(_dewanPimpinanPusat);
  const [select_DPimpinanPusat, setSelect_DPimpinanPusat] = useAtom(
    _selectDewanPimpinanPusat
  );

  useShallowEffect(() => {
    _new_loadJabatanDewanPimpinanPusat(
      setListJabatan_DPimpinanPusat,
      setSelect_DPimpinanPusat
    );
  }, []);
  return (
    <>
      {/* {JSON.stringify(listJabatan_DPimpinanPusat)} */}
      <Box>
        <Select
          label="Dewan Pimpinan Pusat"
          maxDropdownHeight={maxDropDownH}
          value={select_DPimpinanPusat?.id as any}
          placeholder={
            select_DPimpinanPusat.name
              ? select_DPimpinanPusat.name
              : placeholderJabatan
          }
          data={
            _.isEmpty(listJabatan_DPimpinanPusat)
              ? []
              : listJabatan_DPimpinanPusat.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))
          }
          onChange={(val) => {
            setSelect_DPimpinanPusat(
              listJabatan_DPimpinanPusat.find((e) => e.id == val)
            );
          }}
        />
      </Box>
    </>
  );
}

function SelectDewanPimpinanDaerah() {
  const [listJabatan_DPimpinanDaerah, setListJabatan_DPimpinanDaerah] =
    useAtom(_dewanPimpinanDaerah);
  const [select_DPimpinanDaerah, setSelect_DPimpinanDaerah] = useAtom(
    _selectDewanPimpinanDaerah
  );

  useShallowEffect(() => {
    _new_loadJabatanDewanPimpinanDaerah(
      setListJabatan_DPimpinanDaerah,
      setSelect_DPimpinanDaerah
    );
  }, []);
  return (
    <>
      <Box>
        <Select
          label="Dewan Pimpinan Daerah"
          maxDropdownHeight={maxDropDownH}
          value={select_DPimpinanDaerah.id as any}
          placeholder={
            select_DPimpinanDaerah.name
              ? select_DPimpinanDaerah.name
              : placeholderJabatan
          }
          data={
            _.isEmpty(listJabatan_DPimpinanDaerah)
              ? []
              : listJabatan_DPimpinanDaerah.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))
          }
          onChange={(val) => {
            setSelect_DPimpinanDaerah(
              listJabatan_DPimpinanDaerah.find((e) => e.id == val)
            );
          }}
        />
      </Box>
    </>
  );
}

function SelectDewanPimpinanCabang() {
  const [listJabatan_DPimpinanCabang, setList_DPimpinanCabang] =
    useAtom(_dewanPimpinanCabang);
  const [select_DPimpinanCabang, setSelect_DPimpinanCabang] = useAtom(
    _selectDewabPimpinanCabang
  );
  useShallowEffect(() => {
    _new_loadJabatanDewanPimpinanCabang(
      setList_DPimpinanCabang,
      setSelect_DPimpinanCabang
    );
  }, []);
  return (
    <>
      <Box>
        <Select
          label="Dewan Pimpinan Cabang"
          maxDropdownHeight={maxDropDownH}
          value={select_DPimpinanCabang.id as any}
          placeholder={
            select_DPimpinanCabang.name
              ? select_DPimpinanCabang.name
              : placeholderJabatan
          }
          data={
            _.isEmpty(listJabatan_DPimpinanCabang)
              ? []
              : listJabatan_DPimpinanCabang.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))
          }
          onChange={(val) => {
            setSelect_DPimpinanCabang(
              listJabatan_DPimpinanCabang.find((e) => e.id == val)
            );
          }}
        />
      </Box>
    </>
  );
}

function SelectPimpinanAnakCabang() {
  const [listJabatan_PAnakCabang, setListJabatan_PAnakCabang] =
    useAtom(_pimpinanAnakCabang);
  const [select_PAnakCabang, setSelect_PAnakCabang] = useAtom(
    _selectPimpinanAnakCabang
  );
  useShallowEffect(() => {
    _new_loadJabatanPimpinanAnakCabang(
      setListJabatan_PAnakCabang,
      setSelect_PAnakCabang
    );
  }, []);
  return (
    <>
      <Box>
        <Select
          label="Pimpinan Anak Cabang"
          maxDropdownHeight={maxDropDownH}
          value={select_PAnakCabang.id as any}
          placeholder={
            select_PAnakCabang.name
              ? select_PAnakCabang.name
              : placeholderJabatan
          }
          data={
            _.isEmpty(listJabatan_PAnakCabang)
              ? []
              : listJabatan_PAnakCabang.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))
          }
          onChange={(val) => {
            setSelect_PAnakCabang(
              listJabatan_PAnakCabang.find((e) => e.id == val)
            );
          }}
        />
      </Box>
    </>
  );
}

function SelectPimpinanRanting() {
  const [listJabatan_PRanting, setListJabatan_PRanting] =
    useAtom(_pimpinanRanting);
  const [select_PRanting, setSelect_PRanting] = useAtom(_selectPimpinanRanting);

  useShallowEffect(() => {
    _new_loadJabatanPimpinanRanting(
      setListJabatan_PRanting,
      setSelect_PRanting
    );
  }, []);
  return (
    <>
      <Box>
        <Select
          label="Pimpinan Anak Cabang"
          maxDropdownHeight={maxDropDownH}
          value={select_PRanting.id as any}
          placeholder={
            select_PRanting.name ? select_PRanting.name : placeholderJabatan
          }
          data={
            _.isEmpty(listJabatan_PRanting)
              ? []
              : listJabatan_PRanting.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))
          }
          onChange={(val) => {
            setSelect_PRanting(listJabatan_PRanting.find((e) => e.id == val));
          }}
        />
      </Box>
    </>
  );
}

function SelectPerwakilanLuarNegeri() {
  const [
    listJabatan_PerwakilanLuarNegeri,
    setListJabatan_PerwakilanLuarNegeri,
  ] = useAtom(_perwakilanLuarNegeri);
  const [select_PerwakilanLuarNegeri, setSelect_PerwakilanLuarNegeri] = useAtom(
    _selectPerwakilanLuarNegeri
  );
  useShallowEffect(() => {
    _new_loadPerwakilanLuarNegeri(
      setListJabatan_PerwakilanLuarNegeri,
      setSelect_PerwakilanLuarNegeri
    );
  }, []);

  return (
    <>
      <Box>
        <Select
          label="Pimpinan Anak Cabang"
          maxDropdownHeight={maxDropDownH}
          value={select_PerwakilanLuarNegeri.id as any}
          placeholder={
            select_PerwakilanLuarNegeri.name
              ? select_PerwakilanLuarNegeri.name
              : placeholderJabatan
          }
          data={
            _.isEmpty(listJabatan_PerwakilanLuarNegeri)
              ? []
              : listJabatan_PerwakilanLuarNegeri.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))
          }
          onChange={(val) => {
            setSelect_PerwakilanLuarNegeri(
              listJabatan_PerwakilanLuarNegeri.find((e) => e.id == val)
            );
          }}
        />
      </Box>
    </>
  );
}
//------------------------Select Jabatan----------------------//

export default EditSumberDayaPartaiV2;
