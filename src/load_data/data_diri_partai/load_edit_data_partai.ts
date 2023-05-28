import { api } from "@/lib/api-backend"
import { DataDiri, ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";
import { atomWithStorage } from "jotai/utils";

export const _loadEditDataDiri_ById = async (id: any, setTargetDataEdit: any) => {
    await fetch(api.apiDataDiriUpdate + `?id=${id}`)
    .then((val) => val.json())
    .then((v) => setTargetDataEdit(v))
}

export const _dataDiri = atomWithStorage<DataDiri | null>(
    "_datadiri",
    null
  );

  export const _EditDataDiri = atomWithStorage<ModelSumberDayaPartai | null>(
    "_edit_data_diri", null
  )

  export async function _loadDataDiri_ByIdStatus(
    // status: any,
    setDataStruktur: any
  ) {
    await fetch(api.apiSumberDayaPartaiGetAll + `?status=1`)
      .then((res) => res.json())
      .then((val) => setDataStruktur(val));
  }

  export const _loadEditStuktur_ById = async (id: any, setTargetEdit: any) => {
    await fetch(api.apiSumberDayaPartaiGetOne + `?id=${id}`)
      .then((e) => e.json())
      .then((val) => setTargetEdit(val));
  };
