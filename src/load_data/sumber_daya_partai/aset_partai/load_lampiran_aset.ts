import { api } from "@/lib/api-backend";
import { atomWithStorage } from "jotai/utils";

export const _getAll_LampiranPartai_ById = atomWithStorage<any[]>(
  "_getAll_LampiranPartai",
  []
);
export async function _loadLampiranPartai_ById(
  id: string,
  setDataLampiran: any
) {
  await fetch(api.apiLampiranGetByAset + `?aset=${id}`)
    .then((res) => res.json())
    .then((val) => setDataLampiran(val));
};
