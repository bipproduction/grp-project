import { sProvinsi } from "../s_state/s_provinsi";
import { api } from "@/lib/api-backend";

export const _loadProvinsi = () =>
   fetch(api.apiMasterProvinsiGetAll)
    .then(e => e.json())
    .then(e => (sProvinsi.value = e));
