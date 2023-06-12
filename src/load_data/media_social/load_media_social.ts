import { apiGetMaster } from "@/lib/api-get-master";
import { DataDiri } from "@/model/interface_sumber_daya_partai";
import { sMediaSocial } from "@/s_state/media_social/s_media_social";
import { atomWithStorage } from "jotai/utils";

export const _loadMediaSocial = () =>
  fetch(apiGetMaster.apiMediaSocial)
    .then((e) => e.json())
    .then((e) => (sMediaSocial.value = e));

export const _dataImagesData = atomWithStorage<DataDiri | null>(
  "dataDiri",
  null
);
