import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const listUndanganPrabowoUpdate =async (req:NextApiRequest, res:NextApiResponse) => {
    if (req.method==="POST") {
        const body = req.body
        await client.listUndanganPrabowo.update({
            where : {
                id : body.id
            },
            data : {
                rencanaKunjunganPrabowoId : body.rencanaKunjunganPrabowoId,
                nama : body.nama
            }
        })

        return res.status(201).json({success:true, message:"Data terupdate"})
    }else{
        return res.status(204).end()
    }
}

export default listUndanganPrabowoUpdate