import { atom } from "jotai"
export const _selected_Provinisi_data_diri = atom({
    id: "",
    name: "",
})
export const _selected_Kabkot_data_diri = atom({
    id: "",
    name: "",
})
export const _selected_Kecamatan_data_diri = atom({
    id: "",
    name: "",
})
export const _selected_Desa_data_diri = atom({
    id: "",
    name: "",
})

export const _provinsi_data_diri = atom<any[]>([])
export const _kabupaten_data_diri = atom<any[]>([])
export const _kecamatan_data_diri = atom<any[]>([])
export const _desa_data_diri = atom<any[]>([])