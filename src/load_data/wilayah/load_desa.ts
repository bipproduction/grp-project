import { api } from "@/lib/api-backend";
import { sDesa } from "@/s_state/wilayah/s_desa";

export const _loadDesa = (idKecamatan: string) =>
  fetch(api.apiMasterDesaByKecamatan + `?idKecamatan=${idKecamatan}`)
    .then((e) => e.json())
    .then((e) => (sDesa.value = e));
