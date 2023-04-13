import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';

const apiGetKategoriAser =  async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.masterKategoriAset.findMany()
    res.status(200).json(data)

}

export default apiGetKategoriAser