import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';


const apiGetKaderPartai = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.masterKaderPartai.findMany({
        where: {
            active: true
        }
    })
    res.status(200).json(data)

}

export default apiGetKaderPartai