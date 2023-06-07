import { api } from "@/lib/api-backend";
import { ModelCalonPemilihPotensial } from "@/model/interface_calon_pemilih_potensial";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

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

export const _kecamatan_CalonPP = atom<any[]>([])
export const _selectKecamatan_CalonPP = atom({
  id: new Number(),
  name: "",
});

export const _desa_CalonPP = atom<any[]>([]);
export const _selectDesa_CalonPP = atom({
  id: new Number(),
  name: "",
});

export const _listData_CalonPemilihPotensial = atomWithStorage<ModelCalonPemilihPotensial[]>("_listData_CalonPemilihPotensial",[])


const _loadDataCalonPemilihPotensial = async (search: any, setListDataCPP: any) => {
  await fetch(api.apiCPTSearch + `?search=${search}`)
    .then((res) => res.json())
    .then((val) => setListDataCPP(val));
};