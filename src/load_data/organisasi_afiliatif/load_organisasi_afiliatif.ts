import { api } from "@/lib/api-backend";
import { apiGetMaster } from "@/lib/api-get-master";
import { ModelOrganisasiAfiliatif } from "@/model/interface_afiliatif";
import { ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";
import { sOrganisasiAfiliatif } from "@/s_state/organisasi_afiliatif/s_organisasi_afiliatif";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import _ from "lodash";

export const _dataAfiliatif = atomWithStorage<ModelSumberDayaPartai[]>(
  "_dataAfiliatif",
  []
);

export const _listEdit_DataAfiliatif = atomWithStorage<ModelOrganisasiAfiliatif | null>("_listDataAfiliatif",null);

export const _list_Afiliatif = atom<any[]>([]);
export const _select_Afiliatif = atom({
  id: new Number(),
  name: "",
});
export const _searchDataOrganisasiAfiliatif = atom('')

// Get Nama Afiliatif with signal
export const _loadOrganisasiAfiliatif = () =>
  fetch(apiGetMaster.apiOrganisasiAfiliatif)
    .then((e) => e.json())
    .then((e) => (sOrganisasiAfiliatif.value = e));

// Get Nama Afiliatif with Jotai
export const _dataPage_Afiliatif = atom("")
export const _dataTotalPage_Afiliatif = atom("")
export const _loadGetAfiliatif = async (setEditAfiliatif: any) => {
  fetch(api.apiAnggotaAfiliatifGetAll)
    .then((val) => val.json())
    .then((v) => setEditAfiliatif(v));
};

export const _loadDataAfiliatif_ById_Search = async (
  search: string,
  setListDataAfiliatif: any,
  page: any,
  setTotalPage: any
) => {
  await fetch(api.apiAnggotaAfiliatifSearch + `?search=${search}&page=${page}`)
    .then((res) => res.json())
    .then((val) => setListDataAfiliatif(val));
  
    await fetch(api.apiAnggotaAfiliatifCountPage + `?search=${search}`)
    .then((res) => res.json())
    .then((val) => setTotalPage(val))
};

export const _loadDataAfiliatif_GetOne = async (id: string, setTargetEdit: any) => {
  await fetch(api.apiAnggotaAfiliatifGetOne +`?id=${id}`)
  .then((res) => res.json())
  .then((val) => setTargetEdit(val))
}

// export const _loadEditAfiliatif = async (id: any, setListData: any) => {
//   await fetch(api.apiAnggotaAfiliatifGetOne + `?id=${id}`)
//     // .then((e) => e.json())
//     // .then((val) => setListData(val));
//     .then(async (val) => {
//       if (val.status == 200) {
//         const data = await val.json();
//         setListData(data);
//       }
//     });
// };


export const _loadNama_Afiliatif = async (
  setNamaAfiliatif: any,
  setSelectAfiliatif: any
) => {
  await fetch(apiGetMaster.apiOrganisasiAfiliatif)
    .then((res) => res.json())
    .then(async (val) => {
      if (!_.isEmpty(val)) {
        setNamaAfiliatif(val);
        setSelectAfiliatif({});
      } else {
        setNamaAfiliatif([]);
      }
    });
};
