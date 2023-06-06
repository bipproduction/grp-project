export interface ModelAsetPartai {
    id: string
    name: string
    serialNumber: string
    pengguna: string
    penanggungJawab: string
    harga: number
    tglPembelian: string
    lokasiPembelian: string
    garansi: string
    keterangan: string
    deskripsi: string
    MasterStatusAset: MasterStatusAset
    MasterKategoriAset: MasterKategoriAset
  }
  
  export interface MasterStatusAset {
    id: number
    name: string
  }
  
  export interface MasterKategoriAset {
    id: number
    name: string
  }
  