import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';
const apiGetPartaiPengusung = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.masterPartaiPengusung.findMany()
    res.status(200).json(data)

}

export default apiGetPartaiPengusung