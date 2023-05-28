import client from "@/lib/prisma";
import { before } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

const sumberDayaPartaiHapus = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    await client.sumberDayaPartai.update({
        where: {
            id: id as string
        },
        data: {
            active: false
        }
    })

    return res.status(200).json({ success: true, message: "Data terupdate" })
}

export default sumberDayaPartaiHapus