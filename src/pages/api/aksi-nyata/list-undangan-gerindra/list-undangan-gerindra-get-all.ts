import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const listUndanganGerindraGetAll = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.listUndanganGerindra.findMany({
        where: {
            active: true
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

export default listUndanganGerindraGetAll