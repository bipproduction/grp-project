import {
  sJabatanDewanPembina,
  sJabatanDewanPimpinanCabang,
  sJabatanDewanPimpinanDaerah,
  sJabatanDewanPimpinanPusat,
  sJabatanPerwakilanLuarNegeri,
  sJabatanPimpinanAnakCabang,
  sJabatanPimpinanRanting,
} from "./../../s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { apiGetMaster } from "@/lib/api-get-master";

export const _loadJabatanDewanPembina = () =>
  fetch(apiGetMaster.apiGetJabatanDewanPembina)
    .then((e) => e.json())
    .then((e) => (sJabatanDewanPembina.value = e));

export const _loadJabatanDewanPimpinanPusat = () =>
  fetch(apiGetMaster.apiGetJabatanDewanPimpinanPusat)
    .then((e) => e.json())
    .then((e) => (sJabatanDewanPimpinanPusat.value = e));

export const _loadJabatanDewanPimpinanDaerah = () =>
  fetch(apiGetMaster.apiGetJabatanDewanPimpinanDaerah)
    .then((e) => e.json())
    .then((e) => (sJabatanDewanPimpinanDaerah.value = e));

export const _loadJabatanDewanPimpinanCabang = () =>
  fetch(apiGetMaster.apiGetJabatanDewanPimpinanCabang)
    .then((e) => e.json())
    .then((e) => (sJabatanDewanPimpinanCabang.value = e));

export const _loadJabatanPimpinanAnakCabang = () =>
  fetch(apiGetMaster.apiGetJabatanPimpinanAnakCabang)
    .then((e) => e.json())
    .then((e) => (sJabatanPimpinanAnakCabang.value = e));

export const _loadJabatanPimpinanRanting = () =>
  fetch(apiGetMaster.apiGetJabatanPimpinanRanting)
    .then((e) => e.json())
    .then((e) => (sJabatanPimpinanRanting.value = e));

    export const _loadJabtanPerwakilanLuarNegeri = () =>
    fetch(apiGetMaster.apiGetJabatanPerwakilanLuarNegeri)
      .then((e) => e.json())
      .then((e) => (sJabatanPerwakilanLuarNegeri.value = e));
  
