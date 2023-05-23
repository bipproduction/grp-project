import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const rencanaKunjunganPrabowoPost = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        let body = req.body
        body.tanggal = new Date(body.tanggal)
        body.masterStatusAksiNyataId = Number(body.masterStatusAksiNyataId)
        await client.rencanaKunjunganPrabowo.create({
            data: body
        })
        return res.status(201).json({ success: true, message: "Data tersimpan" })
    } else {
        return res.status(204).end()
    }
}

export default rencanaKunjunganPrabowoPost