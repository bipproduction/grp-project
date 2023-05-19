import { apiGetMaster } from "@/lib/api-get-master";
import { sAgama } from "@/s_state/sumber_daya_partai/s_agama";

export const _loadAgama = () =>
  fetch(apiGetMaster.apiGetAgama)
    .then((res) => res.json())
    .then((data) => (sAgama.value = data));
