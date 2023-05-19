import { sListEksekutif } from "@/s_state/eksekutif/s_list_eksekutif";
import { apiGetMaster } from "../../lib/api-get-master";

export const _loadTingkatEksekutif = async () =>
  fetch(apiGetMaster.apiGetTingkatEksekutif)
    .then((e) => e.json())
    .then((e) => ((sListEksekutif.value = e)));
