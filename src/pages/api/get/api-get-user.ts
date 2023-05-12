import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';


const apiGetUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.user.findMany()
    res.status(200).json(data)

}

export default apiGetUser