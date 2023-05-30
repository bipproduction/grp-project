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

export interface ModelListUndanganPrabowo {
  id: string
  nama: string
  rencanaKunjunganPrabowoId: string
  RencanaKunjunganPrabowo: RencanaKunjunganPrabowo
}

export interface ModelListUndanganGerindra {
  id: string
  nama: string
  rencanaKunjunganGerindraId: string
  RencanaKunjunganGerindra: RencanaKunjunganGerindra
}

export interface RencanaKunjunganPrabowo {
  judul: string
  tanggal: string
}

export interface RencanaKunjunganGerindra {
  judul: string
  tanggal: string
}

export interface ModelListUndanganPrabowoNew {
  id: string
  nama: string
  judul: string
  tanggal: string
}

export interface ModelListUndanganGerindraNew {
  id: string
  nama: string
  judul: string
  tanggal: string
}
