import { sKabkot } from '../../s_state/wilayah/s_kabkot';
import { api } from '../../lib/api-backend';



export const _loadKabkot = (idProvinsi: string) =>
  fetch(api.apiMasterKabkotByProvinsi + `?idProvinsi=${idProvinsi}`)
    .then((e) => e.json())
    .then((e) => (sKabkot.value = e));
