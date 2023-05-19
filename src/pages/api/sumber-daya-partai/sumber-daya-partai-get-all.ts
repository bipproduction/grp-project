import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const sumberDayaPartaiGetAll = async (req: NextApiRequest, res: NextApiResponse) => {
    const { status } = req.query;
    const data = await client.sumberDayaPartai.findMany({
        where: {
            active: true,
            masterStatusKeanggotaanId: Number(status)
        },
        select: {
            id: true,
            alamatKantor: true,
            waAdmin: true,
            User: {
                select: {
                    email: true,
                    DataDiri: {
                        select: {
                            name: true,
                            nik: true,
                            tempatLahir: true,
                            tanggalLahir: true,
                            phoneNumber: true,
                            alamat: true,
                            rtRw: true,
                            MasterJenisKelamin: {
                                select: {
                                    name: true
                                }
                            },
                            MasterAgama: {
                                select: {
                                    name: true
                                }
                            },
                            MasterPekerjaan: {
                                select: {
                                    name: true
                                }
                            },
                            MasterProvince: {
                                select: {
                                    name: true
                                }
                            },
                            MasterKabKot: {
                                select: {
                                    name: true
                                }
                            },
                            MasterKecamatan: {
                                select: {
                                    name: true
                                }
                            },
                            MasterDesa: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    },
                    UserMediaSocial: {
                        where: {
                            active: true
                        },
                        select: {
                            name: true,
                            MasterMediaSocial: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    }
                }
            },
            MasterTingkatPengurus: {
                select: {
                    name: true
                }
            },
            MasterJabatan: {
                select: {
                    name: true
                }
            },
            MasterJabatanDewanPembina: {
                select: {
                    name: true
                }
            },
            MasterJabatanDewanPimpinanPusat: {
                select: {
                    name: true
                }
            },
            MasterJabatanDewanPimpinanDaerah: {
                select: {
                    name: true
                }
            },
            MasterJabatanDewanPimpinanCabang: {
                select: {
                    name: true
                }
            },
            MasterJabatanPimpinanAnakCabang: {
                select: {
                    name: true
                }
            },
            MasterJabatanPimpinanRanting: {
                select: {
                    name: true
                }
            },
            MasterJabatanPerwakilanPartaiDiLuarNegeri: {
                select: {
                    name: true
                }
            },
            MasterSayapPartai: {
                select: {
                    name: true
                }
            },
            MasterKaderPartai: {
                select: {
                    name: true
                }
            },
            MasterProvince: {
                select: {
                    name: true
                }
            },
            MasterKabKot: {
                select: {
                    name: true
                }
            },
            MasterKecamatan: {
                select: {
                    name: true
                }
            },
            MasterDesa: {
                select: {
                    name: true
                }
            },
            MasterNegara: {
                select: {
                    name: true
                }
            }
        }
    })
    return res.status(200).json(data)
}

export default sumberDayaPartaiGetAll