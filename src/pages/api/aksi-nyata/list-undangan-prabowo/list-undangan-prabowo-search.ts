import client from "@/lib/prisma_db";
import { NextApiRequest, NextApiResponse } from "next";

const listUndanganPrabowoSearch = async (req: NextApiRequest, res: NextApiResponse) => {
    const { search } = req.query;
    const data = await client.listUndanganPrabowo.findMany({
        where: {
            active: true,
            nama: {
                contains: search as string
            }
        },
        select: {
            id: true,
            nama: true,
            RencanaKunjunganPrabowo: {
                select: {
                    judul: true
                }
            }
        }
    })
    return res.status(200).json(data)
}

export default listUndanganPrabowoSearch