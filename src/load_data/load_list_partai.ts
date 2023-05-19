import { apiGetMaster } from "@/lib/api-get-master";
import { sListPartaiPengusung } from "@/s_state/s_list_partai_pengusung";

export const _loadListPartai = () =>
  fetch(apiGetMaster.apiGetPartaiPengusung)
    .then((e) => e.json())
    .then((e) => (sListPartaiPengusung.value = e));
