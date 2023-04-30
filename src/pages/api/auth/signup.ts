import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const userPost = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const body = req.body
        const user = await client.user.findUnique({
            where: {
                email: body.email
            }
        })

        // cek email
        if (user) return res.status(209).json({ success: false, message: "Email telah digunakan." })

        await client.user.create({
            data: body
        })

        return res.status(201).json({ success: true, message: "Data tersimpan" })

    } else {
        return res.status(204).end()
    }
}

export default userPost