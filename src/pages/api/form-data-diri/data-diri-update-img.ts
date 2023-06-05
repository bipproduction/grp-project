import client from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from "next";

const dataDiriUpdateImg = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        let body = req.body

        await client.dataDiri.update({
            where: {
                id: body.id
            },
            data: {
                img : body.img
            }
        })

        return res.status(201).json({ success: true, message: "Data terupdate" })
    } else {
        return res.status(204).end()
    }
}

export default dataDiriUpdateImg