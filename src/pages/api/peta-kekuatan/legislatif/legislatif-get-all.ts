import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const legislatifGetAll = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.legislatif.findMany()
    return res.status(200).json(data)
}

export default legislatifGetAll