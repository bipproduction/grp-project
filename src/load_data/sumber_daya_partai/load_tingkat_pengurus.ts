import { sTingkatPengurus } from './../../s_state/sumber_daya_partai/s_tingkat_pengurus';
import { apiGetMaster } from "@/lib/api-get-master";

export const _loadTingkatPengurus = () => 
fetch(apiGetMaster.apiGetTingkatPengurus)
.then((e) => e.json())
.then((e) => (sTingkatPengurus.value = e))