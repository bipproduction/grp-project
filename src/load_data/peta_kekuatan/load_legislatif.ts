import { api } from "@/lib/api-backend";
import { ModelLegislatif } from "@/model/model_peta_kekuatan";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";




export const _dataLegislatifNasional = atomWithStorage<ModelLegislatif[]>(
  "_legislatif_nasional",
  []
);

export const _dataLegislatifProvinsi = atomWithStorage<ModelLegislatif[]>(
  "_legislatif_provinsi",
  []
);

export const _dataLegislatifKabKot = atomWithStorage<ModelLegislatif[]>(
  "_legislatif_kabkot",
  []
);


export const _dataSearchLegislatifNasional = atom("");
export const _dataSearchLegislatifProvinsi = atom("");
export const _dataSearchLegislatifKabKot = atom("");





export async function _loadDataLegislatif(
  tingkat: any,
  search: any,
  setDataLegislatif: any
) {
  await fetch(api.apiLegislatifSearchAll + `?tingkat=${tingkat}&search=${search}`)
    .then((res) => res.json())
    .then((val) => setDataLegislatif(val));
}