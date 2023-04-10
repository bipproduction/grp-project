import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import _ from 'lodash'

const userUpdate =async (req:NextApiRequest, res : NextApiResponse) => {
    if (req.method==="POST") {
        const body = req.body

        // const data = await client.user.upsert({
        //     create: _.omit(body, ['id']) as any,
        //     update:_.omit(body, ['id']) as any,
        //     where: {
        //         id: body.id
        //     }
        // })

        const data = await client.user.findUnique({
            where: {
                email: body.email
            }
        })

        res.status(201).json({
            success: data != null,
            message: data != null? "success": "email kosong"
        })


    //     const user = await client.user.findMany({
    //         where : {
    //             email : body.email,
    //             id : {
    //                 not: {

    //                 }
    //             }
    //         }
    //     })

    //     // cek email
    //     if(user) return res.status(209).json({success:false, message:"Email telah digunakan."})

    //     await client.user.update({
    //         where: {
    //             id: body.id
    //         },
    //         data: {
    //             name: body.name,
    //             email: body.email,
    //             password : body.password,
    //             active : body.active,
    //             masterUserRoleId : body.masterUserRoleId
    //         }
    //     })
    //     res.status(201).json({ body})
    // }else{
    //     return res.status(204).end()
    }
}

export default userUpdate