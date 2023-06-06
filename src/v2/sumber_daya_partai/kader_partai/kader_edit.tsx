import {
  Box,
  Paper,
  Grid,
  Button,
  Text,
  Select,
  TextInput,
  Loader,
} from "@mantine/core";
import COLOR from "../../../../fun/WARNA";
import { useShallowEffect } from "@mantine/hooks";
import {
  _dataKaderTable_ByStatusSearch,
  _editLoadKader_ByStatusSeacrh,
  _loadData_ByStatus_BySeach,
  _loadEditSumberDayaPartai_ById,
  _searchDataSumberDayaPartai,
} from "@/load_data/sumber_daya_partai/load_edit_sumber_daya_partai";
import { useAtom } from "jotai";
import {
  _list_KaderPartai,
  _loadNama_KaderPartai,
  _select_KaderPartai,
} from "@/load_data/sumber_daya_partai/kader_partai/load_kader_partai";
import { useState } from "react";
import { ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";
import _ from "lodash";
import { api } from "@/lib/api-backend";
import { buttonSimpan } from "@/v2/component/button-toast";
import { _postLogUser } from "@/load_data/log_user/post_log_user";

export const KaderEditv2 = ({
  thisClosed,
  valueId,
}: {
  thisClosed: any;
  valueId: any;
}) => {
  const [dataTable, setDataTable] = useAtom(_dataKaderTable_ByStatusSearch);
  const [search, setSearch] = useState("");
  const [targetEdit, setTargetEdit] = useAtom(_editLoadKader_ByStatusSeacrh);
  const [kaderPartai, setKaderPartai] = useAtom(_list_KaderPartai);
  const [selectKaderPartai, setSelectKaderPartai] =
    useAtom(_select_KaderPartai);
  const [changeData, setChangeData] = useState<ModelSumberDayaPartai | null>(
    null
  );
  const [inputSearch, setInputSearch] = useAtom(_searchDataSumberDayaPartai)

  useShallowEffect(() => {
    _loadEditSumberDayaPartai_ById(valueId, setTargetEdit);
    _loadNama_KaderPartai(setKaderPartai, setSelectKaderPartai);
   
  }, []);

  const onEdit = () => {
    buttonSimpan();
    thisClosed();
    const body = {
      id: targetEdit?.id,
      userId: targetEdit?.User.id!,
      masterStatusKeanggotaanId: 3,
      // masterTingkatPengurusId: targetEdit?.MasterTingkatPengurus.id!,
      //   masterTingkatSayapId: targetEdit?.MasterTingkatSayap.id,
      // masterJabatanId: targetEdit?.MasterJabatan!,
      // masterJabatanDewanPembinaId: targetEdit?.MasterJabatanDewanPembina?.id!,
      // masterJabatanDewanPimpinanPusatId:
      //   targetEdit?.MasterJabatanDewanPimpinanPusat?.id!,
      // masterJabatanDewanPimpinanDaerahId:
      //   targetEdit?.MasterJabatanDewanPimpinanDaerah?.id!,
      // masterJabatanDewanPimpinanCabangId:
      //   targetEdit?.MasterJabatanDewanPimpinanCabang?.id!,
      // masterJabatanPimpinanAnakCabangId:
      //   targetEdit?.MasterJabatanPimpinanAnakCabang?.id!,
      // masterJabatanPimpinanRantingId:
      //   targetEdit?.MasterJabatanPimpinanRanting?.id!,
      // masterJabatanPerwakilanPartaiDiLuarNegeriId:
      //   targetEdit?.MasterJabatanPerwakilanPartaiDiLuarNegeri?.id!,
      //   masterSayapPartaiId: targetEdit?.MasterSayapPartai?.id!,
      masterKaderPartaiId: targetEdit?.MasterKaderPartai.id,
      // masterProvinceId: targetEdit?.MasterProvince?.id!,
      // masterKabKotId: targetEdit?.MasterKabKot?.id!,
      // masterKecamatanId: targetEdit?.MasterKecamatan?.id!,
      // masterDesaId: targetEdit?.MasterDesa?.id!,
      // masterNegaraId: targetEdit?.MasterNegara?.id!,
      // alamatKantor: targetEdit?.alamatKantor!,
      // waAdmin: targetEdit?.waAdmin!,
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

      .then(async (val) => _loadData_ByStatus_BySeach(3, inputSearch, setDataTable));
      _postLogUser(localStorage.getItem("user_id"), "UBAH" ,"User mengubah data kader partai")

      // .then(console.log)
  };

  if (!targetEdit)
    return (
      <>
        <Loader />
      </>
    );

  return (
    <>
      {/* {JSON.stringify(kaderPartai)} */}
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Edit Data Kader Partai
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
            value={targetEdit?.User.DataDiri.name}
          />
          <Select
            maxDropdownHeight={120}
            label="Kader Partai"
            value={selectKaderPartai.name}
            placeholder={
              selectKaderPartai.name
                ? selectKaderPartai.name
                : targetEdit?.MasterKaderPartai.name
            }
            data={kaderPartai.map((e) => ({
              value: e.id,
              label: e.name,
            }))}
            onChange={(val) => {
              setSelectKaderPartai(kaderPartai.find((e) => e.id == val));
              const data: any = _.clone(targetEdit);
              data.MasterKaderPartai.id = val;
              setChangeData(data);
            }}
          />
        </Box>
      </Box>
    </>
  );
};
