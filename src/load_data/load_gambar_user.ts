import { api } from "@/lib/api-backend";
import { ModalImageUser } from "@/model/interface_image_user";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const _dataImgNew = atomWithStorage<ModalImageUser | null>(
    "",
    null
);

export const _loadGetGambarNew = async ( setImgNew: any) => {
    await fetch(
      api.apiDataDiriGetOne + `?id=${localStorage.getItem("user_id")}`
    ).then(async (val) => {
      if (val.status == 200) {
        const data = await val.json();
        setImgNew(data);
        return;
      }
    });
  };