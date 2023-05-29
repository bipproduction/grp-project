import { api } from "@/lib/api-backend";
import { apiGetMaster } from "@/lib/api-get-master";
import { MasterSayapPartai } from "@/model/interface_sumber_daya_partai";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import _ from "lodash";

export const _list_SayapPartai = atom<any[]>([]);
export const _select_SayapPartaii = atom({
  id: new Number(),
  name: "",
});

export const _loadNama_SayapPartai = async (
  setSayapPartai: any,
  setSelectSayapPartai: any
) => {
  await fetch(apiGetMaster.apiSayapPartai)
    .then((e) => e.json())
    .then(async (val) => {
      if (!_.isEmpty(val)) {
        setSayapPartai(val);
        setSelectSayapPartai(val);
      } else {
        setSayapPartai([]);
      }
    });
};
