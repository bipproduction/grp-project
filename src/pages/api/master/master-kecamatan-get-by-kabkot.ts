import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const masterKecamatanGetByKabkot = async (req: NextApiRequest, res: NextApiResponse) => {
    const { idKabkot } = req.query
    const data = await client.masterKecamatan.findMany({
        where: {
            masterKabKotId: Number(idKabkot)
        }
    })
    return res.status(200).json(data)
}

export default masterKecamatanGetByKabkot