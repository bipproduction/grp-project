import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';


const apiGetJabatanDewanPimpinanPusat = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.masterJabatanDewanPimpinanPusat.findMany({
        where: {
            active: true
        }
    })
    res.status(200).json(data)

}

export default apiGetJabatanDewanPimpinanPusat