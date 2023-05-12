import { sListPekerjaan } from './../s_state/s_list_pekerjaan';
import { apiGetMaster } from "@/lib/api-get-master";

export const _loadListPekerjaan = () => 
fetch(apiGetMaster.apiPekerjaan)
.then((e) => e.json())
.then((e) => (sListPekerjaan .value = e))