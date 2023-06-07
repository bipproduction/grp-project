export interface ModelCalonPemilihPotensial {
  id: string;
  nama: string;
  nik: string;
  email: string;
  alamat: string;
  tanggalLahir: string;
  phoneNumber: string;
  statusSosial: string;
  pendidikan: string;
  MasterCalonPemilihPotensial: MasterCalonPemilihPotensial;
  MasterProvince: MasterProvince;
  MasterKabKot: MasterKabKot;
  MasterKecamatan: MasterKecamatan;
  MasterDesa: MasterDesa;
  MasterNomorUrutTPS: MasterNomorUrutTps;
  MasterAgama: MasterAgama;
  MasterJenisKelamin: MasterJenisKelamin;
  MasterPekerjaan: MasterPekerjaan;
  CPTMediaSocial: any[];
}

interface MasterCalonPemilihPotensial {
  id: number;
  name: string;
}

interface MasterProvince {
  id: number;
  name: string;
}

interface MasterKabKot {
  id: number;
  name: string;
}

interface MasterKecamatan {
  id: number;
  name: string;
}

interface MasterDesa {
  id: number;
  name: string;
}

interface MasterNomorUrutTps {
  id: number;
  name: string;
}

interface MasterAgama {
  id: number;
  name: string;
}

interface MasterJenisKelamin {
  id: number;
  name: string;
}

interface MasterPekerjaan {
  id: number;
  name: string;
}
