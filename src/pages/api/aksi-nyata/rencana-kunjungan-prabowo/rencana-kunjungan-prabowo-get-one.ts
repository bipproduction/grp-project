import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const rencanaKunjunganPrabowoGetOne = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    const data = await client.rencanaKunjunganPrabowo.findUnique({
        where: {
            id: id as any
        },
        select: {
            id: true,
            judul: true,
            tanggal: true,
            img: true,
            masterStatusAksiNyataId: true,
            active: true,
            MasterStatusAksiNyata : {
                select : {
                    name : true
                }
            }
        }
    })

    if (!data) return res.status(204).end()

    return res.status(200).json(data)
}

export default rencanaKunjunganPrabowoGetOne