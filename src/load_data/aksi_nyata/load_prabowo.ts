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
export const _dataPageRencanaKunjunganPrabowo = atom("");
export const _dataPageListUndanganPrabowo = atom("");
export const _dataTotalPageRencanaKunjunganPrabowo = atom("");
export const _dataTotalPageListUndanganPrabowo = atom("");

export async function _loadDataRencanaKunjunganPrabowo(
    search: any,
    setDataRencanaKunjungan: any,
    page: any,
    setTotalPage: any,
) {
    await fetch(api.apiRencanaKunjunganPrabowoSearch + `?search=${search}&page=${page}`)
        .then((res) => res.json())
        .then((val) => setDataRencanaKunjungan(val));

    await fetch(api.apiRencanaKunjunganPrabowoCountPage + `?search=${search}`)
        .then((res) => res.json())
        .then((val) => setTotalPage(val));
}


export async function _loadDataListUndanganPrabowo(
    search: any,
    setDataListUndangan: any,
    page: any,
    setTotalPage: any,
) {
    await fetch(api.apiListUndanganPrabowoSearch + `?search=${search}&page=${page}`)
        .then((res) => res.json())
        .then((val) => setDataListUndangan(val));

    await fetch(api.apiListUndanganPrabowoCountPage + `?search=${search}`)
        .then((res) => res.json())
        .then((val) => setTotalPage(val));
}