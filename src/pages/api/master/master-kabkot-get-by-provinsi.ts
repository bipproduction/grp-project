import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const masterKabKotGetByProvinsi = async (req: NextApiRequest, res: NextApiResponse) => {
    const { idProvinsi } = req.query
    const data = await client.masterKabKot.findMany({
        where: {
            masterProvinceId: Number(idProvinsi)
        }
    })
    return res.status(200).json(data)
}

export default masterKabKotGetByProvinsi