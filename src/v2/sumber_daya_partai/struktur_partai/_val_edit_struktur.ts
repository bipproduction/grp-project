import { atom } from "jotai";
import { atomWithStorage } from 'jotai/utils'

export const _val_edit_struktur = atom<any[] | undefined>(undefined);
export const _val_muncul = atomWithStorage("_val_muncul", false)
