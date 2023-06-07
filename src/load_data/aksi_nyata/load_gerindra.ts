import { api } from "@/lib/api-backend";
import { ModelListUndanganGerindra, ModelListUndanganGerindraNew, ModelRencanaKunjungan } from "@/model/model_aksi_nyata";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const _dataRencanaKunjunganGerindra = atomWithStorage<ModelRencanaKunjungan[]>(
    "_rencana_kunjungan",
    []
);

export const _dataListUndanganGerindra = atomWithStorage<ModelListUndanganGerindraNew[]>(
    "_list_undangan",
    []
);

export const _dataSearchRencanaKunjunganGerindra = atom("");
export const _dataSearchListUndanganGerindra = atom("");
export const _dataPageRencanaKunjunganGerindra = atom("");
export const _dataPageListUndanganGerindra = atom("");
export const _dataTotalPageRencanaKunjunganGerindra = atom("");
export const _dataTotalPageListUndanganGerindra = atom("");

export async function _loadDataRencanaKunjunganGerindra(
    search: any,
    setDataRencanaKunjungan: any,
    page: any,
    setTotalPage: any,
) {
    await fetch(api.apiRencanaKunjunganGerindraSearch + `?search=${search}&page=${page}`)
        .then((res) => res.json())
        .then((val) => setDataRencanaKunjungan(val));

    await fetch(api.apiRencanaKunjunganGerindraCountPage + `?search=${search}`)
        .then((res) => res.json())
        .then((val) => setTotalPage(val));
}

export async function _loadDataListUndanganGerindra(
    search: any,
    setDataListUndangan: any,
    page: any,
    setTotalPage: any,
) {
    await fetch(api.apiListUndanganGerindraSearch + `?search=${search}&page=${page}`)
        .then((res) => res.json())
        .then((val) => setDataListUndangan(val));

    await fetch(api.apiListUndanganGerindraCountPage + `?search=${search}`)
        .then((res) => res.json())
        .then((val) => setTotalPage(val));
}