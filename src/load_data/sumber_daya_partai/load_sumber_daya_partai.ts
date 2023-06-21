import { api } from "@/lib/api-backend";
import { ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";
import { ModelTingkatPengurus } from "@/model/interface_tingkat_pengurus";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const _editDataStruktur = atomWithStorage<ModelSumberDayaPartai | null>(
  "_list_database_struktur",
  null
);
export const _dataStruktur = atomWithStorage<ModelSumberDayaPartai[]>(
  "_database_struktur",
  []
);
export const _dataSayapSuper = atomWithStorage<ModelSumberDayaPartai[]>(
  "_database_sayap",
  []
);
export const _new_loadEditByModel =
  atomWithStorage<ModelSumberDayaPartai | null>("_new_model", null);
// export const _new_loadEditByModel2 =
//   atomWithStorage<ModelSumberDayaPartai | null>("_new_model2", null);
export const _listChangeData = atom<ModelSumberDayaPartai | null>(null);

// Global state untuk _loadData_ByStatus_BySeach
// Storage di bawah digunakan untuk menampung isi database untuk di tampilkan di table
export const _dataStrukturTable_ByStatusSearch = atomWithStorage<
  ModelSumberDayaPartai[]
>("_dataTable_ByStatusSearch>", []);
export const _dataSayapTable_ByStatusSearch = atomWithStorage<
  ModelSumberDayaPartai[]
>("_dataSayapTable", []);
export const _dataKaderTable_ByStatusSearch = atomWithStorage<
  ModelSumberDayaPartai[]
>("_dataKaderTable", []);
export const _dataAnggotaTable_ByStatusSearch = atomWithStorage<
  ModelSumberDayaPartai[]
>("_dataAnggotaPartai", []);

// Storage di bawah digunakan untuk memanggil data ke edit page, Get One by Id
export const _editLoadStruktur_ByStatusSeacrh =
  atomWithStorage<ModelSumberDayaPartai | null>(
    " _editLoadStruktur_ByStatusSeacrh",
    null
  );
export const _editLoadSayap_ByStatusSeacrh =
  atomWithStorage<ModelSumberDayaPartai | null>(
    "_editLoadSayap_ByStatusSeacrh",
    null
  );
export const _editLoadKader_ByStatusSeacrh =
  atomWithStorage<ModelSumberDayaPartai | null>(
    "_editLoadKader_ByStatusSeacrh",
    null
  );
export const _dataSeach = atom<any>("");
export const _searchDataSumberDayaPartai = atom("")
// Pagination storage
export const _dataPageSDP_Strukturr = atom("")
export const _dataPageSDP_Sayap = atom("")
export const _dataPageSDP_Kader = atom("")
export const _dataPageSDP_Anggota = atom("")
export const _dataTotalPageSDP_Strukturr = atom("")
export const _dataTotalPageSDP_Sayap = atom("")
export const _dataTotalPageSDP_Kader = atom("")
export const _dataTotalPageSDP_Anggota = atom("")


// Load Data by Status Keanggotaan dan Search by name
// New update: Penambahan pagination
export const _loadDataSDP_ByStatus_BySeach = async (
  status: any,
  search: any,
  setDataTable: any,
  page: any,
  setTotalPage: any
) => {
  await fetch(
    api.apiSumberDayaPartaiSearch + `?status=${status}&search=${search}&page=${page}`
  )
    .then((res) => res.json())
    .then((val) => {
      setDataTable(val);
    });

  await fetch(
    api.apiSumberDayaPartaiCountPage + `?status=${status}&search=${search}`
  )
  .then((res) => res.json())
  .then((val) => (setTotalPage(val)))
};

// Load Data by Status Kenanggotaan
export async function _loadDataStruktur_ByIdStatus(
  status: any,
  setDataStruktur: any
) {
  await fetch(api.apiSumberDayaPartaiGetAll + `?status=${status}`)
    .then((res) => res.json())
    .then((val) => setDataStruktur(val));
}

export const _loadEditSumberDayaPartai_ById = async (
  id: any,
  setTargetEdit: any
) => {
  await fetch(api.apiSumberDayaPartaiGetOne + `?id=${id}`)
    .then((e) => e.json())
    .then((val) => setTargetEdit(val));
};
export const _loadUserSumberDayaPartai_ById = async (
  id: any,
  setDatKeanggotan: any
) => {
  await fetch(api.apiSumberDayaPartaiGetOne + `?id=${id}`)
  .then(async (val) => {
        if (val.status == 200) {
          const data = await val.json();
          setDatKeanggotan(data);
          return;
        }
      });
};
