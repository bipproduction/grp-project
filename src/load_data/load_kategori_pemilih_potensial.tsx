import { apiGetMaster } from "@/lib/api-get-master";
import { sKategoriPemilihPotensial } from "@/s_state/s_kategori_pemilih_potensial";

export const _loadKategoriPemilihPotensial = () =>
  fetch(apiGetMaster.apiKategoriPemilihPotensial)
    .then((e) => e.json())
    .then((e) => (sKategoriPemilihPotensial.value = e));
