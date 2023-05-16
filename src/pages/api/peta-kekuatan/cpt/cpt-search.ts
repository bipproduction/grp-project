import client from "@/lib/prisma_db";
import { NextApiRequest, NextApiResponse } from "next";

const calonPemilihPotensialSearch = async (req: NextApiRequest, res: NextApiResponse) => {
    const { search } = req.query;
    const data = await client.calonPemilihPotensial.findMany({
        where: {
            active: true,
            nama: {
                contains: search as string
            }
        },
        select: {
            id: true,
            nama: true,
            alamat: true,
            email: true,
            phoneNumber: true,
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

    return res.status(200).json(data)

}

export default calonPemilihPotensialSearch