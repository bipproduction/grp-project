import { api } from "@/lib/api-backend";
import { apiGetMaster } from "@/lib/api-get-master";
import { sOrganisasiAfiliatif } from "@/s_state/organisasi_afiliatif/s_organisasi_afiliatif";
import { atom } from "jotai";
import _ from "lodash";


export const _loadOrganisasiAfiliatif = () =>
  fetch(apiGetMaster.apiOrganisasiAfiliatif)
    .then((e) => e.json())
    .then((e) => (sOrganisasiAfiliatif.value = e));

export const _loadGetAfiliatif = async (setEditAfiliatif: any) => {
  fetch(api.apiAnggotaAfiliatifGetAll)
  .then((val) => val.json())
  .then((v) => setEditAfiliatif(v))
}

export const _loadEditAfiliatif = async (
  id: any,
  setListData: any
) => {
  await fetch(api.apiAnggotaAfiliatifGetOne + `?id=${id}`)
    // .then((e) => e.json())
    // .then((val) => setListData(val));
    .then(async (val ) => {
      if (val.status == 200) {
        const data = await val.json()
        setListData(data)
      }
    })
};


export const _list_Afiliatif = atom<any[]>([])
export const _select_Afiliatif = atom({
    id: new Number,
    name: ""
})

export const _loadNama_Afiliatif = async (
  setListDataAfiliatif: any,
  setSelectAfiliatif: any
) => {
    await fetch(apiGetMaster.apiOrganisasiAfiliatif)
    .then((res) => res.json())
    .then(async (val) => {
        if (!_.isEmpty(val)) {
          setListDataAfiliatif(val)
          setSelectAfiliatif({})
            
        } else {
          setListDataAfiliatif([])
            
        }
    })
}
