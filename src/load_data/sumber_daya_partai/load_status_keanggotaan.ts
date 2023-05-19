import { sStatusKeanggotaan } from './../../s_state/sumber_daya_partai/s_status_keanggotaan';
import { apiGetMaster } from "@/lib/api-get-master";


export const _loadStatusKeanggotaan = () => 
fetch(apiGetMaster.apiGetStatusKeanggotaan)
.then((e) => e.json())
.then((e) => (sStatusKeanggotaan.value = e))