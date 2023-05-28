export interface DataDiriUser {
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