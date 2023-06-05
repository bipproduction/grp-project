import { api } from "@/lib/api-backend";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const _dataLogUser = atomWithStorage<any[]>(
    "_log_user",
    []
);

export const _dataSearchLogUser = atom("");

export async function _loadLogUser(
    search: any,
    setDataLogUser: any
) {
    await fetch(api.apiLogUserGetAll)
        .then((res) => res.json())
        .then((val) => setDataLogUser(val));
}