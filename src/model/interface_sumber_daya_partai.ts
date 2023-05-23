
export interface ModelSumberDayaPartai {
  id: string
  alamatKantor: string
  waAdmin: string
  User: User
  MasterTingkatPengurus: MasterTingkatPengurus
  MasterJabatan: any
  MasterJabatanDewanPembina: any
  MasterJabatanDewanPimpinanPusat?: MasterJabatanDewanPimpinanPusat
  MasterJabatanDewanPimpinanDaerah: any
  MasterJabatanDewanPimpinanCabang?: MasterJabatanDewanPimpinanCabang
  MasterJabatanPimpinanAnakCabang: any
  MasterJabatanPimpinanRanting: any
  MasterJabatanPerwakilanPartaiDiLuarNegeri: any
  MasterSayapPartai?: MasterSayapPartai
  MasterKaderPartai: any
  MasterProvince?: MasterProvince2
  MasterKabKot?: MasterKabKot2
  MasterKecamatan: any
  MasterDesa: any
  MasterNegara: any
}

export interface User {
  email: string
  DataDiri: DataDiri
  UserMediaSocial: UserMediaSocial[]
}

export interface DataDiri {
  name: string
  nik: string
  tempatLahir: string
  tanggalLahir: string
  phoneNumber: string
  alamat: string
  rtRw: string
  MasterJenisKelamin: MasterJenisKelamin
  MasterAgama: MasterAgama
  MasterPekerjaan: MasterPekerjaan
  MasterProvince: MasterProvince
  MasterKabKot: MasterKabKot
  MasterKecamatan: MasterKecamatan
  MasterDesa: MasterDesa
}

export interface MasterJenisKelamin {
  name: string
}

export interface MasterAgama {
  name: string
}

export interface MasterPekerjaan {
  name: string
}

export interface MasterProvince {
  name: string
}

export interface MasterKabKot {
  name: string
}

export interface MasterKecamatan {
  name: string
}

export interface MasterDesa {
  name: string
}

export interface UserMediaSocial {
  name: string
  MasterMediaSocial: MasterMediaSocial
}

export interface MasterMediaSocial {
  name: string
}

export interface MasterTingkatPengurus {
  name: string
}

export interface MasterJabatanDewanPimpinanPusat {
  name: string
}

export interface MasterJabatanDewanPimpinanCabang {
  name: string
}

export interface MasterSayapPartai {
  name: string
}

export interface MasterProvince2 {
  name: string
}

export interface MasterKabKot2 {
  name: string
}
