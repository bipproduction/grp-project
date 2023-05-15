import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const asetPartaiGetAll = async (req: NextApiRequest, res: NextApiResponse) => {
    const { search } = req.query
    const data = await client.asetPartai.findMany({
        where: {
            name: search as string,
            active: true
        }
    })
    return res.status(200).json(data)
}

export default asetPartaiGetAll 