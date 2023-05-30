import client from "@/lib/prisma_db"
import { NextApiRequest, NextApiResponse } from "next"


const sumberDayaPartai = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.sumberDayaPartai.findMany()
   return res.status(200).json(data)
}

export default sumberDayaPartai