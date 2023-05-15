import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const rencanaKunjunganProbowoGetAll = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.rencanaKunjunganPrabowo.findMany({
        where: {
            active: true
        }
    })
    return res.status(200).json(data)
}

export default rencanaKunjunganProbowoGetAll