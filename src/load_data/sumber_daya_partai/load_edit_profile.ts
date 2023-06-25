import { DataDiri } from "@/model/interface_sumber_daya_partai";
import { atomWithStorage } from "jotai/utils";

export const _datapartaiEditProfile = atomWithStorage<DataDiri | null>(
    "dataDiri",
    null
  );
export const _datapartaiProfile = atomWithStorage<DataDiri[] | null>(
    "dataDiri",
    null
  );