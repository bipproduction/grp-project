import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const legislatifGetOne = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    const data = await client.legislatif.findUnique({
        where: {
            id: id as any
        },
        select: {
            id: true,
            userId:true,
            jabatan: true,
            periode: true,
            noUrut: true,
            dapil: true,
            cakupanWilayah: true,
            akd: true,
            masterProvinceId:true,
            masterKabKotId:true,
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
                        select: {
                            name: true,
                            nik: true,
                            phoneNumber: true,
                            alamat: true,
                            tempatLahir: true,
                            tanggalLahir: true,
                            MasterJenisKelamin: {
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

    if (!data) return res.status(204).end()

    return res.status(200).json(data)
}

export default legislatifGetOne