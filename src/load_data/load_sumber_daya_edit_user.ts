import { api } from "@/lib/api-backend";
import { ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";
import { atomWithStorage } from "jotai/utils";

export const _dataEdit = atomWithStorage<ModelSumberDayaPartai | null>(
    "_dataEdit",
    null
  );

  export const _loadEditSumberDayaPartai_ById_Keanggotaan = async (
    setListDataEdit: any
  ) => {
    await fetch(api.apiSumberDayaPartaiGetOne + `?id=${localStorage.getItem("user_id")}`)
    .then(async (val) => {
        if (val.status == 200) {
          const data = await val.json();
          setListDataEdit(data);
          return;
        }
      });
  };