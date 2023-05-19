import client from "@/lib/prisma_db";
import { NextApiRequest, NextApiResponse } from "next";

const listUndanganGerindraSearch = async (req: NextApiRequest, res: NextApiResponse) => {
    const { search } = req.query;
    const data = await client.listUndanganGerindra.findMany({
        where: {
            active: true,
            nama: {
                contains: search as string
            }
        },
        select: {
            id: true,
            nama: true,
            RencanaKunjunganGerindra: {
                select: {
                    judul: true
                }
            }
        }
    })
    return res.status(200).json(data)
}

export default listUndanganGerindraSearch