import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const listUndanganGerindraUpdate = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const body = req.body
        await client.listUndanganGerindra.update({
            where: {
                id: body.id
            },
            data: {
                rencanaKunjunganGerindraId: body.rencanaKunjunganGerindraId,
                nama: body.nama
            }
        })

        return res.status(201).json({ success: true, message: "Data terupdate" })
    } else {
        return res.status(204).end()
    }
}

export default listUndanganGerindraUpdate