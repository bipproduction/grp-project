import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';

const apiGetTingkatPengurus = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.masterTingkatPengurus.findMany()
    res.status(200).json(data)

}

export default apiGetTingkatPengurus