import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const asetPartaiHapus = async (req: NextApiRequest, res: NextApiResponse) => {

    const { id } = req.query
    await client.asetPartai.update({
        where: {
            id: id as string
        },
        data: {
            active: false
        }
    })

    return res.status(200).json({ success: true, message: "Data terupdate" })

}

export default asetPartaiHapus