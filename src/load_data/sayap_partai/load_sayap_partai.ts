import { apiGetMaster } from "@/lib/api-get-master";
import { sSayapPartai } from "@/s_state/sayap_partai/s_sayap_partai";


export const _loadSayapPartai = () =>
  fetch(apiGetMaster.apiSayapPartai)
    .then((e) => e.json())
    .then((e) => (sSayapPartai.value = e));