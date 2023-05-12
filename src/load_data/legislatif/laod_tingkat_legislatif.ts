import { apiGetMaster } from "@/lib/api-get-master";
import { sTingkatLegislatif } from "@/s_state/legislatif/s_tingkat_legislatif";


export const _loadTingkatLegislatif = () =>
fetch(apiGetMaster.apiGetTingkatLegislatif)
.then((e) => e.json())
.then((e) => (sTingkatLegislatif.value = e))