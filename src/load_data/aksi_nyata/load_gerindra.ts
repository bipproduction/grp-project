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

export async function _loadDataRencanaKunjunganGerindra(
    search: any,
    setDataRencanaKunjungan: any
) {
    await fetch(api.apiRencanaKunjunganGerindraSearch + `?search=${search}`)
        .then((res) => res.json())
        .then((val) => setDataRencanaKunjungan(val));
}

export async function _loadDataListUndanganGerindra(
    search: any,
    setDataListUndangan: any
) {
    await fetch(api.apiListUndanganGerindraSearch + `?search=${search}`)
        .then((res) => res.json())
        .then((val) => {
            setDataListUndangan(val);
        });
}