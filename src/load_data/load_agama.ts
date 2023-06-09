import { apiGetMaster } from "@/lib/api-get-master";
import { sAgama } from "@/s_state/sumber_daya_partai/s_agama";
import { atom } from "jotai";
import _ from "lodash";

export const _loadAgama = () =>
  fetch(apiGetMaster.apiGetAgama)
    .then((res) => res.json())
    .then((data) => (sAgama.value = data));

// Get Master Agama with Jotai
export const _list_Agama = atom<any[]>([]);
export const _select_Agama = atom({
  id: new Number(),
  name: "",
});
export const _new_LoadAgama = async (setAgama: any, setSelectAgama: any) => {
  await fetch(apiGetMaster.apiGetAgama)
    .then((res) => res.json())
    .then(async (val) => {
      if (!_.isEmpty(val)) {
        setAgama(val);
        setSelectAgama({});
      } else {
        setAgama([]);
      }
    });
};
