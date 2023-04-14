import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const partaiPengusungEksekutifUpdate =async (req:NextApiRequest, res:NextApiResponse) => {
    if(req.method==="POST"){
        const body = req.body
        await client.partaiPengusungEksekutif.update({
            where : {
                id : body.id
            },
            data : {
                eksekutifId : body.eksekutifId,
                masterPartaiPengusungId : body.masterPartaiPengusungId
            }
        })

        return res.status(201).json({success:true, message:"Data terupdate"})
    }else{
        return res.status(204).end()
    }
}

export default partaiPengusungEksekutifUpdate