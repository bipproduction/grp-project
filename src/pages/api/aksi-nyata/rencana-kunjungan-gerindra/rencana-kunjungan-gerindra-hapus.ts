import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const rencanaKunjunganGerindraHapus = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    const delRencanaKunjungan = await client.rencanaKunjunganGerindra.update({
        where: {
            id: id as string
        },
        data: {
            active: false
        }
    })

    const delListUndangan = await client.listUndanganGerindra.updateMany({
        where: {
            rencanaKunjunganGerindraId: id as string
        },
        data: {
            active: false
        }
    })

    return res.status(200).json({ success: true, message: "Data terupdate" })

}

export default rencanaKunjunganGerindraHapus