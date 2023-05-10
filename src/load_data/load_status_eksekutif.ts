import { apiGetMaster } from "@/lib/api-get-master";
import { sStatusEksekutif } from "@/s_state/eksekutif/s_status_eksekutif";


export const _loadStatusEksekutif = () => fetch(apiGetMaster.apiGetStatusEksekutif)
.then(e => e.json())
.then(e => (sStatusEksekutif.value = e))