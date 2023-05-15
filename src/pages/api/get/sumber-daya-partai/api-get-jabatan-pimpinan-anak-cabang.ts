import client from "@/lib/prisma_db"
import { NextApiResponse } from "next"
import { NextRequest } from "next/server"

const apiGetJabatanPimpinAnakCabang = async (req: NextRequest, res: NextApiResponse) => {
    const data = await client.masterJabatanPimpinanAnakCabang.findMany({
        where: {
            active: true
        }
    })
    res.status(200).json(data)

}

export default apiGetJabatanPimpinAnakCabang