import { api } from "@/lib/api-backend";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const _tpsDpt_ListProvinsi = atomWithStorage<any[]>("_tpsDpt_ListProvinsi", [])
export const _tpsDpt_ProvinsiSearch = atom("")

export const _loadTpsDptProvinsiSearch = async (setProvinsi : any, search: any) => {
    await fetch(api.apiTpsDptProvinsiSearch + `?search=${search}`)
    .then((res) => res.json())
    // .then(console.log) 
    .then((val) => setProvinsi(val))
  };