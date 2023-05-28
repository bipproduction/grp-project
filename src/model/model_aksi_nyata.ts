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

export interface ModelListUndangan {
  id: string
  nama: string
  rencanaKunjunganPrabowoId:string
  RencanaKunjunganPrabowo: RencanaKunjungan
}

export interface ModelListUndanganGerindra {
  id: string
  nama: string
  rencanaKunjunganGerindraId:string
  RencanaKunjunganGerindra: RencanaKunjungan
}

export interface RencanaKunjungan {
  judul: string
  tanggal: string
}
