import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const calonPemilihPotensialUpdate = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        let body = req.body

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

        if (datanik && datanik.id != body.id) return res.status(209).json({ success: false, message: "NIK telah digunakan" })
        if (dataemail && dataemail.id != body.id) return res.status(209).json({ success: false, message: "Email telah digunakan" })

        body.tanggalLahir = new Date(body.tanggalLahir)

        await client.calonPemilihPotensial.update({
            where: {
                id: body.id
            },
            data: {
                masterCalonPemilihPotensialId: body.masterCalonPemilihPotensialId,
                masterAgamaId: body.masterAgamaId,
                masterPekerjaanId: body.masterPekerjaanId,
                masterProvinceId: body.masterProvinceId,
                masterKabKotId: body.masterKabKotId,
                masterKecamatanId: body.masterKecamatanId,
                masterDesaId: body.masterDesaId,
                masterNomorUrutTPSId: body.masterNomorUrutTPSId,
                masterJenisKelaminId: body.masterJenisKelaminId,
                nik: body.nik,
                nama: body.nama,
                email: body.email,
                tanggalLahir: body.tanggalLahir,
                phoneNumber: body.phoneNumber,
                alamat: body.alamat,
                statusSosial: body.statusSosial,
                pendidikan: body.pendidikan
            }
        })

        return res.status(201).json({ success: true, message: "Data terupdate" })
    } else {
        return res.status(204).end()
    }
}

export default calonPemilihPotensialUpdate