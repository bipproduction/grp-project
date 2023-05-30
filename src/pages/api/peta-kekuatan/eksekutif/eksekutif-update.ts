import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const eksekutifUpdate = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const body = req.body

        await client.eksekutif.update({
            where: {
                id: body.id
            },
            data: {
                userId: body.userId,
                masterProvinceId: body.masterProvinceId,
                masterKabKotId: body.masterKabKotId,
                masterTingkatEksekutifId: body.masterTingkatEksekutifId,
                masterJabatanEksekutifProvinsiId: body.masterJabatanEksekutifProvinsiId,
                masterJabatanEksekutifKabKotId: body.masterJabatanEksekutifKabKotId,
                masterJabatanEksekutifKabupatenId: body.masterJabatanEksekutifKabupatenId,
                masterJabatanEksekutifKotaId: body.masterJabatanEksekutifKotaId,
                masterStatusEksekutifId: body.masterStatusEksekutifId,
                namaLembaga: body.namaLembaga,
                periode: body.periode,
                alamatKantor: body.alamatKantor,
                jabatanNasional:body.jabatanNasional,
            }
        })

        return res.status(201).json({ success: true, message: "Data terupdate" })
    } else {
        return res.status(204).end()
    }
}

export default eksekutifUpdate