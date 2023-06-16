import { api } from "@/lib/api-backend";
import { apiGetMaster } from "@/lib/api-get-master";
import { ModelCalonPemilihPotensial } from "@/model/interface_calon_pemilih_potensial";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import _ from "lodash";

export const _provinsi_CalonPP = atom<any[]>([]);
export const _selectProvinsi_CalonPP = atom({
  id: new Number(),
  name: "",
});

export const _kabkot_CalonPP = atom<any[]>([]);
export const _selectKabkot_CalonPP = atom({
  id: new Number(),
  name: "",
});

export const _kecamatan_CalonPP = atom<any[]>([]);
export const _selectKecamatan_CalonPP = atom({
  id: new Number(),
  name: "",
});

export const _desa_CalonPP = atom<any[]>([]);
export const _selectDesa_CalonPP = atom({
  id: new Number(),
  name: "",
});

// Get Data CPP with search
export const _listData_CalonPemilihPotensial = atomWithStorage<
  ModelCalonPemilihPotensial[]
>("_listData_CalonPemilihPotensial", []);
export const _searchData_CalonPemilihPotensial = atom("");
export const _dataPageCalonPemilihPotensial = atom("")
export const _dataTotalPageCalonPemilihPotensial = atom("")

export const _loadDataCalonPemilihPotensial_BySearch = async (
  search: any,
  setListDataCPP: any,
  page: any,
  setTotalPage: any,
) => {
  await fetch(api.apiCPTSearch + `?search=${search}&page=${page}`)
    .then((res) => res.json())
    .then((val) => setListDataCPP(val));

  await fetch(api.apiCPTCountPage + `?search=${search}`)
  .then((res) => res.json())
  .then((val) => setTotalPage(val))
};

// Get Master Kategori Calon Pemilih POtensial
export const _listKategori_CalonPP = atom<any[]>([]);
export const _selectKategori_CalonPP = atom({
  id: new Number(),
  name: "",
});
export const _loadList_KategoriCalonPP = async (
  setKategoriCPP: any,
  setSelectKategoriCPP: any
) => {
  await fetch(apiGetMaster.apiKategoriPemilihPotensial)
    .then((res) => res.json())
    .then(async (val) => {
      if (!_.isEmpty(val)) {
        setKategoriCPP(val);
        setSelectKategoriCPP({});
      } else {
        setKategoriCPP([]);
      }
    });
};

// Get No TPS for CPP
export const _listNoTps_CPP = atom<any[]>([])
export const _selectNoTps_CPP = atom({
  id: new Number(),
  name: ""
})
export const _loadList_NoTPS = async (setNoTPS: any,setSelectNoTps: any) => {
  await fetch(apiGetMaster.apiGetNoTPS)
  .then((res) => res.json())
  .then(async (val) => {
    if(!_.isEmpty(val)){
      setNoTPS(val)
      setSelectNoTps({})
    } else {
      setNoTPS([])
    }
  })
}
