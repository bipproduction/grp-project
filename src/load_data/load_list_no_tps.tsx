import { apiGetMaster } from "@/lib/api-get-master";
import { sListNoTPS } from "@/s_state/s_list_no_tps";


export const _loadListNoTps = () => 
fetch(apiGetMaster.apiGetNoTPS)
.then((e) => e.json())
.then((e) => (sListNoTPS.value = e))