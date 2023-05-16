import { atom } from "jotai"
export const _selected_Provinisi = atom({
    id: "",
    name: "",
})
export const _selected_Kabkot = atom({
    id: "",
    name: "",
})
export const _selected_Kecamatan = atom({
    id: "",
    name: "",
})
export const _selected_Desa = atom({
    id: "",
    name: "",
})
export const _provinsi = atom<any[]>([])
export const _kabupaten = atom<any[]>([])
export const _kecamatan = atom<any[]>([])
export const _desa = atom<any[]>([])