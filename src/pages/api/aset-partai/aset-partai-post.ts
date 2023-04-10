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
        
        await client.asetPartai.create({
            data: body
        })

        return res.status(201).json({body})
        
    } else{
        return res.status(204).end()
    }
}

export default asetPartaiPost