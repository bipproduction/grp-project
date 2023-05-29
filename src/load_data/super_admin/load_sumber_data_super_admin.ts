import { api } from "@/lib/api-backend";
import { ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";
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