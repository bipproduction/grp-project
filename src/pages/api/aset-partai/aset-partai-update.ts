import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const asetPartaiPost =async (req : NextApiRequest, res:NextApiResponse) => {
    
    if (req.method==="POST"){
        let body = req.body
        const aset = await client.asetPartai.findUnique({
            where : {
                systemId: body.systemId
            }
        })

        // cek systemId
        if(aset) return res.status(209).json({success:false, message:"System ID telah digunakan."})

        body.tglPembelian = new Date(body.tglPembelian)
        
        await client.asetPartai.update({
            where: {
                id: body.id
            },
            data: {
                systemId: body.systemId,
                name: body.name,
                serialNumber : body.serialNumber,
                pengguna : body.pengguna,
                penanggungJawab : body.penanggungJawab,
                harga:body.harga,
                tglPembelian : body.tglPembelian,
                garansi : body.garansi,
                statusAset : body.statusAset,
                keterangan : body.keterangan,
                kategori : body.kategori,
                deskripsi : body.deskripsi, 
                img : body.img
            }
        })

        return res.status(201).json({body})
        
    } else{
        return res.status(204).end()
    }
}

export default asetPartaiPost