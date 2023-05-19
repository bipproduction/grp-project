import client from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const calonPemilihPotensialGetAll = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.calonPemilihPotensial.findMany({
        where: {
            active: true
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

export default calonPemilihPotensialGetAll