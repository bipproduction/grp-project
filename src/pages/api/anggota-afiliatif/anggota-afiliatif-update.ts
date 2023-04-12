import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const anggotaAfiliatifUpdate = async (req:NextApiRequest, res:NextApiResponse) => {

    if (req.method==="POST") {
        const body = req.body
        // await client.anggotaAfiliatif.update({
        //     where : {
        //         id : body.id
        //     },
        //     data : {
        //         userId : body.userId,
        //         afiliatifId : body.afiliatifId
        //     }
        // })

        return res.status(201).json({success:true, message:"Data terupdate"})
    }else{
        return res.status(204).end()
    }
}

export default anggotaAfiliatifUpdate