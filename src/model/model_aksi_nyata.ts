export interface ModelRencanaKunjungan {
    id: string
    judul: string
    tanggal: string
    img: string
    masterStatusAksiNyataId: number
    active: boolean
    MasterStatusAksiNyata: MasterStatusAksiNyata
  }
  
  export interface MasterStatusAksiNyata {
    name: string
  }

