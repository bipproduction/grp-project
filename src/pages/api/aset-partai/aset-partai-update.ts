import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const asetPartaiUpdate = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === "POST") {
        let body = req.body
        const aset = await client.asetPartai.findUnique({
            where: {
                serialNumber: body.serialNumber
            }
        })

        // cek serialNumber
        if (aset && aset.id != body.id) return res.status(209).json({ success: false, message: "Serial number telah digunakan." })

        body.tglPembelian = new Date(body.tglPembelian)

        await client.asetPartai.update({
            where: {
                id: body.id
            },
            data: {
                name: body.name,
                serialNumber: body.serialNumber,
                pengguna: body.pengguna,
                penanggungJawab: body.penanggungJawab,
                harga: body.harga,
                tglPembelian: body.tglPembelian,
                garansi: body.garansi,
                statusAset: body.statusAset,
                keterangan: body.keterangan,
                kategori: body.kategori,
                deskripsi: body.deskripsi,
                img: body.img
            }
        })


        return res.status(201).json({ success: true, message: "Data terupdate" })

    } else {
        return res.status(204).end()
    }
}

export default asetPartaiUpdate