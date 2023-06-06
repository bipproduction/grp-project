import { api } from "@/lib/api-backend";
import { apiGetMaster } from "@/lib/api-get-master";
import { ModelAsetPartai } from "@/model/interface_aset_partai";
import {
  sKategoriAset,
  sStatusAset,
} from "@/s_state/sumber_daya_partai/s_aset";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import _ from "lodash";

export const _listData_AsetPartai = atomWithStorage<ModelAsetPartai[]>(
  "_listData_AsetPartai",
  []
);
export const _listDataAset_BySearch = atomWithStorage<ModelAsetPartai[]>(
  "_listDataAset_BySearch",
  []
);
export const _statusAsetPartai = atom<any[]>([]);
export const _select_StatusAsetPartai = atom({
  id: new Number(),
  name: "",
});
export const _kategoriAsetPartai = atom<any[]>([]);
export const _select_KategoriAsetPartai = atom({
  id: new Number(),
  name: "",
});

export const _searchDataAsetPartai = atom("");

// New Get Data with Jotai
export const _loadListDataAset = async (setDataAset: any) => {
  await fetch(api.apiAsetPartaiGetAll)
    .then((res) => res.json())
    .then(setDataAset);
};

export async function _loadDataAset_BySearch  (
  search: any,
  setDataAset_Search: any
) {
  await fetch(api.apiAsetPartaiSearch + `?search=${search}`)
    .then((res) => res.json())
    .then((val) => setDataAset_Search(val));
};

export const _loadMaster_StatusAset = async (
  setStatusAset: any,
  setSelectStatusAset: any
) => {
  await fetch(apiGetMaster.apiGetStatusAset)
    .then((res) => res.json())
    .then(async (val) => {
      if (!_.isEmpty(val)) {
        setStatusAset(val);
        setSelectStatusAset({});
      } else {
        setStatusAset([]);
      }
    });
};

export const _loadMaster_Kategori = async (
  setKategoriAset: any,
  setSelectKategoriAset: any
) => {
  await fetch(apiGetMaster.apiGetKategoriAset)
    .then((res) => res.json())
    .then(async (val) => {
      if (!_.isEmpty(val)) {
        setKategoriAset(val);
        setSelectKategoriAset({});
      } else {
        setKategoriAset([]);
      }
    });
};

// Get Master with signal
export const _loadKategoriAset = () =>
  fetch(apiGetMaster.apiGetKategoriAset)
    .then((res) => res.json())
    .then((val) => (sKategoriAset.value = val));

export const _loadStatusAset = () =>
  fetch(apiGetMaster.apiGetStatusAset)
    .then((res) => res.json())
    .then((val) => (sStatusAset.value = val));
