import { api } from "@/lib/api-backend";
import { apiGetMaster } from "@/lib/api-get-master";
import { sKaderPartai } from "@/s_state/kader_partai/s_kader_partai";



export const _loadKaderPartai = () =>
  fetch(apiGetMaster.apikaderPartai)
    .then((e) => e.json())
    .then((e) => (sKaderPartai.value = e));