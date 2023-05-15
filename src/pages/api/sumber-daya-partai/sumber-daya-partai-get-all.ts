import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const sumberDayaPartaiGetAll =async (req:NextApiRequest, res:NextApiResponse) => {
    const data = await client.sumberDayaPartai.findMany({
        where : {
            active : true
        }
    })
    return res.status(200).json(data)
}

export default sumberDayaPartaiGetAll