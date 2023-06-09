import _ from 'lodash';
import { sListPekerjaan } from './../s_state/s_list_pekerjaan';
import { apiGetMaster } from "@/lib/api-get-master";
import { atom } from 'jotai';

export const _loadListPekerjaan = () => 
fetch(apiGetMaster.apiPekerjaan)
.then((e) => e.json())
.then((e) => (sListPekerjaan .value = e))

// Get Data with Jotai
export const _listData_Pekerjaan = atom<any[]>([])
export const _select_Pekerjaan = atom({
    id: new Number(),
    name: ""
})
export const _new_loadPekerjaan = (setPekerjaan: any, setSelectPekerjaan: any) => {
    fetch(apiGetMaster.apiPekerjaan)
    .then((res) => res.json())
    .then(async (val) => {
        if(!_.isEmpty(val)){
            setPekerjaan(val)
            setSelectPekerjaan({})
        } else {
            setPekerjaan([])
        }

    })
}