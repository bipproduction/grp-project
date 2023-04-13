import client from "@/lib/prisma_db"
import { NextApiRequest, NextApiResponse } from "next"

const apiGetTingkatLegislatif = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.masterTingkatLegislatif.findMany()
    res.status(200).json(data)
}

export default apiGetTingkatLegislatif