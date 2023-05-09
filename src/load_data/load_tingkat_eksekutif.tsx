import { sListEksekutif } from "@/s_state/s_list_eksekutif";
import { apiGetMaster } from "../lib/api-get-master";

export const loadTingkatEksekutif = async () =>
  fetch(apiGetMaster.apiGetTingkatEksekutif)
    .then((e) => e.json())
    .then((e) => console.log((sListEksekutif.value = e)));
