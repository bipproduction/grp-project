import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const legislatifGetAll = async (req: NextApiRequest, res: NextApiResponse) => {
    const { tingkat } = req.query
    const { search } = req.query
    const data = await client.legislatif.findMany({
        where: {
            masterTingkatLegislatifId: Number(tingkat),
            active: true
        },
        select: {
            jabatan: true,
            periode: true,
            noUrut: true,
            dapil: true,
            cakupanWilayah: true,
            akd: true,
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
            User: {
                select: {
                    email: true,
                    DataDiri: {
                        // where : {
                        //     name : search as string,
                        // },
                        select: {
                            name: true,
                            nik: true,
                            phoneNumber: true,
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
                }
            }
        }
    })
    return res.status(200).json(data)
}

export default legislatifGetAll