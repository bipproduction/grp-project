import { apiGetMaster } from "@/lib/api-get-master";
import { sOrganisasiAfiliatif } from "@/s_state/organisasi_afiliatif/s_organisasi_afiliatif";


export const _loadOrganisasiAfiliatif = () =>
  fetch(apiGetMaster.apiOrganisasiAfiliatif)
    .then((e) => e.json())
    .then((e) => (sOrganisasiAfiliatif.value = e));