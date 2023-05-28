import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const listUndanganGerindraGetOne = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    const data = await client.listUndanganGerindra.findUnique({
        where: {
            id: id as any
        },
        select: {
            id: true,
            nama: true,
            rencanaKunjunganGerindraId: true,
            RencanaKunjunganGerindra: {
                select: {
                    judul: true,
                    tanggal: true
                }
            }
        }
    })
    if (!data) return res.status(204).end()

    return res.status(200).json(data)
}

export default listUndanganGerindraGetOne