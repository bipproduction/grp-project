import client  from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from "next";

const dataDiriUpdate =async (req:NextApiRequest, res:NextApiResponse) => {
    if (req.method === "POST") {
        // let body = req.body
        // const data = await client.dataDiri.findUnique({
        //     where : {
        //         nik : body.nik
        //     }
        // })

        // //cek nik
        // if(data && data.id != body.id) return res.status(209).json({success:false, message:"NIK telah terdaftar"})

        // body.tanggalLahir = new Date(body.tanggalLahir)

        // await client.dataDiri.update({
        //     where : {
        //         id: body.id
        //     },
        //     data:{
        //         agamaId : body.agamaId,
        //         pekerjaanId : body.pekerjaanId,
        //         provinceId : body.provinceId,
        //         kabkotId : body.kabkotId,
        //         kecamatanId : body.kecamatanId,
        //         desaId : body.desaId,
        //         nik : body.nik,
        //         tempatLahir : body.tempatLahir,
        //         tanggalLahir : body.tanggalLahir,
        //         jenisKelamin : body.jenisKelamin,
        //         phoneNumber : body.phoneNumber,
        //         alamat : body.alamat,
        //         rtRw : body.rtRw
        //     }
        // })

        return res.status(201).json({success:true, message:"Data terupdate"})
    }else{
        return res.status(204).end()
    }
}

export default dataDiriUpdate