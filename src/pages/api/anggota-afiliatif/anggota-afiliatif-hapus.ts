import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const anggotaAfiliatifHapus = async (req: NextApiRequest, res: NextApiResponse) => {

    const { id } = req.query
    await client.anggotaAfiliatif.update({
        where: {
            id: id as string
        },
        data: {
            active: false
        }
    })

    return res.status(200).json({ success: true, message: "Data terhapus" })

}

export default anggotaAfiliatifHapus