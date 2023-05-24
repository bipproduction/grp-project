import { signal } from "@preact/signals-react";
import { atom } from "jotai";

export const sJenisKelamin = signal<any[]>([])
export const _sJenisKelamin = atom<any[]>([])
export const _selectJenisKelamin = atom({
    id: "",
    name: "laki"
})