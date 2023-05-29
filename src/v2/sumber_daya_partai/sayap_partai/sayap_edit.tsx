import {
  _dataSayapTable_ByStatusSearch,
  _editLoadSayap_ByStatusSeacrh,
  _loadData_ByStatus_BySeach,
  _loadEditSumberDayaPartai_ById,
} from "@/load_data/sumber_daya_partai/load_edit_sumber_daya_partai";
import {
  _new_loadTingkatPengurus,
  _new_loadTingkatPengurus_Sayap,
  _selectTingkatPengurus_Sayap,
  _tingkatPengurus_Sayap,
} from "@/load_data/sumber_daya_partai/load_tingkat_pengurus";
import { Box, Button, Grid, Paper, Select, Text } from "@mantine/core";
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

export const SayapEditV2 = ({
  thisClosed,
  setId,
}: {
  setId: any;
  thisClosed: any;
}) => {
  const [dataTable, setDataTable] = useAtom(_dataSayapTable_ByStatusSearch);
  const [search, setSearch] = useState("");
  const [targetEdit, setTargetEdit] = useAtom(_editLoadSayap_ByStatusSeacrh);
  const [tingkatPengurus, setTingkatPengurus] = useAtom(_tingkatPengurus_Sayap);
  const [selectTingkatPengurus, setSelectTingkatPengurus] = useAtom(
    _selectTingkatPengurus_Sayap
  );
  const [sayapPartai, setSayapPartai] = useAtom(_list_SayapPartai);
  const [selectSayapPartai, setSelectSayapPartai] =
    useAtom(_select_SayapPartaii);
  const [changeData, setChangeData] = useState<ModelSumberDayaPartai | null>(
    null
  );

  useShallowEffect(() => {
    _loadEditSumberDayaPartai_ById(setId, setTargetEdit);
    _new_loadTingkatPengurus_Sayap(
      setTingkatPengurus,
      setSelectTingkatPengurus
    );
    _loadNama_SayapPartai(setSayapPartai, setSelectSayapPartai);
  }, []);

  const onEdit = () => {
    thisClosed();
    const body = {
      id: targetEdit?.id,
      userId: targetEdit?.User.id!,
      masterStatusKeanggotaanId: 2,
      // masterTingkatPengurusId: targetEdit?.MasterTingkatPengurus.id!,
      masterTingkatSayapId: targetEdit?.MasterTingkatSayap.id,
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
      .then(async (val) => _loadData_ByStatus_BySeach(2, search, setDataTable));
  };

  if (!targetEdit) return <></>;

  return (
    <>
      {/* {JSON.stringify(targetEdit, null, "\t")} */}
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
          label="Nama Sayap Partai"
          value={selectSayapPartai.nama}
          placeholder={
            selectSayapPartai?.nama
              ? selectSayapPartai.nama
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
      </Box>
    </>
  );
};
