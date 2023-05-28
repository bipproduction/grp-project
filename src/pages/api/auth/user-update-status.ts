import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import _ from 'lodash'

const userUpdateStatus = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const body = req.body;
        await client.user.update({
            where: {
                id: body.id
            },
            data: {
                masterUserRoleId: Number(body.masterUserRoleId)
            }
        })
        res.status(201).json({ success: true, message: "Data terupdate" })
    } else {
        return res.status(204).end()
    }
}

export default userUpdateStatus