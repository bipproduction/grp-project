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
                    email: true,
                    DataDiri: {
                        select: {
                            name: true,
                            nik: true,
                            tempatLahir: true,
                            tanggalLahir: true,
                            phoneNumber: true
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
                    name: true
                }
            }
        }
    })

    return res.status(200).json(data)
}

export default anggotaAfiliatifSearch