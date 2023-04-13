import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';


const apiGetNomorUrutTPS = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.masterNomorUrutTPS.findMany()
    res.status(200).json(data)

}

export default apiGetNomorUrutTPS