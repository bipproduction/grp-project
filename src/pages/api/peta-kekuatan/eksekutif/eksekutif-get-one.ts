import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const eksekutifGetOne = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    const data = await client.eksekutif.findUnique({
        where: {
            id: id as any
        },
        select: {
            id: true,
            namaLembaga: true,
            alamatKantor: true,
            periode: true,
            jabatanNasional: true,
            userId: true,
            masterJabatanEksekutifKabKotId:true,
            MasterJabatanEksekutifProvinsi: {
                select: {
                    name: true,
                    id: true
                }
            },
            MasterProvince: {
                select: {
                    name: true,
                    id: true
                }
            },
            MasterJabatanEksekutifKabKot: {
                select: {
                    name: true,
                    id: true
                }
            },
            MasterJabatanEksekutifKabupaten: {
                select: {
                    name: true,
                    id: true
                }
            },
            MasterJabatanEksekutifKota: {
                select: {
                    name: true,
                    id: true
                }
            },
            MasterStatusEksekutif: {
                select: {
                    name: true,
                    id: true
                }
            },
            MasterKabKot: {
                select: {
                    name: true,
                    id: true
                }
            },
            User: {
                select: {
                    username: true,
                    email: true,
                    DataDiri: {
                        select: {
                            name: true,
                            nik: true,
                            alamat: true,
                        }
                    },
                    UserMediaSocial: {
                        where: {
                            active: true
                        },
                        select: {
                            name: true,
                            link: true,
                            MasterMediaSocial: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    }
                },
            }
        }
    })

    if (!data) return res.status(204).end()

    return res.status(200).json(data)
}

export default eksekutifGetOne