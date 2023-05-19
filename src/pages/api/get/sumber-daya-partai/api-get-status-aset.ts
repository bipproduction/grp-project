import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';

const apiGetStatusAset = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.masterStatusAset.findMany({
        where: {
            active: true
        }
    })
    res.status(200).json(data)

}
export default apiGetStatusAset