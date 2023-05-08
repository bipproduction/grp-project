import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const masterDesaGetByKecamatan = async (req: NextApiRequest, res: NextApiResponse) => {
    const { idKecamatan } = req.query
    const data = await client.masterDesa.findMany({
        where: {
            masterKecamatanId: Number(idKecamatan)
        }
    })
    return res.status(200).json(data)
}

export default masterDesaGetByKecamatan