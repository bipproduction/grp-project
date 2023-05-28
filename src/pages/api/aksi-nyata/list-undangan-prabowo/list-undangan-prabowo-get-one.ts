import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const listUndanganPrabowoGetOne = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    const data = await client.listUndanganPrabowo.findUnique({
        where : {
            id : id as any
        },
        select : {
            nama : true,
            id : true,
            rencanaKunjunganPrabowoId : true,
            RencanaKunjunganPrabowo : {
                select : {
                    judul: true
                }
            }
        }
    })

    if(!data) return res.status(204).end()

    return res.status(200).json(data)
}

export default listUndanganPrabowoGetOne