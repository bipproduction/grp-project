
import { apiGetMaster } from "@/lib/api-get-master";
import { sJenisKelamin } from "@/s_state/s_jenis_kelamin";

export const _loadJenisKelamin = () => 
fetch(apiGetMaster.apiGetJenisKelamin)
.then((e) => e.json())
.then((e) => (sJenisKelamin .value = e))