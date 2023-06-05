import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const dataDiriGetOne = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    const data = await client.dataDiri.findUnique({
        where: {
            userId: id as any,
        },
        select: {
            id : true,
            nik : true,
            name : true,
            tempatLahir : true,
            tanggalLahir : true,
            phoneNumber : true,
            alamat : true,
            rtRw : true,
            img : true,
            User: {
                select: {
                    email: true,
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
                },
            },
            MasterJenisKelamin: {
                select: {
                    id: true,
                    name: true
                }
            },
            MasterAgama: {
                select: {
                    id: true,
                    name: true
                }
            },
            MasterPekerjaan: {
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
            }
        }
    })

    if (!data) return res.status(204).end()

    return res.status(200).json(data)
}

export default dataDiriGetOne