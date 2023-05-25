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
    })

    if (!data) return res.status(204).end()

    return res.status(200).json(data)
}

export default dataDiriGetOne