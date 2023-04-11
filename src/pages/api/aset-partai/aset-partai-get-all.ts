import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const asetPartaiGetAll =async (req:NextApiRequest, res:NextApiResponse) => {
    const data = await client.asetPartai.findMany()
    return res.status(200).json(data)
}

export default asetPartaiGetAll 