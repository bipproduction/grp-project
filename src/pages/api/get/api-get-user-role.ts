import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';


const apiGetUserRole = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.masterUserRole.findMany()
    res.status(200).json(data)

}

export default apiGetUserRole