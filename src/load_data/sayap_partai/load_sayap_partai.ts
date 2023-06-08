import { apiGetMaster } from "@/lib/api-get-master";
import { ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";
import { sSayapPartai } from "@/s_state/sayap_partai/s_sayap_partai";
import { atomWithStorage } from "jotai/utils";

export const _loadSayapPartai = () =>
  fetch(apiGetMaster.apiSayapPartai)
    .then((e) => e.json())
    .then((e) => (sSayapPartai.value = e));

export const _dataSayap = atomWithStorage<ModelSumberDayaPartai[]>(
  "_sayap_database",
  []
);
export const _dataKader = atomWithStorage<ModelSumberDayaPartai[]>(
  "_kader_database",
  []
);
export const _dataAnggota = atomWithStorage<ModelSumberDayaPartai[]>(
  "_anggota_database",
  []
);
export const _dataKeanggotaan = atomWithStorage<ModelSumberDayaPartai[]>(
  "_Keanggotaan_database",
  []
);

export const _dataSayapSearch = atomWithStorage<ModelSumberDayaPartai[]>(
  "_dataSayapSearch",
  []
);
export const _dataKaderSearch = atomWithStorage<ModelSumberDayaPartai[]>(
  "_dataKaderSearch",
  []
);
export const _dataAnggotaSearch = atomWithStorage<ModelSumberDayaPartai[]>(
  "_dataAnggotaSearch",
  []
);

