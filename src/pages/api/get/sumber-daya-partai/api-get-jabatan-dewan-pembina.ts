import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';


const apiGetJabatanDewanPembina = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.masterJabatanDewanPembina.findMany()
    res.status(200).json(data)

}

export default apiGetJabatanDewanPembina