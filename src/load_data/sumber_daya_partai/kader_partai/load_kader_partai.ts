import { apiGetMaster } from "@/lib/api-get-master";
import { atom } from "jotai";
import _ from "lodash";


export const _list_KaderPartai = atom<any[]>([])
export const _select_KaderPartai = atom({
    id: new Number,
    name: ""
})

export const _loadNama_KaderPartai = async (
    setKaderPartai: any,
    setSelectKaderPartai: any
) => {
    await fetch(apiGetMaster.apikaderPartai)
    .then((res) => res.json())
    .then(async (val) => {
        if (!_.isEmpty(val)) {
            setKaderPartai(val)
            setSelectKaderPartai({})
            
        } else {
            setKaderPartai([])
            
        }
    })
}