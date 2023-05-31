import { api } from "@/lib/api-backend";
import { ModelListUndanganPrabowo, ModelListUndanganPrabowoNew, ModelRencanaKunjungan } from "@/model/model_aksi_nyata";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const _dataRencanaKunjunganPrabowo = atomWithStorage<ModelRencanaKunjungan[]>(
    "_rencana_kunjungan",
    []
);

export const _dataListUndanganPrabowo = atomWithStorage<ModelListUndanganPrabowoNew[]>(
    "_list_undangan",
    []
);

export const _dataSearchRencanaKunjunganPrabowo = atom("");
export const _dataSearchListUndanganPrabowo = atom("");

export async function _loadDataRencanaKunjunganPrabowo(
    search: any,
    setDataRencanaKunjungan: any
) {
    await fetch(api.apiRencanaKunjunganPrabowoSearch + `?search=${search}`)
        .then((res) => res.json())
        .then((val) => setDataRencanaKunjungan(val));
}


export async function _loadDataListUndanganPrabowo(
    search: any,
    setDataListUndangan: any
) {
    await fetch(api.apiListUndanganPrabowoSearch + `?search=${search}`)
        .then((res) => res.json())
        .then((val) => {
            setDataListUndangan(val)
            //console.log(val);
        }
        );
}