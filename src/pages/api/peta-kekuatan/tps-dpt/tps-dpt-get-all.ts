import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const tpsDptGetAll = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.tpsDpt.findMany({
        where: {
            active: true
        }
    })

    return res.status(200).json(data);
}

export default tpsDptGetAll