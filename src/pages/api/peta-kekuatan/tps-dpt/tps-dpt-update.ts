import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const tpsDptUpdate = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const body = req.body
        await client.tpsDpt.update({
            where: {
                id: body.id
            },
            data: {
                masterProvinceId: body.masterProvinceId,
                masterKabKotId: body.masterKabKotId,
                masterKecamatanId: body.masterKecamatanId,
                masterDesaId: body.masterDesaId,
                masterNomorUrutTPSId: body.masterNomorUrutTPSId,
                dptLakilaki: body.dptLakilaki,
                dptPerempuan: body.dptPerempuan
            }
        })

        return res.status(200).json({ success: true, message: "Data terupdate" })
    } else {
        return res.status(204).end()
    }
}

export default tpsDptUpdate