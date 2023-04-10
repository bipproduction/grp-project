import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const asetPartaiPost =async (req : NextApiRequest, res:NextApiResponse) => {
    
    if (req.method==="POST"){
        let body = req.body
        const aset = await client.asetPartai.findUnique({
            where : {
                serialNumber: body.serialNumber
            }
        })

        // cek serialNumber
        if(aset) return res.status(209).json({success:false, message:"Serial number telah digunakan."})

        body.tglPembelian = new Date(body.tglPembelian)
        
        await client.asetPartai.create({
            data: body
        })

        return res.status(201).json({success:true, message:"Data tersimpan"})
        
    } else{
        return res.status(204).end()
    }
}

export default asetPartaiPost