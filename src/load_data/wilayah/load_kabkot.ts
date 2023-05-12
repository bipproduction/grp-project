import { api } from "@/lib/api-backend";
import { sKabkot } from "@/s_state/wilayah/s_kabkot";

export const _loadKabkot = (idProvinsi: string) =>
  fetch(api.apiMasterKabkotByProvinsi + `?idProvinsi=${idProvinsi}`)
    .then((e) => e.json())
    .then((e) => (sKabkot.value = e));
