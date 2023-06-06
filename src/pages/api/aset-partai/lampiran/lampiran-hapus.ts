import client from "@/lib/prisma_db";
import { NextApiRequest, NextApiResponse } from "next";

const hapusLampiranAsetPartai = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    await client.lampiranAsetPartai.update({
        where: {
            id: id as string
        },
        data: {
            active: false
        }
    })

    return res.status(200).json({ success: true, message: "Data terupdate" })
}

export default hapusLampiranAsetPartai