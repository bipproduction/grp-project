import { api } from "@/lib/api-backend";
import { ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const _dataTable_ByStatusSearch_SuperAdmin = atomWithStorage<
  ModelSumberDayaPartai[]
>("_dataTable_ByStatusSearch>", []);

export const _loadData_ByStatus_BySeach_Super_Admin = async (
    status: any,
    search: any,
    setDataTable: any
  ) => {
    await fetch(
      api.apiSumberDayaPartaiSearch + `?status=${status}&search=${search}`
    )
      .then((res) => res.json())
      .then((val) => {
        // console.table(val);
        // console.log(search)
        setDataTable(val);
      });
  };

  export const _dataSearchSuperAdmin = atomWithStorage<ModelSumberDayaPartai[]>(
    "_dataSearch",
    []
  );

  export const _dataSearchStrukturPartai = atom("");
  export const _dataPageStrukturPartai = atom("");
  export const _dataTotalPageStrukturPartai = atom("");

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

export const _dataStrukturTable_ByStatusSearchSuper = atomWithStorage<
  ModelSumberDayaPartai | null
>("_dataTable_ByStatusSearchSuper", null);

export const _searchDataSumberDayaPartaiSuperAdmin = atom("")

// Load Data by Status Keanggotaan dan Search by name
export const _loadData_ByStatus_BySeachSuper = async (
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

export const _dataSayappartaiPage = atom("");
export const _dataTotalPageSayapPartai = atom("");
