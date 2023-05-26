import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const sumberDayaPartaiGetOne = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    const data = await client.sumberDayaPartai.findUnique({
        where: {
            id: id as any
        },
        select: {
            id: true,
            alamatKantor: true,
            waAdmin: true,
            User: {
                select: {
                    id: true,
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
                    id: true,
                    name: true
                }
            },
            MasterJabatan: {
                select: {
                    id: true,
                    name: true
                }
            },
            MasterJabatanDewanPembina: {
                select: {
                    id: true,
                    name: true
                }
            },
            MasterJabatanDewanPimpinanPusat: {
                select: {
                    id: true,
                    name: true
                }
            },
            MasterJabatanDewanPimpinanDaerah: {
                select: {
                    id: true,
                    name: true
                }
            },
            MasterJabatanDewanPimpinanCabang: {
                select: {
                    id: true,
                    name: true
                }
            },
            MasterJabatanPimpinanAnakCabang: {
                select: {
                    id: true,
                    name: true
                }
            },
            MasterJabatanPimpinanRanting: {
                select: {
                    id: true,
                    name: true
                }
            },
            MasterJabatanPerwakilanPartaiDiLuarNegeri: {
                select: {
                    id: true,
                    name: true
                }
            },
            MasterSayapPartai: {
                select: {
                    id: true,
                    name: true
                }
            },
            MasterKaderPartai: {
                select: {
                    id: true,
                    name: true
                }
            },
            MasterProvince: {
                select: {
                    id: true,
                    name: true
                }
            },
            MasterKabKot: {
                select: {
                    id: true,
                    name: true
                }
            },
            MasterKecamatan: {
                select: {
                    id: true,
                    name: true
                }
            },
            MasterDesa: {
                select: {
                    id: true,
                    name: true
                }
            },
            MasterNegara: {
                select: {
                    id: true,
                    name: true
                }
            },
            
        }
    })

    if (!data) return res.status(204).end()

    return res.status(200).json(data)
}

export default sumberDayaPartaiGetOne