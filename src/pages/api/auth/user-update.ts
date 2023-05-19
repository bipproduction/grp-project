import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import _ from 'lodash'

const userUpdate = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const body = req.body

        const user = await client.user.findUnique({
            where: {
                email: body.email
            }
        })

        // cek email
        if (user && user.id != body.id) return res.status(209).json({ success: false, message: "Email telah digunakan." })

        await client.user.update({
            where: {
                id: body.id
            },
            data: {
                username: body.name,
                email: body.email,
                password: body.password,
                active: body.active,
                masterUserRoleId: body.masterUserRoleId
            }
        })
        res.status(201).json({ success: true, message: "Data terupdate" })
    } else {
        return res.status(204).end()
    }
}

export default userUpdate