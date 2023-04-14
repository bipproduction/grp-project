import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const userMediaSosialUpdate = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const body = req.body
        await client.userMediaSocial.update({
            where: {
                id: body.id
            },
            data: {
                name: body.name,
                link: body.link,
                masterMediaSocialId: body.masterMediaSocialId
            }
        })

        return res.status(201).json({ success: true, messagge: "Data terupdate" })
    } else {
        return res.status(204).end()
    }
}

export default userMediaSosialUpdate