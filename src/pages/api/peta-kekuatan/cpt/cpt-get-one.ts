import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const calonPemilihPotensialGetOne = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    const data = await client.calonPemilihPotensial.findUnique({
        where: {
            id: id as any
        },
        select: {
            id: true,
            nama: true,
            alamat: true,
            email: true,
            phoneNumber: true,
            pendidikan: true,
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
            MasterJenisKelamin: {
                select: {
                    name: true
                }
            },
            CPTMediaSocial: {
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
    })

    if (!data) return res.status(204).end()

    return res.status(200).json(data)
}

export default calonPemilihPotensialGetOne