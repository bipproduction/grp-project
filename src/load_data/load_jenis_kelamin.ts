
import { apiGetMaster } from "@/lib/api-get-master";
import { sJenisKelamin } from "@/s_state/s_jenis_kelamin";
import { atom } from "jotai";
import _ from "lodash";


export const _loadJenisKelamin = () => 
fetch(apiGetMaster.apiGetJenisKelamin)
.then((e) => e.json())
.then((val) => (sJenisKelamin.value = val))

export const _new_loadJenisKelamin = (setIsJenisKelamin : any, setSelectJenisKelamin : any) => 
fetch(apiGetMaster.apiGetJenisKelamin)
.then((e) => e.json())
.then(async (val) => {
    if (!_.isEmpty(val)) {
        setIsJenisKelamin(val)
        setSelectJenisKelamin(val)
    } else {
        setIsJenisKelamin([])
    }
})