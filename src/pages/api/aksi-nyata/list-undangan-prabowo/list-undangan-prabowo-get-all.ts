import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const listUndanganPrabowoGetAll = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.listUndanganPrabowo.findMany({
        where: {
            active: true
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

export default listUndanganPrabowoGetAll