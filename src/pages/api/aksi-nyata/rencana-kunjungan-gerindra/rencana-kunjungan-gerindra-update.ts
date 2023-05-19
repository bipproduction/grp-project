import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const rencanaKunjunganGerindraUpdate = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        let body = req.body
        body.tanggal = new Date(body.tanggal)
        await client.rencanaKunjunganGerindra.update({
            where: {
                id: body.id
            },
            data: {
                judul: body.judul,
                tanggal: body.tanggal,
                img: body.img,
                masterStatusAksiNyataId: body.masterStatusAksiNyataId
            }
        })

        return res.status(201).json({ success: true, message: "Data terupdate" })
    } else {
        return res.status(204).end()
    }
}

export default rencanaKunjunganGerindraUpdate