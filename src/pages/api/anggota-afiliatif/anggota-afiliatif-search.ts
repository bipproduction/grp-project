import client from "@/lib/prisma_db";
import { NextApiRequest, NextApiResponse } from "next";

const anggotaAfiliatifSearch = async (req: NextApiRequest, res: NextApiResponse) => {
    const { search } = req.query;
    const data = await client.anggotaAfiliatif.findMany({
        where: {
            active: true,
            User: {
                DataDiri: {
                    name: {
                        contains: search as string
                    }
                }
            }
        },
        select: {
            id: true,
            User: {
                select: {
                    id: true,
                    email: true,
                    DataDiri: {
                        select: {
                            id: true,
                            active: true,
                            name: true,
                            nik: true,
                            alamat: true,
                            tempatLahir: true,
                            tanggalLahir: true,
                            phoneNumber: true,
                            MasterProvince: true,
                            MasterKabKot: true,
                            MasterKecamatan: true,
                            MasterDesa: true,
                            rtRw: true
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
            MasterOrganisasiAfiliatif: {
                select: {
                    id:true,
                    name: true
                }
            }
        }
    })

    return res.status(200).json(data)
}

export default anggotaAfiliatifSearch