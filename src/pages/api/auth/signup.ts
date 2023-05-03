import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const userPost = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const body = req.body
        const userEmail = await client.user.findUnique({
            where: {
                email: body.email
            }
        })

        const userName = await client.user.findUnique({
            where : {
                username:body.username
            }
        })

        //cek username
        if(userName) return res.status(209).json({success:false, message:"Username telah digunakan."})

        // cek email
        if (userEmail) return res.status(209).json({ success: false, message: "Email telah digunakan." })

        await client.user.create({
            data: body
        })

        return res.status(201).json({ success: true, message: "Data tersimpan" })

    } else {
        return res.status(204).end()
    }
}

export default userPost