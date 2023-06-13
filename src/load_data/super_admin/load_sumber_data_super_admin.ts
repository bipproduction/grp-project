import { api } from "@/lib/api-backend";
import { ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const _dataTable_ByStatusSearch_SuperAdmin = atomWithStorage<
  ModelSumberDayaPartai[]
>("_dataTable_ByStatusSearch>", []);


// Load Data by Status Keanggotaan dan Search by name
export const _loadData_ByStatus_BySeachSuperAdmin = async (
  status: any,
  search: any,
  setDataTable: any
) => {
  await fetch(
    api.apiSumberDayaPartaiSearch + `?status=${status}&search=${search}`
  )
    .then((res) => res.json())
    .then((val) => {
      setDataTable(val);
    });
};

export const _dataStrukturTable_ByStatusSearchSuper =
  atomWithStorage<ModelSumberDayaPartai | null>(
    "_dataTable_ByStatusSearchSuper",
    null
  );

export const _searchDataSumberDayaPartaiSuperAdmin = atom("");

// Anggota Partai
export async function _loadData_ByStatus_BySeachSuperAnggotaPartai(
  status: any,
  search: any,
  setDataTable: any,
  page: any,
  setInputTotalPage: any
) {
  await fetch(
    api.apiSumberDayaPartaiSearch +
      `?status=${status}&search=${search}&page=${page}`
  )
    .then((res) => res.json())
    .then((val) => setDataTable(val));
    
  await fetch(
    api.apiSumberDayaPartaiCountPage + `?status=${status}&search=${search}`
  )
    .then((res) => res.json())
    .then((val) => setInputTotalPage(val));
}

// Sayap Partai
export async function _loadData_ByStatus_BySeachSuperSayapPartai(
  status: any,
  search: any,
  setDataTable: any,
  page: any,
  setInputTotalPage: any
) {
  await fetch(
    api.apiSumberDayaPartaiSearch +
      `?status=${status}&search=${search}&page=${page}`
  )
    .then((res) => res.json())
    .then((val) => setDataTable(val));
    
  await fetch(
    api.apiSumberDayaPartaiCountPage + `?status=${status}&search=${search}`
  )
    .then((res) => res.json())
    .then((val) => setInputTotalPage(val));
}

// Kader Partai
export async function _loadData_ByStatus_BySeachSuperKaderPartai(
  status: any,
  search: any,
  setDataTable: any,
  page: any,
  setInputTotalPage: any
) {
  await fetch(
    api.apiSumberDayaPartaiSearch +
      `?status=${status}&search=${search}&page=${page}`
  )
    .then((res) => res.json())
    .then((val) => setDataTable(val));
    
  await fetch(
    api.apiSumberDayaPartaiCountPage + `?status=${status}&search=${search}`
  )
    .then((res) => res.json())
    .then((val) => setInputTotalPage(val));
}

// Struktur Partai
export async function _loadData_ByStatus_BySeachSuperStrukturPartai(
  status: any,
  search: any,
  setDataTable: any,
  page: any,
  setInputTotalPage: any
) {
  await fetch(
    api.apiSumberDayaPartaiSearch +
      `?status=${status}&search=${search}&page=${page}`
  )
    .then((res) => res.json())
    .then((val) => setDataTable(val));
    
  await fetch(
    api.apiSumberDayaPartaiCountPage + `?status=${status}&search=${search}`
  )
    .then((res) => res.json())
    .then((val) => setInputTotalPage(val));
}

// Struktur Partai
export const _dataStrukturPartaiPage = atom("");
export const _dataTotalStrukturPartaiPage = atom("");

// Sayap Partai
export const _dataSayapPartaiPage = atom("");
export const _dataTotalSayapPartaiPage = atom("");

// Kader Partai
export const _dataKaderPartaiPage = atom("");
export const _dataTotalKaderPartaiPage = atom("");

// Anggota Partai
export const _dataAnggotaPartaiPage = atom("");
export const _dataTotalAnggotaPartaiPage = atom("");



