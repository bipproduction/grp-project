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
export const _dataPageLegislatifNasional = atom("");
export const _dataPageLegislatifProvinsi = atom("");
export const _dataPageLegislatifKabKot = atom("");
export const _dataTotalPageLegislatifNasional = atom("");
export const _dataTotalPageLegislatifProvinsi = atom("");
export const _dataTotalPageLegislatifKabKot = atom("");





export async function _loadDataLegislatif(
  tingkat: any,
  search: any,
  setDataLegislatif: any,
  // page: any,
  // setTotalPage: any,
) {
  //if (page === undefined) { page = 1 }
  await fetch(api.apiLegislatifSearchAll + `?tingkat=${tingkat}&search=${search}&page=1`)
    .then((res) => res.json())
    .then((val) => setDataLegislatif(val));

  // await fetch(api.apiLegislatifCountPage + `?tingkat=${tingkat}&search=${search}`)
  //   .then((res) => res.json())
  //   .then((val) => setTotalPage(val));
}