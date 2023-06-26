import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const calonPemilihPotensial = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        let body = req.body
        console.log(body)

        //cek nik
        const datanik = await client.calonPemilihPotensial.findUnique({
            where: {
                nik: body.nik
            }
        })

        //cek email
        const dataemail = await client.calonPemilihPotensial.findUnique({
            where: {
                email: body.email
            }
        })

        if (datanik) return res.status(209).json({ success: false, message: "NIK telah digunakan" })
        if (dataemail) return res.status(209).json({ success: false, message: "Email telah digunakan" })

        body.tanggalLahir = new Date(body.tanggalLahir)

        await client.calonPemilihPotensial.create({
            data: body
        })

        return res.status(201).json({ success: true, message: "Data tersimpan" })
    } else {
        return res.status(204).end()
    }
}

export default calonPemilihPotensial