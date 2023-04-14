import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';

const apiGetJabatanPimpinanRanting = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.masterJabatanPimpinanRanting.findMany()
    res.status(200).json(data)

}

export default apiGetJabatanPimpinanRanting