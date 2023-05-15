import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const eksekutifGetAll = async (req: NextApiRequest, res: NextApiResponse) => {
    const {tingkat, search} = req.query;
    const data = await client.eksekutif.findMany({
        where: {
            active: true,
            masterTingkatEksekutifId: Number(tingkat),
        },
        select: {
            namaLembaga: true,
            alamatKantor: true,
            periode: true,
            jabatanNasional: true,
            MasterJabatanEksekutifProvinsi: {
                select: {
                    name: true
                }
            },
            MasterProvince: {
                select: {
                    name: true
                }
            },
            MasterJabatanEksekutifKabKot: {
                select: {
                    name: true
                }
            },
            MasterJabatanEksekutifKabupaten: {
                select: {
                    name: true
                }
            },
            MasterJabatanEksekutifKota: {
                select: {
                    name: true
                }
            },
            MasterStatusEksekutif:{
                select:{
                    name : true
                }
            },
            MasterKabKot: {
                select: {
                    name: true
                }
            },
            User: {
                select: {
                    username: true,
                    email: true,
                    DataDiri: {
                        // where : {
                        //     name : search as string
                        // },
                        select: {
                            name: true,
                            nik: true,
                            alamat: true,
                        }
                    },
                    UserMediaSocial: {
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
    return res.status(200).json(data)
}

export default eksekutifGetAll