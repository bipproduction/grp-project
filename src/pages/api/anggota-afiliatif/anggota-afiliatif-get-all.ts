import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const anggotaAfiliatifGetAll = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.anggotaAfiliatif.findMany({
        where: {
            active: true
        }
    })
    return res.status(200).json(data)
}

export default anggotaAfiliatifGetAll