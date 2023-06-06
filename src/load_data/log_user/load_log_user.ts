import { api } from "@/lib/api-backend";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const _dataLogUser = atomWithStorage<any[]>(
    "_log_user",
    []
);

export const _dataSearchLogUser = atom("");
export const _dataSearchTglLogUSer = atom("");

export async function _loadDataLogUser(
    search: any,
    tgl: any,
    setDataLogUser: any
) {
    await fetch(api.apiLogUserGetAll + `?search=${search}&tgl=${tgl}`)
        .then((res) => res.json())
        .then((val) => setDataLogUser(val));
}