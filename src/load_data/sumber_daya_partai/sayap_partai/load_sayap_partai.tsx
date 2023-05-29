import { api } from "@/lib/api-backend";
import { apiGetMaster } from "@/lib/api-get-master";
import { MasterSayapPartai } from "@/model/interface_sumber_daya_partai";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import _ from "lodash";

export const _listSayapPartai = atomWithStorage<MasterSayapPartai[]>("", []);
export const _select_SayapPartai = atom<MasterSayapPartai | null>(null);

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
