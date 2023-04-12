import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const tpsDptGetOne = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    const data = await client.tpsDpt.findUnique({
        where: {
            id: id as any
        }
    })

    if (!data) return res.status(204).end()

    return res.status(200).json(data)
}

export default tpsDptGetOne