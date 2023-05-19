import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const rencanaKunjunganGerindraGetAll = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.rencanaKunjunganGerindra.findMany({
        where: {
            active: true
        },
        select: {
            id: true,
            judul: true,
            tanggal: true,
            img: true,
            MasterStatusAksiNyata: {
                select: {
                    name: true
                }
            }
        }
    })
    return res.status(200).json(data)
}

export default rencanaKunjunganGerindraGetAll