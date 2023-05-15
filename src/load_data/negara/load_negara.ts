import { sNegara } from "@/s_state/negara/s_negara";
import { api } from "@/lib/api-backend";
import { apiGetMaster } from "@/lib/api-get-master";

export const _loadNegara = () =>
   fetch(apiGetMaster.apiNegara)
    .then(e => e.json())
    .then(e => (sNegara.value = e));