import { atom } from "jotai";
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
import { atomWithStorage } from "jotai/utils";
import _, { set } from "lodash";
import { MasterJabatanDewanPembina } from "@/model/interface_sumber_daya_partai";

// setValue untuk Struktu Partai
export const _dewanPembina = atom<any[]>([]);
export const _selectDewanPembina = atom({
  id: new Number(),
  name: "",
});
export const _dewanPimpinanPusat = atom<any[]>([]);
export const _selectDewanPimpinanPusat = atom({
  id: new Number(),
  name: "",
});
export const _dewanPimpinanDaerah = atom<any[]>([]);
export const _selectDewanPimpinanDaerah = atom({
  id: new Number(),
  name: "",
});
export const _dewanPimpinanCabang = atom<any[]>([]);
export const _selectDewabPimpinanCabang = atom({
  id: new Number(),
  name: "",
});
export const _pimpinanAnakCabang = atom<any[]>([]);
export const _selectPimpinanAnakCabang = atom({
  id: new Number(),
  name: "",
});
export const _pimpinanRanting = atom<any[]>([]);
export const _selectPimpinanRanting = atom({
  id: new Number(),
  name: "",
});
export const _perwakilanLuarNegeri = atom<any[]>([]);
export const _selectPerwakilanLuarNegeri = atom({
  id: new Number(),
  name: "",
});

// setValue untuk Sayap Partai
export const _dPimpinanPusat_Sayap = atom<any[]>([])
export const _selectDPimpinanPusat_Sayap = atom({
  id: new Number(),
  name: "",
})
export const _dPimpinanDaerah_Sayap = atom<any[]>([])
export const _selectDPimpinanDaerah_Sayap = atom({
  id: new Number(),
  name: "",
})
export const _dPimpinanCabang_Sayap = atom<any[]>([])
export const _selectDPimpinanCabang_Sayap = atom({
  id: new Number(),
  name: "",
})
export const _pAnakCabang_Sayap = atom<any[]>([])
export const _selectPAnakCabang_Sayap = atom({
  id: new Number(),
  name: "",
})

// JOTAI GLOBAL STATE
export const _new_loadJabatanDewanPembina = (
  setDPembina: any,
  setSelectDPembina: any
) => {
  fetch(apiGetMaster.apiGetJabatanDewanPembina)
    .then((e) => e.json())
    .then(async (val) => {
      if (!_.isEmpty(val)) {
        setDPembina(val);
        setSelectDPembina({});
      } else {
        setDPembina([]);
      }
    });
};

export const _new_loadJabatanDewanPimpinanPusat = (
  setListJabatan_DPimpinanPusat: any,
  setSelect_DPimpinanPusat: any
) => {
  fetch(apiGetMaster.apiGetJabatanDewanPimpinanPusat)
    .then((e) => e.json())
    .then(async (val) => {
      if (!_.isEmpty(val)) {
        setListJabatan_DPimpinanPusat(val);
        setSelect_DPimpinanPusat({});
      } else {
        setListJabatan_DPimpinanPusat([]);
      }
    });
};

export const _new_loadJabatanDewanPimpinanDaerah = (
  setListJabatan_DPimpinanDaerah: any,
  setSelect_DPimpinanDaerah: any
) => {
  fetch(apiGetMaster.apiGetJabatanDewanPimpinanDaerah)
    .then((e) => e.json())
    .then(async (val) => {
      if (!_.isEmpty(val)) {
        setListJabatan_DPimpinanDaerah(val), setSelect_DPimpinanDaerah({});
      } else {
        setListJabatan_DPimpinanDaerah([]);
      }
    });
};

export const _new_loadJabatanDewanPimpinanCabang = (
  setListJabatan_DPimpinanCabang: any,
  setSelect_DPimpinanCabang: any
) => {
  fetch(apiGetMaster.apiGetJabatanDewanPimpinanCabang)
    .then((e) => e.json())
    .then(async (val) => {
      if (!_.isEmpty(val)) {
        setListJabatan_DPimpinanCabang(val), setSelect_DPimpinanCabang({});
      } else {
        setListJabatan_DPimpinanCabang([]);
      }
    });
};

export const _new_loadJabatanPimpinanAnakCabang = (
  setListJabatan_PAnakCabang: any,
  setSelect_PAnakCabang: any
) => {
  fetch(apiGetMaster.apiGetJabatanPimpinanAnakCabang)
    .then((e) => e.json())
    .then(async (val) => {
      if (!_.isEmpty(val)) {
        setListJabatan_PAnakCabang(val), setSelect_PAnakCabang({});
      } else {
        setListJabatan_PAnakCabang([]);
      }
    });
};

export const _new_loadJabatanPimpinanRanting = (
  setListJabatan_PRanting: any,
  setSelect_PRanting: any
) => {
  fetch(apiGetMaster.apiGetJabatanPimpinanRanting)
    .then((e) => e.json())
    .then(async (val) => {
      if (!_.isEmpty(val)) {
        setListJabatan_PRanting(val), setSelect_PRanting({});
      } else {
        setListJabatan_PRanting([]);
      }
    });
};

export const _new_loadPerwakilanLuarNegeri = (
  setListPerwakilanLuarNegeri: any,
  setSelect_PerwakilanLuarNegeri: any
) => {
  fetch(apiGetMaster.apiGetJabatanPerwakilanLuarNegeri)
    .then((e) => e.json())
    .then(async (val) => {
      if (!_.isEmpty(val)) {
        setListPerwakilanLuarNegeri(val), setSelect_PerwakilanLuarNegeri({});
      } else {
        setListPerwakilanLuarNegeri([]);
      }
    });
};

// SIGNAL GLOBAL STATE
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
