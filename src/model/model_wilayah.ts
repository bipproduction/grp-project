
export interface ModelProvinsi{
    id: number
    name: string
}

export interface ModelKabKot{
    id: number
    name: string
    masterProvinceId: number
}

export interface ModelKecamatan{
    id: number
    name: string
    masterKabKotId: number
}

export interface ModelDesa{
    id: number
    name: string
    masterKecamatanId: number
}