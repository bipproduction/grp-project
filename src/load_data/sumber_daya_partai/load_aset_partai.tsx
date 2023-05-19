import { apiGetMaster } from "@/lib/api-get-master";
import {
  sKategoriAset,
  sStatusAset,
} from "@/s_state/sumber_daya_partai/s_aset";

export const _loadKategoriAset = () =>
  fetch(apiGetMaster.apiGetKategoriAset)
    .then((res) => res.json())
    .then((val) => (sKategoriAset.value = val));

export const _loadStatusAset = () =>
  fetch(apiGetMaster.apiGetStatusAset)
    .then((res) => res.json())
    .then((val) => (sStatusAset.value = val));
