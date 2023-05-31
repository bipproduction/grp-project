export interface ModelOrganisasiAfiliatif {
    id: string
    userId: string
    User: User
    MasterOrganisasiAfiliatif: MasterOrganisasiAfiliatif
  }
  
  export interface User {
    id: string
    email: string
    DataDiri: DataDiri
  }
  
  export interface DataDiri {
    id: string
    active: boolean
    name: string
    nik: string
  }
  
  export interface MasterOrganisasiAfiliatif {
    id: number
    name: string
  }
  