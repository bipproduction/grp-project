import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const dataDiriPost = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === "POST") {
        let body = req.body
        const data = await client.dataDiri.findUnique({
            where: {
                nik: body.nik
            }
        })

        // cek nik
        if (data) return res.status(209).json({ success: false, message: "NIK telah terdaftar" })

        body.tanggalLahir = new Date(body.tanggalLahir)

        await client.dataDiri.create({
            data: body
        })

        return res.status(201).json({ success: true, message: "Data tersimpan" })
    } else {
        return res.status(204).end();
    }
}

export default dataDiriPost