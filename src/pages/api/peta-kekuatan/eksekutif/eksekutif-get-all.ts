import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const eksekutifGetAll = async (req: NextApiRequest, res: NextApiResponse) => {
    const {idTingkat} = req.query
    const data = await client.eksekutif.findMany()
    return res.status(200).json(data)
}

export default eksekutifGetAll