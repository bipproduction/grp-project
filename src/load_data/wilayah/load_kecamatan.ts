import { sKecamatan } from '../../s_state/wilayah/s_kecamatan';
import { api } from "@/lib/api-backend";


export const _loadKecamatan = (idKabkot: string) => 
fetch(api.apiMasterKecamatanByKabkot + `?idKabkot=${idKabkot}`)
.then((e) => e.json())
.then((e) => (sKecamatan.value = e))