import { atom } from "jotai";
import { sStatusKeanggotaan } from "./../../s_state/sumber_daya_partai/s_status_keanggotaan";
import { apiGetMaster } from "@/lib/api-get-master";
import _ from "lodash";

/**
 *
 * @returns Get Status Keanggotaan By Signal
 */
export const _loadStatusKeanggotaan = () =>
  fetch(apiGetMaster.apiGetStatusKeanggotaan)
    .then((e) => e.json())
    .then((e) => (sStatusKeanggotaan.value = e));

//````````````Jotai`````````````//
export const _listData_StatusKeanggotaan = atom<any[]>([]);
export const _selectData_StatusKeanggotaan = atom({
  id: new Number(),
  name: "",
});

/**
 * @returns GetStatus Keanggotaan By Jotai
 * @param useAtom(_listData_StatusKeanggotaan)
 * @param useAtom(_selectData_StatusKeanggotaan)
 */
export const _new_loadStatusKeanggotaan = async (
  setStatusKeangotaan: any,
  setSelectStatusKeanggotaan: any
) => {
  await fetch(apiGetMaster.apiGetStatusKeanggotaan)
  .then((res) => res.json())
  .then(async (val) => {
    if (!_.isEmpty(val)) {
      setStatusKeangotaan(val);
      setSelectStatusKeanggotaan({});
    } else {
      setStatusKeangotaan([]);
    }
  });
};
