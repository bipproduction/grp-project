import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const rencanaKunjunganGerindraPost = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        let body = req.body
        body.tanggal = new Date(body.tanggal)
        await client.rencanaKunjunganGerindra.create({
            data: body
        })
        return res.status(201).json({ success: true, message: "Data tersimpan" })
    } else {
        return res.status(204).end()
    }
}

export default rencanaKunjunganGerindraPost