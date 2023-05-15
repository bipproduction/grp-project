import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const listUndanganGerindraGetAll = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.listUndanganGerindra.findMany({
        where: {
            active: true
        }
    })
    return res.status(200).json(data)
}

export default listUndanganGerindraGetAll