export const api = {
    // USER 
    "apiAuthLogin": "/api/auth/signin",
    "apiAuthSignUp": "/api/auth/signup",
    "apiAuthUpdate": "/api/auth/user-update",
    "apiGetOneUser": "/api/auth/get-one-user",
    "apiUserUpdateStatus": "/api/auth/user-update-status",


    // DATA DIRI 
    "apiDataDiriGetOne": "/api/form-data-diri/data-diri-get-one",
    "apiDataDiriPost": "/api/form-data-diri/data-diri-post",
    "apiDataDiriUpdate": "/api/form-data-diri/data-diri-update",
    "apiDataDiriGetByNIK": "/api/form-data-diri/data-diri-get-by-nik",


    // AKSI NYATA - RENCANA KUNJUNGAN PRABOWO
    "apiRencanaKunjunganPrabowoGetAll": "/api/aksi-nyata/rencana-kunjungan-prabowo/rencana-kunjungan-prabowo-get-all",
    "apiRencanaKunjunganPrabowoGetOne": "/api/aksi-nyata/rencana-kunjungan-prabowo/rencana-kunjungan-prabowo-get-one",
    "apiRencanaKunjunganPrabowoPost": "/api/aksi-nyata/rencana-kunjungan-prabowo/rencana-kunjungan-prabowo-post",
    "apiRencanaKunjunganPrabowoUpdate": "/api/aksi-nyata/rencana-kunjungan-prabowo/rencana-kunjungan-prabowo-update",
    "apiRencanaKunjunganPrabowoSearch": "/api/aksi-nyata/rencana-kunjungan-prabowo/rencana-kunjungan-prabowo-search",
    "apiRencanaKunjunganPrabowoHapus": "/api/aksi-nyata/rencana-kunjungan-prabowo/rencana-kunjungan-prabowo-hapus",


    // AKSI NYATA - LIST UNDANGAN PRABOWO
    "apiListUndanganPrabowoGetAll": "/api/aksi-nyata/list-undangan-prabowo/list-undangan-prabowo-get-all",
    "apiListUndanganPrabowoGetOne": "/api/aksi-nyata/list-undangan-prabowo/list-undangan-prabowo-get-one",
    "apiListUndanganPrabowoPost": "/api/aksi-nyata/list-undangan-prabowo/list-undangan-prabowo-post",
    "apiListUndanganPrabowoUpdate": "/api/aksi-nyata/list-undangan-prabowo/list-undangan-prabowo-update",
    "apiListUndanganPrabowoSearch": "/api/aksi-nyata/list-undangan-prabowo/list-undangan-prabowo-search",
    "apiListUndanganPrabowoHapus": "/api/aksi-nyata/list-undangan-prabowo/list-undangan-prabowo-hapus",


    // AKSI NYATA - RENCANA KUNJUNGAN GERINDRA
    "apiRencanaKunjunganGerindraGetAll": "/api/aksi-nyata/rencana-kunjungan-gerindra/rencana-kunjungan-gerindra-get-all",
    "apiRencanaKunjunganGerindraGetOne": "/api/aksi-nyata/rencana-kunjungan-gerindra/rencana-kunjungan-gerindra-get-one",
    "apiRencanaKunjunganGerindraPost": "/api/aksi-nyata/rencana-kunjungan-gerindra/rencana-kunjungan-gerindra-post",
    "apiRencanaKunjunganGerindraUpdate": "/api/aksi-nyata/rencana-kunjungan-gerindra/rencana-kunjungan-gerindra-update",
    "apiRencanaKunjunganGerindraSearch": "/api/aksi-nyata/rencana-kunjungan-gerindra/rencana-kunjungan-gerindra-search",
    "apiRencanaKunjunganGerindraHapus": "/api/aksi-nyata/rencana-kunjungan-gerindra/rencana-kunjungan-gerindra-hapus",


    // AKSI NYATA - LIST UNDANGAN GERINDRA
    "apiListUndanganGerindraGetAll": "/api/aksi-nyata/list-undangan-gerindra/list-undangan-gerindra-get-all",
    "apiListUndanganGerindraGetOne": "/api/aksi-nyata/list-undangan-gerindra/list-undangan-gerindra-get-one",
    "apiListUndanganGerindraPost": "/api/aksi-nyata/list-undangan-gerindra/list-undangan-gerindra-post",
    "apiListUndanganGerindraUpdate": "/api/aksi-nyata/list-undangan-gerindra/list-undangan-gerindra-update",
    "apiListUndanganGerindraSearch": "/api/aksi-nyata/list-undangan-gerindra/list-undangan-gerindra-search",
    "apiListundanganGerindraHapus": "/api/aksi-nyata/list-undangan-gerindra/list-undangan-gerindra-hapus",


    // ANGGOTA AFILIATIF
    "apiAnggotaAfiliatifGetAll": "/api/anggota-afiliatif/anggota-afiliatif-get-all",
    "apiAnggotaAfiliatifGetOne": "/api/anggota-afiliatif/anggota-afiliatif-get-one",
    "apiAnggotaAfiliatifPost": "/api/anggota-afiliatif/anggota-afiliatif-post",
    "apiAnggotaAfiliatifUpdate": "/api/anggota-afiliatif/anggota-afiliatif-update",
    "apiAnggotaAfiliatifSearch": "/api/anggota-afiliatif/anggota-afiliatif-search",
    "apiAnggotaAfiliatifHapus": "/api/anggota-afiliatif/anggota-afiliatif-hapus",


    // ASET PARTAI
    "apiAsetPartaiGetAll": "/api/aset-partai/aset-partai-get-all",
    "apiAsetPartaiGetOne": "/api/aset-partai/aset-partai-get-one",
    "apiAsetPartaiPost": "/api/aset-partai/aset-partai-post",
    "apiAsetPartaiUpdate": "/api/aset-partai/aset-partai-update",
    "apiAsetPartaiSearch": "/api/aset-partai/aset-partai-search",
    "apiAsetPartaiHapus": "/api/aset-partai/aset-partai-hapus",


    // MEDIA SOSIAL USER
    "apiMediaSosialUserPost": "/api/auth/user-media-sosial/user-media-sosial-post",
    "apiMediaSosialUserUpdate": "/api/auth/user-media-sosial/user-media-sosial-update",


    // CALON PEMILIH POTENSIAL (CPT)
    "apiCPTGetAll": "/api/peta-kekuatan/cpt/cpt-get-all",
    "apiCPTGetOne": "/api/peta-kekuatan/cpt/cpt-get-one",
    "apiCPTPost": "/api/peta-kekuatan/cpt/cpt-post",
    "apiCPTUpdate": "/api/peta-kekuatan/cpt/cpt-update",
    "apiCPTSearch": "/api/peta-kekuatan/cpt/cpt-search",
    "apiCPTHapus": "/api/peta-kekuatan/cpt/cpt-hapus",


    // EKSEKUTIF
    "apiEksekutifGetAll": "/api/peta-kekuatan/eksekutif/eksekutif-get-all",
    "apiEksekutifGetOne": "/api/peta-kekuatan/eksekutif/eksekutif-get-one",
    "apiEksekutifPost": "/api/peta-kekuatan/eksekutif/eksekutif-post",
    "apiEksekutifUpdate": "/api/peta-kekuatan/eksekutif/eksekutif-update",
    "apiEksekutifSearch": "/api/peta-kekuatan/eksekutif/eksekutif-search",
    "apiEksekutifHapus": "/api/peta-kekuatan/eksekutif/eksekutif-hapus",
    "apiEksekutifSearchAll": "/api/peta-kekuatan/eksekutif/eksekutif-search-all",


    // LEGISLATIF
    "apiLegislatifGetAll": "/api/peta-kekuatan/legislatif/legislatif-get-all",
    "apiLegislatifGetOne": "/api/peta-kekuatan/legislatif/legislatif-get-one",
    "apiLegislatifPost": "/api/peta-kekuatan/legislatif/legislatif-post",
    "apiLegislatifUpdate": "/api/peta-kekuatan/legislatif/legislatif-update",
    "apiLegislatifSearch": "/api/peta-kekuatan/legislatif/legislatif-search",
    "apiLegislatifHapus": "/api/peta-kekuatan/legislatif/legislatif-hapus",
    "apiLegislatifSearchAll": "/api/peta-kekuatan/legislatif/legislatif-search-all",


    // PARTAI PENGUSUNG EKSEKUTIF
    "apiPartaiPengusungEksekutifPost": "/api/peta-kekuatan/partai-pengusung-eksekutif/partai-pengusung-eksekutif-post",
    "apiPartaiPengusungEksekutifUpdate": "/api/peta-kekuatan/partai-pengusung-eksekutif/partai-pengusung-eksekutif-update",


    // TPS DPT
    "apiTpsDptGetAll": "/api/peta-kekuatan/tps-dpt/tps-dpt-get-all",
    "apiTpsDptGetOne": "/api/peta-kekuatan/tps-dpt/tps-dpt-get-one",
    "apiTpsDptPost": "/api/peta-kekuatan/tps-dpt/tps-dpt-post",
    "apiTpsDptUpdate": "/api/peta-kekuatan/tps-dpt/tps-dpt-update",


    // SUMBER DAYA PARTAI (SDP)
    "apiSumberDayaPartaiGetAll": "/api/sumber-daya-partai/sumber-daya-partai-get-all",
    "apiSumberDayaPartaiGetOne": "/api/sumber-daya-partai/sumber-daya-partai-get-one",
    "apiSumberDayaPartaiPost": "/api/sumber-daya-partai/sumber-daya-partai-post",
    "apiSumberDayaPartaiUpdate": "/api/sumber-daya-partai/sumber-daya-partai-update",
    "apiSumberDayaPartaiSearch": "/api/sumber-daya-partai/sumber-daya-partai-search",
    "apiSumberDayaPartaiHapus": "/api/sumber-daya-partai/sumber-daya-partai-hapus",
    "apiSumberDayaPartaiCount": "/api/sumber-daya-partai/sumber-daya-partai-count",







    // __________________________________________________MASTER DATA______________________________________________________


    // MASTER WILAYAH (PROVINSI, KABKOT, KECAMATAN, DESA)
    "apiMasterProvinsiGetAll": "/api/master/master-provinsi-get-all",
    "apiMasterKabkotByProvinsi": "/api/master/master-kabkot-get-by-provinsi",
    "apiMasterKecamatanByKabkot": "/api/master/master-kecamatan-get-by-kabkot",
    "apiMasterDesaByKecamatan": "/api/master/master-desa-get-by-kecamatan",
}