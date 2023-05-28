import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const rencanaKunjunganGerindraGetOne = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    const data = await client.rencanaKunjunganGerindra.findUnique({
        where: {
            id: id as any
        },
        select: {
            id: true,
            judul: true,
            img: true,
            tanggal: true,
            masterStatusAksiNyataId: true,
            MasterStatusAksiNyata: {
                select: {
                    name: true
                }
            }
        }
    })
    if (!data) return res.status(204).end()

    return res.status(200).json(data)
}

export default rencanaKunjunganGerindraGetOne