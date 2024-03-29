import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';


const apiGetJabatanDewanPimpinanDaerah = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.masterJabatanDewanPimpinanDaerah.findMany({
        where: {
            active: true
        }
    })
    res.status(200).json(data)

}

export default apiGetJabatanDewanPimpinanDaerah