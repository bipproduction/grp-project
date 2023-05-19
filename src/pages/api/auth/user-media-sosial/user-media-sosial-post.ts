import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const userMediaSosialPost = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const body = req.body
        await client.userMediaSocial.create({
            data: body
        })

        return res.status(201).json({ success: true, message: "Data tersimpan" })
    } else {
        return res.status(204).end()
    }
}

export default userMediaSosialPost