import { apiGetMaster } from "@/lib/api-get-master";
import {
  sJabatanEksekutifKabupaten,
  sJabatanEksekutifKota,
  sJabatanEksekutifProvinsi,
} from "@/s_state/eksekutif/s_jabatan_eksekutif";

export const _loadJabatanEksekutifProvinisi = () =>
  fetch(apiGetMaster.apiGetJabatanEksekutifProv)
    .then((e) => e.json())
    .then((e) => (sJabatanEksekutifProvinsi.value = e));

export const _loadJabatanEksekutifKabupaten = () =>
  fetch(apiGetMaster.apiGetJabatanEksekutifKab)
    .then((e) => e.json())
    .then((e) => (sJabatanEksekutifKabupaten.value = e));

export const _loadJabatanEksekutifKota = () =>
  fetch(apiGetMaster.apiGetJabatanEksekutifKota)
    .then((e) => e.json())
    .then((e) => (sJabatanEksekutifKota.value = e));
