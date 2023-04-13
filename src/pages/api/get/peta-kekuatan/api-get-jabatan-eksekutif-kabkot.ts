import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';
const apiGetJabatanEksekutifKabKot = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.masterJabatanEksekutifKabKot.findMany()
    res.status(200).json(data)


}

export default apiGetJabatanEksekutifKabKot