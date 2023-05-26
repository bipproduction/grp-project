import { atom } from "jotai";
import { sTingkatPengurus } from "./../../s_state/sumber_daya_partai/s_tingkat_pengurus";
import { apiGetMaster } from "@/lib/api-get-master";
import { atomWithStorage } from "jotai/utils";
import { MasterTingkatPengurus } from "@/model/interface_sumber_daya_partai";
import _ from "lodash";
import { ModelTingkatPengurus } from "@/model/interface_tingkat_pengurus";

export const _tingkatPengurus = atom<any[]>([]);
export const _selectTingkatPengurus = atom({
  id: "",
  name: ""
})
  // atomWithStorage<MasterTingkatPengurus | null>("_selectTingkatPengurus", null);
export const _editTingkatPengurus =
  atomWithStorage<ModelTingkatPengurus | null>(
    "_new_modelTingkatPengurus",
    null
  );

export const _loadTingkatPengurus = () =>
  fetch(apiGetMaster.apiGetTingkatPengurus)
    .then((e) => e.json())
    .then((e) => (sTingkatPengurus.value = e));

export const _new_loadTingkatPengurus = (
  setTingkatPengurus: any,
  setSelectTingkatPengurus: any
) => {
  fetch(apiGetMaster.apiGetTingkatPengurus)
    .then((e) => e.json())
    .then(async (val) => {
      if (!_.isEmpty(val)) {
        setTingkatPengurus(val);
        setSelectTingkatPengurus({});
      } else {
        setTingkatPengurus([]);
      }
    });
};
