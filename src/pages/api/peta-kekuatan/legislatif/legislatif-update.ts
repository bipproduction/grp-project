import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const legislatifUpdate = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const body = req.body
        await client.legislatif.update({
            where: {
                id: body.id
            },
            data: {
                userId: body.userId,
                masterProvinceId: body.masterProvinceId,
                masterKabKotId: body.masterKabKotId,
                masterTingkatLegislatifId: body.masterTingkatLegislatifId,
                jabatan: body.jabatan,
                periode: body.periode,
                noUrut: body.noUrut,
                dapil: body.dapil,
                cakupanWilayah: body.cakupanWilayah,
                akd: body.akd
            }
        })

        return res.status(201).json({ success: true, message: "Data terupdate" })
    } else {
        return res.status(204).end()
    }
}

export default legislatifUpdate