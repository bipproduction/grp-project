import { apiGetMaster } from "@/lib/api-get-master";
import { sMediaSocial } from "@/s_state/media_social/s_media_social";


export const _loadMediaSocial = () =>
  fetch(apiGetMaster.apiMediaSocial)
    .then((e) => e.json())
    .then((e) => (sMediaSocial.value = e));