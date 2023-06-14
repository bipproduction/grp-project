export interface ModelEksekutifDataDiri {
  id: string
  nik: string
  name: string
  tempatLahir: string
  tanggalLahir: string
  phoneNumber: string
  alamat: string
  rtRw: string
  User: User
  MasterJenisKelamin: MasterJenisKelamin
  MasterAgama: MasterAgama
  MasterPekerjaan: MasterPekerjaan
  MasterProvince: MasterProvince
  MasterKabKot: MasterKabKot
  MasterKecamatan: MasterKecamatan
  MasterDesa: MasterDesa
}

// export interface User {
//   email: string
//   id: string
// }

export interface MasterJenisKelamin {
  name: string
  id: number
}

export interface MasterAgama {
  name: string
  id: number
}

export interface MasterPekerjaan {
  name: string
  id: number
}

export interface MasterProvince {
  name: string
  id: number
}

export interface MasterKabKot {
  name: string
  id: number
}

export interface MasterKecamatan {
  name: string
  id: number
}

export interface MasterDesa {
  name: string
  id: number
}


export interface ModelEksekutif {
  id: string
  namaLembaga: string
  alamatKantor: string
  periode: string
  jabatanNasional: string
  partaiPengusung?: []
  masterJabatanEksekutifKabKotId: string
  MasterJabatanEksekutifProvinsi?: MasterJabatanEksekutifProvinsi
  MasterProvince?: MasterProvince
  MasterJabatanEksekutifKabKot?: MasterJabatanEksekutifKabKot
  MasterJabatanEksekutifKabupaten?: MasterJabatanEksekutifKabupaten
  MasterJabatanEksekutifKota?: MasterJabatanEksekutifKota
  MasterStatusEksekutif?: MasterStatusEksekutif
  MasterKabKot?: MasterKabKot
  userId: string,
  User: User
}

export interface MasterJabatanEksekutifKabKot {
  id: string
  name: string
}

export interface MasterJabatanEksekutifKabupaten {
  id: string
  name: string
}

export interface MasterJabatanEksekutifKota {
  id: string
  name: string
}

export interface MasterStatusEksekutif {
  id: string
  name: string
}

export interface MasterKabKot {
  id: number
  name: string
}

export interface MasterJabatanEksekutifProvinsi {
  id: string
  name: string
}

export interface MasterProvince {
  id: number
  name: string
}

export interface User {
  id: string
  username: string
  email: string
  DataDiri: DataDiri
  UserMediaSocial: UserMediaSocial[]
}

export interface DataDiri {
  name: string
  nik: string
  alamat: string
}

export interface UserMediaSocial {
  name: string
  link?: string
  MasterMediaSocial: MasterMediaSocial
}

export interface MasterMediaSocial {
  name: string
}


export interface ModelLegislatif {
  id: string
  jabatan: string
  periode: string
  noUrut: number
  dapil: string
  cakupanWilayah: string
  akd: string,
  userId: string,
  masterProvinceId: number,
  masterKabKotId: number,
  MasterProvince?: MasterProvince
  MasterKabKot?: MasterKabKot
  User: User
}
