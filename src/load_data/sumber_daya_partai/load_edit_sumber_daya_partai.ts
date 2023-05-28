import { api } from "@/lib/api-backend";
import { ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";
import { ModelTingkatPengurus } from "@/model/interface_tingkat_pengurus";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const _dataStruktur = atomWithStorage<ModelSumberDayaPartai[]>(
  "_database_struktur",
  []
);
export const _new_loadEditByModel =
  atomWithStorage<ModelSumberDayaPartai | null>("_new_model", null);
// export const _new_loadEditByModel2 =
//   atomWithStorage<ModelSumberDayaPartai | null>("_new_model2", null);
export const _listChangeData = atom<ModelSumberDayaPartai | null>(null);
// global state untuk _loadData_ByStatus_BySeach
export const _dataTable_ByStatusSearch = atomWithStorage<ModelSumberDayaPartai[]>("_dataTable_ByStatusSearch>",[])
export const _new_loadData_ByStatusSeacrh = atomWithStorage<ModelSumberDayaPartai | null>("_new_loadData_ByStatusSeacrh",null)
export const _dataSeach = atom<any>('')

// Load Data by Status Keanggotaan dan Search by name
export const _loadData_ByStatus_BySeach = async (status: any, search: any, setDataTable: any) => {
  await fetch(api.apiSumberDayaPartaiSearch + `?status=${status}&?search=${search}`)
  .then((res) => res.json())
  .then((val) => setDataTable(val))
}

// Load Data by Status Kenanggotaan
export async function _loadDataStruktur_ByIdStatus(
  status: any,
  setDataStruktur: any
) {
  await fetch(api.apiSumberDayaPartaiGetAll + `?status=${status}`)
    .then((res) => res.json())
    .then((val) => setDataStruktur(val));
}

export const _loadEditStuktur_ById = async (id: any, setTargetEdit: any) => {
  await fetch(api.apiSumberDayaPartaiGetOne + `?id=${id}`)
    .then((e) => e.json())
    .then((val) => setTargetEdit(val));
};
