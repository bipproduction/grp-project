
export interface ModelSumberDayaPartai {
  id: string
  alamatKantor: string
  waAdmin: string
  User: User
  MasterTingkatPengurus: MasterTingkatPengurus
  MasterJabatan: any
  MasterJabatanDewanPembina?: MasterJabatanDewanPembina
  MasterJabatanDewanPimpinanPusat?: MasterJabatanDewanPimpinanPusat
  MasterJabatanDewanPimpinanDaerah?: MasterJabatanDewanPimpinanDaerah
  MasterJabatanDewanPimpinanCabang?: MasterJabatanDewanPimpinanCabang
  MasterJabatanPimpinanAnakCabang: MasterJabatanPimpinanAnakCabang
  MasterJabatanPimpinanRanting: MasterJabatanPimpinanRanting
  MasterJabatanPerwakilanPartaiDiLuarNegeri: MasterJabatanPerwakilanPartaiDiLuarNegeri
  MasterSayapPartai?: MasterSayapPartai
  MasterKaderPartai: MasterKaderPartai
  MasterProvince?: MasterProvince2
  MasterKabKot?: MasterKabKot2
  MasterKecamatan: MasterKecamatan
  MasterDesa: MasterDesa
  MasterNegara: MasterNegara
}

export interface User {
  id: string
  email: string
  DataDiri: DataDiri
  UserMediaSocial: UserMediaSocial[]
}

export interface DataDiri {
  id: string
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
  id: number,
  name: string
}

export interface MasterKabKot {
  id: number,
  name: string
}

export interface MasterKecamatan {
  id: number,
  name: string
}

export interface MasterDesa {
  id: number,
  name: string
}

export interface UserMediaSocial {
  id: number,
  name: string
  MasterMediaSocial: MasterMediaSocial
}

export interface MasterMediaSocial {
  id: number,
  name: string
}

export interface MasterTingkatPengurus {
  id: number,
  name: string
}

export interface MasterJabatanDewanPembina {
  id: number,
  name: string,
}

export interface MasterJabatanDewanPimpinanPusat {
  id: number,
  name: string
}

export interface MasterJabatanDewanPimpinanDaerah {
  id: number,
  name: string
}

export interface MasterJabatanDewanPimpinanCabang {
  id: number,
  name: string
}

export interface MasterJabatanPimpinanAnakCabang {
  id: number
  name: string
}

export interface MasterJabatanPimpinanRanting {
  id: number,
  name: string
}
export interface MasterJabatanPerwakilanPartaiDiLuarNegeri {
  id: number,
  name: string
}

export interface MasterKaderPartai {
  id: number,
  name: string
}

export interface MasterSayapPartai {
  id: number,
  name: string
}

export interface MasterProvince2 {
  id: number,
  name: string
}

export interface MasterKabKot2 {
  id: number,
  name: string
}

export interface MasterKecamatan {
  id: number,
  name: string
}

export interface MasterDesa {
  id: number,
  name: string
}

export interface MasterNegara {
  id: number,
  name: string
}
