import { api } from "@/lib/api-backend";
import { ModelEksekutif } from "@/model/model_peta_kekuatan";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";




export const _dataEksekutifNasional = atomWithStorage<ModelEksekutif[]>(
    "_eksekutif_nasional",
    []
);

export const _dataEksekutifProvinsi = atomWithStorage<ModelEksekutif[]>(
    "_eksekutif_provinsi",
    []
);

export const _dataEksekutifKabKot = atomWithStorage<ModelEksekutif[]>(
    "_eksekutif_kabkot",
    []
);

export const _dataSearchEksekutifNasional = atom("");
export const _dataSearchEksekutifProvinsi = atom("");
export const _dataSearchEksekutifKabKot = atom("");



export async function _loadDataEksekutif(
    tingkat: any,
    search: any,
    setDataEksekutif: any
) {
    await fetch(api.apiEksekutifSearchAll + `?tingkat=${tingkat}&search=${search}`)
        .then((res) => res.json())
        .then((val) => setDataEksekutif(val));
}