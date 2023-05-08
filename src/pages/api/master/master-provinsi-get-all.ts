import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const masterProvinceGetAll = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.masterProvince.findMany()
    return res.status(200).json(data)
}

export default masterProvinceGetAll